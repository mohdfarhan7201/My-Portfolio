import { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import * as THREE from "three/webgpu";
import {
  attribute,
  cos,
  mix,
  positionLocal,
  sin,
  time,
  uniform,
  vec3,
} from "three/tsl";
import {
  animate,
  cancelFrame,
  frame,
  motionValue,
  transformValue,
} from "motion";
import { threeEffect } from "motion/three";

/**
 * High-resolution crossfade curve:
 * Fades in the sharp original photograph when particles have settled (globeAmount <= 0.035)
 */
function highResolutionMix(globeAmount) {
  const amount = Math.max(globeAmount, 0);
  const start = 0.005;
  const end = 0.035;
  const t = Math.min(1, Math.max(0, (amount - start) / (end - start)));
  return 1 - t * t * (3 - 2 * t);
}

const ParticleImageReveal = forwardRef(function ParticleImageReveal(
  { className = "", triggerRef, onReady },
  ref
) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Motion value driving the morph (1 = dispersed particles, 0 = assembled sharp image)
  const globeValueRef = useRef(motionValue(1));
  const animRef = useRef(null);

  const reveal = useCallback(() => {
    setIsHovered(true);
    if (animRef.current) animRef.current.stop();
    animRef.current = animate(globeValueRef.current, 0, {
      type: "spring",
      stiffness: 70,
      damping: 16,
      mass: 1,
    });
  }, []);

  const disperse = useCallback(() => {
    setIsHovered(false);
    if (animRef.current) animRef.current.stop();
    animRef.current = animate(globeValueRef.current, 1, {
      type: "spring",
      stiffness: 55,
      damping: 18,
      mass: 1,
    });
  }, []);

  const toggle = useCallback(() => {
    if (globeValueRef.current.get() < 0.5) {
      disperse();
    } else {
      reveal();
    }
  }, [reveal, disperse]);

  // Expose imperative methods to parent via ref
  useImperativeHandle(ref, () => ({
    reveal,
    disperse,
    toggle,
    getGlobeValue: () => globeValueRef.current.get(),
  }));

  // Bind to global window for inspection and debugging
  useEffect(() => {
    window.__tojiParticle = {
      reveal,
      disperse,
      toggle,
      getGlobeValue: () => globeValueRef.current.get(),
    };
    return () => {
      delete window.__tojiParticle;
    };
  }, [reveal, disperse, toggle]);

  // Attach pointer events to triggerRef (the Hero section) if provided
  useEffect(() => {
    const trigger = triggerRef?.current;
    if (!trigger) return;

    const onEnter = () => reveal();
    const onLeave = (e) => {
      if (e.relatedTarget && trigger.contains(e.relatedTarget)) return;
      disperse();
    };

    trigger.addEventListener("pointerenter", onEnter);
    trigger.addEventListener("pointerleave", onLeave);

    return () => {
      trigger.removeEventListener("pointerenter", onEnter);
      trigger.removeEventListener("pointerleave", onLeave);
    };
  }, [triggerRef, reveal, disperse]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let disposed = false;
    let renderer = null;

    // Check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      globeValueRef.current.set(0);
    }

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onMouseMove = (e) => {
      if (disposed) return;
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;

      // 3D camera parallax tilt
      mouse.targetX = (relX - 0.5) * 0.12;
      mouse.targetY = (relY - 0.5) * -0.12;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    async function init() {
      // 1. Initialize Renderer (WebGPURenderer with automatic fallback)
      try {
        renderer = new THREE.WebGPURenderer({
          canvas,
          antialias: true,
          alpha: true,
        });
        await renderer.init();
      } catch (err) {
        console.warn("WebGPU initialization failed, falling back to WebGL backend:", err);
        if (renderer) {
          try {
            renderer.dispose();
          } catch {
            /* ignore dispose error */
          }
        }
        renderer = new THREE.WebGPURenderer({
          canvas,
          antialias: true,
          alpha: true,
          forceWebGL: true,
        });
        await renderer.init();
      }

      if (disposed) {
        try {
          renderer.dispose();
        } catch {
          /* ignore dispose error */
        }
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);

      // 2. Load and Sample toji.jpg
      const PHOTO_URL = "/images/toji.jpg";
      const photo = await new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const imgAspect = img.naturalWidth / img.naturalHeight;
          const COLUMNS = window.innerWidth < 768 ? 160 : 260;
          const rows = Math.round(COLUMNS / imgAspect);

          const offscreen = document.createElement("canvas");
          offscreen.width = COLUMNS;
          offscreen.height = rows;
          const ctx = offscreen.getContext("2d", { willReadFrequently: true });
          ctx.drawImage(img, 0, 0, COLUMNS, rows);

          const pixels = ctx.getImageData(0, 0, COLUMNS, rows).data;
          const map = new THREE.Texture(img);
          map.colorSpace = THREE.SRGBColorSpace;
          map.needsUpdate = true;

          resolve({
            width: COLUMNS,
            height: rows,
            aspect: imgAspect,
            pixels,
            map,
          });
        };
        img.onerror = reject;
        img.src = PHOTO_URL;
      });

      if (disposed) return;

      // 3. Filter and construct particles
      const { width: cols, height: rows, pixels, map } = photo;
      const totalPixels = cols * rows;

      // Temporary arrays for particle data
      const imgPosArr = [];
      const dispPosArr = [];
      const colArr = [];
      const phaseArr = [];
      const speedArr = [];

      for (let i = 0; i < totalPixels; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);

        const pxIdx = (row * cols + col) * 4;
        const r = pixels[pxIdx] / 255;
        const g = pixels[pxIdx + 1] / 255;
        const b = pixels[pxIdx + 2] / 255;

        // Calculate luminance - filter out deep black background
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        if (lum < 0.045) continue; // Keep pure black negative space

        // Normalized image coords (-0.5 to 0.5)
        const u = col / cols - 0.5;
        const v = 0.5 - row / rows;

        // Target (assembled) image position
        imgPosArr.push(u, v, 0);

        // Dispersed (stretched/fragmented silhouette) position:
        // Preserves the recognizable silhouette proportions while introducing
        // cinematic non-linear vertical/horizontal elongation and wave displacement
        const phase = Math.random() * Math.PI * 2;
        const speed = 0.7 + Math.random() * 0.45;

        const stretchX = u * (1.12 + 0.18 * Math.sin(v * 3.5 + phase * 0.4)) + Math.cos(v * 4.2 + phase) * 0.035;
        const stretchY = v * (1.28 + 0.12 * Math.cos(u * 3.0 + phase * 0.4)) + Math.sin(u * 3.8 + phase) * 0.04;
        const stretchZ = Math.sin(u * 4.0 + v * 3.5) * 0.2 + (Math.sin(phase) * 0.08);

        dispPosArr.push(stretchX, stretchY, stretchZ);

        colArr.push(r, g, b);
        phaseArr.push(phase);
        speedArr.push(speed);
      }

      const count = imgPosArr.length / 3;

      // 4. Instanced Geometry
      const geometry = new THREE.InstancedBufferGeometry().copy(
        new THREE.PlaneGeometry(1, 1)
      );
      geometry.instanceCount = count;
      geometry.setAttribute(
        "imagePosition",
        new THREE.InstancedBufferAttribute(new Float32Array(imgPosArr), 3)
      );
      geometry.setAttribute(
        "dispersedPosition",
        new THREE.InstancedBufferAttribute(new Float32Array(dispPosArr), 3)
      );
      geometry.setAttribute(
        "colour",
        new THREE.InstancedBufferAttribute(new Float32Array(colArr), 3)
      );
      geometry.setAttribute(
        "phase",
        new THREE.InstancedBufferAttribute(new Float32Array(phaseArr), 1)
      );
      geometry.setAttribute(
        "speed",
        new THREE.InstancedBufferAttribute(new Float32Array(speedArr), 1)
      );

      // 5. Materials (TSL Node Material supported across both WebGPU & WebGL backends)
      const initialGlobe = prefersReducedMotion ? 0 : globeValueRef.current.get();
      const globe = uniform(initialGlobe);
      const particleSizeUniform = uniform(new THREE.Vector2(0.008, 0.008));

      const imagePosNode = attribute("imagePosition");
      const dispPosNode = attribute("dispersedPosition");
      const phaseNode = attribute("phase");
      const speedNode = attribute("speed");

      const turbulence = vec3(
        sin(time.mul(speedNode.add(0.4)).add(phaseNode)).mul(0.025),
        cos(time.mul(speedNode.add(0.28)).add(phaseNode.mul(1.5))).mul(0.03),
        sin(time.mul(speedNode.add(0.18)).add(phaseNode.mul(2.1))).mul(0.03)
      );

      const nodeMaterial = new THREE.MeshBasicNodeMaterial({
        toneMapped: false,
        depthWrite: false,
      });
      nodeMaterial.colorNode = attribute("colour");

      // Morph: globe = 1 -> dispersed + turbulence, globe = 0 -> exact imagePosition
      const particleCenter = mix(
        imagePosNode,
        dispPosNode.add(turbulence),
        globe
      );
      nodeMaterial.positionNode = particleCenter.add(
        vec3(positionLocal.xy.mul(particleSizeUniform), 0)
      );

      const particleMesh = new THREE.Mesh(geometry, nodeMaterial);

      // 6. High-Resolution Photo Overlay Mesh
      const photoMaterial = new THREE.MeshBasicMaterial({
        map,
        toneMapped: false,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        opacity: highResolutionMix(initialGlobe),
      });
      const photoMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), photoMaterial);
      photoMesh.position.z = 0.005;
      photoMesh.renderOrder = 2;

      // 7. Scene and Camera
      const scene = new THREE.Scene();
      scene.background = null; // Transparent background to integrate seamlessly with #000000
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      camera.position.z = 3;

      scene.add(particleMesh);
      scene.add(photoMesh);

      // 8. Responsive Layout sizing
      const resize = () => {
        if (disposed) return;
        const width = Math.max(container.clientWidth, 1);
        const height = Math.max(container.clientHeight, 1);
        const aspect = width / height;

        renderer.setSize(width, height, false);

        camera.left = -aspect;
        camera.right = aspect;
        camera.top = 1;
        camera.bottom = -1;
        camera.updateProjectionMatrix();

        // Calculate cover sizing for image so it nicely frames the hero
        const imageAspect = photo.aspect; // 16:9 = 1.7778
        let imgWidth, imgHeight;

        if (aspect >= imageAspect) {
          // Wider than 16:9
          imgWidth = aspect * 2;
          imgHeight = imgWidth / imageAspect;
        } else {
          // Taller than 16:9
          imgHeight = 2.05;
          imgWidth = imgHeight * imageAspect;
        }

        // On mobile/portrait, shift left so Toji (on the right half of toji.jpg) is centered
        // On desktop/laptop, Toji is already positioned on the right side next to the text
        let xOffset;
        let yOffset;
        if (aspect < 0.9) {
          xOffset = -0.38;
          yOffset = -0.05;
        } else if (aspect < 1.3) {
          xOffset = -0.16;
          yOffset = 0;
        } else {
          xOffset = 0.04;
          yOffset = 0;
        }

        // Update positions buffer scale
        const posAttr = particleMesh.geometry.getAttribute("imagePosition");
        const dispAttr = particleMesh.geometry.getAttribute("dispersedPosition");

        for (let i = 0; i < count; i++) {
          const u = imgPosArr[i * 3];
          const v = imgPosArr[i * 3 + 1];

          posAttr.setXYZ(i, u * imgWidth + xOffset, v * imgHeight + yOffset, 0);

          const du = dispPosArr[i * 3];
          const dv = dispPosArr[i * 3 + 1];
          const dz = dispPosArr[i * 3 + 2];

          dispAttr.setXYZ(i, du * imgWidth + xOffset, dv * imgHeight + yOffset, dz);
        }

        posAttr.needsUpdate = true;
        dispAttr.needsUpdate = true;

        // Size particles so they overlap seamlessly into solid image
        const pSizeX = (imgWidth / cols) * 1.2;
        const pSizeY = (imgHeight / rows) * 1.2;

        if (particleSizeUniform.value) {
          particleSizeUniform.value.set(pSizeX, pSizeY);
        }

        // Overlay photo mesh
        photoMesh.scale.set(imgWidth, imgHeight, 1);
        photoMesh.position.set(xOffset, yOffset, 0);
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
      resize();

      // 9. Bind Motion value to Three.js TSL uniform and photo overlay
      threeEffect(globe, { value: globeValueRef.current });
      threeEffect(photoMesh.material, {
        opacity: transformValue(() => highResolutionMix(globeValueRef.current.get())),
      });

      // 10. Motion render loop
      const renderLoop = () => {
        if (disposed) return;

        // Camera parallax
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
        camera.position.x = mouse.x;
        camera.position.y = mouse.y;

        // Synchronize values as fallback across any rendering backend
        const g = globeValueRef.current.get();
        globe.value = g;
        photoMesh.material.opacity = highResolutionMix(g);

        renderer.render(scene, camera);
      };

      frame.render(renderLoop, true);
      setLoaded(true);
      onReady?.();

      return () => {
        disposed = true;
        resizeObserver.disconnect();
        window.removeEventListener("mousemove", onMouseMove);
        cancelFrame(renderLoop);
        if (animRef.current) animRef.current.stop();

        try {
          geometry.dispose();
          photoMesh.geometry.dispose();
          photoMaterial.dispose();
          map.dispose();
          if (particleMesh.material) particleMesh.material.dispose();
          renderer.dispose();
        } catch {
          /* ignore dispose error */
        }
      };
    }

    const cleanupPromise = init();

    return () => {
      disposed = true;
      cleanupPromise.then((cleanup) => cleanup?.());
    };
  }, [onReady]);

  return (
    <div
      ref={containerRef}
      onPointerEnter={reveal}
      onPointerLeave={disperse}
      onClick={toggle}
      data-revealed={isHovered ? "true" : "false"}
      style={{ position: "absolute", inset: 0 }}
      className={`w-full h-full overflow-hidden select-none cursor-pointer ${className}`}
      aria-label="Interactive Toji particle reveal. Hover to assemble, leave to disperse."
      role="region"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block touch-none pointer-events-none"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-out",
        }}
      />
    </div>
  );
});

export default ParticleImageReveal;

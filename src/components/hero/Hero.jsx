import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "expo.out", delay: 0.5 }
        );
    }, []);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        // Default position for mobile visibility
        if (window.innerWidth < 768) {
            setPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
        }

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative h-screen min-h-[600px] md:h-screen w-full overflow-hidden bg-black flex items-center px-6 md:px-24 lg:px-32"
        >
            {/* Background with subtle parallax */}
            <div
                className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${(pos.x - window.innerWidth / 2) * 0.015}px, ${(pos.y - window.innerHeight / 2) * 0.015}px)`
                }}
            >
                <img
                    src="/images/toji.jpg"
                    className="h-full w-full object-cover md:object-center object-[70%_center] opacity-60"
                    alt="background"
                />
            </div>

            {/* Dynamic Masking Effect */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: "url(/images/toji.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: window.innerWidth < 768 ? "70% center" : "center",
                    filter: "grayscale(1) brightness(0.4)",
                    maskImage: `radial-gradient(circle 250px at ${pos.x}px ${pos.y}px, transparent 0%, black 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 250px at ${pos.x}px ${pos.y}px, transparent 0%, black 100%)`,
                }}
            />

            {/* Content Aligned Left */}
            <div
                ref={textRef}
                className="relative z-20 max-w-5xl flex flex-col items-start"
            >
                <div className="overflow-hidden">
                    <p className="tracking-[4px] md:tracking-[12px] text-zinc-500 uppercase text-[9px] md:text-sm mb-4 md:mb-6 animate-pulse select-none font-accent">
                        Digital Experiences Architect
                    </p>
                </div>

                <h1 className="text-gradient text-[48px] sm:text-[70px] md:text-[80px] lg:text-[80px] font-extrabold tracking-tighter leading-[0.9] md:leading-[0.8] font-heading">
                    MOHD FARHAN
                </h1>

                <div className="mt-6 md:mt-12 max-w-xl">
                    <p className="text-base md:text-xl lg:text-2xl text-zinc-400 font-normal leading-tight md:leading-relaxed">
                        Crafting <span className="text-white font-semibold">immersive digital worlds</span> where code meets art.
                        Focused on performance and <span className="text-white font-semibold">cinematic aesthetics</span>.
                    </p>
                </div>

                <div className="mt-8 md:mt-14 flex items-center gap-6 md:gap-10">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 md:px-12 md:py-5 overflow-hidden rounded-full border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[3px] md:tracking-[4px] transition-all hover:border-white"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            Explore Work
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
                    </a>

                    <div className="hidden sm:flex gap-4 items-center opacity-30">
                        <div className="w-12 h-[1px] bg-white" />
                        <span className="text-[10px] uppercase tracking-[4px] font-accent">India</span>
                    </div>
                </div>
            </div>

            {/* Side Label */}
            <div className="absolute right-5 md:right-10 bottom-32 hidden lg:block rotate-90 origin-right translate-x-1/2 opacity-20 hover:opacity-100 transition-opacity">
                <span className="text-[10px] tracking-[15px] uppercase font-accent">Portfolio 2026</span>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-6 md:left-32 flex flex-col items-start gap-3 md:gap-4 opacity-20">
                <span className="text-[8px] md:text-[9px] tracking-[3px] md:tracking-[4px] uppercase [writing-mode:vertical-lr] font-accent">Scroll Down</span>
                <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
}

export default Hero;

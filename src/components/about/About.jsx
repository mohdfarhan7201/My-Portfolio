import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ref.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    const stats = [
        { label: "Projects Completed", value: "10+" },
        { label: "Years Experience", value: "1yr+" },
        { label: "Modern Skills", value: "12+" },
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center px-6 py-32 bg-black overflow-hidden"
        >
            <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                <div>
                    <p className="text-zinc-500 tracking-[8px] uppercase text-xs mb-6">
                        Introduction
                    </p>

                    <h2 className="text-5xl md:text-7xl font-black leading-tight text-gradient">
                        I build digital <br /> experiences <br /> that matter.
                    </h2>

                    <p className="mt-10 text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
                        I’m a developer focused on crafting <span className="text-white font-medium">cinematic interfaces</span>.
                        I bridge the gap between design and development by using modern tools like React, GSAP, and Tailwind.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-xs uppercase tracking-widest text-zinc-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-zinc-900/50 backdrop-blur-3xl border border-white/5 p-10 rounded-2xl">
                        <pre className="text-xs md:text-sm text-zinc-500 font-mono leading-relaxed">
                            <code>{`const developer = {
  name: "Mohd Farhan",
  role: "Creative Developer",

  passion: ["Design", "Animation", "Code"],
  tools: ["React", "GSAP", "Tailwind"],
  motto: "Pixels with purpose."
};

function build() {
  return immerse(experience);
}`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

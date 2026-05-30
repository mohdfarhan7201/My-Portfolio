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
            className="min-h-screen flex items-center px-6 py-20 md:py-32 bg-black overflow-hidden"
        >
            <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div>
                    <p className="text-zinc-500 tracking-[6px] md:tracking-[8px] uppercase text-[10px] md:text-xs mb-4 md:mb-6">
                        Introduction
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-gradient">
                        I build digital <br /> experiences <br /> that matter.
                    </h2>

                    <p className="mt-6 md:mt-10 text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                        I’m a developer focused on crafting <span className="text-white font-medium">cinematic interfaces</span>.
                        I bridge the gap between design and development by using modern tools like React, GSAP, and Tailwind.
                    </p>

                    <div className="mt-8 md:mt-12 flex flex-wrap gap-6 md:gap-8 border-t border-white/5 pt-8 md:pt-12">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-[9px] md:text-xs uppercase tracking-widest text-zinc-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative group mt-10 md:mt-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-zinc-900/40 backdrop-blur-3xl border border-white/5 p-6 md:p-10 rounded-2xl overflow-x-auto">
                        <pre className="text-[10px] md:text-sm text-zinc-500 font-mono leading-relaxed">
                            <code>{`const developer = {
  name: "Mohd Farhan",
  role: "Creative Developer",
  passion: ["Design", "Code"],
  motto: "Pixels with purpose."
};`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;

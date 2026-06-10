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
            className="min-h-screen md:min-h-screen flex items-center px-6 md:px-24 lg:px-32  md:py-32 bg-black overflow-hidden"
        >
            <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">
                <div>
                    <p className="text-zinc-500 tracking-[5px] md:tracking-[8px] uppercase text-[10px] md:text-sm mb-4 md:mb-8 font-accent">
                        Introduction
                    </p>

                    <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] text-gradient font-heading">
                        I build digital <br className="hidden lg:block" /> experiences <br className="hidden lg:block" /> that matter.
                    </h2>

                    <p className="mt-8 md:mt-12 text-zinc-400 text-base md:text-xl lg:text-2xl leading-relaxed font-normal max-w-2xl">
                        I’m a developer focused on crafting <span className="text-white font-semibold">cinematic interfaces</span>.
                        I bridge the gap between design and development by using modern tools like React, GSAP, and Tailwind.
                    </p>

                    <div className="mt-10 md:mt-16 flex  gap-6 md:gap-16 border-t border-white/5 pt-10 md:pt-16">
                        {stats.map((stat) => (
                            <div key={stat.label} className="group">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading group-hover:text-zinc-300 transition-colors">{stat.value}</h3>
                                <p className="text-[10px] md:text-xs uppercase tracking-[3px] text-zinc-500 font-accent">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative group mt-0 lg:-mt-40">
                    <div className="absolute -inset-2 bg-gradient-to-r from-white/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-zinc-900/30 backdrop-blur-3xl border border-white/5 p-8 md:p-12 lg:p-16 rounded-3xl overflow-x-auto shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                        <pre className="text-[11px] md:text-sm lg:text-base text-zinc-400 font-mono leading-loose">
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

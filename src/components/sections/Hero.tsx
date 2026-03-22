"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TreePine, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            tl.from(cardRef.current, {
                scaleY: 0,
                opacity: 0,
                transformOrigin: "center bottom",
                duration: 1.2,
                ease: "power3.out",
            })
                .from(".hero-text-char", {
                    y: 20,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 1.0,
                }, "-=0.5")
                .from(".hero-sub", {
                    y: 20,
                    opacity: 0,
                    duration: 1.0,
                }, "-=0.8")
                .from(".hero-badges", {
                    y: 15,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.6");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const splitText = (text: string) => {
        return text.split("").map((char, i) => (
            <span key={i} className="hero-text-char inline-block">
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden"
        >
            {/* Subtle background decorations */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-growth/10 rounded-full blur-3xl" />

            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
                {/* Card Component */}
                <div
                    ref={cardRef}
                    className="w-full max-w-sm bg-white aspect-[3/4] rounded-3xl shadow-2xl mb-12 p-8 flex flex-col justify-center items-center text-center border border-stone-100 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/40 via-accent/30 to-primary/20" />

                    {/* Tree icon */}
                    <div className="w-16 h-16 bg-growth/20 rounded-full flex items-center justify-center mb-6">
                        <TreePine size={32} className="text-growth" />
                    </div>

                    <span className="text-xs text-gray-400 mb-4 font-medium tracking-widest uppercase">Covenant</span>

                    <h3 className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-6">
                        &quot;나는 그들의 하나님이 되고<br />
                        그들은 내 백성이<br />
                        될 것이라&quot;
                    </h3>

                    <p className="text-sm text-gray-400 font-medium">예레미야 31:33</p>

                    <div className="absolute bottom-8 w-12 h-1 bg-gray-200 rounded-full" />
                </div>

                {/* Text Content */}
                <div ref={textRef} className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        <div className="overflow-hidden">
                            {splitText("베리트")}
                        </div>
                        <div className="overflow-hidden text-primary">
                            {splitText("하나님과의 약속")}
                        </div>
                    </h1>

                    <p className="hero-sub text-lg md:text-xl text-foreground/70 max-w-xl mx-auto font-light leading-relaxed mb-8">
                        매일의 기도와 묵상으로 자라나는 나의 믿음 나무.<br />
                        하나님의 언약 안에서 참된 평안을 누리세요.
                    </p>

                    <div className="hero-badges flex flex-wrap items-center justify-center gap-3">
                        {[
                            { icon: TreePine, label: "성장하는 믿음 나무" },
                            { icon: Heart, label: "함께하는 기도 동행" },
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 text-sm text-foreground/70">
                                <badge.icon size={16} className="text-primary" />
                                <span>{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

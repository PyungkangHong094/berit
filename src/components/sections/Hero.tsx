"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            // Card Reveal Animation
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
                }, "-=0.8");

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
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
                {/* Card Component */}
                <div
                    ref={cardRef}
                    className="w-full max-w-md bg-white aspect-[3/4] rounded-3xl shadow-2xl mb-12 p-8 flex flex-col justify-center items-center text-center border border-stone-100 relative overflow-hidden"
                    style={{
                        backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Subtle paper texture
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary/20" />

                    <span className="text-sm text-gray-400 mb-6 font-medium tracking-widest uppercase">Covenant</span>

                    <h3 className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed mb-6">
                        &quot;나는 그들의 하나님이 되고<br />
                        그들은 내 백성이<br />
                        될 것이라&quot;
                    </h3>

                    <p className="text-sm text-gray-500 font-medium">예레미야 31:33</p>

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

                    <p className="hero-sub text-lg md:text-xl text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
                        변하지 않는 하나님의 언약 안에서 참된 평안을 누리세요.<br />
                        매일의 말씀이 당신의 삶을 거룩한 약속으로 인도합니다.
                    </p>
                </div>
            </div>
        </section>
    );
}

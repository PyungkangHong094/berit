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

                    <span className="text-sm text-gray-400 mb-6 font-medium tracking-widest uppercase">Today&apos;s Verse</span>

                    <h3 className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed mb-6">
                        &quot;너희는 마음에 근심하지 말라<br />
                        하나님을 믿으니<br />
                        또 나를 믿으라&quot;
                    </h3>

                    <p className="text-sm text-gray-500 font-medium">요한복음 14:1</p>

                    <div className="absolute bottom-8 w-12 h-1 bg-gray-200 rounded-full" />
                </div>

                {/* Text Content */}
                <div ref={textRef} className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        <div className="overflow-hidden">
                            {splitText("오늘 우리의")}
                        </div>
                        <div className="overflow-hidden text-primary">
                            {splitText("성장을 시작하세요")}
                        </div>
                    </h1>

                    <p className="hero-sub text-lg md:text-xl text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
                        하루 한 장의 말씀 카드, 그리고 함께 나누는 깊은 묵상.<br />
                        말씀 동행이 당신의 영적 여정을 함께합니다.
                    </p>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                gsap.from(buttonRef.current, {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                });
            });

            mm.add("(max-width: 768px)", () => {
                gsap.from(buttonRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    하나님과의 약속, 지금 시작하세요
                </h2>
                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    매일의 말씀과 기도로 채워지는 거룩한 습관.<br />
                    베리트가 당신의 영적 여정을 함께합니다.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                    {["매일의 말씀", "기도 공동체", "언약 일기"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <Check size={16} />
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <button ref={buttonRef} className="bg-secondary text-white hover:bg-yellow-500 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                    베리트 시작하기
                    <ArrowRight className="w-6 h-6" />
                </button>

                <p className="mt-6 text-blue-200 text-sm">
                    지금 다운로드하고 은혜의 여정에 동참하세요.
                </p>
            </div>
        </section>
    );
}

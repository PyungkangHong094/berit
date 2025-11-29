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
                    부담 없이 시작하세요
                </h2>
                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    7일 동안 모든 프리미엄 기능을 무료로 체험해보실 수 있습니다.<br />
                    언제든 위약금 없이 해지 가능합니다.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                    {["광고 없는 묵상", "무제한 오디오 콘텐츠", "오프라인 저장"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <Check size={16} />
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <button ref={buttonRef} className="bg-secondary text-white hover:bg-yellow-500 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                    7일 무료 체험 시작하기
                    <ArrowRight className="w-6 h-6" />
                </button>

                <p className="mt-6 text-blue-200 text-sm">
                    카드 등록 없이 시작할 수 있습니다.
                </p>
            </div>
        </section>
    );
}

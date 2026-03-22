"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flame } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
    {
        days: 21,
        title: "감사의 시작",
        description: "일상의 작은 은혜를 발견하는 감사 기도",
        category: "감사",
        color: "from-growth/20 to-growth/5 border-growth/20",
        textColor: "text-growth",
    },
    {
        days: 30,
        title: "인도하심의 기도",
        description: "지금 나의 상황에 맞는 하나님의 말씀 묵상",
        category: "인도하심",
        color: "from-primary/20 to-primary/5 border-primary/20",
        textColor: "text-primary",
    },
    {
        days: 50,
        title: "가족 중보기도",
        description: "사랑하는 가족을 위한 중보기도의 여정",
        category: "중보기도",
        color: "from-secondary/30 to-secondary/10 border-secondary/30",
        textColor: "text-accent",
    },
    {
        days: 100,
        title: "사명과 비전",
        description: "하나님이 주신 나의 부르심을 찾아가는 묵상",
        category: "사명과 비전",
        color: "from-stamp/20 to-stamp/5 border-stamp/20",
        textColor: "text-stamp",
    },
];

export default function Challenge() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                gsap.from(".challenge-card", {
                    y: 40,
                    opacity: 0,
                    duration: 1.0,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current?.querySelector(".challenge-grid"),
                        start: "top 75%",
                    },
                });
            });

            mm.add("(max-width: 768px)", () => {
                gsap.from(".challenge-card", {
                    y: 25,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current?.querySelector(".challenge-grid"),
                        start: "top 85%",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Challenges</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        기도 챌린지로 꾸준히
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-xl mx-auto">
                        21일부터 100일까지. 매일 말씀과 기도문이 준비되어 있어<br className="hidden md:block" />
                        누구나 쉽게 기도 습관을 만들 수 있어요.
                    </p>
                </div>

                <div className="challenge-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {challenges.map((item, index) => (
                        <div
                            key={index}
                            className={`challenge-card p-6 rounded-2xl bg-gradient-to-b ${item.color} border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center`}
                        >
                            <div className={`inline-flex items-center gap-1 ${item.textColor} mb-3`}>
                                <Flame size={18} />
                                <span className="text-2xl font-bold">{item.days}</span>
                                <span className="text-sm font-medium">일</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">
                                {item.title}
                            </h3>
                            <p className="text-foreground/50 text-xs md:text-sm leading-relaxed">
                                {item.description}
                            </p>
                            <div className="mt-3">
                                <span className={`text-xs font-medium ${item.textColor} bg-white/60 px-2 py-1 rounded-full`}>
                                    {item.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        step: "01",
        title: "오늘의 말씀을 묵상해요",
        description: "매일 새로운 성경 말씀 카드가 도착합니다. 잔잔한 피아노 찬양과 함께 말씀을 묵상하며 하루를 시작하세요.",
        emoji: "📖",
    },
    {
        step: "02",
        title: "기도를 드려요",
        description: "감사, 인도하심, 평안, 중보기도, 사명과 비전 — 5가지 주제로 기도문이 준비되어 있어요. \"예수님 이름으로 기도합니다. 아멘\"으로 기도를 마무리하세요.",
        emoji: "🙏",
    },
    {
        step: "03",
        title: "나무가 자라나요",
        description: "기도할 때마다 나의 믿음 나무가 쑥쑥 자랍니다. 새싹에서 큰 나무로, 일주일 동안 기도한 만큼 열매도 맺혀요.",
        emoji: "🌳",
    },
    {
        step: "04",
        title: "함께 동행해요",
        description: "초대 코드로 파트너를 연결하세요. 서로의 기도를 캘린더에서 확인하며 믿음의 여정을 함께 걸어갑니다.",
        emoji: "💕",
    },
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                gsap.from(".step-card", {
                    x: -40,
                    opacity: 0,
                    duration: 1.0,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current?.querySelector(".steps-container"),
                        start: "top 75%",
                    },
                });
            });

            mm.add("(max-width: 768px)", () => {
                gsap.from(".step-card", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current?.querySelector(".steps-container"),
                        start: "top 85%",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">How It Works</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        베리트는 이렇게 사용해요
                    </h2>
                    <p className="text-foreground/60 text-lg">
                        간단한 4단계로 매일의 기도 습관을 만들어 보세요.
                    </p>
                </div>

                <div className="steps-container max-w-3xl mx-auto space-y-6">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="step-card flex items-start gap-6 p-6 md:p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="shrink-0 w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-3xl shadow-sm">
                                {item.emoji}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                                        STEP {item.step}
                                    </span>
                                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                                </div>
                                <p className="text-foreground/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

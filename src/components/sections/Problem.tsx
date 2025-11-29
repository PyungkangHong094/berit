"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Battery, CloudFog } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const problems = [
    {
        icon: Clock,
        title: "지속하기 어려운 꾸준함",
        description: "혼자서는 바쁜 일상에 치여 묵상을 건너뛰기 쉽습니다. 작심삼일로 끝나는 경우가 많죠.",
    },
    {
        icon: CloudFog,
        title: "나눌 곳 없는 깊은 묵상",
        description: "받은 은혜를 나누고 싶어도, 마땅히 깊게 대화할 영적 동반자를 찾기 어렵습니다.",
    },
    {
        icon: Battery,
        title: "제자리걸음인 신앙",
        description: "기록하지 않으면 잊혀집니다. 나의 영적 성장이 어디쯤 와있는지 확인하기 어렵습니다.",
    },
];

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                gsap.from(".problem-card", {
                    y: 50,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                    },
                });
            });

            mm.add("(max-width: 768px)", () => {
                gsap.from(".problem-card", {
                    y: 30,
                    opacity: 0,
                    duration: 1.0,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        왜 혼자 하는 묵상은 쉽게 흔들릴까요?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        우리의 의지는 생각보다 약하지만, 함께하면 달라집니다.
                    </p>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div
                            key={index}
                            className="problem-card p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-primary">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Battery, CloudFog } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const problems = [
    {
        icon: Clock,
        title: "잊혀지는 약속",
        description: "바쁜 일상 속에서 하나님과의 소중한 언약을 잊고 살아가기 쉽습니다. 약속을 기억하지 못하면 관계는 멀어집니다.",
    },
    {
        icon: CloudFog,
        title: "불안한 마음",
        description: "말씀이라는 닻이 없으면 세상의 파도에 쉽게 흔들립니다. 참된 평안은 변치 않는 약속 안에 거할 때 찾아옵니다.",
    },
    {
        icon: Battery,
        title: "혼자 걷는 길",
        description: "신앙의 여정은 혼자가 아닙니다. 서로의 약속을 지켜주며 함께 걸어갈 믿음의 동역자가 필요합니다.",
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
                        하나님과의 약속, 기억하고 계신가요?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        우리는 너무나 쉽게 그분의 사랑과 언약을 잊어버리곤 합니다.
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

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TreePine, BookOpen, Users, Calendar, Music, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: TreePine,
        title: "자라나는 믿음 나무",
        description: "매일 기도할 때마다 나무가 자라나요. 새싹에서 시작해 무성한 나무로 성장하는 모습을 지켜보세요. 일주일간 기도한 만큼 열매가 맺히며, 나의 영적 성장을 눈으로 확인할 수 있습니다.",
        color: "bg-growth/20 text-growth",
    },
    {
        icon: BookOpen,
        title: "매일의 묵상과 기도",
        description: "오늘의 말씀 카드와 함께 하루를 시작하세요. 감사, 인도하심, 평안, 중보기도, 사명과 비전 — 5가지 기도 카테고리로 매일 풍성한 기도를 드릴 수 있습니다.",
        color: "bg-primary/15 text-primary",
    },
    {
        icon: Target,
        title: "기도 챌린지",
        description: "21일, 30일, 50일, 100일 기도 챌린지에 도전하세요. 매일 성경 말씀과 기도문이 제공되며, 꾸준한 기도 습관을 만들어 갑니다. \"예수님 이름으로 기도합니다. 아멘\"으로 오늘의 기도를 완성하세요.",
        color: "bg-accent/15 text-accent",
    },
    {
        icon: Users,
        title: "함께하는 기도 동행",
        description: "혼자가 아닌 둘이서. 초대 코드로 파트너와 연결하면 서로의 기도를 확인하고 함께 동행할 수 있어요. 커플, 부부, 신앙의 벗과 함께 언약의 여정을 걸어보세요.",
        color: "bg-secondary/30 text-accent",
    },
    {
        icon: Calendar,
        title: "동행 캘린더",
        description: "기도한 날은 하트로, 묵상을 기록한 날은 점으로 표시됩니다. 한 달, 일 년의 기도 여정을 한눈에 돌아보며 하나님의 신실하심을 기억하세요.",
        color: "bg-stamp/15 text-stamp",
    },
    {
        icon: Music,
        title: "평안한 묵상 음악",
        description: "기도 시간에 잔잔한 피아노 찬양이 자동으로 흘러나옵니다. Amazing Grace, 예수 사랑하심을 — 익숙한 찬양 선율이 마음을 고요하게 이끌어 줍니다.",
        color: "bg-primary/10 text-primary",
    },
];

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                gsap.from(".feature-card", {
                    y: 40,
                    opacity: 0,
                    duration: 1.0,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current?.querySelector(".feature-grid"),
                        start: "top 75%",
                    },
                });
            });

            mm.add("(max-width: 768px)", () => {
                gsap.from(".feature-card", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current?.querySelector(".feature-grid"),
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
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Features</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        베리트와 함께하는 매일의 은혜
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                        기도와 묵상을 통해 하나님과의 관계가 깊어지고,<br className="hidden md:block" />
                        나의 믿음이 한 그루 나무처럼 자라납니다.
                    </p>
                </div>

                <div className="feature-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-5`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-foreground/60 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Headphones, BookOpen, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Headphones,
        title: "5분 오디오 묵상",
        description: "출근길, 잠들기 전 5분. 전문 성우의 편안한 목소리로 듣는 깊이 있는 묵상 콘텐츠를 제공합니다.",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2664&auto=format&fit=crop"
    },
    {
        icon: Sparkles,
        title: "맞춤형 큐레이션",
        description: "현재 나의 감정 상태와 상황에 맞는 성경 구절과 묵상을 AI가 추천해드립니다.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop"
    },
    {
        icon: BookOpen,
        title: "깊이 있는 성경 읽기",
        description: "단순한 통독을 넘어, 배경 지식과 해설이 함께하는 풍성한 성경 읽기를 경험해보세요.",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2574&auto=format&fit=crop"
    }
];

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            const sections = gsap.utils.toArray<HTMLElement>(".feature-section");

            mm.add("(min-width: 769px)", () => {
                sections.forEach((section, i) => {
                    gsap.from(section.querySelector(".feature-content"), {
                        y: 50,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                        },
                    });

                    gsap.from(section.querySelector(".feature-image"), {
                        x: i % 2 === 0 ? 50 : -50,
                        opacity: 0,
                        duration: 1.2,
                        delay: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                        },
                    });
                });
            });

            mm.add("(max-width: 768px)", () => {
                sections.forEach((section) => {
                    gsap.from(section.querySelector(".feature-content"), {
                        y: 30,
                        opacity: 0,
                        duration: 1.0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                        },
                    });

                    gsap.from(section.querySelector(".feature-image"), {
                        y: 30,
                        opacity: 0,
                        duration: 1.0,
                        delay: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                        },
                    });
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-[#FDFBF7]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Solution</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                        당신의 영적 성장을 돕는 3가지 길
                    </h2>
                </div>

                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-section flex flex-col md:flex-row items-center gap-12 md:gap-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="feature-content flex-1 space-y-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-primary">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-bold text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="feature-image flex-1 relative group h-80 md:h-96"> {/* Added height for Image fill */}
                                <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="relative rounded-3xl shadow-xl object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        name: "김은혜",
        role: "청년부 리더",
        content: "매일 아침 기도 챌린지를 시작하면서 나무가 자라는 걸 보는 게 큰 기쁨이에요. 100일 챌린지 완료했을 때의 감동은 잊을 수 없습니다.",
        rating: 5,
    },
    {
        name: "최성민",
        role: "직장인",
        content: "아내와 함께 커플 모드로 사용하고 있어요. 서로의 기도를 캘린더에서 확인하며 함께 동행하는 느낌이 정말 좋습니다. 바쁜 일상 속 닻이 되어줍니다.",
        rating: 5,
    },
    {
        name: "이수진",
        role: "주부",
        content: "기도할 때 흘러나오는 찬양 피아노 소리가 마음을 차분하게 해줘요. 묵상 노트에 감사 제목을 적다 보면 은혜가 넘칩니다.",
        rating: 5,
    },
];

export default function SocialProof() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                gsap.from(".review-card", {
                    y: 30,
                    opacity: 0,
                    duration: 1.0,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    },
                });
            });

            mm.add("(max-width: 768px)", () => {
                gsap.from(".review-card", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
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
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Reviews</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                        약속 안에서 변화된 삶의 이야기
                    </h2>
                    <p className="text-foreground/60 text-lg">
                        베리트와 함께하며 회복된 은혜를 나눕니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="review-card p-8 bg-background rounded-2xl border border-gray-100 relative"
                        >
                            <div className="flex gap-1 text-accent mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-foreground/70 mb-6 leading-relaxed">
                                &quot;{review.content}&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center text-foreground font-bold text-sm">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{review.name}</div>
                                    <div className="text-sm text-foreground/50">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

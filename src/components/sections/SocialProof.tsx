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
        content: "매일 아침 도착하는 약속의 말씀이 제 하루를 지탱해줍니다. 흔들릴 때마다 하나님과의 언약을 다시 기억하게 되었어요.",
        rating: 5
    },
    {
        name: "최성민",
        role: "직장인",
        content: "바쁜 일상 속에서 잊고 지냈던 하나님의 약속들을 다시 붙잡게 되었습니다. 베리트는 제 신앙의 닻과 같습니다.",
        rating: 5
    },
    {
        name: "이수진",
        role: "주부",
        content: "공동체와 함께 기도 제목을 나누며 혼자가 아님을 느낍니다. 서로의 약속을 지켜주는 믿음의 동역자들을 만나 감사합니다.",
        rating: 5
    }
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        약속 안에서 변화된 삶의 이야기
                    </h2>
                    <p className="text-gray-600 text-lg">
                        베리트와 함께하며 회복된 은혜를 나눕니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="review-card p-8 bg-gray-50 rounded-2xl border border-gray-100 relative"
                        >
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                &quot;{review.content}&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{review.name}</div>
                                    <div className="text-sm text-gray-500">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

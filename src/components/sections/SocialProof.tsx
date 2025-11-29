"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        name: "김민지",
        role: "직장인 (3년차)",
        content: "출근길 지하철에서 듣는 5분 묵상이 제 하루를 완전히 바꿔놓았습니다. 회사에서의 스트레스를 이길 힘을 얻어요.",
        rating: 5
    },
    {
        name: "이준호",
        role: "사업가",
        content: "바쁘다는 핑계로 말씀을 멀리했었는데, 이 앱 덕분에 다시 하나님과 가까워진 느낌입니다. 오디오 퀄리티가 정말 좋아요.",
        rating: 5
    },
    {
        name: "박서연",
        role: "주부",
        content: "육아로 지친 일상 속에서 잠시나마 누리는 저만의 안식처입니다. 큐레이션된 말씀이 매번 제 상황에 딱 맞아서 놀라워요.",
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
                        이미 많은 분들이 평안을 찾았습니다
                    </h2>
                    <p className="text-gray-600 text-lg">
                        사용자들의 진솔한 이야기를 들어보세요.
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

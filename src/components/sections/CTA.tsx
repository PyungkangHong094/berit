"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TreePine, Target, Users, BookOpen } from "lucide-react";
import DownloadButtons from "@/components/DownloadButtons";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const downloadRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                gsap.from(downloadRef.current, {
                    scale: 0.95,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                });
            });

            mm.add("(max-width: 768px)", () => {
                gsap.from(downloadRef.current, {
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
                    하나님과의 약속,<br className="md:hidden" /> 지금 시작하세요
                </h2>
                <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    매일의 기도와 묵상으로 자라나는 믿음 나무.<br />
                    베리트가 당신의 영적 여정을 함께합니다.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    {[
                        { icon: TreePine, label: "믿음 나무" },
                        { icon: BookOpen, label: "매일 묵상" },
                        { icon: Target, label: "기도 챌린지" },
                        { icon: Users, label: "동행 파트너" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <item.icon size={16} />
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div ref={downloadRef}>
                    <DownloadButtons theme="dark" />
                </div>

                <p className="mt-6 text-white/50 text-sm">
                    지금 다운로드하고 은혜의 여정에 동참하세요.
                </p>
            </div>
        </section>
    );
}

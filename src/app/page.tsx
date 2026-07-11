"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Steps from "@/components/sections/Steps";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  useEffect(() => {
    // 모션 감소 선호 시 스무스 스크롤을 초기화하지 않는다.
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md bg-primary px-4 py-2 font-bold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        본문으로 건너뛰기
      </a>
      <SiteHeader />
      <main id="main" className="bg-background">
        <Hero />
        <Story />
        <Steps />
        <FeatureGrid />
        <Reviews />
      </main>
      <SiteFooter />
    </>
  );
}

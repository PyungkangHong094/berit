"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Challenge from "@/components/sections/Challenge";
import SocialProof from "@/components/sections/SocialProof";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Challenge />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}

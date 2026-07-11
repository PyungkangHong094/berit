import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaithTree } from "@/components/motifs";

// 나무 주변 손글씨 라벨 — 앱 핵심 기능명 (MemomentKkukkukk 액센트)
const ORBIT_LABELS = [
  { label: "말씀 묵상", className: "left-0 top-8 -rotate-6 sm:left-2 sm:top-12" },
  { label: "함께 기도", className: "right-0 top-8 rotate-6 sm:right-2 sm:top-12" },
  { label: "믿음 나무", className: "bottom-16 left-2 -rotate-3 sm:bottom-20 sm:left-6" },
  { label: "동행 캘린더", className: "bottom-16 right-2 rotate-3 sm:bottom-20 sm:right-6" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
      {/* 은은한 배경 광원 — 나무 뒤 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary/15 blur-3xl"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* 중앙 일러스트: 믿음 나무 + 손글씨 기능 라벨 */}
        <div className="relative mb-8 flex h-64 w-full max-w-[360px] items-center justify-center sm:mb-10 sm:h-80">
          <FaithTree className="h-full w-auto" />
          {ORBIT_LABELS.map((item) => (
            <span
              key={item.label}
              aria-hidden="true"
              className={`font-hand absolute text-base text-primary sm:text-xl ${item.className}`}
            >
              {item.label}
            </span>
          ))}
        </div>

        <p className="font-hand mb-2 text-2xl text-primary sm:text-3xl">
          &lsquo;언약&rsquo;을 뜻하는 히브리어, 베리트
        </p>

        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-[-0.01em] text-ink break-keep sm:text-5xl">
          사랑하는 사람과 매일
          <br className="hidden sm:block" />{" "}
          <span className="marker-highlight whitespace-nowrap text-ink">
            기도로 연결
          </span>
          됩니다
        </h1>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-foreground break-keep sm:text-lg">
          커플·부부·믿음의 벗이 함께 말씀을 묵상하고 기도하도록 돕는 앱입니다.
          매일의 기도로 믿음 나무를 키우며 서로의 여정을 함께 걸어가세요.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/app"
            className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-bold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            앱 설치하기
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/guide"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-ink px-8 py-3 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            사용 가이드 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

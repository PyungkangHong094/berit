import Link from "next/link";
import { ArrowRight, BookOpen, Target, Users, Calendar, Music } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { TreeGlyph } from "@/components/motifs";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** 아이콘 배경 색조 유틸 — 카드마다 다르게 순환 */
  tintBg: string;
  tintIcon: string;
  /** 넓게 강조할 카드 */
  wide?: boolean;
};

// 믿음 나무는 별도 featured 카드로 상단에 배치 (아래 배열에 미포함).
const FEATURES: Feature[] = [
  {
    icon: BookOpen,
    title: "매일의 묵상과 기도",
    description:
      "오늘의 말씀 카드와 함께 하루를 시작하세요. 감사·인도하심·평안·중보기도·사명과 비전, 다섯 가지 기도 주제가 준비되어 있어요.",
    tintBg: "bg-primary/12",
    tintIcon: "text-primary",
  },
  {
    icon: Target,
    title: "기도 챌린지",
    description:
      "21일, 30일, 50일, 100일 기도 챌린지에 도전하세요. 매일 말씀과 기도문이 제공되어 꾸준한 기도 습관을 만들어 갑니다.",
    tintBg: "bg-stamp/20",
    tintIcon: "text-ink",
  },
  {
    icon: Users,
    title: "함께하는 기도 동행",
    description:
      "혼자가 아닌 둘이서. 초대 코드로 파트너와 연결하면 서로의 기도를 확인하며 커플·부부·믿음의 벗과 함께 언약의 여정을 걸어갑니다.",
    tintBg: "bg-accent/15",
    tintIcon: "text-ink",
    wide: true,
  },
  {
    icon: Calendar,
    title: "동행 캘린더",
    description:
      "기도한 날은 하트로, 묵상을 기록한 날은 점으로 표시됩니다. 한 달, 일 년의 기도 여정을 한눈에 돌아볼 수 있어요.",
    tintBg: "bg-secondary/25",
    tintIcon: "text-ink",
  },
  {
    icon: Music,
    title: "평안한 묵상 음악",
    description:
      "기도 시간에 잔잔한 피아노 찬양이 자동으로 흘러나옵니다. 익숙한 찬양 선율이 마음을 고요하게 이끌어 줍니다.",
    tintBg: "bg-stamp/15",
    tintIcon: "text-ink",
  },
];

function FeatureLink({ title }: { title: string }) {
  return (
    <Link
      href="/guide"
      aria-label={`${title} 사용법 보기`}
      className="group/link mt-5 inline-flex w-fit items-center gap-1 rounded-sm text-sm font-bold text-ink underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
    >
      사용법 보기
      <ArrowRight
        size={15}
        aria-hidden="true"
        className="transition-transform group-hover/link:translate-x-0.5"
      />
    </Link>
  );
}

export default function FeatureGrid() {
  return (
    <section
      id="features"
      className="scroll-mt-20 bg-surface px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-2xl text-primary font-hand">핵심 기능</p>
        <h2 className="max-w-2xl text-2xl font-extrabold leading-[1.25] tracking-[-0.01em] text-ink break-keep sm:text-4xl">
          말씀부터 기도까지, 두 사람의 신앙을 한 곳에서
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {/* Featured — 믿음 나무: 가로형 대형 카드 */}
          <article className="group flex flex-col gap-6 rounded-3xl border border-line bg-background p-7 transition-colors hover:border-primary/40 sm:col-span-2 sm:flex-row sm:items-center sm:p-9">
            <div className="flex-1">
              <p className="text-2xl text-primary font-hand">두 사람의 성장</p>
              <h3 className="mt-1 text-xl font-bold text-ink break-keep sm:text-2xl">
                자라나는 믿음 나무
              </h3>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-foreground break-keep">
                매일 기도할 때마다 나무가 자라나요. 새싹에서 무성한 나무로,
                일주일간 기도한 만큼 열매가 맺히며 영적 성장을 눈으로 확인합니다.
              </p>
              <FeatureLink title="믿음 나무" />
            </div>
            <div
              className="flex shrink-0 items-center justify-center rounded-2xl bg-growth/15 p-6 transition-transform duration-300 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              <TreeGlyph className="h-24 w-24" />
            </div>
          </article>

          {/* 나머지 기능 카드 */}
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className={`group flex flex-col rounded-2xl border border-line bg-background p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_24px_-16px_rgba(47,42,35,0.4)] ${
                feature.wide ? "sm:col-span-2 sm:flex-row sm:gap-7" : ""
              }`}
            >
              <div
                className={`mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${feature.tintBg} ${feature.tintIcon} transition-transform duration-200 group-hover:scale-105 ${
                  feature.wide ? "sm:mb-0" : ""
                }`}
                aria-hidden="true"
              >
                <feature.icon size={24} strokeWidth={1.75} />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="text-lg font-bold text-ink break-keep sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 flex-1 max-w-prose text-base leading-relaxed text-foreground break-keep">
                  {feature.description}
                </p>
                <FeatureLink title={feature.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

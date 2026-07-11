import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ArticleListItem from "@/components/ArticleListItem";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "사용 가이드 | 베리트",
  description:
    "베리트를 처음 시작하는 분들을 위한 사용 가이드. 동행 연결하기, 매일 기도, 기도 챌린지, 믿음 나무 키우기까지 베리트의 핵심 기능을 차근차근 안내해요.",
};

export default function GuidePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md bg-primary px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        본문으로 건너뛰기
      </a>
      <SiteHeader />
      <main id="main" className="bg-background">
        <div className="mx-auto w-full max-w-[640px] px-6 py-16 sm:py-20">
          <header className="mb-8 sm:mb-10">
            <p className="mb-3 text-2xl text-primary font-hand">
              처음이라도 괜찮아요
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.15] text-ink break-keep sm:text-4xl">
              <span className="marker-highlight">사용 가이드</span>
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground break-keep">
              베리트를 처음 시작하는 분들을 위해 핵심 기능을 하나씩 안내해요. 동행을
              연결하고, 매일 함께 기도하며, 믿음 나무를 키워가는 여정을 함께해요.
            </p>
          </header>

          <ul>
            {guides.map((guide) => (
              <li key={guide.slug}>
                <ArticleListItem
                  title={guide.title}
                  description={guide.description}
                  meta={`읽는 시간 ${guide.readingMinutes}분`}
                  imageSrc={guide.imageSrc}
                  imageAlt={guide.imageAlt}
                  motif={guide.motif}
                  isNew={guide.isNew}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

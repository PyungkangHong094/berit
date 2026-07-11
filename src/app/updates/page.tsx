import { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ArticleListItem from "@/components/ArticleListItem";
import { updates } from "@/data/updates";

export const metadata: Metadata = {
  title: "업데이트 소식 - 베리트",
  description:
    "베리트가 새로 선보인 기능과 개선 소식을 버전별로 확인해 보세요. 짝꿍과 더 가까이 기도할 수 있도록 계속 나아갑니다.",
};

export default function UpdatesPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md bg-primary px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        본문으로 건너뛰기
      </a>
      <SiteHeader />
      <main id="main" className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
          <header className="mb-8 sm:mb-10">
            <p className="mb-3 text-2xl text-primary font-hand">
              한 걸음씩, 함께
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.15] text-ink break-keep sm:text-4xl">
              <span className="marker-highlight">업데이트 소식</span>
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground break-keep">
              베리트가 새로 선보인 기능과 개선 소식이에요. 짝꿍과 더 가까이 기도할
              수 있도록 계속 나아갑니다.
            </p>
          </header>

          <ul>
            {updates.map((item) => (
              <li key={`${item.version}-${item.title}`}>
                <ArticleListItem
                  title={item.title}
                  description={item.description}
                  meta={`${item.version} 버전 이상`}
                  motif={item.motif}
                  isNew={item.isNew}
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

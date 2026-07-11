import Image from "next/image";
import { TreeGlyph } from "@/components/motifs";

export default function Story() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.15fr] md:gap-16">
          {/* 문제 공감 */}
          <div className="md:pt-6">
            <p className="mb-3 text-2xl text-primary font-hand">왜 베리트인가요?</p>
            <h2 className="text-2xl font-extrabold leading-[1.25] tracking-[-0.01em] text-ink break-keep sm:text-3xl">
              바쁜 일상 속에서
              <br />
              기도는 자꾸 뒤로 밀립니다
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-foreground break-keep">
              하나님과의 소중한 약속도, 사랑하는 사람을 위한 기도도 바쁜 하루에
              쉽게 잊히곤 합니다. 혼자 지키려 하면 오래가기 어렵고, 신앙의 여정은
              함께 걸을 때 더 멀리 갈 수 있습니다.
            </p>
          </div>

          {/* 베리트의 답 — 카드로 무게를 실어 대비 */}
          <div className="relative rounded-3xl border border-line bg-background p-7 shadow-[0_1px_2px_rgba(47,42,35,0.04)] sm:p-9">
            <div className="mb-4 flex h-12 w-12 items-center justify-center" aria-hidden="true">
              <TreeGlyph className="h-11 w-11" />
            </div>
            <h2 className="text-2xl font-extrabold leading-[1.25] tracking-[-0.01em] text-ink break-keep sm:text-3xl">
              베리트는 두 사람의 기도를 하나로 잇습니다
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground break-keep">
              베리트는 &lsquo;언약&rsquo;을 뜻하는 히브리어입니다. 그 이름처럼,
              매일 오늘의 말씀 카드와 다섯 가지 기도 주제로 하루를 시작하고, 초대
              코드로 파트너와 연결해 서로의 기도를 캘린더에서 확인하세요. 기도할
              때마다 자라나는 믿음 나무가 두 사람의 동행을 눈으로 보여줍니다.
            </p>
          </div>
        </div>

        {/* 만든 사람 소개 */}
        <div className="mt-12 flex items-center justify-center gap-4 md:justify-end">
          <Image
            src="/creator.jpg"
            alt="베리트를 만든 이나영"
            width={150}
            height={150}
            className="h-14 w-14 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-muted font-hand">만든 사람</p>
            <p className="text-base font-bold text-ink">이나영</p>
            <p className="text-sm text-muted">베리트 기획자 / 작가</p>
          </div>
        </div>
      </div>
    </section>
  );
}

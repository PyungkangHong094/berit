import Image from "next/image";
import { DottedRule } from "@/components/motifs";

const STEPS = [
  {
    step: "1",
    title: "앱을 설치하고 시작해요",
    description:
      "오늘의 말씀 카드와 감사·인도하심·평안·중보기도·사명과 비전, 다섯 가지 기도 주제로 매일 하나님과의 시간을 시작하세요.",
  },
  {
    step: "2",
    title: "사랑하는 사람과 연결해요",
    description:
      "초대 코드를 파트너에게 보내 두 사람을 연결하세요. 서로의 기도와 묵상을 동행 캘린더에서 함께 확인할 수 있어요.",
  },
  {
    step: "3",
    title: "매일 기도하며 나무를 키워요",
    description:
      "기도할 때마다 나의 믿음 나무가 자라납니다. 새싹에서 큰 나무로, 일주일 동안 기도한 만큼 열매도 맺혀요.",
  },
];

export default function Steps() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-2xl text-primary font-hand">이렇게 사용해요</p>
        <h2 className="max-w-xl text-2xl font-extrabold leading-[1.25] tracking-[-0.01em] text-ink break-keep sm:text-4xl">
          세 단계면 함께 기도를 시작할 수 있어요
        </h2>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <ol className="relative space-y-9">
            {/* 스텝을 잇는 점선 연결선 */}
            <span
              aria-hidden="true"
              className="absolute left-[21px] top-11 bottom-11 border-l-2 border-dashed border-line"
            />
            {STEPS.map((item) => (
              <li key={item.step} className="relative flex gap-5">
                <span
                  className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white ring-4 ring-background"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-ink break-keep sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-base leading-relaxed text-foreground break-keep">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* 앱 스크린샷 — 폰 프레임 + 살짝 기울임 */}
          <div className="flex justify-center">
            <div className="relative rotate-2 rounded-[2.75rem] border-[6px] border-ink bg-ink p-1.5 shadow-[0_20px_40px_-16px_rgba(47,42,35,0.45)] transition-transform duration-300 hover:rotate-0">
              {/* 상단 노치 */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1.5 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-background/30"
              />
              <Image
                src="/screenshots/how-to-use.jpg"
                alt="믿음 나무가 자라는 베리트 앱 홈 화면 — 열매 맺힌 나무와 일주일 기도 기록"
                width={1242}
                height={2688}
                sizes="(min-width: 768px) 280px, 72vw"
                className="w-full max-w-[280px] rounded-[2.25rem]"
              />
            </div>
          </div>
        </div>

        <DottedRule className="mt-20 sm:mt-24" />
      </div>
    </section>
  );
}

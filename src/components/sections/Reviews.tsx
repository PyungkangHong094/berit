// 함께 기도하는 사람들 수. 지금은 가상 수치를 하드코딩하되,
// 나중에 DB 연동 예정 — 아래 상수만 실제 값으로 교체하면 된다.
const COMMUNITY_COUNT = 273; // TODO: DB 연동

// 후기 — 길이를 의도적으로 섞어(2줄~10줄) masonry에서 진짜 후기 느낌을 낸다.
const REVIEWS = [
  {
    name: "수현",
    role: "장거리 연애 중",
    content:
      "서로 다른 도시에 살아서 매일 얼굴 보긴 어려운데, 같은 말씀으로 기도하고 캘린더에서 오늘도 기도했구나 확인하는 게 위로가 돼요. 떨어져 있어도 이어져 있는 느낌이에요.",
  },
  {
    name: "박성진",
    role: "앱스토어 리뷰",
    content: "믿음 나무 키우는 재미로 매일 열게 됩니다.",
  },
  {
    name: "H.J.",
    role: "신혼부부",
    content:
      "결혼하고 각자 신앙생활만 하다가, 이제 부부가 같은 기도 제목을 나눠요. 아내가 무엇으로 기도하는지 알게 되니까 대화도 더 깊어졌습니다. 서로를 위해 기도한 흔적이 캘린더에 쌓이는 걸 보면, 우리가 같은 곳을 바라보며 걷고 있다는 게 느껴져요. 저희 부부에게는 없어서는 안 될 앱이 됐습니다.",
  },
  {
    name: "J&E 커플",
    role: "결혼 준비 중",
    content:
      "예식 준비하면서 정신없이 바빴는데, 하루에 한 번은 같이 멈춰서 기도하게 돼요. 결혼 전에 이 습관을 들인 게 정말 감사해요.",
  },
  {
    name: "지원",
    role: "앱스토어 리뷰",
    content: "화면이 예쁘고 부담스럽지 않아서 오래 쓰게 되네요.",
  },
  {
    name: "은비",
    role: "청년부에서 만난 커플",
    content:
      "청년부 수련회에서 만나 사귀게 됐어요. 연애하면서도 신앙 안에서 함께 자라고 싶었는데, 매일 말씀 카드로 하루를 시작하는 게 그 마음을 지켜줘요.",
  },
  {
    name: "민준·서연",
    role: "교제 2년 차",
    content:
      "함께 기도 주제를 정하고 서로를 위해 기도하니, 다투고 나서도 먼저 마음을 풀게 돼요.",
  },
  {
    name: "최다은",
    role: "앱스토어 리뷰",
    content:
      "기도할 때 잔잔한 피아노 찬양이 흘러나오는 게 좋아요. 마음이 고요해지면서 하루를 차분하게 정리하게 됩니다.",
  },
];

// 아바타 배경 파스텔 — 배경 전용(장식). 이니셜 텍스트는 항상 text-ink.
const AVATAR_TINTS = [
  "bg-secondary/30",
  "bg-stamp/30",
  "bg-growth/30",
  "bg-accent/20",
  "bg-primary/15",
];

// 카운터 장식용 사과 열매 한 알 (소형)
function AppleDot() {
  return (
    <svg viewBox="0 0 20 22" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        d="M10 5 q1.5 -3 4 -3"
        stroke="var(--tree-trunk)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="13" cy="3" rx="3" ry="1.8" fill="var(--growth)" transform="rotate(-20 13 3)" />
      <circle cx="10" cy="13" r="7" fill="var(--apple-red)" />
      <circle cx="7.5" cy="10.5" r="1.8" fill="#fff" opacity="0.4" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-2xl text-primary font-hand">이용 후기</p>
        <h2 className="text-2xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink break-keep sm:text-4xl">
          베리트를 경험한
          <br />
          <span className="marker-highlight">생생한 이야기</span>
        </h2>

        {/* 카운터 — 독립 박스 없이 헤딩 아래 한 줄 밴드로 통합 */}
        <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-foreground">
          <AppleDot />
          <span>지금 베리트와 함께 기도하는 사람들</span>
          <span className="font-extrabold tabular-nums text-ink">
            <span className="text-2xl sm:text-3xl">
              {COMMUNITY_COUNT.toLocaleString("ko-KR")}
            </span>
            <span className="ml-0.5 text-lg">명</span>
          </span>
        </p>

        <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {REVIEWS.map((review, i) => (
            <li
              key={review.name}
              className="mb-5 break-inside-avoid rounded-xl border border-line bg-white p-6"
            >
              <p className="text-[15px] leading-[1.7] text-foreground break-keep">
                {review.content}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-ink ${
                    AVATAR_TINTS[i % AVATAR_TINTS.length]
                  }`}
                  aria-hidden="true"
                >
                  {review.name[0]}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{review.name}</p>
                  <p className="text-sm text-muted">{review.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

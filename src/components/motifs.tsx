import type { ReactNode } from "react";
import {
  BookOpen,
  Flag,
  CalendarHeart,
  Music,
  Bell,
  Search,
  Gift,
  Sparkles,
} from "lucide-react";

/**
 * 베리트 브랜드 모티프 인라인 SVG 모음.
 * 출처: 앱 홈 화면(public/screenshots/how-to-use.jpg)의 시각 언어 —
 * 믿음 나무, 빨강/초록 사과 열매, 양 마스코트 '베리트이', 손글씨 무드.
 * 전부 장식용이므로 호출부에서 aria-hidden 처리한다.
 * 일러스트 전용 색(--tree-*, --apple-red)은 globals.css에 정의.
 */

/* ── 사과 열매 ─────────────────────────────────────────── */
function Apple({
  cx,
  cy,
  r = 8,
  ripe = true,
}: {
  cx: number;
  cy: number;
  r?: number;
  ripe?: boolean;
}) {
  const fill = ripe ? "var(--apple-red)" : "var(--growth)";
  return (
    <g>
      <path
        d={`M${cx} ${cy - r - 2} q3 -4 7 -3`}
        stroke="var(--tree-trunk)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx={cx + 5}
        cy={cy - r - 2}
        rx="3.5"
        ry="2"
        fill="var(--growth)"
        transform={`rotate(-25 ${cx + 5} ${cy - r - 2})`}
      />
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <circle cx={cx - r * 0.35} cy={cy - r * 0.35} r={r * 0.28} fill="#fff" opacity="0.4" />
    </g>
  );
}

/**
 * 믿음 나무 — 히어로 중앙 일러스트.
 * 겹친 원들의 뭉게구름형 수관 + 갈색 줄기 + 열매 + 나무 아래 양 마스코트.
 */
export function FaithTree({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 300"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* 바닥 그림자 */}
      <ellipse cx="130" cy="286" rx="70" ry="9" fill="var(--tree-deep)" opacity="0.08" />

      {/* 줄기 */}
      <path
        d="M118 172 q-3 44 -6 80 q9 5 36 0 q-4 -40 -6 -80 z"
        fill="var(--tree-trunk)"
      />
      <path
        d="M126 200 q2 30 1 52"
        stroke="#000"
        strokeOpacity="0.12"
        strokeWidth="2"
        fill="none"
      />

      {/* 수관 — 겹친 원 */}
      <g fill="var(--tree-deep)">
        <circle cx="130" cy="112" r="84" />
        <circle cx="74" cy="124" r="50" />
        <circle cx="186" cy="124" r="50" />
        <circle cx="98" cy="68" r="46" />
        <circle cx="164" cy="70" r="44" />
        <circle cx="130" cy="150" r="52" />
      </g>
      {/* 안쪽 밝은 결(앱의 반투명 원) */}
      <g>
        <circle cx="152" cy="118" r="36" fill="var(--tree-mid)" opacity="0.55" />
        <circle cx="100" cy="150" r="30" fill="var(--tree-light)" opacity="0.45" />
        <circle cx="108" cy="92" r="24" fill="var(--tree-mid)" opacity="0.4" />
      </g>

      {/* 열매 */}
      <Apple cx={94} cy={126} />
      <Apple cx={152} cy={104} />
      <Apple cx={176} cy={140} r={7} />
      <Apple cx={124} cy={156} />
      <Apple cx={130} cy={82} r={6} ripe={false} />
      <Apple cx={112} cy={120} r={6} ripe={false} />

      {/* 양 마스코트 '베리트이' — 나무 아래 */}
      <g transform="translate(130 246)">
        <ellipse cx="0" cy="18" rx="20" ry="4" fill="var(--tree-deep)" opacity="0.08" />
        {/* 몸통 뭉게털 */}
        <g fill="#FCFBF6" stroke="#E7E1D3" strokeWidth="1.2">
          <circle cx="-11" cy="4" r="8" />
          <circle cx="11" cy="4" r="8" />
          <circle cx="-4" cy="-4" r="8" />
          <circle cx="6" cy="-4" r="8" />
          <circle cx="0" cy="6" r="9" />
        </g>
        {/* 다리 */}
        <rect x="-8" y="10" width="3.5" height="7" rx="1.75" fill="#B9AE9C" />
        <rect x="5" y="10" width="3.5" height="7" rx="1.75" fill="#B9AE9C" />
        {/* 얼굴 */}
        <ellipse cx="0" cy="1" rx="7" ry="7.5" fill="#EFEBE1" />
        <circle cx="-2.4" cy="0" r="1.1" fill="#3A342B" />
        <circle cx="2.4" cy="0" r="1.1" fill="#3A342B" />
        {/* 가방끈 액센트(파랑) */}
        <path d="M-6 4 L5 9" stroke="var(--primary)" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ── biblessia식 점선 구분선 ─────────────────────────────── */
export function DottedRule({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 120 8"
        className="mx-auto h-2 w-28 text-[color:var(--line)]"
        fill="none"
        preserveAspectRatio="none"
      >
        <line
          x1="2"
          y1="4"
          x2="118"
          y2="4"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="0.5 14"
        />
      </svg>
    </div>
  );
}

/* ── 작은 나무 아이콘(카운터·기능 카드용) ──────────────────── */
export function TreeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <path d="M20 30 q-1 8 -1 12 q6 3 12 0 q0 -4 -1 -12 z" fill="var(--tree-trunk)" />
      <g fill="var(--tree-deep)">
        <circle cx="24" cy="20" r="16" />
        <circle cx="13" cy="24" r="9" />
        <circle cx="35" cy="24" r="9" />
        <circle cx="18" cy="12" r="8" />
      </g>
      <circle cx="18" cy="22" r="2.4" fill="var(--apple-red)" />
      <circle cx="30" cy="18" r="2.4" fill="var(--apple-red)" />
      <circle cx="26" cy="27" r="2" fill="var(--growth)" />
    </svg>
  );
}

/* ── 목록 썸네일 일러스트 ─────────────────────────────────── */

type ThumbTint = {
  bg: string;
  ring: string;
  icon: string;
};

// 팔레트를 항목마다 조금씩 다르게 순환해 균일함을 깬다.
const TINTS: Record<string, ThumbTint> = {
  growth: { bg: "bg-growth/20", ring: "ring-growth/30", icon: "text-ink" },
  coral: { bg: "bg-accent/15", ring: "ring-accent/25", icon: "text-ink" },
  pink: { bg: "bg-secondary/20", ring: "ring-secondary/30", icon: "text-ink" },
  purple: { bg: "bg-stamp/20", ring: "ring-stamp/30", icon: "text-ink" },
  blue: { bg: "bg-primary/12", ring: "ring-primary/25", icon: "text-primary" },
};

// 코너 액센트(수제 디테일): 잎/사과/점 중 하나를 얹는다.
function CornerAccent({ kind }: { kind: "leaf" | "apple" | "dot" }) {
  if (kind === "apple") {
    return (
      <svg viewBox="0 0 16 16" className="absolute right-2 top-2 h-4 w-4" aria-hidden="true">
        <circle cx="8" cy="9" r="5" fill="var(--apple-red)" />
        <path d="M8 4 q1 -2 3 -2" stroke="var(--growth)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  if (kind === "leaf") {
    return (
      <svg viewBox="0 0 16 16" className="absolute right-2 top-2 h-4 w-4" aria-hidden="true">
        <path d="M13 3 C6 3 3 6 3 13 C10 13 13 10 13 3 Z" fill="var(--growth)" opacity="0.8" />
      </svg>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-accent/60"
    />
  );
}

// motif 키 → 아이콘 + 색조 + 코너 액센트. 브랜드 나무/양/사과는 커스텀 SVG.
const THUMBS: Record<
  string,
  { render: (icon: string) => ReactNode; tint: keyof typeof TINTS; accent: "leaf" | "apple" | "dot" }
> = {
  tree: {
    render: () => <TreeGlyph className="h-11 w-11" />,
    tint: "growth",
    accent: "apple",
  },
  sheep: {
    render: () => <SheepGlyph className="h-12 w-12" />,
    tint: "pink",
    accent: "dot",
  },
  connect: {
    render: (icon) => <HeartsGlyph className={`h-10 w-10 ${icon}`} />,
    tint: "coral",
    accent: "apple",
  },
  prayer: {
    render: (icon) => <BookOpen className={`h-9 w-9 ${icon}`} strokeWidth={1.6} />,
    tint: "blue",
    accent: "leaf",
  },
  challenge: {
    render: (icon) => <Flag className={`h-9 w-9 ${icon}`} strokeWidth={1.6} />,
    tint: "purple",
    accent: "dot",
  },
  calendar: {
    render: (icon) => <CalendarHeart className={`h-9 w-9 ${icon}`} strokeWidth={1.6} />,
    tint: "coral",
    accent: "leaf",
  },
  music: {
    render: (icon) => <Music className={`h-9 w-9 ${icon}`} strokeWidth={1.6} />,
    tint: "purple",
    accent: "dot",
  },
  search: {
    render: (icon) => <Search className={`h-9 w-9 ${icon}`} strokeWidth={1.6} />,
    tint: "blue",
    accent: "dot",
  },
  poke: {
    render: (icon) => <Sparkles className={`h-9 w-9 ${icon}`} strokeWidth={1.6} />,
    tint: "coral",
    accent: "apple",
  },
  gift: {
    render: (icon) => <Gift className={`h-9 w-9 ${icon}`} strokeWidth={1.6} />,
    tint: "pink",
    accent: "leaf",
  },
  bell: {
    render: (icon) => <Bell className={`h-9 w-9 ${icon}`} strokeWidth={1.6} />,
    tint: "purple",
    accent: "dot",
  },
};

export function MotifThumb({ motif, className }: { motif: string; className?: string }) {
  const spec = THUMBS[motif] ?? THUMBS.prayer;
  const tint = TINTS[spec.tint];
  return (
    <div
      aria-hidden="true"
      className={`relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl ring-1 ring-inset ${tint.bg} ${tint.ring} sm:h-28 sm:w-28 ${className ?? ""}`}
    >
      {spec.render(tint.icon)}
      <CornerAccent kind={spec.accent} />
    </div>
  );
}

/* 두 하트가 이어진 연결 모티프(커플) */
function HeartsGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" className={className} aria-hidden="true" fill="none">
      <path
        d="M13 27 C4 20 2 13 6 9 C9 6 13 7 14 11 C15 7 19 6 22 9 C26 13 22 20 13 27 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M27 25 C21 20 20 15 23 12 C25 10 28 11 29 13.5 C30 11 33 10 35 12 C38 15 33 20 27 25 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  );
}

/* 작은 양 얼굴 글리프(썸네일용) */
function SheepGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="#FCFBF6" stroke="#E0D8C7" strokeWidth="1.4">
        <circle cx="16" cy="24" r="8" />
        <circle cx="32" cy="24" r="8" />
        <circle cx="20" cy="16" r="8" />
        <circle cx="28" cy="16" r="8" />
        <circle cx="24" cy="26" r="9" />
      </g>
      <ellipse cx="24" cy="24" rx="8" ry="8.5" fill="#EFEBE1" />
      <circle cx="21" cy="23" r="1.4" fill="#3A342B" />
      <circle cx="27" cy="23" r="1.4" fill="#3A342B" />
      <path d="M18 30 L30 34" stroke="var(--primary)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

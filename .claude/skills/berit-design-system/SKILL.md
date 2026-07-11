---
name: berit-design-system
description: 베릿(Berit) 웹사이트의 디자인 시스템 — 브랜드 폰트(SeoulAlrim, MemomentKkukkukk) 적용법, 컬러 토큰, 타이포그래피 스케일, 스페이싱 규칙. 베릿 웹사이트에서 폰트, 색상, 버튼, 카드, 공용 컴포넌트를 만들거나 수정할 때 반드시 이 스킬을 따를 것. 새 페이지/섹션 스타일링 전에 필독.
---

# 베리트 디자인 시스템

**브랜드명 표기 규칙: 한글은 반드시 "베리트" (베릿 금지), 영문은 "Berit".** 베리트(Berit)는 '언약'을 뜻하는 히브리어이며, 이 의미는 슬로건·소개 문구에 드러나야 한다. 로고 이미지는 항상 원형(rounded-full)으로 렌더링한다.

베리트는 커플 기도 앱이다. 웹사이트는 앱과 동일한 브랜드 자산(폰트·컬러)을 쓰며, 톤은 "따뜻하고 차분한 신앙 서비스"다. biblessia.com 스타일의 미니멀한 아이보리 배경 + 넉넉한 여백 + 명확한 위계를 지향한다.

## 폰트

원본 위치: `/Users/pyungkanghong/Documents/Github/berit_all/berit_app/assets/fonts/`
웹 프로젝트 내 위치: `src/fonts/` (없으면 원본에서 복사)

| 파일 | 패밀리 | weight | 용도 |
|------|--------|--------|------|
| SeoulAlrim-Medium.otf | SeoulAlrim | 500 | 본문 |
| SeoulAlrim-Bold.otf | SeoulAlrim | 700 | 소제목, 강조 |
| SeoulAlrim-ExtraBold.otf | SeoulAlrim | 800 | 헤드라인 |
| MemomentKkukkukk.ttf | MemomentKkukkukk | 400 | 손글씨 액센트(장식 라벨, 포인트 문구)만. 본문 금지 — 가독성이 낮다 |

`next/font/local`로 로딩한다 (`src/app/layout.tsx`):

```ts
import localFont from "next/font/local";

const seoulAlrim = localFont({
  src: [
    { path: "../fonts/SeoulAlrim-Medium.otf", weight: "500" },
    { path: "../fonts/SeoulAlrim-Bold.otf", weight: "700" },
    { path: "../fonts/SeoulAlrim-ExtraBold.otf", weight: "800" },
  ],
  variable: "--font-seoul-alrim",
  display: "swap",
});

const memoment = localFont({
  src: "../fonts/MemomentKkukkukk.ttf",
  variable: "--font-memoment",
  display: "swap",
});
```

`display: "swap"`은 폰트 로딩 중에도 텍스트가 보이게 해 접근성과 LCP에 유리하다. body 기본 폰트는 SeoulAlrim이고, 기존 Outfit은 제거한다.

## 컬러 토큰 (globals.css `:root`)

앱(`berit_app/lib/constants/colors.dart`)과 동기화된 값이다. 임의 hex를 새로 만들지 말고 토큰을 사용한다.

| 토큰 | 값 | 용도 | 텍스트 사용 가능? |
|------|-----|------|-----------------|
| `--background` | #FDFCF7 | 페이지 배경 (웜 아이보리) | - |
| `--surface` | #F4F1E8 | 카드/섹션 배경 (배경보다 한 톤 어두운 아이보리) | - |
| `--ink` | #2F2A23 | 헤드라인, 네비 텍스트 | O (대비 ≥ 12:1) |
| `--foreground` | #5C5348 | 본문 텍스트 | O (#FDFCF7 위 대비 ≥ 4.5:1 확보를 위해 앱의 #71665A보다 어둡게 조정한 값) |
| `--primary` | #5B7F8A | 메인 포인트(블루그레이), 버튼 배경 | 흰 텍스트와 함께 큰 요소만 |
| `--accent` | #EF9877 | 포인트(코랄) — NEW 뱃지 배경, 아이콘, 장식 | X — 텍스트 색으로 쓰면 대비 미달. 뱃지는 accent 배경 + `--ink` 텍스트 |
| `--secondary` | #FEBAAC | 웜 핑크 장식 | X |
| `--stamp` | #C4B2F1 | 퍼플 장식 | X |
| `--growth` | #AED581 | 그린(성장) 장식 | X |

주의: 기존 `--foreground: #71665A`는 본문 대비가 4.5:1에 아슬아슬하므로 위 표의 값으로 교체한다. 흐린 보조 텍스트(메타 정보)는 `--foreground`에 opacity를 걸지 말고 전용 값 #6B6155 이상 어두운 색을 쓴다.

## 타이포그래피 스케일

| 역할 | 크기 (모바일 → 데스크톱) | weight | 예시 |
|------|------------------------|--------|------|
| 페이지 헤드라인 (h1) | text-3xl → text-5xl | 800 | "당신의 공동체가 말씀과 기도로 연결됩니다" 류 |
| 섹션 타이틀 (h2) | text-2xl → text-4xl | 800 | |
| 카드/아티클 타이틀 (h3) | text-lg → text-2xl | 700 | 가이드 목록 제목 |
| 본문 | text-base (16px 미만 금지) | 500 | line-height 1.7 이상 |
| 메타 (읽는 시간, 버전) | text-sm | 500 | 색은 #6B6155 |

한글 헤드라인에는 `break-keep`을 걸어 어절 단위로 줄바꿈한다. `letter-spacing`은 한글에서 음수 소량(-0.01em)까지만.

## 컴포넌트 규칙

- **버튼**: 최소 높이 44px(터치 타깃), rounded-full, primary 배경 + 흰 텍스트 또는 ink 아웃라인. `focus-visible:ring-2 ring-primary ring-offset-2` 필수.
- **NEW 뱃지**: accent 배경 연하게(예: accent/20) + ink 계열 텍스트, rounded-md, text-xs~sm, weight 700.
- **썸네일**: rounded-2xl, 고정 비율 정사각형, `object-cover`. 일러스트 배경은 `--surface`.
- **리스트 구분선**: `border-b`는 #E5E0D5 계열 저채도 라인.
- **모션**: 장식적 애니메이션은 `prefers-reduced-motion: reduce`에서 비활성화한다. 스무스 스크롤(Lenis)도 마찬가지.

## 크래프트 원칙 — "AI가 만든 티" 금지

균일한 그리드에 이모지 박힌 카드가 반복되는 화면은 즉시 AI 생성물처럼 보인다. 사람이 공들여 만든 에디토리얼 느낌을 내는 것이 목표다.

**금지 패턴 (클로드스러움):**
- 모든 섹션이 중앙 정렬 + 동일 폭 + 동일 py — 리듬이 없다
- 균일한 rounded-2xl 카드가 같은 크기로 반복되는 그리드
- 큰 이모지를 아이콘 대신 박스에 넣는 것 (이모지는 텍스트 안 소량만)
- 보라-파랑 그라데이션, glassmorphism, 의미 없는 blob 배경
- 모든 요소에 shadow-lg — 그림자는 한 화면에 1~2개 요소만
- **불필요한 박스 래핑**: 아바타+이름 같은 작은 정보 덩어리를 보더/배경 박스로 감싸는 것. 박스(카드)는 반복되는 동종 콘텐츠(후기, 기능)에만 쓰고, 단일 요소는 맨살로 배치한다. "박스가 없어도 성립하면 박스를 만들지 마라"

**해야 하는 것:**
- **비대칭과 리듬**: 섹션마다 구조를 바꾼다 (좌 텍스트/우 이미지 → 풀폭 → 좁은 칼럼). 섹션 패딩도 강약 조절.
- **에디토리얼 타이포**: 헤드라인은 크고 촘촘하게(`leading-[1.2]` 이하, ExtraBold), eyebrow(손글씨 MemomentKkukkukk) → 헤드라인 → 본문의 3단 위계를 일관되게. 본문 폭은 `max-w-prose` 수준으로 제한.
- **브랜드 모티프**: 베리트의 시각 언어는 앱에 이미 있다 — 믿음 나무, 사과 열매(빨강/초록), 양 캐릭터 '냐꾸', 요일 도트, 손글씨. 장식이 필요하면 이 모티프를 인라인 SVG로 그려 쓴다 (`public/screenshots/how-to-use.jpg` 참조). biblessia처럼 점선 구분(- - - - -), 손글씨 화살표/라벨 액센트도 좋다.
- **마이크로 디테일**: 링크/카드 hover에 subtle transition(색·밑줄·1px translate), 버튼에 방향 아이콘, 숫자에 tabular-nums. 디테일이 수제 느낌을 만든다.
- **아이콘**: lucide-react(이미 설치됨)를 stroke 1.5~1.75로, 브랜드 모티프 SVG와 혼용. 이모지 아이콘 금지.

**검증된 패턴 (리서치 근거: claudedocs/research_landing_design_20260712.md):**
- **마커 하이라이트**: 헤딩 강조는 손그림 SVG보다 형광펜 하이라이트가 깔끔하다. 인라인 span에 `background-image: linear-gradient(accent 계열, 투명도 40~60%)` + `background-size`로 텍스트 하단 40~55%만 덮는다. 헤딩당 1곳만. 유틸 클래스 `.marker-highlight`로 globals.css에 정의해 재사용.
- **후기 masonry**: 균일 그리드 금지. `columns-1 sm:columns-2 lg:columns-3` + 카드 `break-inside-avoid mb-5`. 카드는 **흰 배경 + 1px border-line + rounded-xl** (아이보리 위에서 그림자보다 보더가 깔끔). 후기 길이는 의도적으로 2줄~10줄 섞는다. 아바타 40px 원형(이니셜 + 파스텔 배경 순환).
- **통계 카운터**: 독립 빈 박스 금지 — 휑해 보이는 즉시 실패. 후기 섹션 헤딩 아래 한 줄 밴드로 통합하거나 masonry 안 컴팩트 stat 카드로 삽입. 정확한 숫자 + 맥락 문장 한 줄.
- **헤딩 정렬**: 섹션 헤딩은 기본 좌정렬 에디토리얼(중앙정렬은 Hero 등 1~2곳만). "여백은 섹션 사이, 밀도는 섹션 안".

## 다크 모드

현재 스코프 밖. `prefers-color-scheme` 대응 코드를 새로 추가하지 않는다 (아이보리 라이트 톤이 브랜드 아이덴티티).

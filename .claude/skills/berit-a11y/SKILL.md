---
name: berit-a11y
description: 베릿 웹사이트 접근성(a11y) 기준 — 시맨틱 마크업, 색 대비, 키보드 내비게이션, 모션 감소, 검증 절차. 베릿 웹사이트의 페이지/컴포넌트를 만들거나 수정할 때, 그리고 접근성 검증·QA를 수행할 때 반드시 이 스킬을 적용할 것. "접근성", "a11y", "가독성", "웹 표준" 관련 요청 시에도 사용.
---

# 베릿 접근성 기준

접근성은 후처리 옵션이 아니라 작성 시점의 기본값이다. WCAG 2.1 AA를 목표로 한다.

## 마크업

- 페이지당 `<h1>` 정확히 1개, 헤딩 레벨 건너뛰기 금지 (h1→h2→h3).
- 랜드마크: `<header>`, `<nav>`, `<main>`, `<footer>`. `<main>`은 페이지당 1개.
- 본문 첫 요소로 스킵 링크 제공: `<a href="#main" class="sr-only focus:not-sr-only ...">본문으로 건너뛰기</a>`.
- 목록은 `<ul>/<ol>`, 링크는 `<Link>/<a>`(이동), 동작은 `<button>`. div에 onClick 금지.
- 이미지: 의미 있는 이미지는 구체적 `alt`, 장식 이미지는 `alt=""` + `aria-hidden`. 이모지 장식은 `aria-hidden="true"`.
- 현재 페이지 네비 링크에 `aria-current="page"`.
- `html lang="ko"` 유지.

## 색 대비 (핵심 함정)

- 본문 텍스트 4.5:1 이상, 24px+ 볼드 대형 텍스트 3:1 이상.
- 브랜드 파스텔 컬러(`--accent` #EF9877, `--secondary`, `--growth`, `--stamp`)는 **텍스트 색으로 금지**. 배경/장식으로만 쓰고 그 위 텍스트는 `--ink`.
- `--primary`(#5B7F8A) 배경 + 흰 텍스트는 대비 ~4.0:1 — 버튼처럼 큰 볼드 텍스트만 허용, 작은 본문 금지.
- 확인 명령(대비 계산): 두 hex의 상대 휘도로 (L1+0.05)/(L2+0.05) 계산. 눈대중으로 판단하지 않는다.

## 인터랙션

- 모든 인터랙티브 요소에 `focus-visible` 스타일(2px 링 + offset). `outline-none`만 걸고 대체 스타일 없는 코드는 버그다.
- 터치 타깃 최소 44×44px.
- 키보드만으로 모든 링크/버튼 도달·작동 가능해야 한다. 행 전체 클릭 패턴은 행을 `<Link>`로 감싸는 방식으로 (중첩 인터랙티브 금지).

## 모션

- Lenis 스무스 스크롤, framer-motion 등 장식 모션은 `prefers-reduced-motion: reduce`에서 꺼야 한다:
  ```ts
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) { /* Lenis 초기화 */ }
  ```
- CSS 애니메이션은 `@media (prefers-reduced-motion: reduce) { animation: none; transition: none; }` 처리.
- 자동 재생·무한 루프 애니메이션은 정지 수단이 없으면 넣지 않는다.

## 텍스트

- 본문 16px 미만 금지, line-height 1.6 이상, 한글 헤드라인 `break-keep`.
- 링크 텍스트는 맥락 없이도 목적지를 알 수 있게 ("더 보기" 단독 금지 → "사용법 보기" + 기능명 맥락).

## QA 검증 절차

1. `npm run build` — 에러/경고 0 확인.
2. 각 페이지 소스에서 체크: h1 개수, 헤딩 순서, 랜드마크, 스킵 링크, alt, aria-current, focus-visible.
3. 대비 스팟체크: 새로 등장한 (텍스트색, 배경색) 조합을 모두 계산.
4. reduced-motion 분기 존재 확인 (Lenis, 애니메이션 라이브러리 grep).
5. 발견한 문제는 파일:라인과 함께 기록하고 직접 수정한다.

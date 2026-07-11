# 베리트(Berit) 웹사이트

커플 기도 앱 "베리트"의 공식 웹사이트 (Next.js App Router, Tailwind v4, berit.life).

## 하네스: 베리트 웹사이트 리디자인

**목표:** biblessia 스타일 구조(랜딩 + 사용 가이드 + 업데이트 소식) + 브랜드 폰트(SeoulAlrim) + WCAG AA 접근성을 갖춘 웹사이트 구축·유지.

**트리거:** 웹사이트 구조·디자인·페이지 작업 요청 시 `berit-redesign` 스킬을 사용하라. 단순 질문이나 파일 1개 미만의 자잘한 수정은 직접 응답 가능.

**변경 이력:**
| 날짜 | 변경 내용 | 대상 | 사유 |
|------|----------|------|------|
| 2026-07-12 | 초기 구성 (에이전트 3종, 스킬 4종) | 전체 | biblessia 스타일 리디자인 요청 |
| 2026-07-12 | 브랜드 표기 규칙(베리트/언약/원형 로고), 만든 사람(이나영), 후기·카운터 스펙 추가 | skills/berit-design-system, skills/berit-page-patterns | 사용자 피드백: 표기 정정 및 후기 현실화 |
| 2026-07-12 | 크래프트 원칙(AI 티 금지 — 비대칭 리듬, 브랜드 모티프 SVG, 이모지 아이콘 금지) 추가 | skills/berit-design-system | 사용자 피드백: "디자인이 너무 클로드스럽다" |
| 2026-07-12 | 검증된 패턴 추가(마커 하이라이트, masonry 후기, 카운터 통합 밴드, 좌정렬 헤딩) | skills/berit-design-system | /sc:research 리서치 결과 반영 (claudedocs/research_landing_design_20260712.md) |
| 2026-07-12 | 불필요한 박스 래핑 금지 규칙 추가, 만든 사람 카드 → 맨살 배치 + 실제 사진 아바타 | skills/berit-design-system, sections/Story.tsx | 사용자 피드백: 박스 남용이 AI 티 |

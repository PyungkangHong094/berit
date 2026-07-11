# 리서치: 따뜻한 미니멀 랜딩 디자인 패턴 (berit.life 적용용)

날짜: 2026-07-12 · 요청: 마커 하이라이트 / masonry 후기 / 카운터 레이아웃 / biblessia류 밀도 감각

## 요약 (Executive Summary)

현재 베리트 랜딩의 약점은 (1) 헤딩에 시각적 앵커가 없고, (2) 후기가 균일 3열 그리드라 밀도·생동감이 없으며, (3) 카운터가 거대한 빈 박스에 고립되어 휑하다는 것. 레퍼런스(biblessia)와 웹 리서치의 공통 결론은: **좌정렬 에디토리얼 헤딩 + 마커 하이라이트 앵커, CSS columns 기반 masonry 후기(6개+, 길이 다양), 카운터는 고립된 섹션이 아니라 후기와 통합된 컴팩트 밴드**로 푸는 것.

## 1. 마커/형광펜 하이라이트 (신뢰도: 높음)

- 표준 구현: 인라인 `<mark>` 또는 span에 `background-image: linear-gradient(...)`를 깔고 `background-size`/`background-position`으로 두께·위치 제어. 텍스트 아래쪽 40~60%만 덮으면 "형광펜 밑줄", 전체를 덮으면 "하이라이트".
- 실제 펜 느낌: 그라데이션 양끝 투명도를 낮춰(진→연) 잉크가 빠지는 질감. `border-radius` 소량, `padding: 0 0.15em`.
- 스크롤/호버 시 `background-size 0%→100%` 트랜지션으로 "칠해지는" 연출 가능 (reduced-motion 분기 필수).
- 남용 금지: 헤딩당 강조 1곳. biblessia도 "생생한 후기" 한 구절에만 사용.

## 2. Masonry 후기 카드 (신뢰도: 높음)

- 구현: `columns-1 sm:columns-2 lg:columns-3` + 카드에 `break-inside-avoid` + `mb-{gap}`. 그리드가 아니라 columns를 쓰면 길이가 다른 카드가 Pinterest식으로 쌓여 "진짜 후기" 느낌.
- 6~12개가 사회적 증거로 압도적 효과 (Notion, Linear, Webflow 패턴). 길이를 의도적으로 섞을 것 — 2줄짜리와 10줄짜리 공존이 핵심.
- 카드: 흰 배경(#FFF) + 1px 보더 + rounded-xl — 아이보리 배경 위에서 카드가 뜬다. 그림자보다 보더가 깔끔.
- 헤더: 40px 아바타(일러스트/이니셜) + 이름 + 출처(교회명/앱스토어 리뷰). 본문 15px 내외, line-height 1.7, 좌정렬.
- 모바일(375px)에서 1열 붕괴 확인 필수.

## 3. 통계 카운터 (신뢰도: 높음)

- 카운터를 독립 빈 박스로 두지 말 것 — 현재 베리트의 문제. 리서치 결론: 숫자 통계는 **섹션 구분 밴드**로 쓰거나 **후기 섹션 헤더에 통합**하는 것이 효과적.
- "40,000+ 사업자가 함께합니다"처럼 정확한 숫자 + 맥락 문장 + (가능하면) CTA 인접 배치. CTA 아래 사회적 증거 배치가 전환율 최고 포지션.
- 베리트 적용: 후기 헤딩 바로 아래 "지금 베리트와 함께 기도하는 사람들 **273명**"을 한 줄 밴드로 넣거나, 후기 masonry 마지막에 컴팩트 stat 카드로 삽입. 거대 surface 박스 삭제.

## 4. biblessia류 밀도·타이포 감각 (스크린샷 분석)

- 헤딩: **좌정렬**, 2줄, ExtraBold, 두 번째 줄 핵심구에만 마커 하이라이트. 중앙정렬 반복은 밀도를 죽인다.
- 섹션 안 밀도는 높게(카드 텍스트 풍부), 섹션 간 여백은 넉넉하게 — "여백은 섹션 사이, 밀도는 섹션 안".
- 아바타는 사진이 아니라 컬러 일러스트/이니셜 — 수제 느낌 + 개인정보 부담 없음.

## 권고 (구현 지시)

1. Reviews: 균일 3열 → `columns` masonry, 흰 카드+보더, 후기 길이 다양화, 아바타 원형 일러스트/이니셜 배경색 순환.
2. Reviews 헤딩: 좌정렬 2줄 + "생생한 이야기" 구절에 accent 마커 하이라이트.
3. 카운터: 독립 박스 삭제 → 후기 헤딩 아래 한 줄 통합 밴드(사과 아이콘 소형 + 숫자 강조).
4. 마커 하이라이트 유틸을 디자인 시스템에 추가, Hero 헤드라인 강조어에도 동일 적용(손그림 밑줄 대체 또는 병용 택1).

## 출처

- [Alvaro Trigo — How to Highlight Text in CSS](https://alvarotrigo.com/blog/css-highlight-text/)
- [max.hn — Highlighter marker effect in CSS](https://max.hn/blog/how-to-create-a-highlighter-marker-effect-in-css)
- [DEV — Marker Highlight Effect in CSS](https://dev.to/shubhamjain/how-to-create-marker-highlight-effect-in-css-be4)
- [MDN — Masonry layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
- [The Hangline — Testimonial Section Layouts](https://www.thehangline.com/how-to-design-a-testimonial-section-that-builds-trust-layouts-and-examples/)
- [shadcn — Masonry Testimonials Block](https://www.shadcn.io/blocks/testimonials-masonry)
- [MailerLite — Social Proof Examples](https://www.mailerlite.com/blog/social-proof-examples-for-landing-pages)
- [WiserNotify — Landing Page Social Proof](https://wisernotify.com/blog/landing-page-social-proof/)
- [ProveSrc — Social Proof Best Practices](https://provesrc.com/blog/social-proof-landing-pages-best-practices/)

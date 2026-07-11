---
name: berit-page-patterns
description: 베릿 웹사이트의 페이지 구조 스펙 — biblessia.com 레퍼런스 기반의 헤더/네비게이션, 랜딩 섹션 순서, 사용 가이드(/guide) 목록 페이지, 업데이트 소식(/updates) 페이지, 푸터 레이아웃. 베릿 웹사이트의 페이지를 새로 만들거나 랜딩/가이드/업데이트 페이지를 수정·리디자인할 때 반드시 이 스킬을 따를 것.
---

# 베릿 페이지 패턴 (biblessia 레퍼런스 스펙)

레퍼런스: biblessia.com 스타일. 원본 스크린샷이 필요하면 다음을 Read 한다:
- 랜딩 전체: `/Users/pyungkanghong/Downloads/screencapture-biblessia-2026-07-12-01_11_13.png`
- 사용 가이드 목록: `/Users/pyungkanghong/.claude/image-cache/6ca1e112-9af7-46b8-a57d-f4979545b019/1.png`
- 업데이트 소식 목록: `/Users/pyungkanghong/.claude/image-cache/6ca1e112-9af7-46b8-a57d-f4979545b019/2.png`

레이아웃 구조와 정보 위계만 가져오고, 콘텐츠(문구·기능명)는 전부 베릿(커플 기도 앱)의 것을 쓴다. biblessia 문구를 복사하지 않는다.

## 공용 셸

### SiteHeader (`src/components/SiteHeader.tsx`)
- 전 페이지 공통. `<header>` 안에 `<nav aria-label="주요 메뉴">`.
- 좌측: 로고(홈 링크, 로고 이미지 + "베릿" 워드마크). 우측: "사용 가이드"(/guide), "업데이트 소식"(/updates) 텍스트 링크.
- sticky top, 배경 `--background` + 하단 얇은 보더. 높이 ~64px.
- 현재 페이지 링크에 `aria-current="page"` + 시각적 구분(굵기/밑줄).
- 모바일: 링크 2개뿐이므로 햄버거 없이 그대로 노출(크기 축소).

### SiteFooter (`src/components/SiteFooter.tsx`)
- 좌측 블록: 로고 + "베릿" + 한 줄 슬로건.
- 우측 3컬럼(모바일 1컬럼): **핵심 기능들**(랜딩 섹션 앵커), **더 알아보기**(사용 가이드, 업데이트 소식), **고객지원**(연락하기 /support, 개인정보 처리방침 /privacy, 이용약관 /terms).
- 컬럼 제목은 h2 + 시맨틱 리스트(`<ul>`).

### ArticleListItem (`src/components/ArticleListItem.tsx`)
가이드/업데이트 목록이 공유하는 행 컴포넌트:
- 좌측 텍스트 블록: (NEW 뱃지) → 제목(h3) → 설명 1~2줄 → 메타 라인
- 우측: 정사각 썸네일(96~128px, rounded-2xl, `--surface` 배경)
- 행 사이 얇은 구분선. 최대 폭 ~640px 중앙 정렬 컬럼.
- props: `title, description, meta, imageSrc, imageAlt, isNew?, href?`
- href가 있으면 행 전체를 하나의 `<Link>`로 감싼다(중첩 링크 금지).

## 랜딩 (`/`) 섹션 순서

1. **Hero**: 중앙 일러스트(주변에 손글씨 라벨 — MemomentKkukkukk + 앱 핵심 기능명) → h1 헤드라인(핵심 가치, 한 단어를 accent 계열로 강조) → CTA 버튼 2개(앱 설치하기 = /app, 보조 CTA).
2. **스토리**: 2컬럼 텍스트(모바일 1컬럼). 문제 공감 → 베리트의 답. 우측 하단에 만든 사람 소개 카드 — **이나영 / 베리트 기획자 · 작가** (이메일 없음 — 표기 금지).
3. **사용법 3단계**: 좌측 번호 리스트(1·2·3 스텝, 각 제목+설명), 우측 앱 스크린샷/이미지 카드.
4. **기능 그리드**: h2 → 2컬럼 카드 그리드(모바일 1컬럼). 카드 = `--surface` 배경, 아이콘, 기능명(h3), 설명, "사용법 보기 >" 링크(→ /guide). 준비 중 기능은 링크 대신 예정 라벨.
5. **후기**: h2("베리트를 경험한 이야기") → 카드 5~6개(3컬럼, 모바일 1컬럼). 아바타/이니셜 + 이름(닉네임/이니셜 혼합) + 출처 + 후기 본문. 톤은 담백·구체적(장거리 연애, 결혼 준비 등 상황 명시), 과장 광고 톤 금지.
6. **커뮤니티 카운터**: "베리트와 함께 기도하는 사람들 N명" 통계. 수치는 상수 하드코딩 + `// TODO: DB 연동` 주석 (추후 DB 연결 예정).
7. **SiteFooter**.

기존 `src/components/sections/`의 콘텐츠(문구, 데이터)는 최대한 재활용하되 구조를 위 순서로 재편한다. 기존 Problem/Challenge/CTA 섹션의 내용은 스토리/기능 그리드에 흡수시킨다.

## 사용 가이드 (`/guide`)

- 콘텐츠 데이터: `src/data/guides.ts` — `{ slug, title, description, readingMinutes, imageSrc, imageAlt, isNew }[]`
- 페이지: h1(시각적으로는 숨겨도 됨 — `sr-only` 허용) + ArticleListItem 목록. 메타 라인: "읽는 시간 N분".
- 가이드 주제는 베릿 앱의 실제 기능 기준으로 작성 (예: 커플 연결하기, 함께 기도하기, 말씀 묵상, 감사 일기, 믿음 나무 키우기 등 — 앱 소스 `berit_all/berit_app/lib/screens/` 참조 가능).
- 상세 페이지는 현재 스코프 밖 — 목록만. href 없이 렌더링하고, 추후 `/guide/[slug]` 추가 여지를 데이터 구조(slug)로 남긴다.

## 업데이트 소식 (`/updates`)

- 콘텐츠 데이터: `src/data/updates.ts` — `{ version, title, description, imageSrc, imageAlt, isNew }[]` (최신순 정렬)
- 제목 형식: "기능명 : 사용자 가치 한 줄" (예: "기도 시간 : 매일 함께 기도할 시간을 정해보세요").
- 메타 라인: "N.N.N 버전 이상". 최신 항목에만 NEW 뱃지.
- 실제 버전 이력은 앱 `pubspec.yaml`(현재 1.0.6)과 git 이력에서 유추하되, 확인 불가한 버전은 지어내지 말고 항목 수를 줄인다.

## 썸네일 일러스트

biblessia는 흑백 손그림 일러스트를 쓴다. 베릿은 저작권 있는 일러스트가 없으므로:
1. `public/` 아래 기존 이미지 자산을 먼저 탐색해 재활용
2. 없으면 이모지+`--surface` 배경의 플레이스홀더 카드(또는 인라인 SVG 아이콘)로 대체하고, 교체 지점을 주석으로 남긴다
3. 외부 이미지 핫링크 금지

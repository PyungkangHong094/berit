# Workflow: `/app` Smart Link with Platform Detection

**Domain**: berit.life
**Route**: `https://berit.life/app`
**Goal**: 단일 공유 가능한 링크에서 사용자 디바이스에 따라 자동으로 적절한 앱스토어로 보내고, 링크 미리보기(KakaoTalk/Slack/Twitter 등)에는 풍부한 메타 정보를 표시한다.

---

## 1. Requirements Summary

### Functional
- `https://berit.life/app` 접속 시:
  - **iOS** (iPhone/iPad/iPod) → `https://apps.apple.com/kr/app/berit/id6760607995`
  - **Android** → `https://play.google.com/store/apps/details?id=com.berit.app&pcampaignid=web_share`
  - **Desktop** (Mac/Windows/Linux) → 베리트 다운로드 안내 페이지 (양쪽 버튼 노출)
  - **Bots/Crawlers** → 리다이렉트 없이 메타태그가 포함된 HTML 반환 (링크 미리보기용)

### Non-Functional
- **No flash redirect**: 모바일 사용자는 흰 화면 깜빡임 없이 즉시 스토어로 이동
- **SEO/Share friendly**: OG, Twitter Card, Apple Smart App Banner 메타태그 모두 포함
- **Cookie/Tracking 없음**: GDPR/PIPA 이슈 회피, 단순 UA 감지만 사용
- **Edge-friendly**: Vercel/Netlify edge runtime 호환

---

## 2. Architecture Decision

### Selected Approach: **Server-Side UA Routing (Hybrid)**

```
Request → Next.js Route Handler (Server Component)
            │
            ├─ Bot UA detected?     → Render HTML with meta tags (no redirect)
            ├─ iOS UA detected?     → 307 Redirect → App Store
            ├─ Android UA detected? → 307 Redirect → Google Play
            └─ Other (Desktop)      → Render landing page with both buttons + meta tags
```

### Why this approach

| Approach | Pros | Cons | Verdict |
|----------|------|------|---------|
| Pure client redirect | Simple, meta tags always render | Flash, slow on mobile | Rejected |
| Pure server redirect | Fastest, no flash | Bots can't read meta tags | Rejected |
| **Hybrid (server with bot detection)** | **No flash for users + meta for bots + works on edge** | Slightly more code | **Selected** |
| Middleware-based | Centralized | Harder to debug, less explicit | Rejected |

### Rationale
- 카카오톡/슬랙/트위터에서 공유될 때 미리보기가 제대로 떠야 클릭률이 올라감 → 봇은 리다이렉트하면 안 됨
- 모바일 사용자는 홈에서 깜빡임 없이 바로 스토어로 가야 UX가 자연스러움 → 서버 리다이렉트 필수
- 데스크탑 사용자는 어쩌다 잘못 들어왔을 때 둘 중 선택 가능해야 함

---

## 3. Implementation Phases

### Phase 1: Smart Link Page (Server Component)
**Files**:
- `src/app/app/page.tsx` (new) — 서버 컴포넌트, UA 감지 + 분기
- `src/lib/detect-platform.ts` (new) — UA 파싱 유틸리티 (서버용)

**Logic**:
```ts
// pseudo-code
export default async function AppPage() {
  const ua = (await headers()).get('user-agent') ?? '';
  const platform = detectPlatform(ua);

  if (platform === 'ios')     redirect(APPLE_STORE_URL);
  if (platform === 'android') redirect(GOOGLE_PLAY_URL);

  // bot or desktop → render page with meta tags + download buttons
  return <AppLandingPage />;
}
```

**`detectPlatform` rules** (priority order):
1. **Bot patterns** → return `'bot'` (no redirect):
   - `facebookexternalhit`, `Twitterbot`, `Slackbot`, `KAKAOTALK`, `LinkedInBot`,
     `WhatsApp`, `TelegramBot`, `Discordbot`, `Googlebot`, `bingbot`
2. **iOS**: `/iPhone|iPad|iPod/i` → `'ios'`
3. **Android**: `/Android/i` → `'android'`
4. **Default**: `'desktop'`

**Edge cases**:
- iPad with desktop-mode Safari (UA reports `Macintosh`) — accept the false negative; user gets the desktop page with both buttons (acceptable)
- In-app browsers (KakaoTalk, Instagram) — still detected as iOS/Android because UA contains the OS string
- Empty UA → treat as `'desktop'` (safer default)

**Acceptance**:
- iOS Safari → instant redirect to App Store (verify via Network tab: 307 status)
- Android Chrome → instant redirect to Google Play
- Desktop browser → page renders with both download buttons
- `curl -A "facebookexternalhit/1.1" https://berit.life/app` → returns full HTML, no redirect

---

### Phase 2: Page-Level Metadata
**File**: `src/app/app/page.tsx` exports `metadata`

**Required tags**:
```ts
export const metadata: Metadata = {
  title: "베리트 앱 다운로드 - Berit",
  description: "지금 바로 베리트를 다운로드하세요. iOS와 Android 모두 지원됩니다.",
  alternates: { canonical: 'https://berit.life/app' },
  openGraph: {
    title: "베리트 앱 다운로드",
    description: "하나님과의 약속, 매일의 기도와 묵상.",
    url: 'https://berit.life/app',
    siteName: '베리트 Berit',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: '베리트' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "베리트 앱 다운로드",
    description: "하나님과의 약속, 매일의 기도와 묵상.",
    images: ['/og-image.jpg'],
  },
  // Apple Smart App Banner — iOS Safari에서 상단 배너 노출
  other: {
    'apple-itunes-app': 'app-id=6760607995',
  },
};
```

**Note**: `redirect()`가 호출되면 metadata는 무시됨 (응답 본문이 없으니까). 봇/데스크탑 분기에서만 메타가 의미 있음.

**Acceptance**:
- View source on `/app` (desktop) → `<meta property="og:title">` 존재
- Share on KakaoTalk → 미리보기 카드에 og-image, og:title 표시
- iOS Safari로 베리트가 설치되지 않은 경우 → 화면 상단 "App에서 보기" 배너

---

### Phase 3: Desktop Landing UI
**File**: `src/app/app/page.tsx` (the JSX returned for non-mobile, non-bot)

**Structure** (간단하게):
- 작은 페이지: 로고 + 한 줄 설명 + `<DownloadButtons theme="light" />` (이미 존재)
- 푸터: 메인 페이지로 돌아가는 링크
- **재사용 우선**: 새 컴포넌트 만들지 말고 기존 `DownloadButtons` 그대로 사용

```tsx
return (
  <main className="min-h-screen flex flex-col items-center justify-center p-6">
    <Image src="/berit-logo.png" alt="베리트" width={96} height={96} />
    <h1 className="text-3xl font-bold mt-6">베리트 앱 다운로드</h1>
    <p className="text-foreground/70 mt-3 text-center">
      하나님과의 약속, 매일의 기도와 묵상.
    </p>
    <div className="mt-8">
      <DownloadButtons theme="light" />
    </div>
    <Link href="/" className="mt-12 text-sm text-foreground/50">
      ← 베리트 홈으로
    </Link>
  </main>
);
```

**Acceptance**:
- Desktop 뷰포트에서 페이지가 깔끔하게 렌더링
- 두 다운로드 버튼이 클릭 가능, 정상 URL로 이동
- 모바일 뷰포트(개발자도구 에뮬레이션)는 서버에서 리다이렉트되므로 이 화면 안 보임

---

### Phase 4: Verification & Test Plan

#### Manual Tests
| Step | Tool | Expected |
|------|------|----------|
| 1 | iPhone Safari → `berit.life/app` | App Store 앱이 열리거나 웹 App Store로 이동 |
| 2 | Android Chrome → `berit.life/app` | Play Store 앱이 열리거나 웹 Play Store로 이동 |
| 3 | Desktop Chrome → `berit.life/app` | 데스크탑 랜딩 페이지 렌더링, 두 버튼 노출 |
| 4 | `curl -I -A "Mozilla/5.0 (iPhone)..." https://berit.life/app` | `HTTP/1.1 307` + `Location: https://apps.apple.com/...` |
| 5 | `curl -I -A "Mozilla/5.0 (Linux; Android)..." https://berit.life/app` | `HTTP/1.1 307` + `Location: https://play.google.com/...` |
| 6 | `curl -A "facebookexternalhit/1.1" https://berit.life/app` | `HTTP/1.1 200` + HTML body containing `<meta property="og:`  |
| 7 | KakaoTalk에 링크 공유 | 미리보기 카드에 og 이미지 + 제목 |
| 8 | Twitter/X에 링크 게시 | summary_large_image 카드 노출 |

#### Validators
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fberit.life%2Fapp
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator (deprecated, but Twitter 자체에서 미리보기로 확인)
- **카카오 OG 디버거**: https://developers.kakao.com/tool/debugger/sharing
- **Google Rich Results**: https://search.google.com/test/rich-results

---

## 4. File Manifest

| File | Action | Purpose |
|------|--------|---------|
| `src/app/app/page.tsx` | **Create** | 스마트 링크 라우트 (서버 컴포넌트, UA 분기 + 메타) |
| `src/lib/detect-platform.ts` | **Create** | 서버용 UA 파싱 유틸 (`'ios' \| 'android' \| 'bot' \| 'desktop'`) |
| `src/components/DownloadButtons.tsx` | **Reuse** | 데스크탑 랜딩에서 재사용, 변경 없음 |

**No changes to**:
- `src/app/layout.tsx` (전역 메타는 그대로, `/app` 페이지가 자체 메타 export)
- `src/components/sections/Hero.tsx`, `CTA.tsx` (이미 다운로드 버튼 포함)
- `next.config.ts`, `middleware.ts` (불필요)

---

## 5. Risk & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| iPad Pro에서 desktop UA 보고 → 데스크탑 페이지 노출 | Medium | Low | 데스크탑 페이지에 양쪽 버튼이 있으니 사용자가 직접 선택 가능. 허용 가능한 폴백. |
| 새 봇 UA가 등장 → 메타 미반영 | Low | Low | 화이트리스트 기반이라 미감지 시 desktop 분기로 빠지고 메타 정상 노출 (안전한 기본값) |
| 카카오톡 인앱 브라우저에서 외부 스토어 못 열림 | Medium | Medium | UA에 `Android`/`iPhone` 포함되므로 정상 리다이렉트. 카카오 자체의 외부 링크 처리에 위임 |
| 사용자가 스토어에서 뒤로가기 → 빈 페이지 | Low | Low | 307 redirect는 history에 남지 않아 정상적으로 이전 페이지로 복귀 |
| Vercel edge cache가 UA 분기 결과를 캐시 | Medium | High | 페이지에 `export const dynamic = 'force-dynamic'` 또는 `Vary: User-Agent` 헤더 명시 |

**Critical**: `dynamic = 'force-dynamic'` 또는 `Vary` 헤더 필수. UA마다 응답이 다르므로 캐시되면 모든 사용자에게 같은 결과가 나갈 수 있음.

---

## 6. Execution Order (for `/sc:implement`)

1. **`src/lib/detect-platform.ts`** 작성 (15줄 정도, 봇 패턴 + iOS + Android)
2. **`src/app/app/page.tsx`** 작성 (서버 컴포넌트, headers + redirect + metadata + JSX)
3. 로컬 dev에서 수동 검증:
   - User-Agent 변경하면서 테스트 (Chrome DevTools → Network conditions)
   - `curl` 으로 봇 UA 시뮬레이션
4. Production 배포 후 phase 4의 외부 validator로 메타 검증
5. KakaoTalk 채팅에 직접 링크 보내서 미리보기 확인

**Estimated effort**: 30-45분 (코드 작성 ~15분, 테스트 ~15-30분)

---

## 7. Out of Scope

- Branch.io / Firebase Dynamic Links 같은 deferred deep link
- 앱 설치 여부 감지 (Universal Links / App Links 미설정 상태에서는 불가)
- 사용자 추적 (analytics, conversion pixel)
- A/B 테스트
- Email confirmation flow

이런 게 필요해지면 별도 워크플로우로 다시 검토.

---

## Next Step

```
/sc:implement claudedocs/workflow_app_smart_link.md
```

또는 그냥 "이대로 만들어" 라고 하시면 위 순서대로 구현합니다.

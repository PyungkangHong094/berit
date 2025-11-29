# Berit - 하나님과의 약속 (God's Promise)

## 📖 프로젝트 소개
**Berit(베리트)**는 히브리어로 '언약'을 의미합니다.  
이 프로젝트는 바쁜 일상 속에서도 하나님과의 약속을 기억하고, 매일의 말씀과 기도로 영적 성장을 돕기 위해 기획된 영성 관리 플랫폼의 랜딩 페이지입니다.

사용자에게 평안과 거룩한 습관을 제안하며, 프리미엄하고 정적인 디자인을 통해 깊은 묵상의 경험을 시각적으로 전달합니다.

## 🎯 프로젝트 목적
- **영적 연결 회복**: 사용자가 하나님과의 언약 관계를 기억하고 유지하도록 돕습니다.
- **거룩한 습관 형성**: 매일의 말씀 묵상과 기도를 통해 지속 가능한 신앙 습관을 만듭니다.
- **공동체 형성**: 믿음의 동역자들과 함께 기도 제목을 나누고 서로를 격려하는 공간을 제공합니다.

## 🛠 기술 스택 (Tech Stack)
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Smooth Scroll**: [Lenis](https://lenis.studio/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 폴더 구조 (File Tree)
```bash
berit/
├── public/              # 정적 파일 (Favicon, OG Image 등)
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── globals.css  # 전역 스타일 및 테마 변수
│   │   ├── layout.tsx   # 루트 레이아웃 (메타데이터 포함)
│   │   └── page.tsx     # 메인 랜딩 페이지 (Lenis 스크롤 적용)
│   └── components/      # UI 컴포넌트
│       └── sections/    # 랜딩 페이지 섹션
│           ├── Hero.tsx        # 메인 히어로 (브랜딩 & 메시지)
│           ├── Problem.tsx     # 문제 제기 (영적 갈급함)
│           ├── Features.tsx    # 솔루션 및 기능 소개
│           ├── SocialProof.tsx # 사용자 후기 및 증거
│           ├── CTA.tsx         # 행동 유도 (앱 다운로드/시작)
│           └── Footer.tsx      # 푸터 (저작권 및 링크)
├── package.json         # 프로젝트 의존성 및 스크립트
└── README.md            # 프로젝트 문서
```

## 🚀 실행 방법 (Getting Started)

### 1. 프로젝트 클론 (Clone)
```bash
git clone https://github.com/PyungkangHong094/berit.git
cd berit
```

### 2. 의존성 설치 (Install Dependencies)
```bash
npm install
```

### 3. 개발 서버 실행 (Run Dev Server)
```bash
npm run dev
```
브라우저 주소창에 [http://localhost:3000](http://localhost:3000)을 입력하여 확인합니다.

### 4. 빌드 및 프로덕션 실행 (Build & Start)
```bash
npm run build
npm start
```

## ✨ 주요 기능 (Features)
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 등 모든 기기에서 최적화된 화면을 제공합니다.
- **고급 애니메이션**: GSAP를 활용한 스크롤 기반 인터랙션과 부드러운 모션을 구현했습니다.
- **부드러운 스크롤**: Lenis를 적용하여 웹사이트의 스크롤 경험을 고급스럽게 개선했습니다.
- **SEO 최적화**: 메타 태그 및 Open Graph 이미지를 설정하여 검색 엔진 및 소셜 공유에 최적화되었습니다.

---
© 2024 Berit. All rights reserved.

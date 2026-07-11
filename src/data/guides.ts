export interface Guide {
  /** 상세 페이지(/guide/[slug]) 확장 여지를 위한 식별자. 현재는 링크 미사용 */
  slug: string;
  /** 가이드 제목 */
  title: string;
  /** 1~2줄 설명 */
  description: string;
  /** 읽는 시간(분) */
  readingMinutes: number;
  /** 썸네일 이미지 경로. 없으면 emoji 폴백 */
  imageSrc?: string;
  /** 썸네일 대체 텍스트 */
  imageAlt?: string;
  /** 이미지 자산이 없을 때 사용할 브랜드 모티프 썸네일 키 (motifs.tsx의 MotifThumb) */
  motif: string;
  /** 최신/추천 항목 표시 */
  isNew?: boolean;
}

// 콘텐츠 출처: 베리트(커플 기도 앱)의 실제 기능.
// sections/Features.tsx, HowItWorks.tsx 문구를 재활용하고, 기능명은 앱 소스
// berit_all/berit_app/lib/screens/ 구조(onboarding, prayer, calendar, archive 등)에 맞춰 정리.
// 썸네일 일러스트 자산이 없어 emoji 폴백을 사용한다. 이미지 준비 시 imageSrc로 교체.
export const guides: Guide[] = [
  {
    slug: "connect-partner",
    title: "함께 기도할 동행 연결하기",
    description:
      "초대 코드로 파트너와 연결하면 서로의 기도를 확인하며 함께 동행할 수 있어요. 커플, 부부, 신앙의 벗과 언약의 여정을 시작하는 첫걸음입니다.",
    readingMinutes: 4,
    motif: "connect",
    isNew: true,
  },
  {
    slug: "daily-prayer",
    title: "매일의 말씀 묵상과 기도 드리기",
    description:
      "오늘의 말씀 카드로 하루를 시작하고, 감사·인도하심·평안·중보기도·사명과 비전 5가지 주제로 기도를 드려보세요. 매일 풍성한 기도 시간을 만들 수 있어요.",
    readingMinutes: 5,
    motif: "prayer",
  },
  {
    slug: "prayer-challenge",
    title: "기도 챌린지 시작하기",
    description:
      "21일, 30일, 50일, 100일 챌린지에 도전해 보세요. 매일 성경 말씀과 기도문이 제공되어 꾸준한 기도 습관을 함께 만들어 갑니다.",
    readingMinutes: 4,
    motif: "challenge",
  },
  {
    slug: "faith-tree",
    title: "믿음 나무 키우기",
    description:
      "기도할 때마다 나무가 자라나요. 새싹에서 무성한 나무로, 일주일간 기도한 만큼 열매가 맺히며 나의 영적 성장을 눈으로 확인할 수 있습니다.",
    readingMinutes: 3,
    motif: "tree",
  },
  {
    slug: "companion-calendar",
    title: "동행 캘린더로 기도 여정 돌아보기",
    description:
      "기도한 날은 하트로, 묵상을 기록한 날은 점으로 표시돼요. 한 달, 일 년의 기도 여정을 한눈에 돌아보며 하나님의 신실하심을 기억하세요.",
    readingMinutes: 4,
    motif: "calendar",
  },
  {
    slug: "meditation-music",
    title: "평안한 묵상 음악과 함께하기",
    description:
      "기도 시간에 잔잔한 피아노 찬양이 자동으로 흘러나옵니다. 익숙한 찬양 선율이 마음을 고요하게 이끌어 묵상에 집중하도록 도와줘요.",
    readingMinutes: 3,
    motif: "music",
  },
];

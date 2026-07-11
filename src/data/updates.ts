// 베리트 업데이트 소식 데이터.
// 버전·기능은 앱 저장소(berit_all/berit_app)의 실제 릴리스 이력에서 확인한 값만 사용한다.
// - 1.0.6 (pubspec 현재 버전): 마스코트 "베리트이" 등장 애니메이션 + 기도 주제 태그 검색
// - 1.0.5: 짝꿍 콕 찌르기(인앱+FCM 푸시), 이달의 추천
// - 1.0.4: 묵상 알림 요일/시간 개인 설정
// 확인 불가한 버전/기능은 추가하지 않는다. 썸네일은 브랜드 모티프 SVG(motif 키)로 렌더한다.

export interface UpdateItem {
  /** 릴리스 버전 (예: "1.0.6") — 최신순 정렬 기준 */
  version: string;
  /** "기능명 : 사용자 가치 한 줄" 형식 */
  title: string;
  /** 기능 설명 1~2줄 */
  description: string;
  /** 썸네일 브랜드 모티프 키 (motifs.tsx의 MotifThumb) */
  motif: string;
  /** 최신 항목에만 true */
  isNew?: boolean;
}

/** 최신순으로 정렬된 업데이트 목록 */
export const updates: UpdateItem[] = [
  {
    version: "1.0.6",
    title: "베리트이 : 나무 아래를 거니는 짝꿍 마스코트를 만나보세요",
    description:
      "온보딩에서 총총총 걸어 들어와 인사하고, 홈 화면 나무 아래를 어슬렁어슬렁 산책하는 베리트이를 톡 건드리면 귀를 쫑긋 세워요.",
    motif: "sheep",
    isNew: true,
  },
  {
    version: "1.0.6",
    title: "기도 검색 : 주제 태그로 기도제목을 빠르게 찾아요",
    description:
      "쌓여가는 기도제목을 제목과 주제 태그로 검색해, 함께 기도하고 싶은 주제를 다시 꺼내볼 수 있어요.",
    motif: "search",
  },
  {
    version: "1.0.5",
    title: "콕 찌르기 : 짝꿍에게 함께 기도하자고 살짝 알려요",
    description:
      "함께 기도하고 싶은 순간, 짝꿍을 콕 찔러 인앱 알림과 푸시로 마음을 전해요. 서로를 기도로 챙기는 작은 신호예요.",
    motif: "poke",
  },
  {
    version: "1.0.5",
    title: "이달의 추천 : 매달 새로운 함께할 거리를 받아요",
    description:
      "버킷리스트와 데이트 아이디어를 매달 카드로 만나고, 둘이 하나씩 담아 완주하는 재미를 더했어요.",
    motif: "gift",
  },
  {
    version: "1.0.4",
    title: "묵상 알림 : 원하는 요일과 시간에 기도 알림을 받아요",
    description:
      "묵상 알림을 나에게 맞는 요일과 시간으로 직접 설정해, 매일 잊지 않고 함께 기도할 시간을 정할 수 있어요.",
    motif: "bell",
  },
];

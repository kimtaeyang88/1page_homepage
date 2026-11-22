// ============================================================
//  홈페이지에 들어가는 글은 전부 이 파일에 있어요.
//  문구를 바꾸고 싶으면 이 파일만 고치면 됩니다.
// ============================================================

// 회사 기본 정보
export const company = {
  name: "일페이지",
  tagline: "온라인 광고대행사",
  phone: "010-2780-1232",
  email: "1page_ad@naver.com",
  blog: "https://blog.naver.com/1page_ad",
  // 카카오톡 채널 1:1 채팅 (누르면 채널 채팅창이 바로 열려요)
  // 채널 소개 화면으로 보내고 싶으면 끝의 /chat 을 지우세요
  kakao: "https://pf.kakao.com/_ZFxfvX/chat",
};

// 맨 위 첫 화면
export const hero = {
  title: ["손님이 찾는", "첫 페이지"], // 한 줄씩 나눠서 보여줍니다
  subtitle: "플레이스부터 블로그까지, 매장 맞춤 온라인 마케팅",
};

// 사진 + 고민 문구 영역
export const intro = {
  question: ["광고비는 계속 나가는데", "손님이 늘지 않아 고민이신가요?"],
  keywords: ["플레이스", "블로그", "리뷰"],
  description:
    "일페이지는 매장 상태를 꼼꼼히 진단하고 \n지금 우리 가게에 꼭 필요한 광고만 제안합니다 \n손님이 검색했을 때 가장 먼저 만나는 \n첫 페이지를 함께 만들어 갑니다",
};

// 서비스 안내 (사진은 public/images 폴더에 있어요)
export const services = [
  {
    title: "마케팅 컨설팅",
    text: "매장의 플레이스·리뷰·검색 현황을 진단하고 \n업종과 상권에 맞는 광고 전략을 제안합니다",
    image: "/images/service-consulting.png",
  },
  {
    title: "플레이스 마케팅",
    text: "스마트플레이스 정보를 정비하고 \n키워드와 노출 상태를 꾸준히 관리합니다",
    image: "/images/service-place.png",
  },
  {
    title: "블로그·체험단",
    text: "체험단 블로거를 모집해 \n실제 방문 후기 콘텐츠를 만들고 운영합니다",
    image: "/images/service-blog.png",
  },
];

// 일페이지와 함께하면 (icon 이름은 components/Icons.jsx 에 있는 아이콘)
export const benefits = [
  {
    icon: "cloud",
    label: "매장 맞춤 전략",
    text: "진단 결과를 바탕으로 \n우리 매장에 맞는 방법만 제안합니다",
  },
  {
    icon: "eye",
    label: "투명한 성과 보고",
    text: "어떤 작업을 했고 결과가 어땠는지 \n정기 보고서로 공유합니다",
  },
  {
    icon: "puzzle",
    label: "전담 담당자 배정",
    text: "한 명의 담당자가 \n처음부터 끝까지 책임지고 소통합니다",
  },
];

// 자주 묻는 질문
export const faqs = [
  {
    question: "왜 일페이지인가요?",
    answer:
      "광고부터 권하지 않고 매장 진단부터 시작합니다 \n지금 필요한 작업과 필요 없는 작업을 솔직하게 말씀드립니다",
  },
  {
    question: "효과는 언제부터 보이나요?",
    answer:
      "업종, 상권, 경쟁 업체 상황에 따라 달라집니다 \n진단 후 예상 일정과 진행 계획을 함께 안내해 드립니다",
  },
  {
    question: "비용은 얼마인가요?",
    answer: "매장 상황과 진행할 작업에 따라 달라집니다 \n무료 진단 후 맞춤 견적을 드립니다",
  },
];

// 모든 페이지를 감싸는 기본 틀 (글꼴, 검색엔진용 정보 설정)
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// 구글 글꼴 '본고딕(Noto Sans KR)' 불러오기
const font = Noto_Sans_KR({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

// 검색 결과·카카오톡 공유 시 보이는 제목과 설명
export const metadata = {
  title: "일페이지 | 온라인 광고대행사",
  description: "플레이스부터 블로그까지, 매장 맞춤 온라인 마케팅",
};

// 휴대폰 화면 설정
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c1238",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={font.className}>{children}</body>
    </html>
  );
}

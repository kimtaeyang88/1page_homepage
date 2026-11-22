// 메인 페이지: 위에서부터 순서대로 섹션을 쌓습니다.
// 섹션 순서를 바꾸고 싶으면 아래 줄 순서만 바꾸면 돼요.
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import CallBar from "@/components/CallBar";
import StackScroll from "@/components/StackScroll";

export default function Home() {
  return (
    <main>
      {/* 화면 한 장씩 겹쳐 올라오는 효과 */}
      <StackScroll>
        <Hero />
        <Intro />
        <Services />
        <Benefits />
        <Faq />
        <Contact />
      </StackScroll>
      <CallBar />
    </main>
  );
}

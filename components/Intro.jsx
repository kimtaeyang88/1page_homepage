// 팀 사진 + "광고비는 계속 나가는데..." 고민 문구
import Image from "next/image";
import { intro } from "@/app/data";

export default function Intro() {
  return (
    <section className="section">
      <div className="container intro">
        <Image
          className="intro-photo"
          src="/images/team.png"
          alt="일페이지 팀이 회의하는 모습"
          width={560}
          height={530}
        />

        <div className="intro-text">
          <h2 className="intro-question">
            {intro.question.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>

          <ul className="intro-keywords">
            {intro.keywords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>

          <p className="intro-description">{intro.description}</p>
        </div>
      </div>
    </section>
  );
}

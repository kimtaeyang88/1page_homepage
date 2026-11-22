// 맨 위 첫 화면: 로고 + 큰 제목 + 한 줄 소개
import { company, hero } from "@/app/data";
import { Logo } from "./Icons";
import Wave from "./Wave";

export default function Hero() {
  return (
    <section className="hero">
      <Wave />

      <div className="container">
        {/* 로고 */}
        <div className="logo">
          <Logo />
          <div className="logo-text">
            <p className="logo-name">{company.name}</p>
            {/* 글자를 한 자씩 나눠서 '일페이지' 너비에 고르게 펼침 */}
            <p className="logo-tagline" aria-label={company.tagline}>
              {Array.from(company.tagline).map((char, i) => (
                <span key={i} aria-hidden="true">{char}</span>
              ))}
            </p>
          </div>
        </div>

        {/* 큰 제목: data.js 의 title 을 한 줄씩 출력 */}
        <h1 className="hero-title">
          {hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <p className="hero-subtitle">{hero.subtitle}</p>
      </div>
    </section>
  );
}

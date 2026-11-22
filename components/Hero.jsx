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
          <div>
            <p className="logo-name">{company.name}</p>
            <p className="logo-tagline">{company.tagline}</p>
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

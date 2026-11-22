// 일페이지와 함께하면: 노란 테두리 상자 + 아이콘 + 설명 (3개)
import { benefits, company } from "@/app/data";
import { BenefitIcon, Stripes } from "./Icons";

export default function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{company.name}와 함께하면</h2>

        <div className="grid">
          {benefits.map((item) => (
            <article key={item.label} className="benefit">
              <Stripes />
              <div className="benefit-box">
                <BenefitIcon name={item.icon} />
              </div>
              <p className="benefit-label">{item.label}</p>
              <p className="benefit-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

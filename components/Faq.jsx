// 자주 묻는 질문
import { faqs } from "@/app/data";
import { Stripes } from "./Icons";

export default function Faq() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="faq-title">
          FAQ <span className="faq-mark">?</span>
        </h2>

        <div className="grid">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="small-text">{faq.answer}</p>
              {/* 아래쪽 민트색 선 + 줄무늬 */}
              <div className="faq-line">
                <span></span>
                <Stripes />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// 맨 아래 문의 영역: 전화번호·이메일·블로그
// 휴대폰에서 전화번호를 누르면 바로 전화가 걸려요 (tel: 링크)
import { company } from "@/app/data";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact-title">
          <span>무료 진단 상담을 받아 보세요</span>
          <span>전화나 이메일로</span>
          <span>문의 주세요</span>
        </h2>

        <dl className="contact-list">
          <dt>핸드폰</dt>
          <dd>
            <a href={`tel:${company.phone}`}>{company.phone}</a>
          </dd>

          <dt>이메일</dt>
          <dd>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </dd>

          <dt>블로그</dt>
          <dd>
            <a href={company.blog} target="_blank" rel="noreferrer">
              {company.blog}
            </a>
          </dd>
        </dl>
      </div>
    </section>
  );
}

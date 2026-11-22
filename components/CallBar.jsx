// 휴대폰 화면 아래에 항상 떠 있는 상담 버튼
// (넓은 화면에서는 globals.css 에서 숨겨요)
import { company } from "@/app/data";

export default function CallBar() {
  return (
    <div className="callbar">
      <a href={`tel:${company.phone}`} className="callbar-call">
        📞 전화 상담
      </a>
      <a href={`mailto:${company.email}`} className="callbar-mail">
        ✉️ 이메일
      </a>
    </div>
  );
}

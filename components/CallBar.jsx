// 휴대폰 화면 아래에 항상 떠 있는 상담 버튼 (전화 / 카카오톡)
// (넓은 화면에서는 globals.css 에서 숨겨요)
// 이메일은 맨 아래 문의 영역에 있어요.
import { company } from "@/app/data";

export default function CallBar() {
  return (
    <div className="callbar">
      <a href={`tel:${company.phone}`} className="callbar-call">
        📞 전화 상담
      </a>
      <a href={company.kakao} target="_blank" rel="noreferrer" className="callbar-kakao">
        💬 카톡 상담
      </a>
    </div>
  );
}

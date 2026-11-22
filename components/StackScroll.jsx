"use client";
// 섹션을 한 장씩 쌓아 올리는 스크롤 효과
// - 각 섹션이 화면에 고정(sticky)되고, 다음 섹션이 위로 덮으며 올라옵니다.
// - 작아지기·어두워지기·떠오르기 애니메이션은 globals.css 11번에서
//   브라우저가 스크롤에 맞춰 직접 처리해요 (그래서 부드러움).
// - 이 파일은 딱 하나만 해요: 섹션이 화면보다 길면(주로 휴대폰),
//   끝까지 다 보여준 뒤에 고정되도록 고정 위치(top)를 계산.
//   스크롤할 때는 아무 계산도 하지 않아요.
import { useEffect, useRef } from "react";

export default function StackScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap) return;
    const sections = Array.from(wrap.children);

    // 실제로 보이는 화면 높이 (휴대폰 하단 상담 버튼에 가려지는 만큼 빼기)
    const visibleHeight = () => {
      const bar = document.querySelector(".callbar");
      const barHeight =
        bar && getComputedStyle(bar).display !== "none" ? bar.offsetHeight : 0;
      return window.innerHeight - barHeight;
    };

    // 섹션 끝이 상담 버튼 위까지 다 보인 뒤에 고정
    const updateTops = () => {
      const screen = visibleHeight();
      sections.forEach((el) => {
        el.style.top = `${Math.min(0, screen - el.offsetHeight)}px`;
      });
    };

    updateTops();
    const observer = new ResizeObserver(updateTops);
    sections.forEach((el) => observer.observe(el));
    window.addEventListener("resize", updateTops);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTops);
    };
  }, []);

  return (
    <div ref={ref} className="stack">
      {children}
    </div>
  );
}

"use client";
// 섹션을 한 장씩 쌓아 올리는 스크롤 효과
// - 각 섹션이 화면에 고정(sticky)되고, 다음 섹션이 위로 덮으며 올라옵니다.
// - 섹션이 화면보다 길면(주로 휴대폰), 끝까지 다 보여준 뒤에 고정되도록
//   고정 위치(top)를 자동으로 계산해요.
// - 스크롤 위치에 맞춰 두 가지 값을 섹션에 넘겨줍니다 (모양은 globals.css 11번에서):
//   --cover : 다음 섹션에 덮인 정도 (0 → 1)  → 살짝 작아지고 어두워짐
//   --enter : 이 섹션이 화면에 들어온 정도 (0 → 1) → 내용이 아래에서 떠오름
import { useEffect, useRef } from "react";

const clamp = (n) => Math.min(1, Math.max(0, n));

export default function StackScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap) return;
    const sections = Array.from(wrap.children);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 실제로 보이는 화면 높이 (휴대폰 하단 상담 버튼에 가려지는 만큼 빼기)
    const visibleHeight = () => {
      const bar = document.querySelector(".callbar");
      const barHeight =
        bar && getComputedStyle(bar).display !== "none" ? bar.offsetHeight : 0;
      return window.innerHeight - barHeight;
    };

    // 섹션이 붙어 있을 위치 계산: 섹션 끝이 상담 버튼 위까지 다 보인 뒤에 고정
    const updateTops = () => {
      const screen = visibleHeight();
      sections.forEach((el) => {
        el.style.top = `${Math.min(0, screen - el.offsetHeight)}px`;
      });
    };

    // 스크롤할 때마다 덮인 정도 / 들어온 정도 계산
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const screen = visibleHeight();
      const tops = sections.map((el) => el.getBoundingClientRect().top);
      sections.forEach((el, i) => {
        const enter = i === 0 ? 1 : clamp(1 - tops[i] / screen);
        const cover = i < sections.length - 1 ? clamp(1 - tops[i + 1] / screen) : 0;
        el.style.setProperty("--enter", enter.toFixed(3));
        el.style.setProperty("--cover", cover.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    const updateAll = () => {
      updateTops();
      onScroll();
    };

    updateAll();
    const observer = new ResizeObserver(updateAll);
    sections.forEach((el) => observer.observe(el));
    window.addEventListener("resize", updateAll);
    if (!reduceMotion) window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateAll);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="stack">
      {children}
    </div>
  );
}

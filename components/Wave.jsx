// 배경의 물결 동영상 (맨 위 첫 화면, 맨 아래 문의 영역에서 사용)
// 영상 파일: public/videos/wave.mp4  → 바꾸고 싶으면 이 파일만 교체하면 돼요.
// - autoPlay + muted + playsInline: 휴대폰에서도 소리 없이 자동 재생
// - loop: 끝나면 처음부터 반복

export default function Wave() {
  return (
    <video
      className="wave"
      src="/videos/wave.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}

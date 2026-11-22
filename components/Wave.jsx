// 배경의 점선 물결 그래픽
// 점선 곡선 30개를 조금씩 옆으로 밀면서 겹쳐 그립니다.

const lineCount = 30;

export default function Wave() {
  // [0, 1, 2, ... 29] 숫자 목록 만들기
  const lines = Array.from({ length: lineCount }, (_, i) => i);

  return (
    <svg className="wave" viewBox="0 0 400 600" preserveAspectRatio="none" aria-hidden="true">
      {/* 민트 → 연두 그라데이션 색 */}
      <defs>
        <linearGradient id="waveColor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5ce6e0" />
          <stop offset="100%" stopColor="#d9f24a" />
        </linearGradient>
      </defs>

      {lines.map((i) => (
        <path
          key={i}
          // 곡선 모양: 시작점(M) → 휘어지는 점 두 개 → 끝점 (C)
          d={`M ${330 - i * 3} 0 C ${120 + i * 6} 200, ${420 - i * 5} 380, ${200 + i * 5} 600`}
          stroke="url(#waveColor)"
          strokeWidth="1.5"
          strokeDasharray="1 5" // 1만큼 그리고 5만큼 비우기 = 점선
          fill="none"
        />
      ))}
    </svg>
  );
}

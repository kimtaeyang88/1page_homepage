// 홈페이지에서 쓰는 아이콘 모음 (SVG 그림)
// 그림 좌표(d="...")는 직접 고칠 일이 거의 없으니 신경 쓰지 않아도 돼요.

// 일페이지 로고 (평행사변형 두 개)
export function Logo() {
  return (
    <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="logoColor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3ee6a8" />
          <stop offset="100%" stopColor="#e8f04a" />
        </linearGradient>
      </defs>
      <path d="M14 4h26L28 22H2z" fill="url(#logoColor)" />
      <path d="M20 26h26L34 44H8z" fill="url(#logoColor)" />
    </svg>
  );
}

// 구름 + 위쪽 화살표
function CloudIcon() {
  return (
    <svg viewBox="0 0 64 64" className="icon" aria-hidden="true">
      <path d="M22 46h-6a12 12 0 0 1-1-24 16 16 0 0 1 31-3 11 11 0 0 1 2 22h-6" />
      <path d="M32 56V30M23 38l9-9 9 9" />
    </svg>
  );
}

// 눈
function EyeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="icon" aria-hidden="true">
      <path d="M4 36s10-16 28-16 28 16 28 16-10 16-28 16S4 36 4 36z" />
      <circle cx="32" cy="36" r="8" />
      <path d="M32 6v8M14 11l4 7M50 11l-4 7" />
    </svg>
  );
}

// 퍼즐 조각
function PuzzleIcon() {
  return (
    <svg viewBox="0 0 64 64" className="icon" aria-hidden="true">
      <path d="M10 18h12a6 6 0 1 1 12 0h12v12a6 6 0 1 1 0 12v12H34a6 6 0 1 0-12 0H10V42a6 6 0 1 0 0-12z" />
    </svg>
  );
}

// data.js 에 적은 이름("cloud", "eye", "puzzle")으로 아이콘을 골라 줍니다
export function BenefitIcon({ name }) {
  if (name === "cloud") return <CloudIcon />;
  if (name === "eye") return <EyeIcon />;
  if (name === "puzzle") return <PuzzleIcon />;
  return null;
}

// 디자인에 있는 사선 줄무늬 장식 ( / / / )
export function Stripes() {
  return (
    <span className="stripes" aria-hidden="true">
      <i></i>
      <i></i>
      <i></i>
    </span>
  );
}

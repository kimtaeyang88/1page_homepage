# 일페이지 홈페이지

## 실행하는 방법

1. [Node.js](https://nodejs.org) LTS 버전 설치 (처음 한 번만)
2. 이 폴더에서 터미널을 열고:

```
npm install     (처음 한 번만)
npm run dev
```

3. 브라우저에서 http://localhost:3000 접속

## 무엇을 어디서 고치나요?

| 고치고 싶은 것 | 파일 |
| --- | --- |
| 글 내용 (전화번호, 서비스 설명, FAQ 등) | `app/data.js` |
| 색상 | `app/globals.css` 맨 위 `:root` 부분 |
| 글자 크기·여백 | `app/globals.css` |
| 사진 | `public/images` 폴더 (같은 이름으로 바꿔 넣기) |
| 섹션 순서 | `app/page.js` |
| 각 섹션의 구조 | `components` 폴더 (섹션마다 파일 하나) |

## 폴더 구조

```
app/
  data.js        ← 홈페이지 글 전부
  page.js        ← 섹션 순서
  layout.js      ← 글꼴, 검색엔진용 제목
  globals.css    ← 디자인 (모바일 우선)
components/
  Hero.jsx       ← 맨 위 첫 화면
  Intro.jsx      ← 팀 사진 + 고민 문구
  Services.jsx   ← 서비스 안내
  Benefits.jsx   ← 일페이지와 함께하면
  Faq.jsx        ← 자주 묻는 질문
  Contact.jsx    ← 문의 영역
  CallBar.jsx    ← 휴대폰 하단 상담 버튼
  Wave.jsx       ← 배경 물결 그래픽
  Icons.jsx      ← 로고, 아이콘
public/images/   ← 사진
```

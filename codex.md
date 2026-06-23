# Codex — Khloe Kim 포트폴리오 디자인 시스템

> 모든 페이지의 시각적 일관성을 유지하기 위한 단일 규약 문서.
> 새 페이지(resume.html, tags.html 등)를 추가할 때 **반드시** 이 문서를 따를 것.

---

## 1. 언어 규칙

### 1.1 페이지 콘텐츠: 영어 전용

- 모든 HTML 페이지의 **텍스트 콘텐츠는 영어만 사용**한다.
- 네비게이션, 버튼 라벨, 섹션 제목, 본문, 푸터, 메타 태그, alt 텍스트 모두 영어로 작성한다.
- 한글은 유일하게 **이름 병기** 시에만 허용한다. (예: `Khloe Kim · 김민지`)
- 코드 주석(`<!-- -->`, `/* */`)도 영어로 작성한다.

### 1.2 적용 예시

```html
<!-- ✅ 올바름 -->
<h2>Biography</h2>
<p>Khloe Kim is a Full-stack Data Analyst...</p>

<!-- ❌ 잘못됨 -->
<h2>자기소개</h2>
<p>김민지는 풀스택 데이터 분석가입니다...</p>
```

### 1.3 문서/커밋 메시지

- 이 codex.md와 같은 **내부 문서**는 한글 사용 가능하다.
- Git 커밋 메시지는 **영어로 작성**한다. (섹션 9 참고)

---

## 2. 색상 팔레트

### 2.1 핵심 팔레트 (4색)

| 토큰 | HEX | 역할 | 사용처 |
|---|---|---|---|
| **Deep Navy** | `#111844` | 메인 / 가장 어두운 색 | 본문 텍스트, 다크 카드, 푸터 배경 |
| **Indigo** | `#4B5694` | 강조색 (Accent) | 링크, 호버, CTA 버튼, 강조 텍스트, 아이콘 |
| **Blue-grey** | `#7288AE` | 보조 / 약한 텍스트 | 캡션, 플레이스홀더, 보조 라벨, 보조 아이콘 |
| **Warm Beige** | `#EAE0CF` | 따뜻한 중성색 | 다크 배경 위 강조 텍스트, 부드러운 포인트 |

### 2.2 배경 및 서피스

| 토큰 | HEX | 사용처 |
|---|---|---|
| 섹션 A (홀수) | `#FFFFFF` | 1번째, 3번째, … 섹션 배경 |
| 섹션 B (짝수) | `#F6F6F6` | 2번째, 4번째, … 섹션 배경 |
| 카드 | `#FFFFFF` | 카드 표면, 인풋 필드 |
| 다크 카드 | `#111844` | 푸터, 히어로 프로필 카드 |

### 2.3 구분선

| 토큰 | HEX | 사용처 |
|---|---|---|
| Line | `#DED3BF` | 기본 보더, 디바이더, 카드 테두리 |

### 2.4 그림자

```css
--shadow-sm : 0 1px 2px rgba(17,24,68,.04), 0 1px 3px rgba(17,24,68,.06);
--shadow    : 0 4px 16px rgba(17,24,68,.08), 0 2px 6px rgba(17,24,68,.04);
--shadow-lg : 0 20px 50px rgba(17,24,68,.12), 0 8px 16px rgba(17,24,68,.06);
```

> 그림자 색상의 기본값은 항상 `rgba(17,24,68, …)` (Deep Navy `#111844`에서 파생).
> 순수 검정(`#000`) 그림자는 절대 사용하지 않는다.

### 2.5 색상 규칙

- **그라데이션 금지.** 모든 fill, background, text color는 단색(flat solid)만 사용한다.
- **`mix-blend-mode` 금지.** 오버레이 효과 사용하지 않는다.
- **`-webkit-text-fill-color: transparent` 금지.** 그라데이션 텍스트 기법 사용하지 않는다.
- 섹션 배경은 반드시 `#FFFFFF` → `#F6F6F6` → `#FFFFFF` → … 교차한다.
- 푸터 배경은 항상 `#111844` (Deep Navy)이다.

---

## 3. 타이포그래피

### 3.1 폰트 스택

| 역할 | 폰트 | 대체 폰트 | 굵기 |
|---|---|---|---|
| **헤드라인** | `Fraunces` | `Georgia, serif` | 400, 500, 600, 700 |
| **본문** | `Inter` | `'Pretendard', -apple-system, sans-serif` | 300, 400, 500, 600, 700 |
| **코드 / 데이터** | `JetBrains Mono` | `monospace` | 400, 500 |

### 3.2 Google Fonts 임포트

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### 3.3 타입 스케일

| 레벨 | 크기 | 굵기 | 폰트 | 용도 |
|---|---|---|---|---|
| H1 | `clamp(2.4rem, 4vw, 3.4rem)` | 600 | Fraunces | 페이지 타이틀, 히어로 이름 |
| H2 | `clamp(2rem, 3.6vw, 2.8rem)` | 600 | Fraunces | 섹션 타이틀 |
| H3 | `1.2rem – 1.4rem` | 600 | Fraunces | 카드 타이틀, 하위 섹션 |
| Body | `0.92rem – 1.08rem` | 400 | Inter | 본문 텍스트 |
| Caption | `0.78rem – 0.86rem` | 400–500 | Inter | 날짜, 라벨 |
| Mono | `0.7rem – 0.82rem` | 400 | JetBrains Mono | 태그, 배지, 기술 라벨, 아이브로우 |

### 3.4 타이포 규칙

- 헤드라인: `letter-spacing: -0.02em` ~ `-0.035em`
- 본문: `line-height: 1.6` ~ `1.8`
- 모노/코드 텍스트: 아이브로우 라벨에 `text-transform: uppercase`, `letter-spacing: 0.1em` ~ `0.2em` 적용
- 헤드라인 내 `<em>` 스타일: `font-style: italic; font-weight: 500; color: var(--accent);` — 그라데이션이나 투명 텍스트 처리 절대 금지
- 하나의 요소에 **2개 이상의 font-weight를 혼합하지 않는다**

---

## 4. 간격 및 레이아웃

### 4.1 보더 반경

| 토큰 | 값 | 사용처 |
|---|---|---|
| `--radius-sm` | `8px` | 작은 요소, 내부 반경 |
| `--radius` | `14px` | 카드, 인풋, 기본값 |
| `--radius-lg` | `22px` | 큰 카드, 컨테이너 |
| Pill | `999px` | 버튼, 배지, 태그 |
| Circle | `50%` | 프로필 사진, 도트 |

### 4.2 컨테이너

```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
```

### 4.3 섹션 패딩

```css
section { padding: 100px 0; }
/* 모바일 (≤920px): 70px 0 */
```

### 4.4 그리드

- 2단 레이아웃: `grid-template-columns: 340px 1fr` (프로필 + 콘텐츠) 또는 `1fr 1fr` (동일 분할)
- `≤ 920px`에서 단일 컬럼으로 전환

---

## 5. 컴포넌트

### 5.1 버튼

| 클래스 | 배경 | 텍스트 | 테두리 | 호버 |
|---|---|---|---|---|
| `.btn-primary` | `#111844` | `#FFFFFF` | 없음 | bg → `#4B5694`, translateY(-2px), shadow-lg |
| `.btn-ghost` | 투명 | `#111844` | 1px solid `#DED3BF` | bg → `#111844`, 텍스트 → 흰색 |
| `.nav-cta` | `#111844` | `#FFFFFF` | 없음 | bg → `#4B5694`, translateY(-1px) |

모든 버튼: `border-radius: 999px; padding: 13px 24px; font-size: 0.95rem; font-weight: 500;`

### 5.2 카드

- 배경: `#FFFFFF`
- 테두리: `1px solid #DED3BF`
- 보더 반경: `22px` (대형) 또는 `14px` (기본)
- 호버: `translateY(-4px ~ -6px)`, `box-shadow: var(--shadow-lg)`, `border-color: transparent`

### 5.3 배지 / 태그

```css
padding: 6px 12px;
border-radius: 999px;
font-family: 'JetBrains Mono', monospace;
font-size: 0.78rem;
font-weight: 500;
background: #F6F6F6;
color: #111844;
border: 1px solid #DED3BF;
```

호버: `background: #111844; color: #FFFFFF;`

### 5.4 링크

- 기본: `color: #4B5694` (Indigo 강조색)
- 호버: `text-decoration: underline` 또는 `opacity: 0.7`
- 네비 링크: `::after` 가상 요소로 밑줄 처리 (2px, `#4B5694`)

### 5.5 섹션 아이브로우 (eyebrow)

```css
font-family: 'JetBrains Mono', monospace;
font-size: 0.78rem;
text-transform: uppercase;
letter-spacing: 0.2em;
color: #4B5694;  /* 강조색 */
```

앞에 24px 수평선: `background: #4B5694`

---

## 6. 애니메이션 및 인터랙션

### 6.1 스크롤 리빌

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(.4,0,.2,1),
              transform 0.8s cubic-bezier(.4,0,.2,1);
}
.reveal.show { opacity: 1; transform: translateY(0); }
```

딜레이 클래스: `.delay-1` (0.1s), `.delay-2` (0.2s), `.delay-3` (0.3s)
`IntersectionObserver`로 트리거, `threshold: 0.12`

### 6.2 호버 트랜지션

- 기본 이징: `cubic-bezier(.4,0,.2,1)`
- 지속 시간: `0.25s – 0.35s`
- 주요 트랜스폼: `translateY(-3px ~ -6px)`, `translateX(3px ~ 4px)`
- **패럴랙스 금지. 자동재생 영상 금지. 파티클 이펙트 금지.**

### 6.3 네비게이션

- 상단 고정, `backdrop-filter: saturate(180%) blur(18px)`
- 배경: `hsla(0,0%,100%,.78)` (반투명 흰색)
- 활성 링크: `::after` 밑줄 (2px, 강조색)
- 모바일: `≤ 920px`에서 슬라이드 다운 메뉴

---

## 7. 반응형 브레이크포인트

| 브레이크포인트 | 대상 | 주요 변경 |
|---|---|---|
| `> 920px` | 데스크탑 | 풀 그리드 레이아웃, 2단 컬럼 |
| `≤ 920px` | 태블릿 / 모바일 | 단일 컬럼, 햄버거 메뉴, 스택 레이아웃 |
| `≤ 520px` | 소형 모바일 | 프로필 사진 축소(200px), 패딩 줄임 |

---

## 8. 파일 구조

```
portfolio/
├── index.html          ← 메인 페이지 (Home + Skills + Experience + Projects)
├── resume.html         ← Resume 페이지 (예정)
├── tags.html           ← Tags & Logs 페이지 (예정)
├── resume.pdf          ← 다운로드용 이력서
├── khloe-photo.jpg     ← 프로필 사진 (정사각형 또는 4:5 세로)
├── codex.md            ← 이 파일
└── assets/             ← (선택) 이미지, 아이콘
```

### 8.1 새 페이지 템플릿 규칙

새 페이지를 만들 때 반드시 다음을 포함해야 한다:

1. **동일한 `<head>` 블록** (meta, fonts, viewport)
2. **동일한 `<nav class="topbar">`** 네비게이션 (링크 일치)
3. **동일한 `<footer>` 블록**
4. **동일한 CSS 커스텀 프로퍼티** (`:root` 블록)
5. **동일한 스크롤 리빌 JS** (`IntersectionObserver`)

→ `index.html`에서 `<head>`, `<nav>`, `<footer>`, `<script>` 블록을 그대로 복사하면 된다.

---

## 9. 네이밍 컨벤션

### 9.1 CSS 클래스

- **kebab-case** 사용: `section-title`, `project-card`, `skill-item`
- 컴포넌트 접두어 패턴: `{컴포넌트}-{요소}` (예: `hero-grid`, `profile-photo`, `bio-text`)
- 상태 클래스: `.active`, `.open`, `.show`
- BEM 사용하지 않음. Tailwind 유틸리티 사용하지 않음.

### 9.2 CSS 커스텀 프로퍼티

- 모든 토큰은 `--` 접두어: `--ink`, `--accent`, `--radius-lg`
- 컴포넌트 스타일에서 **hex 값 직접 입력 금지**. 반드시 `var(--토큰)` 참조.
- 예외: SVG 인라인 `fill` / `stroke` 속성은 팔레트 내 hex 값 직접 사용 가능.

### 9.3 파일 네이밍

- HTML 페이지: `kebab-case.html` (예: `resume.html`, `tags.html`)
- 에셋: `kebab-case.ext` (예: `khloe-photo.jpg`, `project-thumb-iot.svg`)
- 파일명에 공백, 대문자 사용 금지.

---

## 10. Git 커밋 컨벤션

### 10.1 형식

```
<type>(<scope>): <short description>
```

- **type**: 변경 종류
- **scope**: 해당 페이지 또는 컴포넌트 (선택, 권장)
- **short description**: 명령형, 소문자, 끝에 마침표 없음

### 10.2 타입 목록

| 타입 | 사용 시점 |
|---|---|
| `feat` | 새 기능 또는 페이지 추가 (예: resume.html 추가) |
| `fix` | 버그 수정 (레이아웃 깨짐, 잘못된 색상, 죽은 링크) |
| `style` | 시각적 변경만 (색상 조정, 간격, 폰트 변경) |
| `refactor` | 시각적 변화 없는 코드 구조 개선 |
| `content` | 텍스트/카피 업데이트 (자기소개, 프로젝트 설명, 날짜) |
| `docs` | 문서 업데이트 (codex.md, README) |
| `chore` | 도구, 설정, 의존성, 파일 정리 |

### 10.3 예시

```
feat(resume): add interactive resume viewer page
fix(nav): correct active state on mobile menu
style(footer): adjust heading font size for tablet
refactor(css): extract shared card styles into variables
content(bio): update biography paragraph with new role
docs(codex): add animation guidelines
chore: remove unused CSS blocks from index.html
```

### 10.4 규칙

- 제목 줄은 **72자 이내**로 유지한다.
- **명령형** 사용: "add", "fix", "update" — "added", "fixes", "updated" 사용 금지.
- 하나의 커밋에 **하나의 논리적 변경**만 포함한다. 관련 없는 변경을 묶지 않는다.
- 여러 scope에 걸친 커밋은 scope 생략: `style: unify card border radius across pages`
- 레이아웃에 큰 변경이 있으면 본문에 맥락을 추가한다:

```
style(skills): switch grid to flex layout

Changed from CSS Grid (3-col) to Flexbox (flex-wrap)
to center the last row when item count is not divisible by 3.
```

---

## 11. 빠른 참조 — DO / DON'T

| ✅ DO | ❌ DON'T |
|---|---|
| CSS 커스텀 프로퍼티 사용 (`var(--ink)`) | 컴포넌트 CSS에 hex 값 직접 입력 |
| 섹션 배경 `#FFF` / `#F6F6F6` 교차 | 그라데이션이나 블러 blob 사용 |
| 헤드라인에만 `Fraunces` 사용 | 본문에 세리프 폰트 혼합 |
| `em` 강조를 `color: var(--accent)`로 처리 | `-webkit-text-fill-color: transparent` 사용 |
| 스크롤 애니메이션에 `.reveal` 클래스 사용 | 패럴랙스, 자동재생 미디어 사용 |
| pill 형태에 `999px` 반경 사용 | 같은 유형의 요소에 다른 반경 적용 |
| **모든 페이지 콘텐츠는 영어로 작성** | 한글로 페이지 콘텐츠 작성 |
| 새 페이지 만들기 전 이 codex 확인 | 기억에 의존해서 색상/간격 추측 |

---

*마지막 업데이트: 2026.06 · Khloe Kim Portfolio Codex v1.0*

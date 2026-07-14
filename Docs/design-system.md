# Khloe Kim Portfolio Design System

> 모든 페이지의 시각적 일관성을 유지하기 위한 단일 디자인 규약 문서.  
> 새 페이지(`resume.html`, `tags.html` 등)를 추가할 때 반드시 이 문서를 따른다.

---

## 1. Language Rules

### 1.1 Page Content: English Only

- 모든 HTML 페이지의 텍스트 콘텐츠는 영어만 사용한다.
- 네비게이션, 버튼 라벨, 섹션 제목, 본문, 푸터, 메타 태그, `alt` 텍스트 모두 영어로 작성한다.
- 한글은 유일하게 이름 병기 시에만 허용한다.
  - 예: `Khloe Kim · 김민지`

### 1.2 Examples

```html
<!-- Correct -->
<h2>Biography</h2>
<p>Khloe Kim is a Full-stack Data Analyst...</p>

<!-- Incorrect -->
<h2>자기소개</h2>
<p>김민지는 풀스택 데이터 분석가입니다...</p>
```

### 1.3 Internal Documents and Commit Messages

- `CLAUDE.md`, `docs/design-system.md` 같은 내부 문서는 한글 사용 가능.
- Git 커밋 메시지는 영어로 작성한다.

---

## 2. Color Palette

### 2.1 Core Palette

| Token | HEX | Role | Usage |
|---|---|---|---|
| **Deep Navy** | `#111844` | Main / darkest color | Body text, dark cards, footer background |
| **Indigo** | `#4B5694` | Accent | Links, hover states, CTA buttons, emphasized text, icons |
| **Blue-grey** | `#7288AE` | Secondary / muted text | Captions, placeholders, secondary labels, secondary icons |
| **Warm Beige** | `#EAE0CF` | Warm neutral | Highlight text on dark backgrounds, soft accents |

### 2.2 Background and Surface

| Token | HEX | Usage |
|---|---|---|
| Section A | `#FFFFFF` | 1st, 3rd, 5th sections |
| Section B | `#F6F6F6` | 2nd, 4th, 6th sections |
| Card | `#FFFFFF` | Card surfaces, input fields |
| Dark Card | `#111844` | Footer, hero profile card |

### 2.3 Divider

| Token | HEX | Usage |
|---|---|---|
| Line | `#DED3BF` | Borders, dividers, card outlines |

### 2.4 Shadows

```css
--shadow-sm : 0 1px 2px rgba(17,24,68,.04), 0 1px 3px rgba(17,24,68,.06);
--shadow    : 0 4px 16px rgba(17,24,68,.08), 0 2px 6px rgba(17,24,68,.04);
--shadow-lg : 0 20px 50px rgba(17,24,68,.12), 0 8px 16px rgba(17,24,68,.06);
```

Rules:
- Shadow color must always be derived from Deep Navy: `rgba(17,24,68,...)`.
- Never use pure black shadows such as `#000` or `rgba(0,0,0,...)`.

### 2.5 Color Rules

- Do not use gradients.
- Do not use `mix-blend-mode`.
- Do not use `-webkit-text-fill-color: transparent`.
- All fill, background, and text colors must be flat solid colors.
- Section backgrounds must alternate:
  - `#FFFFFF`
  - `#F6F6F6`
  - `#FFFFFF`
  - and so on.
- Footer background must always be `#111844`.

---

## 3. Typography

### 3.1 Font Stack

| Role | Font | Fallback | Weight |
|---|---|---|---|
| **Headline** | `Fraunces` | `Georgia, serif` | 400, 500, 600, 700 |
| **Body** | `Inter` | `'Pretendard', -apple-system, sans-serif` | 300, 400, 500, 600, 700 |
| **Code / Data** | `JetBrains Mono` | `monospace` | 400, 500 |

### 3.2 Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### 3.3 Type Scale

| Level | Size | Weight | Font | Usage |
|---|---|---|---|---|
| H1 | `clamp(2.4rem, 4vw, 3.4rem)` | 600 | Fraunces | Page title, hero name |
| H2 | `clamp(2rem, 3.6vw, 2.8rem)` | 600 | Fraunces | Section title |
| H3 | `1.2rem – 1.4rem` | 600 | Fraunces | Card title, subsection |
| Body | `0.92rem – 1.08rem` | 400 | Inter | Body text |
| Caption | `0.78rem – 0.86rem` | 400–500 | Inter | Dates, labels |
| Mono | `0.7rem – 0.82rem` | 400 | JetBrains Mono | Tags, badges, technical labels, eyebrows |

### 3.4 Typography Rules

- Headlines:
  - `letter-spacing: -0.02em` to `-0.035em`
- Body:
  - `line-height: 1.6` to `1.8`
- Mono / code text:
  - Use `text-transform: uppercase`
  - Use `letter-spacing: 0.1em` to `0.2em`
- Headline `<em>` style:
  - `font-style: italic`
  - `font-weight: 500`
  - `color: var(--accent)`
- Do not use gradients or transparent text for emphasis.
- Do not mix more than two font weights inside a single element.

---

## 4. Spacing and Layout

### 4.1 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `8px` | Small elements, inner radius |
| `--radius` | `14px` | Cards, inputs, default radius |
| `--radius-lg` | `22px` | Large cards, containers |
| Pill | `999px` | Buttons, badges, tags |
| Circle | `50%` | Profile photos, dots |

### 4.2 Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### 4.3 Section Padding

```css
section {
  padding: 100px 0;
}

@media (max-width: 920px) {
  section {
    padding: 70px 0;
  }
}
```

### 4.4 Grid

Use one of the following common 2-column layouts:

```css
grid-template-columns: 340px 1fr;
```

or:

```css
grid-template-columns: 1fr 1fr;
```

At `≤ 920px`, switch to a single-column layout.

---

## 5. Components

### 5.1 Buttons

| Class | Background | Text | Border | Hover |
|---|---|---|---|---|
| `.btn-primary` | `#111844` | `#FFFFFF` | None | bg → `#4B5694`, `translateY(-2px)`, `shadow-lg` |
| `.btn-ghost` | Transparent | `#111844` | `1px solid #DED3BF` | bg → `#111844`, text → white |
| `.nav-cta` | `#111844` | `#FFFFFF` | None | bg → `#4B5694`, `translateY(-1px)` |

All buttons:

```css
border-radius: 999px;
padding: 13px 24px;
font-size: 0.95rem;
font-weight: 500;
```

### 5.2 Cards

Cards must use:

```css
background: var(--card);
border: 1px solid var(--line);
border-radius: var(--radius-lg);
```

Card hover:

```css
transform: translateY(-4px);
box-shadow: var(--shadow-lg);
border-color: transparent;
```

Acceptable hover movement:
- `translateY(-4px)` to `translateY(-6px)`

### 5.3 Badges and Tags

```css
padding: 6px 12px;
border-radius: 999px;
font-family: 'JetBrains Mono', monospace;
font-size: 0.78rem;
font-weight: 500;
background: var(--soft);
color: var(--ink);
border: 1px solid var(--line);
```

Hover:

```css
background: var(--ink);
color: #FFFFFF;
```

### 5.4 Links

- Default:
  - `color: var(--accent)`
- Hover:
  - `text-decoration: underline`
  - or `opacity: 0.7`
- Navigation links:
  - Use `::after` pseudo-element underline
  - Underline height: `2px`
  - Underline color: `var(--accent)`

### 5.5 Section Eyebrow

```css
font-family: 'JetBrains Mono', monospace;
font-size: 0.78rem;
text-transform: uppercase;
letter-spacing: 0.2em;
color: var(--accent);
```

Optional leading line:

```css
width: 24px;
height: 1px;
background: var(--accent);
```

---

## 6. Animation and Interaction

### 6.1 Scroll Reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(.4,0,.2,1),
              transform 0.8s cubic-bezier(.4,0,.2,1);
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}
```

Delay classes:
- `.delay-1`: `0.1s`
- `.delay-2`: `0.2s`
- `.delay-3`: `0.3s`

Trigger with `IntersectionObserver`.

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.12 });
```

### 6.2 Hover Transition

- Default easing:
  - `cubic-bezier(.4,0,.2,1)`
- Duration:
  - `0.25s` to `0.35s`
- Main transforms:
  - `translateY(-3px)` to `translateY(-6px)`
  - `translateX(3px)` to `translateX(4px)`

Forbidden:
- Parallax
- Autoplay video
- Particle effects
- Blob backgrounds

### 6.3 Navigation

Navigation must use:
- Fixed top bar
- `backdrop-filter: saturate(180%) blur(18px)`
- Background: `hsla(0,0%,100%,.78)`
- Active link underline using `::after`
- Mobile slide-down menu at `≤ 920px`

---

## 7. Responsive Breakpoints

| Breakpoint | Target | Main Changes |
|---|---|---|
| `> 920px` | Desktop | Full grid layout, 2-column sections |
| `≤ 920px` | Tablet / Mobile | Single column, hamburger menu, stacked layout |
| `≤ 520px` | Small Mobile | Smaller profile photo, reduced padding |

---

## 8. File Structure

Preferred structure:

```txt
portfolio/
├── index.html          ← Main page: Home + Skills + Experience + Projects
├── resume.html         ← Resume page
├── tags.html           ← Tags & Logs page
├── resume.pdf          ← Downloadable resume
├── khloe-photo.jpg     ← Profile photo, square or 4:5 portrait
├── CLAUDE.md           ← Claude Code project instructions
├── docs/
│   └── design-system.md
└── assets/             ← Optional images and icons
```

### 8.1 New Page Template Rules

Every new page must include:

1. The same `<head>` block:
   - meta tags
   - fonts
   - viewport
2. The same `<nav class="topbar">` navigation:
   - consistent links
   - consistent active state
3. The same `<footer>` block
4. The same CSS custom properties:
   - `:root` block
5. The same scroll reveal script:
   - `IntersectionObserver`

Copy these shared blocks from `index.html` unless the user explicitly asks for a structural redesign.

---

## 9. Naming Convention

### 9.1 CSS Classes

- Use `kebab-case`.
  - `section-title`
  - `project-card`
  - `skill-item`
- Use component-element pattern:
  - `hero-grid`
  - `profile-photo`
  - `bio-text`
- Use simple state classes:
  - `.active`
  - `.open`
  - `.show`
- Do not use BEM.
- Do not use Tailwind utility classes.

### 9.2 CSS Custom Properties

- All design tokens must use the `--` prefix.
  - `--ink`
  - `--accent`
  - `--radius-lg`
- Do not hard-code hex values inside component CSS.
- Use `var(...)` references.
- Exception:
  - Inline SVG `fill` / `stroke` may directly use palette HEX values.

### 9.3 File Naming

- HTML pages:
  - `kebab-case.html`
  - examples: `resume.html`, `tags.html`
- Assets:
  - `kebab-case.ext`
  - examples: `khloe-photo.jpg`, `project-thumb-iot.svg`
- Do not use spaces or uppercase letters in filenames.

---

## 10. Git Commit Convention

### 10.1 Format

```txt
<type>(<scope>): <short description>
```

- `type`: kind of change
- `scope`: page or component, optional but recommended
- `short description`: imperative, lowercase, no period

### 10.2 Types

| Type | Usage |
|---|---|
| `feat` | New feature or page |
| `fix` | Bug fix |
| `style` | Visual-only change |
| `refactor` | Code structure improvement without visual change |
| `content` | Text or copy update |
| `docs` | Documentation update |
| `chore` | Tooling, settings, dependency, or file cleanup |

### 10.3 Examples

```txt
feat(resume): add interactive resume viewer page
fix(nav): correct active state on mobile menu
style(footer): adjust heading font size for tablet
refactor(css): extract shared card styles into variables
content(bio): update biography paragraph with new role
docs(claude): add workflow guidelines
chore: remove unused CSS blocks from index.html
```

### 10.4 Rules

- Keep the title line under 72 characters.
- Use imperative mood:
  - `add`
  - `fix`
  - `update`
- Do not use:
  - `added`
  - `fixes`
  - `updated`
- Include only one logical change per commit.
- If a commit affects multiple scopes, omit the scope:

```txt
style: unify card border radius across pages
```

If a layout change is large, add a body:

```txt
style(skills): switch grid to flex layout

Changed from CSS Grid to Flexbox to center the last row
when item count is not divisible by three.
```

---

## 11. Quick Reference — Do / Don't

| Do | Don't |
|---|---|
| Use CSS custom properties such as `var(--ink)` | Hard-code hex values inside component CSS |
| Alternate section backgrounds between `#FFFFFF` and `#F6F6F6` | Use gradients or blur blobs |
| Use `Fraunces` for headlines only | Mix serif fonts into body text |
| Style `<em>` with `color: var(--accent)` | Use `-webkit-text-fill-color: transparent` |
| Use `.reveal` for scroll animation | Use parallax or autoplay media |
| Use `999px` radius for pills | Use inconsistent radius values for same component type |
| Write all visible page content in English | Write Korean page content |
| Check this design system before creating a new page | Guess colors, spacing, or layout rules from memory |

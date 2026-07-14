# Khloe Kim Portfolio — Claude Code Instructions

This file is the project-level instruction file for Claude Code.  
Follow the full visual system in `@docs/design-system.md`.

---

## 1. Project Goal

Maintain a visually consistent personal portfolio for **Khloe Kim · 김민지**.

The portfolio should communicate:
- Full-stack data analysis capability
- Data engineering and analytics project experience
- Clean, editorial, professional visual identity

---

## 2. Required Design System

Always follow:

```md
@docs/design-system.md
```

Do not invent new colors, typography rules, spacing systems, component styles, or animation patterns unless the user explicitly asks for a design-system update.

---

## 3. Core Rules

### Content Language

- All visible HTML page content must be written in English.
- Korean is allowed only when the name is shown together, for example: `Khloe Kim · 김민지`.
- Internal documentation such as `CLAUDE.md` and `docs/design-system.md` may contain Korean.
- Git commit messages must be written in English.

### Visual Rules

- Use the defined color palette and CSS custom properties.
- Do not use gradients.
- Do not use `mix-blend-mode`.
- Do not use `-webkit-text-fill-color: transparent`.
- Do not use pure black shadows such as `#000` or `rgba(0,0,0,...)`.
- Do not use Tailwind utility classes.
- Do not use BEM naming.
- Do not use parallax, autoplay video, particle effects, or decorative blob backgrounds.

### Layout Rules

- Reuse the same top navigation, footer, root CSS variables, and scroll reveal script across pages.
- Section backgrounds must alternate:
  - `#FFFFFF`
  - `#F6F6F6`
  - `#FFFFFF`
  - and so on.
- New pages must preserve visual consistency with `index.html`.

---

## 4. Claude Code Workflow

### Before Editing

1. Read this `CLAUDE.md`.
2. Read `docs/design-system.md`.
3. Inspect the existing page structure before changing files.
4. For new pages, reference `index.html` first and reuse shared blocks.

### During Editing

1. Make the smallest safe change that satisfies the request.
2. Prefer editing existing patterns over creating new ones.
3. Use CSS custom properties instead of direct hex values inside component CSS.
4. Keep class names in `kebab-case`.
5. Preserve semantic HTML and accessible alt text.
6. Keep visible user-facing content in English.

### After Editing

1. Check for prohibited visual techniques.
2. Check for Korean text in HTML page content.
3. Check that nav, footer, active states, and section backgrounds remain consistent.
4. Summarize changed files and validation performed.

---

## 5. Validation Checklist

Run these checks when possible after modifying HTML/CSS files.

```bash
grep -R "linear-gradient\|radial-gradient\|mix-blend-mode\|-webkit-text-fill-color" *.html
grep -R "#000\|rgba(0,0,0" *.html
grep -R "[가-힣]" *.html
```

Expected result:
- No gradients.
- No blend mode.
- No transparent gradient text.
- No pure black shadows.
- No Korean in visible HTML content, except `김민지` when paired with `Khloe Kim`.

If the repository has HTML files inside subdirectories, expand the target path:

```bash
grep -R "linear-gradient\|radial-gradient\|mix-blend-mode\|-webkit-text-fill-color" .
grep -R "#000\|rgba(0,0,0" .
grep -R "[가-힣]" .
```

Review matches manually because internal comments or documentation may be valid exceptions.

---

## 6. File Structure

Preferred structure:

```txt
portfolio/
├── index.html
├── resume.html
├── tags.html
├── resume.pdf
├── khloe-photo.jpg
├── CLAUDE.md
├── docs/
│   └── design-system.md
└── assets/
```

---

## 7. Commit Convention

Use English commit messages.

Format:

```txt
<type>(<scope>): <short description>
```

Examples:

```txt
feat(resume): add interactive resume viewer page
fix(nav): correct active state on mobile menu
style(footer): adjust heading font size for tablet
refactor(css): extract shared card styles into variables
content(bio): update biography paragraph with new role
docs(claude): add project workflow instructions
chore: remove unused CSS blocks from index.html
```

Rules:
- Keep the title line under 72 characters.
- Use imperative mood: `add`, `fix`, `update`.
- Do not use past tense: `added`, `fixed`, `updated`.
- Keep one logical change per commit.

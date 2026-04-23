# Site Enhancements Design: Swiss Grid & Chess Integration

## 1. Overview
This document outlines two new features designed to enhance the current static Astro blog without compromising its strict Black & White "Swiss Grid" aesthetic and Physics/Chess identity. The goal is to provide academic-level readability and geeky interactions.

## 2. Constraints & Principles
- **No colors:** Strict adherence to `#FFFFFF`, `#F0F0F0`, `#1A1A1A`, `#1E1E1E`, and `#121212`.
- **No physics/math layer changes:** The current `remark-math` and `rehype-katex` setup is perfect and must not be touched.
- **Grid alignment:** All new elements must align to the 12-column Swiss grid system.
- **Chess motifs:** Interactive elements use chess pieces instead of standard web icons.

## 3. Features & Architecture

### Feature A: Chess-Piece Table of Contents (TOC)
- **Purpose:** Improve navigation for long-form mathematical derivations and essays.
- **Architecture:** 
  - Modify `src/pages/blog/[...slug].astro` and `src/pages/en/blog/[...slug].astro` to destructure `headings` from `await render(post)`.
  - Pass `headings` to a new `src/components/TableOfContents.astro` component.
  - Use Vanilla JS `IntersectionObserver` to track the active heading on scroll.
- **UI Design:**
  - Fixed right-side or inline sticky positioning.
  - Active section indicator: A text-based chess piece (`♞` or `♟`) sits next to the currently viewed heading, dynamically updated via JS.
  - Sub-headings are indented precisely by `16px` (md spacing).

### Feature B: Terminal-Style "Webring" / Connect Block
- **Purpose:** Enhance the "geek" identity by providing a text-based, terminal-like component for links and friends.
- **Architecture:** A new `src/components/TerminalContact.astro` component containing standard HTML styled with pure CSS (no Tailwind).
- **Placement:** Inject into `src/pages/about.astro` and `src/pages/en/about.astro`.
- **UI Design:**
  - Background: Pure black (`#1A1A1A`).
  - Text: Light gray (`#F5F5F5`) with a blinking block cursor `█` animated via pure CSS `@keyframes`.
  - Content: Command-line format (e.g., `> ls -l links/`).
  - Strict square borders to match the Swiss Grid.

## 4. Implementation Steps
1. **TOC Component:** Create the Astro component to recursively render the headings.
2. **Observer Script:** Write the client-side vanilla JS to handle `IntersectionObserver` logic.
3. **Blog Integration:** Update blog layout slugs to integrate the TOC and pass headings.
4. **Terminal Component:** Create the Terminal UI component with pure CSS blinking cursor.
5. **About Integration:** Place the Terminal component in the About pages.
# Music Experience Redesign Design

## 1. Overview

This document defines the validated redesign for the blog's music experience. The current music page already supports platform switching, playlist switching, search, playback, and synchronized lyrics, but its presentation still feels like a utility page inside the main blog rather than a complete music product. The new goal is to split the music experience into two coordinated surfaces:

- `/music` becomes a colorful, dynamic **music discovery page**.
- independent detail routes become **immersive playback pages** for playlists and songs.

The final direction is a deliberate hybrid:

- **Main page:** playlist exploration + experimental visual design.
- **Detail page:** immersive player experience.

This preserves the existing Astro architecture while giving the music area a distinct identity that can diverge from the main site's strict black-and-white Swiss Grid language.

## 2. Product Goals

### Primary goals

1. Make it easy to switch between multiple playlists and platforms.
2. Make the music page visually memorable, colorful, and dynamic.
3. Preserve a clean user flow: discover first, then enter an immersive listening state.
4. Keep the implementation compatible with pure Astro + CSS + vanilla JS.

### Experience goals

- The main page should feel like a **music discovery hub**, not just a player widget.
- Entering a playlist or song should feel like crossing into a **dedicated listening space**.
- The visual language should be vivid and modern without turning into an unreadable effects demo.

## 3. Constraints

- Pure Astro only. No React/Vue/Svelte.
- No Tailwind.
- Continue using CSS custom properties from the existing global system where appropriate, but the music section may define page-local color tokens.
- Route-based i18n must be preserved.
- Existing music data source remains the Meting API pattern already in use.
- The design should feel intentionally special, but must still live comfortably inside the current site.

## 4. Validated Information Architecture

### Discovery page

- `src/pages/music/index.astro`
- `src/pages/en/music/index.astro`

Purpose:

- platform switching
- playlist exploration
- search and quick song access
- preview of currently playing content
- navigation into detail views

### Detail routes

Add dedicated routes for immersive playback:

- `/music/playlist/[platform]/[id]`
- `/music/song/[platform]/[id]`
- `/en/music/playlist/[platform]/[id]`
- `/en/music/song/[platform]/[id]`

Purpose:

- ambient playback
- large artwork presentation
- lyric-first listening
- playlist or song specific context

This route split is intentional. Discovery and playback are separate mental modes and should not compete inside one page.

## 5. Validated User Flow

1. User enters `/music`.
2. User switches platform if needed.
3. User browses featured playlists, discovery cards, or search results.
4. User clicks a playlist or song.
5. User navigates to the corresponding detail route.
6. User listens in an immersive playback environment.
7. User can return to `/music` to continue exploring.

This flow is the core product decision: **explore -> choose -> immerse**.

## 6. Visual Direction

## 6.1 Main page visual tone

The discovery page should combine:

- the organizational clarity of a music catalog page
- the excitement of an experimental visual landing page

Keywords:

- neon
- aurora
- prism
- motion
- layered gradients
- soft glows
- asymmetric content blocks

The page should not use the main blog's black-white chessboard language as the dominant visual motif. Instead, it should use a darker neutral base with strong color accents that shift by platform and featured content.

### Platform accent mapping

- Netease: red / coral / hot orange
- Tencent: cyan / green / teal
- Kugou: blue / indigo / violet

These accents should influence:

- hero glow
- active tabs
- card highlights
- search focus state
- mini player accents

## 6.2 Detail page visual tone

The detail pages should be more restrained than the discovery page. They remain colorful, but the color source should come primarily from the selected artwork rather than a fixed platform theme.

Keywords:

- ambient
- cinematic
- liquid blur
- focused
- atmospheric

The detail view should feel like a listening room rather than a dashboard.

## 7. External Inspiration and What to Borrow

The following references informed the design direction.

### Webamp
- Repo: https://github.com/captbaritone/webamp
- Borrow: skin-like identity shifts and strong player personality.
- Use here: treat music pages as their own branded sub-experience, not as plain content blocks.

### APlayer
- Repo: https://github.com/diygod/aplayer
- Borrow: simple playlist/player separation and lightweight integration patterns.
- Use here: keep playlist and playback logic modular.

### AmplitudeJS
- Repo: https://github.com/serversideup/amplitudejs
- Borrow: clear separation of queue, controls, and track metadata.
- Use here: use independent UI regions that still share one playback state.

### Wavesurfer.js
- Repo: https://github.com/katspaugh/wavesurfer.js
- Borrow: waveform as a discovery and feedback surface.
- Use here: optional lightweight visual waveform or progress visualization on detail pages.

### Butterchurn
- Repo: https://github.com/jberg/butterchurn
- Borrow: audio-reactive ambience and motion-rich background behavior.
- Use here: only as inspiration for layered motion; do not start with heavy WebGL.

### NeonAMP
- Repo: https://github.com/marchildmann/NeonAMP
- Borrow: neon identity and synth-inspired color attitude.
- Use here: accent glows and strong chromatic edge treatment.

### NeonPulse
- Repo: https://github.com/jishanahmed-shaikh/NeonPulse
- Borrow: simple but striking audio-reactive neon visuals.
- Use here: hero background motifs and lightweight animated decor.

### BeatVibe Music Player
- Repo: https://github.com/Sandhiyamrs/BeatVibe-Music-Player
- Borrow: mood/theme driven music UI and emotional visual framing.
- Use here: discovery page can expose playlists through mood-like presentation rather than only plain metadata.

## 8. Discovery Page Layout

The discovery page should be rebuilt around five modules.

### 8.1 Hero / Featured banner

Content:

- title
- short supporting copy
- current featured playlist or current mood
- primary actions such as "enter playlist" and "shuffle"

Layout:

- left side: text and actions
- right side: oversized featured card
- background: animated gradient field with subtle line/grid overlays

Behavior:

- platform switch updates hero accent color
- featured card hover gives lift, glow, and slight motion

### 8.2 Platform switcher

The platform switcher should evolve from plain buttons into colorful segmented pills or soft neon tabs.

Behavior:

- immediate accent-color transition
- updates discovery content source
- updates highlighted featured playlist

### 8.3 Playlist discovery grid

Replace the current evenly spaced simple grid with an asymmetric playlist system:

- one large featured card
- two medium supporting cards
- smaller cards beneath or beside them

Each card can include:

- cover art
- title
- platform label
- mood tag
- quick open action

Motion:

- hover lift
- glow edge
- cover zoom
- subtle gradient border activation

### 8.4 Search and quick results

Search results should feel closer to a compact discovery feed than a plain list.

Patterns:

- horizontal strip or dense result panel
- song cover + title + artist + quick play / open detail
- optional recent or trending placeholder state when empty

### 8.5 Mini now playing bar

This should become a persistent entry point into the immersive detail route.

Content:

- small cover
- song title
- artist
- play/pause
- open detail button

Behavior:

- remains visible while browsing
- transitions into detail page context

## 9. Detail Page Layout

## 9.1 Playlist detail page

Suggested structure:

### Top hero zone

- large cover art
- ambient background derived from artwork colors
- title, source, optional description
- main actions: play all, back to discovery, next/prev

### Lower content zone

- left: lyrics or playlist context panel
- right: track list panel

Behavior:

- active song clearly highlighted
- background colors update with currently playing track
- track click can keep user inside playlist detail while updating playback

## 9.2 Song detail page

Suggested structure:

- larger artwork
- stronger lyric prominence
- reduced list density
- higher contrast playback controls
- more cinematic background treatment

This route is the most immersive state.

## 10. Interaction Model

### Discovery page interactions

- switch platform
- hover cards for glow and elevation
- click cards to open detail routes
- search and quick play songs
- keep mini player persistent

### Detail page interactions

- play/pause
- previous/next
- synchronized lyrics
- track switching within playlist
- back navigation to discovery page

## 11. Motion Rules

Motion should be impressive but controlled.

### Recommended motion

- slow animated gradient drift
- card hover lift and edge glow
- soft background pulse tied to selected theme
- smooth color interpolation on platform switch
- subtle lyric scroll and state transitions

### Avoid in the first version

- heavy particle engines
- large WebGL dependency chains
- constant full-screen reactive noise
- anything that makes the page feel like a benchmark rather than a product

The priority is premium motion, not maximal motion.

## 12. Implementation Architecture

## 12.1 Discovery page components

Recommended new components:

- `MusicHero.astro`
- `PlaylistMasonry.astro`
- `MusicSearchResults.astro`
- `MiniPlayerBar.astro`

Existing components to evolve:

- `PlatformSelector.astro`
- `PlaylistGrid.astro` -> likely replaced or upgraded into a masonry/discovery layout
- `SearchPanel.astro`

## 12.2 Detail page components

- `PlaylistDetailHero.astro`
- `SongDetailHero.astro`
- `TrackListPanel.astro`
- `LyricsPanel.astro`
- shared playback controls component if useful

## 12.3 Shared logic

Playback state should remain shared through a lightweight client-side state layer built with existing vanilla JS event patterns. The current event-based approach is acceptable, but it should be formalized so that discovery UI, mini player, and detail pages all speak the same language.

Recommended shared events:

- load playlist
- load song
- playback state changed
- current track changed
- current artwork changed

## 13. Data Strategy

- Continue using current Meting API inputs.
- Discovery page uses curated playlists per platform plus search.
- Detail pages receive route params for platform and ID.
- Data loading can remain client-driven if needed, but page shell structure should exist statically.

## 14. Acceptance Criteria

The redesign is successful when:

1. `/music` clearly feels like a colorful discovery page rather than a simple utility player.
2. Users can switch across multiple playlists and platforms without confusion.
3. Clicking a playlist or song opens a dedicated immersive route.
4. Detail pages feel visually different from the discovery page and optimized for listening.
5. The implementation still fits pure Astro + CSS + vanilla JS constraints.

## 15. Recommended Build Sequence

1. Create route structure for playlist/song detail pages in both languages.
2. Build shared playback state contract.
3. Rebuild `/music` as a discovery page with hero + asymmetric playlist grid.
4. Add mini player bar.
5. Build playlist detail page.
6. Build song detail page.
7. Add final visual polish and motion refinement.

## 16. Final Direction Summary

The approved direction is:

- **Main page:** colorful, dynamic, experimental music discovery experience.
- **Detail pages:** immersive ambient playback experience.
- **Product structure:** separate discovery and listening into dedicated routes.
- **Visual strategy:** borrow from modern music UI references, but implement a tailored Astro-native version rather than copying any single template.

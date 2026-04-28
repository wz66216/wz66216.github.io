# Music Experience Redesign Implementation Plan

## Source Design

- Design doc: `docs/plans/2026-04-27-music-experience-redesign-design.md`

## Goal

Implement a two-layer music experience:

- `/music` and `/en/music` become colorful discovery pages.
- playlist/song detail routes become immersive playback pages.

All work must remain pure Astro + CSS + vanilla JS, preserve route-based i18n, and keep static-output compatibility.

---

## Phase 1 — Stabilize Shared Music Data and Playback Contract

### Objective

Create a clean shared foundation before redesigning page UI.

### Tasks

1. Audit current music event flow in:
   - `src/pages/music/index.astro`
   - `src/pages/en/music/index.astro`
   - `src/components/music/VinylPlayer.astro`
   - `src/components/music/PlatformSelector.astro`
   - `src/components/music/PlaylistGrid.astro`
   - `src/components/music/SearchPanel.astro`
2. Normalize custom events and payload structure.
3. Define one shared playback contract for:
   - load playlist
   - load song
   - playback state changed
   - current track changed
   - current artwork changed
4. Extract reusable helper logic if needed into a small shared client module under `src/components/music/` or `src/scripts/` if such directory is introduced.

### Deliverables

- consistent event names and payloads
- no duplicated zh/en page playback logic where avoidable
- stable base for discovery + detail pages

### Validation

- platform switching still works
- playlist switching still works
- direct song loading still works
- lyrics still work after refactor

---

## Phase 2 — Build Discovery Page Shell

### Objective

Replace the current stacked utility layout with a real discovery page structure.

### Files

- `src/pages/music/index.astro`
- `src/pages/en/music/index.astro`

### New components

- `src/components/music/MusicHero.astro`
- `src/components/music/PlaylistMasonry.astro`
- `src/components/music/MusicSearchResults.astro`
- `src/components/music/MiniPlayerBar.astro`

### Tasks

1. Rebuild page structure into these sections:
   - hero / featured banner
   - platform switcher
   - discovery playlist masonry
   - search results panel
   - mini player bar
2. Move search result markup out of page file into `MusicSearchResults.astro`.
3. Replace simple playlist grid with asymmetric featured-card layout in `PlaylistMasonry.astro`.
4. Keep zh/en page structure mirrored.
5. Keep page content source configurable by `lang` and platform.

### Validation

- `/music` and `/en/music` render equivalent layouts
- no broken search behavior
- playlist card click targets are preserved

---

## Phase 3 — Apply Discovery Page Visual System

### Objective

Introduce the approved colorful discovery aesthetic.

### Tasks

1. Add discovery-page-local color tokens and accent states.
2. Implement platform accent mapping:
   - netease -> red/coral
   - tencent -> cyan/green
   - kugou -> blue/violet
3. Style hero with:
   - animated gradient field
   - subtle line/grid overlays
   - large featured card treatment
4. Style playlist cards with:
   - asymmetric sizing
   - glow edge on hover
   - soft lift / cover zoom
   - readable metadata layering
5. Style search results as a discovery feed rather than plain list.
6. Style mini player as persistent floating entry point.

### Constraints

- no heavy WebGL in first pass
- motion should be premium but lightweight
- effects must not reduce readability

### Validation

- platform switch updates accent color cleanly
- hover states feel responsive
- dark/light mode remains visually coherent if retained on page shell

---

## Phase 4 — Add Playlist Detail Routes

### Objective

Create dedicated immersive playlist pages.

### New routes

- `src/pages/music/playlist/[platform]/[id].astro`
- `src/pages/en/music/playlist/[platform]/[id].astro`

### New components

- `src/components/music/PlaylistDetailHero.astro`
- `src/components/music/TrackListPanel.astro`
- `src/components/music/LyricsPanel.astro`

### Tasks

1. Build detail route param parsing for `platform` and `id`.
2. Reuse current data loading approach against Meting API.
3. Design page layout with:
   - top ambient hero
   - artwork-driven background
   - playlist metadata and play controls
   - lower two-column content zone
4. Move current playlist/player behavior into reusable detail-page-friendly pieces.
5. Keep route mirroring for zh/en.

### Validation

- clicking a playlist from discovery opens correct route
- playlist page loads correct data by route params
- playback still works
- current track highlighting works in track list

---

## Phase 5 — Add Song Detail Routes

### Objective

Create a more focused immersive page for single-song listening.

### New routes

- `src/pages/music/song/[platform]/[id].astro`
- `src/pages/en/music/song/[platform]/[id].astro`

### New components

- `src/components/music/SongDetailHero.astro`

### Tasks

1. Create route shells for song details.
2. Load single-song metadata and lyrics by route params.
3. Reuse shared player controls and lyric sync behavior.
4. Increase lyric prominence and reduce surrounding noise versus playlist detail pages.
5. Support navigation back to playlist/discovery context.

### Validation

- clicking song result or track item can open song detail route
- song page artwork, metadata, audio, and lyrics stay in sync

---

## Phase 6 — Unify Mini Player and Navigation Flow

### Objective

Make discovery and detail pages feel connected.

### Tasks

1. Ensure mini player appears on discovery page whenever a song is active.
2. Make mini player deep-link into the appropriate detail route.
3. Decide and implement route transition behavior:
   - preserve current playback when navigating if feasible through shared client state
   - otherwise restore track state from URL/query/local storage
4. Add clear back-navigation affordances from detail pages to discovery.

### Validation

- user can browse, start playback, and open detail without confusion
- navigation feels intentional, not like separate disconnected pages

---

## Phase 7 — Polish and Refinement

### Objective

Apply finishing touches after structure is stable.

### Tasks

1. Tune motion curves and durations.
2. Refine responsive behavior for:
   - hero layout
   - playlist masonry collapse
   - detail-page two-column to one-column transition
   - mini player positioning
3. Improve empty states:
   - no search results
   - no lyrics
   - failed playlist load
4. Add current-card / current-track active states.
5. Ensure text contrast remains acceptable across colorful backgrounds.

### Validation

- mobile layout remains usable
- no large blank states
- no over-aggressive blur/glow

---

## Suggested File Impact Summary

### Likely modified

- `src/pages/music/index.astro`
- `src/pages/en/music/index.astro`
- `src/components/music/PlatformSelector.astro`
- `src/components/music/SearchPanel.astro`
- `src/components/music/VinylPlayer.astro` or its replacement/shared descendants
- `public/styles/music-player.css` or split successor stylesheets

### Likely added

- `src/components/music/MusicHero.astro`
- `src/components/music/PlaylistMasonry.astro`
- `src/components/music/MusicSearchResults.astro`
- `src/components/music/MiniPlayerBar.astro`
- `src/components/music/PlaylistDetailHero.astro`
- `src/components/music/SongDetailHero.astro`
- `src/components/music/TrackListPanel.astro`
- `src/components/music/LyricsPanel.astro`
- `src/pages/music/playlist/[platform]/[id].astro`
- `src/pages/en/music/playlist/[platform]/[id].astro`
- `src/pages/music/song/[platform]/[id].astro`
- `src/pages/en/music/song/[platform]/[id].astro`

---

## Execution Order Recommendation

If implementing in one continuous pass, use this exact order:

1. Shared playback/data contract
2. Discovery page shell
3. Discovery visual system
4. Playlist detail routes
5. Song detail routes
6. Mini player + navigation continuity
7. Polish and responsive refinement

---

## Verification Checklist

- `npm run build`
- test `/music`
- test `/en/music`
- test playlist route in zh/en
- test song route in zh/en
- verify platform switching
- verify playlist switching
- verify search result click-through
- verify lyrics rendering and sync
- verify mini player deep-link behavior

---

## Definition of Done

The redesign is complete when:

1. `/music` feels like a colorful discovery product page.
2. playlist/song clicks open independent immersive routes.
3. playback and lyrics remain functional across routes.
4. zh/en routes stay mirrored.
5. build passes cleanly.

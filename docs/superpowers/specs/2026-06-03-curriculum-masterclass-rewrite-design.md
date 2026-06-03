# Curriculum Masterclass Rewrite — Design Spec

**Date:** 2026-06-03
**Status:** Approved direction, pending spec review
**Scope:** Re-author all 4 tabs across all 10 lessons in `src/data/curriculum.ts` to a definitive masterclass register, and add a custom markdown renderer so the formatting actually displays.

---

## 1. Goal & intent

Groove Academy teaches drum programming on the OXI One. The lesson content is sound but reads like competent notes, not like a session led by the people who *invented* these feels. The goal is to make every tab land like a masterclass taught by the luminaries behind sequencing, percussion, sampling, and drum arrangement — anchored by concrete, *accurate* technique and specific OXI One settings the user can act on immediately, so each concept cements in their mental lexicon and broadens their listening.

**Voice + density already validated** via a Boom Bap proof-of-voice (see §4). The instruction: keep that register and push further.

## 2. Non-goals

- **No structural change** to lessons: count stays 10, order/levels stay `101×3, 201×4, masterclass×3` (enforced by `src/__tests__/curriculum.test.ts`).
- **No change to pattern step data** unless a genuine error surfaces. The fills-tab step references were already audited and corrected (commit prior to this branch). Rewrites must *preserve* that accuracy.
- **No new runtime dependencies.** The markdown renderer is custom (user's explicit choice over `react-markdown`).
- **No redesign** of `App`, `CurriculumNav`, `DrumGrid`, `LessonHeader`, progress, or theming. Only `LessonTabs` is touched, plus one new `Markdown` component.
- The `variations?` field on `Lesson` stays unused — out of scope.

## 3. Content integrity rules (apply to every rewrite)

1. **Step-reference accuracy.** Any step number, "last two hi-hats", "& of beat", "beat N = step M", or replace/add/remove instruction in new prose MUST be re-verified against that lesson's actual `steps` arrays. Convention: 16 steps, 1-indexed; beat 1=step1, beat 2=step5, beat 3=step9, beat 4=step13; 8th notes on odd steps; `g` = ghost (active, low velocity).
2. **OXI One accuracy.** On the OXI One, **Sequencer 8 hosts the kit (pads 1–8); Sequencer 7 is the overflow bank for pads 9–16.** No lesson exceeds 8 instruments, so every instrument belongs on **Seq 8**. The existing data has this inverted (most instruments are tagged `sequencer: 7`, and Latin frames Seq 8 as a separate "second sequencer") — correcting the `sequencer:` values to `8` across the board, and reworking Latin's now-invalid "uses both sequencers" hook, is part of this rewrite. The overflow concept (Seq 7, pads 9–16) can be explained where natural, but no current pattern triggers it. Timing offsets are expressed as % of a 16th-note step (−45% to +45% range). Keep build instructions consistent with the actual pattern.
3. **Factual accuracy on luminaries.** Only well-established, verifiable techniques, records, and gear. This is a teaching tool — no invented quotes, no apocryphal claims. Name a figure only where their *actual* technique is the lesson (see §4 luminary policy).

## 4. Voice bible

### Tab mandates (eliminate overlap; build a throughline)

- **Theory — the architecture.** Why the pattern is shaped this way; the structural idea a producer/arranger/drummer is exploiting. Closes with the concrete OXI One build (kick/snare/hat steps, BPM).
- **Ear Training — the listening assignment.** Specific records and specific moments, and what to listen *for*. Trains recognition and expands the user's intake. Not trivia.
- **Fills — the vocabulary of change.** How to break and re-enter the pattern; fill shapes tied to the verified step data.
- **Soul & Feel — the human layer.** Micro-timing, velocity, and the philosophy of feel, framed by *why*. Keeps and deepens the existing OXI One offset numbers.

### Voice principles

- Second person, in-the-room, declarative. A master showing you their hands.
- Expansive depth is wanted: immersive reads that reward scrolling. Substance over brevity — but every paragraph must teach.
- One memorable `> ` pull-quote per tab where it earns it.

### Luminary policy

- **Sensibility everywhere, names where they earn it.** Channel the artists throughout; name a specific figure (and their *specific move*) only where it is the most instructive way to make the point.
- **Genre-true masters included** alongside the user's named list, for authenticity and to broaden listening. Cast below is dealer's choice, designed for accuracy and distribution (no figure crammed everywhere).

### Format conventions (drive the renderer's supported subset)

`##` / `###` headings · `**bold**` key terms · `*italic*` emphasis · inline `` `code` `` for step/offset/BPM values · `- ` bullet lists · `1. ` numbered lists · `> ` blockquotes for pull-quotes · blank-line paragraph breaks.

Headings mark **sub-sections within a tab** (e.g. `## The displacement`, `### OXI One build`). Do NOT repeat the tab's own name as a heading — the tab button already labels it (the `### Theory` / `### Soul & Feel` labels in the §4 proof were demo framing only).

### Validated proof-of-voice (Boom Bap, abbreviated)

> Rock anchors the downbeat. Boom bap **leaves it**… the second kick lands on the **& of 2** (`step 7`)… *boom* (kick), *bap* (snare)… When DJ Shadow built *Endtroducing…..* almost entirely on an MPC60, the grid became a **canvas**.
>
> Soul: J Dilla turned **quantize off** on his MPC3000… conflicting timing is what makes a loop feel alive. Kick `+15 to +20%`, snare `+10 to +15%`, closed hat `0%` (the anchor), open hat `−5%`.

## 5. Luminary → lesson cast (definitive)

| # | Lesson (level) | Primary voices | Anchor records / gear / techniques |
|---|---|---|---|
| 1 | Rock Backbeat (101) | Al Jackson Jr., Charlie Watts, Ringo Starr, Phil Rudd, Jason McGerr, David Lovering, Chad Smith | Stax/Booker T. backbeat; Watts lifting the hat off the snare; AC/DC discipline; loud-quiet (Pixies) restraint |
| 2 | Boom Bap (101) | J Dilla, Pete Rock, DJ Premier, DJ Shadow, Cut Chemist | SP-1200/MPC60/3000; quantize-off; *Endtroducing…..*; KRS-One naming the genre; chopping soul/jazz |
| 3 | Four on the Floor (101) | Giorgio Moroder, Frankie Knuckles, the Belleville Three, Daft Punk, James Murphy/DFA | "I Feel Love" sequenced pulse; Roland TR-909; Chicago house; LCD's live-played four-on-the-floor |
| 4 | Funk — The Pocket (201) | Clyde Stubblefield & Jabo Starks, David Garibaldi, Bernard Purdie, Zigaboo Modeliste, Chad Smith | "Funky Drummer" break; Tower of Power linear funk; Purdie ghost-note science; Meters second-line |
| 5 | Fills & Transitions Pt.1 (201) | John Bonham, Stewart Copeland, Jason McGerr, Travis Barker | The lead-up and the landing; hat drop-out as signal; fills as hooks; punk precision |
| 6 | Reggae — One Drop (201) | Carlton Barrett, Sly Dunbar, King Tubby / Lee "Scratch" Perry | One-drop origin (Wailers); rockers/steppers; dub as subtraction; negative space |
| 7 | Latin — Clave (201) | Changuito, Tito Puente, Giovanni Hidalgo, Mongo Santamaría, + Erin Tate | Son clave 3-2; songo; timbale/conga voicing; translating an asymmetric grid to a sequencer |
| 8 | Jazz — Swing (masterclass) | Elvin Jones, Tony Williams, Philly Joe Jones, Max Roach, Papa Jo Jones | Triplet "spang-a-lang" ride; comping; Tony Williams opening up time; hat as the clock |
| 9 | Fills & Transitions Pt.2 (masterclass) | John Bonham, Steve Gadd, Questlove, Bernard Purdie, The Avalanches | "50 Ways" linearity; breathwork; restraint; transition-as-edit / fill-as-collage |
| 10 | Humanization (masterclass) | J Dilla, The Avalanches, Erin Tate, Steve Reich | Quantize-off as a system; velocity + micro-timing; phasing ("Music for 18 Musicians"); programmed-meets-live |

Each lesson's four tabs draw from its row, distributing names so no tab is a credits roll. Cross-genre fills lessons (5, 9) and Humanization (10) legitimately reuse drumming masters; that is intended.

## 6. Markdown renderer design

### Component

New file `src/components/Markdown.tsx` exporting `Markdown({ source }: { source: string })`. `LessonTabs` replaces `{tabs[activeTab]}` with `<Markdown source={tabs[activeTab]} />` and drops `whitespace-pre-wrap` (the renderer owns spacing).

### Supported subset (block level)

Parse `source` into blocks split on blank lines, classifying each:

- **Heading** — line starting `## ` (→ prominent heading) or `### ` (→ smaller heading).
- **Blockquote** — consecutive lines starting `> ` (→ left-border pull-quote).
- **Unordered list** — consecutive lines starting `- ` (→ `<ul>`).
- **Ordered list** — consecutive lines starting `N. ` (→ `<ol>`).
- **Paragraph** — anything else; internal single newlines become spaces (blocks are the unit of separation).

### Supported subset (inline, applied to all text runs)

Tokenize in this order to avoid cross-parsing: inline code `` `…` `` first (its contents are literal — no further parsing), then `**bold**`, then `*italic*`. Implemented as a small tokenizer returning React nodes, keyed by index. Unmatched markers render literally.

### Styling (Tailwind, matches dark theme; green accent already in use)

- `h3`: `text-base font-semibold text-neutral-100 mt-4 first:mt-0`
- `h4`: `text-sm font-semibold text-neutral-200 mt-3`
- `p`: `mb-3 leading-relaxed`
- `ul`/`ol`: `list-disc`/`list-decimal pl-5 mb-3 space-y-1`
- `blockquote`: `border-l-2 border-green-700 pl-3 italic text-neutral-400 my-3`
- inline `code`: `font-mono text-[0.85em] bg-neutral-800 text-green-300 rounded px-1 py-0.5`
- `strong`: `font-semibold text-neutral-100`; `em`: `italic`

Container in `LessonTabs` keeps `text-sm text-neutral-300`.

### Tests — `src/__tests__/Markdown.test.tsx` (vitest + @testing-library/react, already in the project)

- Renders `**bold**` → `<strong>`, `*italic*` → `<em>`, `` `code` `` → `<code>`.
- Heading lines → `<h3>`/`<h4>` with correct text.
- `- ` lines → a `<ul>` with the right number of `<li>`; `1. ` lines → `<ol>`.
- `> ` lines → a `<blockquote>`.
- Asterisks inside inline code are NOT parsed as bold/italic.
- Blank lines produce separate `<p>` blocks; a plain string renders as one paragraph with no literal `**` leaking through.

## 7. Testing & verification strategy

1. `npx tsc --noEmit` — clean.
2. `npm test` (vitest) — existing suite (curriculum structure, App, tabs, grid, progress) stays green; new `Markdown` tests pass. `LessonTabs.test.tsx` updated if it asserts on raw-string rendering.
3. Manual sanity (optional `/run`): open the app, click through tabs on a 101, a 201, and a masterclass lesson; confirm headings/bold/lists/quotes/code render and no literal `**` remains.
4. Content integrity self-check: before finalizing each lesson, re-verify every step/instrument reference in the new prose against the pattern arrays (§3 rule 1).

## 8. Implementation sequence

1. **Renderer first.** Build `Markdown.tsx` + tests; wire into `LessonTabs`; update `LessonTabs.test.tsx` if needed. Verify green. This de-risks all content work (we can see it render).
2. **Content, lesson by lesson** (101 → 201 → masterclass), all four tabs per lesson, re-verifying step references as we go: Rock → Boom Bap → Four on the Floor → Funk → Fills Pt.1 → Reggae → Latin → Jazz → Fills Pt.2 → Humanization.
3. **Full verification** (§7) and visual pass.

Content lives entirely in `src/data/curriculum.ts` template literals; the only code change is the renderer + `LessonTabs` wiring.

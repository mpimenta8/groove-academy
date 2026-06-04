# Curriculum Masterclass Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-author all 4 tabs across all 10 lessons to a definitive masterclass register, backed by a custom markdown renderer so the formatting actually displays.

**Architecture:** Two phases. (1) A dependency-free `Markdown` component parses a fixed markdown subset (headings, bold, italic, inline code, lists, blockquotes) into Tailwind-styled React, wired into `LessonTabs`. (2) `src/data/curriculum.ts` content is rewritten lesson-by-lesson against the §5 luminary cast and §4 voice bible in the design spec, with the OXI One sequencer model corrected (all instruments on Seq 8).

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind; Vitest + @testing-library/react + @testing-library/user-event.

**Reference docs:** Design spec at `docs/superpowers/specs/2026-06-03-curriculum-masterclass-rewrite-design.md`. The validated voice/density bar is the Boom Bap proof-of-voice (spec §4). **Content briefs below are the exact spec for each tab** — final prose is authored at execution to that brief and that voice bar (we do not duplicate 40 verbatim tabs into this plan; the brief removes ambiguity without making the plan the deliverable).

---

## File Structure

- **Create** `src/components/Markdown.tsx` — parses the markdown subset → styled React. One responsibility: rendering.
- **Create** `src/__tests__/Markdown.test.tsx` — unit tests for the renderer.
- **Modify** `src/components/LessonTabs.tsx` — render tab text through `<Markdown>` instead of raw `whitespace-pre-wrap`.
- **Modify** `src/data/curriculum.ts` — flip every `sequencer: 7` → `sequencer: 8`; rewrite all 40 tabs.
- **Unchanged but must stay green:** `src/__tests__/curriculum.test.ts`, `src/__tests__/LessonTabs.test.tsx`, `src/__tests__/App.test.tsx`.

---

## Task 1: Markdown renderer

**Files:**
- Create: `src/components/Markdown.tsx`
- Test: `src/__tests__/Markdown.test.tsx`

- [ ] **Step 1: Confirm test tooling runs**

Run: `npm test -- --run`
Expected: existing suite passes (App, CurriculumNav, DrumGrid, LessonHeader, LessonTabs, curriculum, useProgress). Confirms vitest + testing-library are wired before adding more.

- [ ] **Step 2: Write the failing test**

Create `src/__tests__/Markdown.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Markdown } from '../components/Markdown'

describe('Markdown', () => {
  it('renders **bold** as <strong>', () => {
    const { container } = render(<Markdown source="hello **world**" />)
    expect(container.querySelector('strong')?.textContent).toBe('world')
  })

  it('renders *italic* as <em>', () => {
    const { container } = render(<Markdown source="an *emphasis* here" />)
    expect(container.querySelector('em')?.textContent).toBe('emphasis')
  })

  it('renders `code` as <code>', () => {
    const { container } = render(<Markdown source="set `step 7` active" />)
    expect(container.querySelector('code')?.textContent).toBe('step 7')
  })

  it('does not parse asterisks inside inline code', () => {
    const { container } = render(<Markdown source="`a*b*c`" />)
    expect(container.querySelector('code')?.textContent).toBe('a*b*c')
    expect(container.querySelector('em')).toBeNull()
    expect(container.querySelector('strong')).toBeNull()
  })

  it('renders ## as h3 and ### as h4', () => {
    const { container } = render(<Markdown source={'## Big\n\n### Small'} />)
    expect(container.querySelector('h3')?.textContent).toBe('Big')
    expect(container.querySelector('h4')?.textContent).toBe('Small')
  })

  it('renders - lines as a ul with one li per line', () => {
    const { container } = render(<Markdown source={'- one\n- two\n- three'} />)
    const items = container.querySelectorAll('ul li')
    expect(items).toHaveLength(3)
    expect(items[0].textContent).toBe('one')
  })

  it('renders numbered lines as an ol', () => {
    const { container } = render(<Markdown source={'1. first\n2. second'} />)
    const items = container.querySelectorAll('ol li')
    expect(items).toHaveLength(2)
    expect(items[1].textContent).toBe('second')
  })

  it('renders > lines as a blockquote', () => {
    const { container } = render(<Markdown source="> a remembered line" />)
    expect(container.querySelector('blockquote')?.textContent).toBe('a remembered line')
  })

  it('splits blank-line-separated blocks into separate paragraphs', () => {
    const { container } = render(<Markdown source={'first para\n\nsecond para'} />)
    expect(container.querySelectorAll('p')).toHaveLength(2)
  })

  it('leaves no literal markup in a plain bold paragraph', () => {
    const { container } = render(<Markdown source="the **pocket** matters" />)
    expect(container.textContent).not.toContain('*')
  })
})
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- --run Markdown`
Expected: FAIL — `Cannot find module '../components/Markdown'`.

- [ ] **Step 4: Implement the renderer**

Create `src/components/Markdown.tsx`:

```tsx
import type { ReactNode } from 'react'

// Inline: match inline code first (literal contents), then bold, then italic.
const INLINE = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  let key = 0
  let m: RegExpExecArray | null
  INLINE.lastIndex = 0
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    const t = m[0]
    if (t.startsWith('`')) {
      nodes.push(
        <code key={key++} className="font-mono text-[0.85em] bg-neutral-800 text-green-300 rounded px-1 py-0.5">
          {t.slice(1, -1)}
        </code>,
      )
    } else if (t.startsWith('**')) {
      nodes.push(
        <strong key={key++} className="font-semibold text-neutral-100">
          {t.slice(2, -2)}
        </strong>,
      )
    } else {
      nodes.push(<em key={key++} className="italic">{t.slice(1, -1)}</em>)
    }
    last = INLINE.lastIndex
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function renderBlock(block: string, key: number): ReactNode {
  const lines = block.split('\n')
  if (block.startsWith('### ')) {
    return <h4 key={key} className="text-sm font-semibold text-neutral-200 mt-3 first:mt-0">{parseInline(block.slice(4))}</h4>
  }
  if (block.startsWith('## ')) {
    return <h3 key={key} className="text-base font-semibold text-neutral-100 mt-4 first:mt-0">{parseInline(block.slice(3))}</h3>
  }
  if (lines.every((l) => l.startsWith('> '))) {
    return (
      <blockquote key={key} className="border-l-2 border-green-700 pl-3 italic text-neutral-400 my-3">
        {parseInline(lines.map((l) => l.slice(2)).join(' '))}
      </blockquote>
    )
  }
  if (lines.every((l) => l.startsWith('- '))) {
    return (
      <ul key={key} className="list-disc pl-5 mb-3 space-y-1">
        {lines.map((l, j) => <li key={j}>{parseInline(l.slice(2))}</li>)}
      </ul>
    )
  }
  if (lines.every((l) => /^\d+\.\s/.test(l))) {
    return (
      <ol key={key} className="list-decimal pl-5 mb-3 space-y-1">
        {lines.map((l, j) => <li key={j}>{parseInline(l.replace(/^\d+\.\s/, ''))}</li>)}
      </ol>
    )
  }
  return <p key={key} className="mb-3 leading-relaxed last:mb-0">{parseInline(lines.join(' '))}</p>
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n{2,}/)
  return <div className="text-sm text-neutral-300">{blocks.map((b, i) => renderBlock(b, i))}</div>
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- --run Markdown`
Expected: PASS (10 tests).

- [ ] **Step 6: Typecheck**

Run: `npx tsc --noEmit`
Expected: clean (exit 0).

- [ ] **Step 7: Commit**

```bash
git add src/components/Markdown.tsx src/__tests__/Markdown.test.tsx
git commit -m "Add custom markdown renderer for lesson tabs

Parses a fixed subset (headings, bold, italic, inline code, lists,
blockquotes) into Tailwind-styled React. Inline code is matched first
so asterisks inside code are not treated as emphasis. No new deps."
```

---

## Task 2: Wire Markdown into LessonTabs

**Files:**
- Modify: `src/components/LessonTabs.tsx`

- [ ] **Step 1: Replace the content div**

In `src/components/LessonTabs.tsx`, add the import after the existing imports:

```tsx
import { Markdown } from './Markdown'
```

Replace the content `<div>` (currently `<div className="p-4 bg-neutral-950 text-neutral-300 text-sm leading-relaxed whitespace-pre-wrap">{tabs[activeTab]}</div>`) with:

```tsx
      <div className="p-4 bg-neutral-950">
        <Markdown source={tabs[activeTab]} />
      </div>
```

- [ ] **Step 2: Run the affected tests**

Run: `npm test -- --run LessonTabs`
Expected: PASS — plain-string fixtures render as a single `<p>`, so `getByText('Theory content here')` still matches.

- [ ] **Step 3: Typecheck + full suite**

Run: `npx tsc --noEmit && npm test -- --run`
Expected: clean typecheck; all suites green.

- [ ] **Step 4: Commit**

```bash
git add src/components/LessonTabs.tsx
git commit -m "Render lesson tab content through markdown renderer

Tab text now displays formatted instead of leaking literal markdown
markers. The renderer owns text styling, so the raw whitespace-pre-wrap
container is gone."
```

---

## Task 3: Correct the OXI One sequencer model in data

**Files:**
- Modify: `src/data/curriculum.ts`

Per spec §3.2: Seq 8 is the kit (pads 1–8), Seq 7 is overflow (pads 9–16). No lesson exceeds 8 instruments, so every instrument belongs on Seq 8. (Prose references to sequencer numbers are corrected within each lesson's content task; Latin's "both sequencers" hook is reworked in Task 10.)

- [ ] **Step 1: Flip all sequencer assignments**

In `src/data/curriculum.ts`, replace every occurrence of `sequencer: 7` with `sequencer: 8`. (The Latin claves is already `sequencer: 8`; after this, all instruments are `8`.)

- [ ] **Step 2: Verify the data**

Run: `npx tsc --noEmit && npm test -- --run curriculum`
Expected: clean typecheck; curriculum tests pass (the "sequencer 7 or 8" test still holds — all are 8).

- [ ] **Step 3: Commit**

```bash
git add src/data/curriculum.ts
git commit -m "Put every instrument on Sequencer 8 (the kit)

OXI One model: Seq 8 hosts the kit (pads 1-8), Seq 7 is overflow for
pads 9-16. No lesson has more than 8 instruments, so all belong on
Seq 8; the data previously had this inverted."
```

---

## Tasks 4–13: Content rewrites (one task per lesson)

**Shared procedure for every content task below:**

- [ ] **Step A: Rewrite all four tabs** for the lesson in `src/data/curriculum.ts`, following that lesson's brief and the spec §4 voice bible (expansive masterclass register; names where they earn it; one `> ` pull-quote per tab; `##`/`###` for sub-sections, never repeating the tab's own name). Use the markdown subset only; **no nested inline formatting** (e.g. code inside bold) — the renderer does not nest.
- [ ] **Step B: Verify step references** — re-check every step number / "& of beat" / "last N" / add-remove-replace claim in the new prose against that lesson's `steps` arrays (spec §3 rule 1). The fills tab numbers were already audited correct; do not regress them. Confirm every "OXI One build" lists instruments on **Seq 8** with correct steps and BPM.
- [ ] **Step C: Typecheck + full suite** — `npx tsc --noEmit && npm test -- --run`. Expected: clean; all green.
- [ ] **Step D: Commit** — `git add src/data/curriculum.ts && git commit -m "Rewrite <Lesson> tabs to masterclass depth"`.

Verified pattern data and OXI builds (Seq 8) are given per lesson so Step B has a source of truth.

---

### Task 4: Rock — The Backbeat (101)

**Pattern:** Kick `1, 9` · Snare `5, 13` · Hi-Hat Closed `1,3,5,7,9,11,13,15`. **Build (Seq 8):** kick 1,9; snare 5,13; closed hat on every odd step; 120–140 BPM.

- **Theory** — the backbeat as gravity: 2 and 4 are the body's anchor, simplicity creates space. Advanced wrinkle: Charlie Watts *lifting the hat off the snare* (not playing them together) for the Stones' lope; Al Jackson Jr. as the human timekeeper at Stax. Close with the build.
- **Ear** — clap on 2 and 4; assignments: Al Jackson Jr. (Booker T. & the M.G.'s), Phil Rudd's discipline (AC/DC "Back in Black"), Ringo's feel, Dave Grohl's power (Nirvana). What to listen for: the snare "crack" cutting the mix.
- **Fills** — keep verified content: replace the last two hi-hats (`steps 13, 15`) with snares; the 4-stroke (snare `13,14,15` → kick `1`). Frame as McGerr/Lovering taste — the fill that serves the song.
- **Soul** — behind-the-grid lay-back; the existing OXI offsets (kick +5–8%/+12–15%, snare +8–12%/+15–20%, hat 0%); Watts/Ringo "feel over flash." Pull-quote on weight vs. urgency.

### Task 5: Boom Bap — (101)

**Pattern:** Kick `1, 7` · Snare `5, 13` · HH Closed odd steps · HH Open `8, 16`. **Build (Seq 8):** kick 1,7; snare 5,13; closed hat odd; open hat 8,16; 85–95 BPM.

- Use the **validated proof-of-voice** (spec §4) as the bar. **Theory:** displacement (kick on & of 2 = `step 7`), boom/bap onomatopoeia (KRS-One), open hat as breath, the grid as canvas (DJ Shadow's *Endtroducing…..* on the MPC60). **Ear:** Pete Rock, DJ Premier, the SP-1200 grit; listen for the "unexpected" kick. **Fills:** verified — replace open hat (`step 16`) with snare, add snare `step 15`. **Soul:** Dilla quantize-off on the MPC3000; offsets kick +15–20%, snare +10–15%, hat 0%, open hat −5%; MPC swing ~56–60%.

### Task 6: Four on the Floor — (101)

**Pattern:** Kick `1,5,9,13` · Snare `5,13` · Clap `5,13` · HH Closed odd · HH Open `8`. **Build (Seq 8):** kick 1,5,9,13; snare+clap 5,13; closed hat odd; open hat 8 only; 120–132 house / 130–145 techno.

- **Theory** — relentless quarter-note kick as hypnosis; the single open hat on & of 2 (`step 8`) as the only breath; Giorgio Moroder's sequenced "I Feel Love" as the ur-text; the Roland TR-909 as the instrument. **Ear** — Frankie Knuckles (Chicago), the Belleville Three (Detroit), LCD Soundsystem "Dance Yrself Clean" (James Murphy's live-played drift), Daft Punk filter-house. **Fills** — verified: the drop (remove kick on beat 4 = `step 13`), tension, kick returns on beat 1. **Soul** — on-grid as aesthetic choice; Murphy's human drift vs. techno rigidity; existing offsets (kick 0/−3%, closed hat −3–5%, open hat +5–8%, clap +3–5% off snare).

### Task 7: Funk — The Pocket (201)

**Pattern:** Kick `1, 11` · Snare ghost `3,7,12,14` + full `5,13` · HH Closed all 16 · HH Open `8`. **Build (Seq 8):** kick 1,11; full snare 5,13; ghost snare 3,7,12,14; all 16 hats; open hat 8; ghosts at 30–40% velocity; 95–110 BPM.

- **Theory** — 16th-note density as motion; ghost notes as connective tissue (feel them, don't hear them); David Garibaldi's linear funk (Tower of Power). **Ear** — Clyde Stubblefield's "Funky Drummer" (most-sampled break), Bernard Purdie's ghost-note science, Zigaboo Modeliste (The Meters) second-line. **Fills** — verified: 16th snares `14,15,16` at full velocity → kick `1`. **Soul** — ghost-early / full-late push-pull; existing offsets (ghosts −3–5%, full +5–8%, kick −3–5%, hats alt ±3%); Purdie/Garibaldi feel.

### Task 8: Fills & Transitions Pt.1 (201)

**Pattern:** Kick `1,9,16` · Snare `5,13,14,15,16` · Tom High `15` · Tom Mid `16` · HH Closed `1,3,5,7,9,11` (drops out beat 4). **Build (Seq 8):** as written; fill on last 4 steps `13–16`; downbeat kick `1` is the payoff.

- **Theory** — the fill is about the *landing*; the hat drop-out as the "something's coming" signal; fills live on bar 4 of a phrase. **Ear** — John Bonham (the gathering bar, "Good Times Bad Times" triplets), Stewart Copeland (fills as hooks), McGerr (taste), Travis Barker (precision). **Fills** — verified three types: snare roll (all of beat 4 `13–16`), tom cascade (high `15` → mid `16` — **two toms, no floor tom**), kick setup (remove kick beat 3 = `step 9`, return beat 1 = `step 1`). **Soul** — the rush + the settle; existing offsets (step 13 0%, 14 −5%, 15 −8%, 16 −10–12%, landing 0/+3%).

### Task 9: Reggae — The One Drop (201)

**Pattern:** Kick `9` · Snare/Rim `9` · HH Closed odd · HH Open `4, 12`. **Build (Seq 8):** kick+rim both on 9 only; closed hat odd; open hat 4,12; 65–80 BPM (slower = heavier).

- **Theory** — empty beat 1; kick+snare together on beat 3 (`step 9`); negative space as the groove; this inverts rock's anchor instinct. **Ear** — Carlton Barrett (Bob Marley & The Wailers — the one-drop's author), Sly Dunbar (rockers/steppers), dub as subtraction (King Tubby / Lee "Scratch" Perry — the mixing desk as an instrument). **Fills** — verified: skank fill on the & of every beat (`steps 3,7,11,15`), then drop back. **Soul** — heaviest lay-back; existing offsets (drop +20–25%, closed hat +8–12%, open hat −5%); dub timing and space.

### Task 10: Latin — Clave (201)

**Pattern:** Kick `1, 7` · Snare/Rim `8` · Claves `1,4,7,10,13` · HH Closed odd. **Build (Seq 8):** ALL instruments on Seq 8 — claves 1,4,7,10,13; kick 1,7; rim 8; closed hat odd; 100–120 BPM. **Rework the old "first pattern to use both sequencers" hook** — under the corrected model everything is on Seq 8; optionally explain the Seq 7 overflow concept (pads 9–16) as a forward reference, but do not claim this pattern uses it.

- **Theory** — son clave 3-2 (three hits `1,4,7`, two hits `10,13`); the clave as law that everything locks to; it's implied even when unplayed. **Ear** — Changuito (Los Van Van, songo), Tito Puente (timbales), Giovanni Hidalgo / Mongo Santamaría (congas); clap to find the asymmetric 3-2. **Fills** — verified: snares `15,16` → `1` across the bar line ("the and-a-one"); Erin Tate angle on translating an odd grid to a sequencer. **Soul** — push-forward feel (opposite of reggae/boom bap); existing offsets (clave −3–5%, kick −3–5%, rim +3–5%, hat 0/−3%).

### Task 11: Jazz — Swing Feel (masterclass)

**Pattern:** Ride `1,4,5,8,9,12,13,16` · HH foot `5, 13` · Snare comp `7, 15` · Kick feather `1, 9`. **Build (Seq 8):** ride 1,4,5,8,9,12,13,16; foot hat 5,13; feathered kick 1,9; 120–220 BPM.

- **Theory** — triplet grid not 16ths; the "spang-a-lang" ride; comping as conversation; the 16-step approximation of swing. **Ear** — Elvin Jones (Coltrane — rolling triplet wave), Tony Williams (Miles — opened up time, crisp 2-and-4 hat), Philly Joe Jones, Max Roach (melodic), Papa Jo Jones (moved time to the hat). Ride as the clock. **Fills** — keep as intentional *suggestion* (tom on `step 15`, crash on `step 1`); fills "answer the soloist." **Soul** — swing via late off-ride hits (`steps 4,8,12,16` at +10–15%); existing offsets; Elvin's triplet feel; pull-quote on ride off-beats at +12%.

### Task 12: Fills & Transitions Pt.2 (masterclass)

**Pattern:** Kick `1, 16` · Snare `5,9,10,13,14,15,16` · Tom High `11, 16` · Tom Mid `12, 15` · Tom Floor `14` · Crash `1`. **Build (Seq 8):** fill starts beat 3 (`step 9`) and builds across the second half; crash on `step 1`; kick drives under the crash.

- **Theory** — a masterclass fill is *better placed*, not longer; "breathwork" (pattern = exhale, fill = inhale, beat 1 = exhale); the early-starting fill. **Ear** — Bonham (the breath before), Steve Gadd ("50 Ways to Leave Your Lover" linearity), Questlove (restraint, the pocket fill), the gathering bar. **Fills** — verified three shapes: slow build (8ths → 16ths), reverse cascade (floor `14` → mid `15` → high `16` → snare, bottom-up), dropout (remove **kick + toms** in last 2 beats, just snare — **no hi-hat in this kit**). The Avalanches angle: transition as edit/collage. **Soul** — fill body rushes + landing settles heavy; existing offsets (steps 9–12 −3–5%, 13–14 −8%, 15–16 −10–12%, crash 0/+3%, kick +5%) and the velocity crescendo.

### Task 13: Humanization (masterclass)

**Pattern:** Kick `1,5,9,13` · Snare full `5,13` + ghost `3,7,9,12,15` · HH Closed alternating full/ghost all 16 · HH Open `8, 16`. **Build (Seq 8):** strong hits velocity 100, ghosts 35–45; lay back kick/snare, hat on grid.

- **Theory** — the grid is a suggestion; two tools (velocity variation; timing micro-shift); a human never hits every note the same. **Ear** — machine vs. live drummer; Steve Reich's "Music for 18 Musicians" (phase differences create motion). **Fills** — humanized crescendo (soft → medium → loud → CRASH); program velocities explicitly. **Soul** — the Dilla method as a *system* (quantize-off deliberately); existing offsets (kick +15–20%, snare +12–18%, hat 0%, ghosts −3–5%); velocity variation (±5% per hit); the psychoacoustic trick (quiet notes are *perceived* late); The Avalanches / Erin Tate on imperfection-as-craft. Pull-quote: timing and velocity working together.

---

## Task 14: Final verification

- [ ] **Step 1: Full suite + typecheck**

Run: `npx tsc --noEmit && npm test -- --run`
Expected: clean typecheck; every suite green (curriculum still 10 lessons / 3-4-3 ordering / all-tabs-non-empty; Markdown; LessonTabs; App).

- [ ] **Step 2: Visual pass (optional but recommended)**

Run the app (`npm run dev`, or the `/run` skill). Open a 101, a 201, and a masterclass lesson; click all four tabs. Confirm: headings/bold/lists/blockquotes/inline-code render; no literal `**` or backticks leak; OXI builds say Seq 8; no step reference looks wrong against the grid.

- [ ] **Step 3: Confirm branch state**

Run: `git log --oneline main..HEAD`
Expected: spec commits + renderer + wiring + sequencer fix + 10 content commits. Branch ready for the `superpowers:finishing-a-development-branch` skill (merge/PR decision).

---

## Self-Review

- **Spec coverage:** §1 goal → all content tasks; §2 non-goals → respected (no structural/test/dep changes; `variations?` untouched); §3 integrity → Step B in every content task + Task 3 sequencer fix; §4 voice bible → per-lesson briefs reference it; §5 cast → distributed across Tasks 4–13; §6 renderer (component, subset, inline-first, styling, tests) → Task 1; §7 testing → Steps C + Task 14; §8 sequence (renderer → data → 101→201→masterclass) → Task order. No gaps.
- **Placeholder scan:** Renderer task carries complete test + implementation code. Content tasks carry concrete briefs (names, facts, exact steps, BPM, offsets) — not "write good content." No TBD/TODO.
- **Type/name consistency:** `Markdown({ source }: { source: string })` exported from `src/components/Markdown.tsx`, imported and called identically in Task 2 and the test. `parseInline`/`renderBlock` are internal. Sequencer values are `8` everywhere post-Task-3, consistent with the `7 | 8` type and the curriculum test.

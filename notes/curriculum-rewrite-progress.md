# Curriculum Masterclass Rewrite — Progress / Resume Note

**Date:** 2026-06-03
**Branch:** `curriculum-masterclass-rewrite` (off `main`)
**Spec:** `docs/superpowers/specs/2026-06-03-curriculum-masterclass-rewrite-design.md`
**Plan:** `docs/superpowers/plans/2026-06-03-curriculum-masterclass-rewrite.md`

## State at pause

Working tree clean. Last verified: `npx tsc --noEmit` clean, `npm test -- --run` = **50 tests / 8 files green**.

### Done & committed
- **Renderer** — `src/components/Markdown.tsx` + `src/__tests__/Markdown.test.tsx` (10 tests). Subset: `##`/`###`, `**bold**`, `*italic*`, inline `` `code` `` (matched first), `- ` / `1. ` lists, `> ` blockquote, blank-line paragraphs.
- **Wiring** — `LessonTabs.tsx` renders tab text through `<Markdown>` (raw `whitespace-pre-wrap` removed).
- **Sequencer fix** — all 43 instruments now `sequencer: 8` (Seq 8 = kit; Seq 7 = overflow pads 9–16, untriggered).
- **Task 4 — Rock (Backbeat)** — all 4 tabs rewritten (Al Jackson Jr., Charlie Watts, Ringo, Phil Rudd, McGerr, Lovering, Grohl).

## Remaining (plan Tasks 5–14)

- **101 level (finish, then checkpoint):** T5 Boom Bap · T6 Four on the Floor
- **201 level (then checkpoint):** T7 Funk/Pocket · T8 Fills & Transitions Pt.1 · T9 Reggae/One Drop · T10 Latin/Clave
- **Masterclass (then checkpoint):** T11 Jazz/Swing · T12 Fills & Transitions Pt.2 · T13 Humanization
- **T14:** final verification, then `superpowers:finishing-a-development-branch`.

Per-lesson briefs (names, exact step refs, OXI build, BPM, offsets) are in the plan, Tasks 4–13. Voice bar = the Boom Bap proof-of-voice in spec §4 + the committed Rock rewrite.

## Per-lesson procedure (each content task)
1. Rewrite all 4 tabs per the plan brief + spec §4 voice bible (expansive; names where they earn it; one `> ` pull-quote per tab; `##`/`###` for sub-sections, never repeating the tab's own name; no nested inline formatting).
2. Re-verify every step reference / "& of beat" / "last N" / add-remove-replace claim against the lesson's `steps` arrays (spec §3.1). Confirm OXI build lists **Seq 8** with correct steps + BPM.
3. `npx tsc --noEmit && npm test -- --run` → clean + all green.
4. Commit (one commit per lesson).

## Gotchas (don't lose these)
- **Escape inline-code backticks as `\`` inside the `theory:`/`ear:`/`fills:`/`soul:` template literals** — an unescaped backtick terminates the literal and breaks the file. tsc will catch it.
- **Don't regress the audited fill step-refs:** Fills Pt.1 tom cascade is **high → mid only (no floor tom)**; Fills Pt.2 dropout removes **kick + toms (no hi-hat in that kit)**.
- **Latin:** drop the old "first pattern to use both sequencers" hook — everything is on Seq 8 now (optionally explain the Seq 7 overflow concept as a forward reference).
- **Jazz fills:** the tom-on-15 / crash-on-1 is an intentional *suggestion* (instruments not in the kit) — keep that framing.

## Task tracker
Tasks #1–4 completed, #5–14 pending (matching the list above).

# Opus Audit — Fills Tab Step Reference Check

Prompt for cross-checking all fills tab step number references against actual pattern data.

---

I'm building a drum sequencer curriculum app. Each lesson has a 16-step pattern and a "fills" tab with instructional text. I need you to audit every fills tab and check that all step number references are accurate given the actual pattern data.

**How the sequencer works:**
- 16 steps per bar. Step 1 = beat 1, step 5 = beat 2, step 9 = beat 3, step 13 = beat 4.
- 8th notes fall on odd steps: 1, 3, 5, 7, 9, 11, 13, 15.
- 16th notes fall on all steps.
- `X` = active step, `_` = inactive, `g` = ghost note (active, low velocity).

**For each lesson below, verify:**
1. Every step number mentioned in the fills text actually has an active note on that instrument in the pattern.
2. Every "last two hi-hats" / "last snare" / etc. reference correctly identifies which steps those fall on.
3. Any instruction to "replace" or "add" a note makes sense given what's already there.

Flag any errors with: the lesson name, the incorrect claim, and what it should say.

---

**Rock Backbeat**
- Kick: `[X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_]`
- Snare: `[_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_]`
- Hi-Hat Closed: `[X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_]`

Fills tab: *"The simplest fill from this pattern: replace the last two hi-hats (steps 13 and 15) with two snare hits. This signals the end of the bar without complexity. A classic 4-stroke fill: snare on steps 13, 14, 15, then kick back on 1. The snare "runs" into the downbeat."*

---

**Boom Bap**
- Kick: `[X,_,_,_, _,_,X,_, _,_,_,_, _,_,_,_]`
- Snare: `[_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_]`
- Hi-Hat Closed: `[X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_]`
- Hi-Hat Open: `[_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,X]`

Fills tab: *"Hip-hop fills are often just snare doubles or triples. Replace the open hi-hat (step 16) with a snare hit and add another snare on step 15. Two snares before the downbeat = classic hip-hop setup."*

---

**Four on the Floor**
- Kick: `[X,_,_,_, X,_,_,_, X,_,_,_, X,_,_,_]`
- Snare: `[_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_]`
- Clap: `[_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_]`
- Hi-Hat Closed: `[X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_]`
- Hi-Hat Open: `[_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_]`

Fills tab: *"Electronic fills often aren't snare rolls — they're drops. Remove the kick from beat 4 in the last bar (remove step 13). The anticipation of the 'missing' kick creates tension. Then the kick comes back on beat 1 and the drop hits hard."*

---

**Funk — The Pocket**
- Kick: `[X,_,_,_, _,_,_,_, _,_,X,_, _,_,_,_]`
- Snare: `[_,_,g,_, X,_,g,_, _,_,_,g, X,g,_,_]`
- Hi-Hat Closed: `[X,X,X,X, X,X,X,X, X,X,X,X, X,X,X,X]`
- Hi-Hat Open: `[_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_]`

Fills tab: *"Funk fills often use the snare to build into beat 1. A classic: play 16th note snare hits on steps 14, 15, 16 (all at full velocity), then land on kick on step 1. Three quick snares into a downbeat — a 'push' into the next bar."*

---

**Fills & Transitions Pt. 1**
- Kick: `[X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,X]`
- Snare: `[_,_,_,_, X,_,_,_, _,_,_,_, X,X,X,X]`
- Tom High: `[_,_,_,_, _,_,_,_, _,_,_,_, _,_,X,_]`
- Tom Mid: `[_,_,_,_, _,_,_,_, _,_,_,_, _,_,_,X]`
- Hi-Hat Closed: `[X,_,X,_, X,_,X,_, X,_,X,_, _,_,_,_]`

Fills tab: *"Three basic fill types: 1. Snare roll: all 4 steps of beat 4 are snare hits. Simple, works everywhere. 2. Tom cascade: high tom → mid tom → floor tom across beat 4. Signals a drop. 3. Kick setup: remove the kick on beat 3, add it back hard on beat 1. The absence creates anticipation."*

---

**Reggae — The One Drop**
- Kick: `[_,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_]`
- Snare/Rim: `[_,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_]`
- Hi-Hat Closed: `[X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_]`
- Hi-Hat Open: `[_,_,_,X, _,_,_,_, _,_,_,X, _,_,_,_]`

Fills tab: *"Reggae fills are rare and minimal. A 'skank' fill: add snare hits on the & of every beat (steps 3, 7, 11, 15) for one bar. Then drop back into the one drop. The contrast between density and space is the fill."*

---

**Latin — Clave**
- Kick: `[X,_,_,_, _,_,X,_, _,_,_,_, _,_,_,_]`
- Snare/Rim: `[_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_]`
- Claves (Seq 8): `[X,_,_,X, _,_,X,_, _,X,_,_, X,_,_,_]`
- Hi-Hat Closed: `[X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_]`

Fills tab: *"Latin fills often use the conga or timbale — translate this to snare and tom. A common fill: add snare hits on steps 15, 16, and then 1 (crossing the bar line). The anticipation of beat 1 ('the and-a-one') is a classic Latin setup."*

---

**Jazz — Swing Feel**
- Ride Cymbal: `[X,_,_,X, X,_,_,X, X,_,_,X, X,_,_,X]`
- Hi-Hat foot: `[_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_]`
- Snare (comp): `[_,_,_,_, _,_,X,_, _,_,_,_, _,_,X,_]`
- Kick (feather): `[X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_]`

Fills tab: *"Jazz fills are usually 2–4 beats on the snare or toms, leading into a phrase. On a drum machine, you're giving a suggestion: a tom hit on step 15, then a crash on step 1, setting up a new chorus."*

---

**Fills & Transitions Pt. 2**
- Kick: `[X,_,_,_, _,_,_,_, _,_,_,_, _,_,_,X]`
- Snare: `[_,_,_,_, X,_,_,_, X,X,_,_, X,X,X,X]`
- Tom High: `[_,_,_,_, _,_,_,_, _,_,X,_, _,_,_,X]`
- Tom Mid: `[_,_,_,_, _,_,_,_, _,_,_,X, _,_,X,_]`
- Tom Floor: `[_,_,_,_, _,_,_,_, _,_,_,_, _,X,_,_]`
- Crash: `[X,_,_,_, _,_,_,_, _,_,_,_, _,_,_,_]`

Fills tab: *"Three advanced fill shapes: 1. The slow build: start with 8th notes, move to 16th notes across the fill — it accelerates naturally. 2. The reverse cascade: floor tom → mid tom → high tom → snare (bottom up). Defies expectation, creates a 'lift' into the new section. 3. The dropout fill: remove everything (kick, hi-hat) in the last 2 beats and just play snare. The sudden nakedness before a big drop is more powerful than any note you could add."*

---

**Humanization**
- Kick: `[X,_,_,_, X,_,_,_, X,_,_,_, X,_,_,_]`
- Snare: `[_,_,g,_, X,_,g,_, g,_,_,g, X,_,g,_]`
- Hi-Hat Closed: `[X,g,X,g, X,g,X,g, X,g,X,g, X,g,X,g]`
- Hi-Hat Open: `[_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,X]`

Fills tab: *"Humanized fills accent the beginning and end of the fill, with lighter hits in the middle. Think of it as a crescendo: soft → medium → loud → CRASH. Program the velocities explicitly rather than leaving them all at 100%."*

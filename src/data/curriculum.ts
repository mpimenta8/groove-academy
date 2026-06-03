import type { Lesson, Step } from '../types'

// Step constructors — keep pattern data readable
const _: Step = { active: false }
const X: Step = { active: true }
const g: Step = { active: true, velocity: 'ghost' }

const rock: Lesson = {
  id: 'rock-backbeat',
  title: 'The Backbeat',
  subtitle: 'The foundation of rock and pop drumming',
  genre: 'Rock',
  level: '101',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 7, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 7, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
  ],
  tabs: {
    theory: `The backbeat is the backbone of rock, pop, and R&B. Snare lands on beats 2 and 4 — those are your anchor points. Everything else builds around them.

The kick on beats 1 and 3 with snare on 2 and 4 is sometimes called the "4/4 grid." It sounds simple because it is — and that's the point. Simplicity creates space for everything else.

**OXI One tip:** Program at 120–140 BPM. Kick on steps 1 and 9. Snare on steps 5 and 13. Closed hi-hat on every odd step (1, 3, 5, 7, 9, 11, 13, 15).`,
    ear: `Listen for the snare on 2 and 4 — it's the "crack" that cuts through a mix. Clap along with the snare in any rock or pop song and you'll always land on 2 and 4.

Try counting out loud: "1 and 2 and 3 and 4 and." The snare hits on the numbers 2 and 4.`,
    fills: `The simplest fill from this pattern: replace the last two hi-hats (steps 15–16) with two snare hits. This signals the end of the bar without complexity.

A classic 4-stroke fill: snare on steps 13, 14, 15, then kick back on 1. The snare "runs" into the downbeat.`,
    soul: `Even a basic backbeat has feel. A drummer who plays this pattern at 120 BPM with the kick and snare slightly behind the grid sounds heavier than one who plays it perfectly on time. "Laying back" creates weight.

On a drum machine, you're perfectly on the grid. That's fine — the arrangement and the instruments themselves carry the feel.`,
  },
}

const hipHop: Lesson = {
  id: 'hiphop-boom-bap',
  title: 'Boom Bap',
  subtitle: 'Displacement, space, and the hip-hop kick',
  genre: 'Hip-Hop',
  level: '101',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [X,_,_,_, _,_,X,_, _,_,_,_, _,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 7, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 7, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 7, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,X] },
  ],
  tabs: {
    theory: `Hip-hop breaks from rock's symmetry. The kick doesn't stay on 1 and 3 — it wanders. In this pattern, the second kick hits on the "& of 2" (step 7) instead of beat 3. That displacement is the groove.

The open hi-hat on the & of 2 and & of 4 creates a "breathing" effect — the hat "opens" just before the snare hits, then snaps shut.

**OXI One tip:** Kick on steps 1 and 7. Snare on steps 5 and 13. Closed hat on odd steps. Open hat on steps 8 and 16. BPM: 85–95.`,
    ear: `Listen for where the kick lands that feels "unexpected." In classic hip-hop (Pete Rock, DJ Premier era), the kick almost never just sits on beat 3 — it moves around beats 2 and 3.

Find any boom bap track and air-drum the kick pattern. You'll notice it often hits twice in rapid succession — that's displacement.`,
    fills: `Hip-hop fills are often just snare doubles or triples. Replace the open hi-hat (step 16) with a snare hit and add another snare on step 15. Two snares before the downbeat = classic hip-hop setup.`,
    soul: `The looseness in hip-hop kick patterns often came from a human sampling and re-chopping breaks. The slightly imperfect timing of a break played at a different BPM than intended gave hip-hop its "lazy" feel. On a drum machine, you're recreating that looseness by choosing where the kick lands — not by accident but by design.`,
  },
}

const electronic: Lesson = {
  id: 'electronic-four-on-floor',
  title: 'Four on the Floor',
  subtitle: 'The engine of house, techno, and dance music',
  genre: 'Electronic',
  level: '101',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [X,_,_,_, X,_,_,_, X,_,_,_, X,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 7, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Clap', family: 'clap', sequencer: 7, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 7, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 7, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_] },
  ],
  tabs: {
    theory: `Four on the floor means the kick hits every quarter note — steps 1, 5, 9, 13. It's relentless, metronomic, and designed to keep a crowd moving for hours.

The open hi-hat on the "& of 2" (step 8) is the secret weapon. That single open hat creates a breath in an otherwise locked pattern — without it, the loop feels robotic.

**OXI One tip:** Kick on steps 1, 5, 9, 13. Closed hat on odd steps (1, 3, 5…). Open hat on step 8 only. Clap layered with snare on 5 and 13. BPM: 120–132 for house, 130–145 for techno.`,
    ear: `Listen to any house track (Chicago) or techno (Detroit). The kick is the first thing you feel — it never stops. Count with it: every beat has a kick. That relentless pulse is the foundation.

The difference between a stiff four-on-the-floor and a groovy one is often just that open hi-hat and whether the clap/snare has any "snap" to it (attack/transient shape).`,
    fills: `Electronic fills often aren't snare rolls — they're drops. Remove the kick from beat 4 in the last bar (remove step 13). The anticipation of the "missing" kick creates tension. Then the kick comes back on beat 1 and the drop hits hard.`,
    soul: `House music's soul comes from its gospel and soul roots — DJs in Chicago layered it over disco. The kick is rigid, but the vocal samples and chords breathe over it. On a drum machine, your job is to be the steady foundation that lets everything else dance.`,
  },
}

const funk: Lesson = {
  id: 'funk-the-pocket',
  title: 'The Pocket',
  subtitle: 'Ghost notes, 16th note density, and sitting in the groove',
  genre: 'Funk',
  level: '201',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [X,_,_,_, _,_,_,_, _,_,X,_, _,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 7, steps: [_,_,g,_, X,_,g,_, _,_,_,g, X,g,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 7, steps: [X,X,X,X, X,X,X,X, X,X,X,X, X,X,X,X] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 7, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_] },
  ],
  tabs: {
    theory: `Funk lives in the 16th notes. The hi-hat plays every 16th note in this pattern — that density is what makes it feel like it's moving. Then within that density, you place accents and ghost notes to create contour.

Ghost notes (the lighter snare hits) are the unsung heroes of funk. They fill the space between the full snare hits without cluttering the pattern. You feel them more than you hear them.

**OXI One tip:** Kick on steps 1 and 11. Full snare on 5 and 13. Ghost snare on steps 3, 7, 12, 14. All 16 hi-hat steps active. Open hat on step 8. On the OXI One, use velocity — ghost notes at 30–40% velocity. BPM: 95–110.`,
    ear: `Listen to James Brown's band, Clyde Stubblefield especially. The snare doesn't just hit on 2 and 4 — it chatters between those hits at low volume. That's the ghost notes.

In a mix, ghost notes add "feel" without adding "loudness." If you took them out, the pattern would still work — but it would lose its life.`,
    fills: `Funk fills often use the snare to build into beat 1. A classic: play 16th note snare hits on steps 14, 15, 16 (all at full velocity), then land on kick on step 1. Three quick snares into a downbeat — a "push" into the next bar.`,
    soul: `"The pocket" is a feeling, not a position. It's when the kick, bass, and drums all lock into the same micro-feel and the music seems to propel itself. Ghost notes and displaced kicks are the tools — but the goal is that feeling of inevitability, where every note feels like it couldn't land anywhere else.`,
  },
}

const fillsPt1: Lesson = {
  id: 'fills-transitions-pt1',
  title: 'Fills & Transitions Pt. 1',
  subtitle: 'Basic fill vocabulary and how to set up a change',
  genre: 'Cross-genre',
  level: '201',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,X] },
    { name: 'Snare', family: 'snare', sequencer: 7, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,X,X,X] },
    { name: 'Tom High', family: 'tom', sequencer: 7, steps: [_,_,_,_, _,_,_,_, _,_,_,_, _,_,X,_] },
    { name: 'Tom Mid', family: 'tom', sequencer: 7, steps: [_,_,_,_, _,_,_,_, _,_,_,_, _,_,_,X] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 7, steps: [X,_,X,_, X,_,X,_, X,_,X,_, _,_,_,_] },
  ],
  tabs: {
    theory: `A fill is a break in the pattern that signals a transition — into a new section, a new bar, or a change in energy. The most important thing about a fill is what comes AFTER it: the landing.

This pattern shows a simple fill across beat 4 (steps 13–16): snare into high tom into mid tom, landing on kick at step 1 (the "one"). The hi-hat drops out during the fill so the toms are heard clearly.

**OXI One tip:** Keep the fill to the last 4 steps (13–16). Don't fill too early or you lose the groove. The downbeat kick at step 1 is the payoff — make sure it's there.`,
    ear: `Fills announce themselves by breaking the hi-hat pattern. When the ride or hi-hat stops in a groove, your brain knows a fill is coming. Listen for that moment of "opening up" before a fill starts.

Count the bars. Fills almost always happen on bar 4 of a 4-bar phrase. That's the "question" — and bar 5, beat 1 is the "answer."`,
    fills: `Three basic fill types:
1. **Snare roll**: all 4 steps of beat 4 are snare hits. Simple, works everywhere.
2. **Tom cascade**: high tom → mid tom → floor tom across beat 4. Signals a drop.
3. **Kick setup**: remove the kick on beat 3, add it back hard on beat 1. The absence creates anticipation.`,
    soul: `The best fills are the ones you don't notice — they feel like a natural exhale of the groove, not a showcase. Buddy Rich could play a 32nd-note fill that lasted 2 seconds and feel inevitable. The goal isn't complexity; it's inevitability.`,
  },
}

const reggae: Lesson = {
  id: 'reggae-one-drop',
  title: 'The One Drop',
  subtitle: 'Negative space and the most powerful beat in music',
  genre: 'Reggae',
  level: '201',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [_,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_] },
    { name: 'Snare / Rim', family: 'snare', sequencer: 7, steps: [_,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 7, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 7, steps: [_,_,_,X, _,_,_,_, _,_,_,X, _,_,_,_] },
  ],
  tabs: {
    theory: `"One drop" means the kick and snare drop TOGETHER on beat 3 — and beat 1 is entirely empty. This is the opposite of rock's instinct to anchor beat 1.

The power of the one drop comes from that empty beat 1. Your ear expects something there and gets nothing — then beat 3 hits and you feel it in your chest. The negative space IS the groove.

**OXI One tip:** Kick and snare both on step 9 only. Hi-hat on odd steps. Open hi-hat on steps 4 and 12 (the "a" of beats 1 and 3). BPM: 65–80. Slower is heavier.`,
    ear: `Put on any classic reggae track (Bob Marley, Burning Spear, Culture). Count "1-2-3-4" and notice: the big hit isn't on 1. That absence on beat 1 is the signature of the style.

The open hi-hat on the "a" of beat 1 (step 4) creates the swaying quality — it's that slight anticipation before beat 2.`,
    fills: `Reggae fills are rare and minimal. A "skank" fill: add snare hits on the & of every beat (steps 3, 7, 11, 15) for one bar. Then drop back into the one drop. The contrast between density and space is the fill.`,
    soul: `Reggae's feel is about weight and patience. The empty beat 1 asks you to wait — and then the drop satisfies. It's one of the most spiritual grooves in music because it mirrors breathing: inhale (silence), exhale (the drop). Play it slow and trust the space.`,
  },
}

const latin: Lesson = {
  id: 'latin-clave',
  title: 'Clave',
  subtitle: 'The rhythmic spine of Afro-Cuban and Latin music',
  genre: 'Latin',
  level: '201',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [X,_,_,_, _,_,X,_, _,_,_,_, _,_,_,_] },
    { name: 'Snare / Rim', family: 'snare', sequencer: 7, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_] },
    { name: 'Claves', family: 'percussion', sequencer: 8, steps: [X,_,_,X, _,_,X,_, _,X,_,_, X,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 7, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
  ],
  tabs: {
    theory: `The clave (pronounced "clah-veh") is the rhythmic spine of Afro-Cuban music. Everything else in a Latin arrangement locks to it. The son clave pattern is: THREE hits in the first half (steps 1, 4, 7) and TWO hits in the second half (steps 10, 13).

The clave is assigned to Sequencer 8 in your OXI One setup — this is the first pattern that uses both sequencers to give you the full picture.

**OXI One tip:** Claves on Sequencer 8, steps 1, 4, 7, 10, 13. Kick on Sequencer 7, steps 1 and 7. Snare on step 8. BPM: 100–120.`,
    ear: `Listen to any salsa or Afro-Cuban track and clap along, trying to find the clave. It's asymmetric — 3 hits then 2 hits — and once you hear it you can't unhear it.

The clave is always there even when it's not played. The other instruments imply it. Once you internalize the clave feel, you can layer anything over it and it will lock.`,
    fills: `Latin fills often use the conga or timbale — translate this to snare and tom. A common fill: add snare hits on steps 15, 16, and then 1 (crossing the bar line). The anticipation of beat 1 ("the and-a-one") is a classic Latin setup.`,
    soul: `The clave is one of the oldest rhythmic concepts in the African diaspora. It survived the Middle Passage and became the foundation of son, salsa, rumba, and through those, jazz and rock and roll. When you program a clave on your sequencer, you're touching something ancient.`,
  },
}

const jazz: Lesson = {
  id: 'jazz-swing',
  title: 'Swing Feel',
  subtitle: 'Triplet grid, the ride cymbal, and the art of comping',
  genre: 'Jazz',
  level: 'masterclass',
  instruments: [
    { name: 'Ride Cymbal', family: 'cymbal', sequencer: 7, steps: [X,_,_,X, X,_,_,X, X,_,_,X, X,_,_,X] },
    { name: 'Hi-Hat (foot)', family: 'hihat', sequencer: 7, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Snare (comp)', family: 'snare', sequencer: 7, steps: [_,_,_,_, _,_,X,_, _,_,_,_, _,_,X,_] },
    { name: 'Kick (feather)', family: 'kick', sequencer: 7, steps: [X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_] },
  ],
  tabs: {
    theory: `Jazz swing lives in a triplet grid, not a 16th note grid. Each beat divides into 3 (triplets) rather than 4 (16th notes). The ride cymbal plays "1 - trip - let" where "trip" is skipped and "let" is played — creating the "da-DUM da-DUM" swing feel.

In a 16-step sequencer, we approximate: hits on steps 1, 4, 5, 8, 9, 12, 13, 16. It's not perfect triplet swing, but it gives the shape.

The snare in jazz is not fixed — it "comps" (accompanies) the soloists and changes every chorus. What's written here is ONE possible voicing.

**OXI One tip:** Ride on steps 1, 4, 5, 8, 9, 12, 13, 16. Foot hi-hat on steps 5 and 13. Kick feathered (very low velocity) on steps 1 and 9. BPM: 120–220 (jazz tempos vary wildly).`,
    ear: `Listen to any jazz standard — Miles Davis, Coltrane, Bill Evans. The ride cymbal is the clock. It doesn't play a straight beat; it "swings." The slight delay of the 2nd 8th note in each beat is what creates that rolling, forward-leaning feel.

Try tapping your foot on 2 and 4 while the music plays. In jazz, that foot tap is usually the hi-hat — the anchor.`,
    fills: `Jazz fills (called "fills" or "set-ups") are usually 2–4 beats on the snare or toms, leading into a phrase. The key: jazz fills respond to the soloist. They "answer" what the horn or piano plays, not a predetermined pattern.

On a drum machine, you're giving a suggestion: a tom hit on step 15, then a crash on step 1, setting up a new chorus.`,
    soul: `Jazz drumming is conversation. The drummer listens to every other instrument and responds in real time. Elvin Jones described it as "playing with people, not at them." On a drum machine, you're setting a framework — the soul comes from what you arrange around it.`,
  },
}

const fillsPt2: Lesson = {
  id: 'fills-transitions-pt2',
  title: 'Fills & Transitions Pt. 2',
  subtitle: 'Breathwork, transitions as composition, and the art of the landing',
  genre: 'Cross-genre',
  level: 'masterclass',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [X,_,_,_, _,_,_,_, _,_,_,_, _,_,_,X] },
    { name: 'Snare', family: 'snare', sequencer: 7, steps: [_,_,_,_, X,_,_,_, X,X,_,_, X,X,X,X] },
    { name: 'Tom High', family: 'tom', sequencer: 7, steps: [_,_,_,_, _,_,_,_, _,_,X,_, _,_,_,X] },
    { name: 'Tom Mid', family: 'tom', sequencer: 7, steps: [_,_,_,_, _,_,_,_, _,_,_,X, _,_,X,_] },
    { name: 'Tom Floor', family: 'tom', sequencer: 7, steps: [_,_,_,_, _,_,_,_, _,_,_,_, _,X,_,_] },
    { name: 'Crash', family: 'cymbal', sequencer: 7, steps: [X,_,_,_, _,_,_,_, _,_,_,_, _,_,_,_] },
  ],
  tabs: {
    theory: `A masterclass fill isn't longer or faster — it's better placed. The fill in this pattern starts early (beat 3, step 9) and builds across the entire second half of the bar. The crash on beat 1 is the landing.

"Breathwork" means treating fills like breaths: the pattern is an exhale, the fill is the inhale, and beat 1 is the exhale again. Fills that start too late feel rushed. Fills that start early give the listener time to feel what's coming.

**OXI One tip:** Start the fill setup at step 9 (beat 3). Cascade: snare → high tom → mid tom → floor tom across steps 9–16. Crash on step 1. Kick drives hard on step 1 underneath the crash.`,
    ear: `Listen to John Bonham (Led Zeppelin), Steve Gadd ("50 Ways to Leave Your Lover"), or Questlove. Their fills start with intention — you can feel the "breath" before the fill begins. The bar leading into a fill usually has slightly more energy, slightly more ghost notes, a sense of gathering.`,
    fills: `Three advanced fill shapes:
1. **The slow build**: start with 8th notes, move to 16th notes across the fill — it accelerates naturally.
2. **The reverse cascade**: floor tom → mid tom → high tom → snare (bottom up). Defies expectation, creates a "lift" into the new section.
3. **The dropout fill**: remove everything (kick, hi-hat) in the last 2 beats and just play snare. The sudden nakedness before a big drop is more powerful than any note you could add.`,
    soul: `The greatest fills leave you wanting to hear them again. They feel necessary, not decorative. When you program a fill, ask: does this feel like it had to happen? If the answer is no, take notes out. The fill that works is usually the simpler one you thought wasn't enough.`,
  },
}

const humanization: Lesson = {
  id: 'masterclass-humanization',
  title: 'Humanization',
  subtitle: 'Velocity, timing, and breathing soul into a drum machine',
  genre: 'Cross-genre',
  level: 'masterclass',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 7, steps: [X,_,_,_, X,_,_,_, X,_,_,_, X,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 7, steps: [_,_,g,_, X,_,g,_, g,_,_,g, X,_,g,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 7, steps: [X,g,X,g, X,g,X,g, X,g,X,g, X,g,X,g] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 7, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,X] },
  ],
  tabs: {
    theory: `The grid is a suggestion. A human drummer never hits every note at the same velocity. The hi-hat pattern here alternates between full and ghost hits — on a real kit, a drummer's hi-hat naturally accents beats 1 and 3 while the "in-between" strokes are lighter.

Two tools for humanization on any drum machine:
1. **Velocity variation**: alternate strong (100%) and soft (40–60%) hits within a pattern.
2. **Timing micro-shift**: "push" (hit slightly early) for urgency; "lay back" (slightly late) for heaviness. Most hardware sequencers have a micro-time offset per step.

**OXI One tip:** Use per-step velocity. Set strong hits to 100, ghost notes to 35–45. For timing, use the step "nudge" feature: lay back the kick by +5ms and the snare by +8ms on a heavy groove. Leave the hi-hat on the grid.`,
    ear: `Listen to a drum machine pattern and then listen to a live drummer playing the same pattern. The machine is perfectly even — every hit the same velocity, perfectly on the grid. The human version has tiny imperfections that make it feel alive.

Steve Reich's "Music for 18 Musicians" is a useful study in how tiny phase differences between identical patterns create motion and feel.`,
    fills: `Humanized fills accent the beginning and end of the fill, with lighter hits in the middle. Think of it as a crescendo: soft → medium → loud → CRASH. Program the velocities explicitly rather than leaving them all at 100%.`,
    soul: `J Dilla was famous for deliberately programming his MPC to play slightly behind the beat — not by accident, but as a choice. That "drunk" feel became one of the most influential sounds in hip-hop production. The soul of a drum machine isn't in spite of its rigidity; it's in what you do with that rigidity. The grid is yours to break.`,
  },
}

export const CURRICULUM: Lesson[] = [
  rock,
  hipHop,
  electronic,
  funk,
  fillsPt1,
  reggae,
  latin,
  jazz,
  fillsPt2,
  humanization,
]

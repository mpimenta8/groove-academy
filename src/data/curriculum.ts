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
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 8, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 8, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
  ],
  tabs: {
    theory: `The backbeat is the first thing your body learned about music before you had words for it. Snare on **2 and 4** — those two hits are where the crowd claps, where the head nods, where the song plants its feet. Everything else is decoration hung on that frame.

## Why 2 and 4 carry the weight

Beats 1 and 3 are the floor — where the kick lands (\`steps 1 and 9\`), the gravitational *down*. But 1 and 3 are *expected*; the ear takes them for granted. The snare on **2 and 4** (\`steps 5 and 13\`) is the *answer* to the kick — the response in a call-and-response that's been running since field hollers and gospel hand-claps. Put the loud crack on the off-beats and the groove starts to *walk*.

Al Jackson Jr. — the engine of Booker T. & the M.G.'s and the whole Stax sound — was called *the human timekeeper*. He understood that the backbeat isn't about playing more; it's about making two snares land with such authority that the entire band can lean on them. Listen to "Green Onions": the kit does almost nothing, and it's everything.

## The grid is mostly space

Kick on 1 and 3, snare on 2 and 4, hat on the offs — the "4/4 grid." It sounds simple because it *is*, and that's the design. Simplicity is what leaves room for the guitar, the vocal, the bass to breathe. A drummer who fills every gap is a drummer nobody wants to play with.

> The backbeat is a promise: *I will be here on 2 and 4, every time, so the rest of you can go anywhere.*

## A master's wrinkle

Here's what separates a machine from Charlie Watts: on a real kit, Watts often *lifted* his right hand off the hi-hat on the backbeat — playing the snare on 2 and 4 *alone*, the hat dropping out beneath it. That tiny gap is a huge part of why the Rolling Stones *lope* instead of march. You can imply the same thing by pulling the velocity out of the hi-hat under the snare.

## OXI One build

- **Kick** (Seq 8): \`steps 1 and 9\`
- **Snare** (Seq 8): \`steps 5 and 13\`
- **Closed hi-hat** (Seq 8): every odd step — \`1, 3, 5, 7, 9, 11, 13, 15\`
- **Tempo:** \`120–140 BPM\`

Build it, then try Watts's trick: drop the hi-hat velocity on \`steps 5 and 13\` and feel the snare step forward.`,
    ear: `The backbeat is the easiest groove in the world to *find* and the hardest to play with real authority. Train your ear on the players who made two notes sound like the whole song.

## The assignment

Put these on and clap *only* on 2 and 4 — never 1, never 3:

- **Al Jackson Jr.** — Booker T. & the M.G.'s; Al Green's "Let's Stay Together." The most patient backbeat ever recorded. He *waits*.
- **Phil Rudd** — AC/DC, "Back in Black." The discipline *is* the point: the same beat for four minutes, never decorated, and it's colossal. Notice how badly your hands want to add a fill — and how much better it sounds when they don't.
- **Ringo Starr** — almost anything. His feel — the slight drag, the matched-but-never-identical hits — is why drummers worship the player flashier technicians underrated for decades.
- **Dave Grohl** — Nirvana, "Smells Like Teen Spirit." The backbeat with the lid off: full-arm, full-velocity, the snare as an *event*.

## What to listen for

The **crack**. In a dense mix the snare on 2 and 4 is the one element that has to cut through guitars, bass, and vocal to tell your body where the beat is. Producers spend hours on that single sound for exactly this reason. Once you start hearing *where* it sits — dead-on, or a hair behind — you're hearing feel itself.

> Count out loud: "1 *and* 2 *and* 3 *and* 4 *and*." The snare lands on the numbers. Your body always knew that — now your ear does too.`,
    fills: `A fill is how you announce that something is about to change. In a backbeat the most powerful fills are the *smallest* ones — the groove is so stable that the tiniest break reads loud and clear.

## The simplest fill in rock

Replace the **last two hi-hats** (\`steps 13 and 15\`) with two snare hits. That's the whole move. You've ridden the hat all bar; two snares at the end say "end of phrase" without ever leaving the pocket. It's the fill Jason McGerr (Death Cab for Cutie) reaches for — *taste over flash*, the fill that serves the song instead of the drummer's ego.

## The 4-stroke run-up

A classic: snare on \`steps 13, 14, 15\`, then kick back on \`step 1\` of the next bar. Three snares "running" into the downbeat, four strokes counting the landing — the cadence of a sentence trailing into its period.

## The discipline of *not* filling

David Lovering's playing in the Pixies is a clinic in restraint: he lets the loud-quiet-loud dynamics do the work and saves the explosion for when it *means* something. The hardest thing in rock drumming is to ride the backbeat for sixteen bars and trust that the *absence* of a fill is itself a statement.

> A fill is punctuation, not a paragraph. Most bars want a period — not an exclamation mark.`,
    soul: `**"Behind the grid" means slightly late** — not early. The note lands just *after* the grid marker. Laying back mimics how a heavy arm falls under gravity: it pulls downward instead of striking forward. Hitting early — **pushing** — creates urgency instead of weight. The backbeat can do either, and choosing is the entire art.

## The physics of feel

At 120 BPM, one 16th-note step is **125 ms**. A subtle lay-back is \`5–15 ms\` late; a heavy, "drunk" feel is \`15–25 ms\` late. On the OXI One each step deviates **-45% to +45%** of a 16th note. In those terms:

- **Subtle lay-back:** kick \`+5 to +8%\`, snare \`+8 to +12%\`
- **Heavy lay-back:** kick \`+12 to +15%\`, snare \`+15 to +20%\`
- **Pushing (urgency):** kick and snare at \`-5 to -8%\`

## Leave the hi-hat alone

Keep the hi-hat at \`0%\`. The hat on the grid is the *reference* — it's what makes the kick and snare's offset read as intentional instead of sloppy. If everything lays back together the ear recalibrates and you lose the effect entirely. This is the most common mistake there is: drag *everything*, then wonder why it sounds slow instead of heavy.

## Steal this

Program the pattern, then nudge *only* the snare to \`+10%\`. Play it back. That single offset makes the snare feel **slapped** rather than tapped — the Watts/Ringo thing, where the backbeat leans on the band like a hand on a shoulder. It's the difference between a drum machine and a drummer.

> On a perfectly quantized grid you're neither pushing nor dragging. That's not wrong — it's *neutral*. The arrangement and the sample carry the feel. But the moment you want a body to move, give the snare a few milliseconds of gravity.`,
  },
}

const hipHop: Lesson = {
  id: 'hiphop-boom-bap',
  title: 'Boom Bap',
  subtitle: 'Displacement, space, and the hip-hop kick',
  genre: 'Hip-Hop',
  level: '101',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [X,_,_,_, _,_,X,_, _,_,_,_, _,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 8, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 8, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 8, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,X] },
  ],
  tabs: {
    theory: `Rock anchors the downbeat. Boom bap **leaves it** — and that refusal is the entire genre. This is the sound of the drum machine becoming an instrument of *recomposition*: producers chopping soul and jazz records into pieces and reassembling time itself.

## The displacement

In this pattern the second kick lands on the **& of 2** (\`step 7\`), not on beat 3 where rock would put it. That's the engine. Your ear leans forward waiting for the "3" that never comes, and the snare on **2 and 4** (\`steps 5 and 13\`) catches you instead. *Boom* (kick), *bap* (snare) — KRS-One named the whole genre after that onomatopoeia on *Return of the Boom Bap*. It's the sound of the machine talking back.

## The breath

The open hi-hat on the **& of 2 and & of 4** (\`steps 8 and 16\`) is the breath in the pattern. It cracks open just before the snare, then snaps shut — the hat *inhales* so the snare can *land*. Without it the loop is airless; with it, the groove sways.

## The grid as a canvas

When DJ Shadow built *Endtroducing.....* almost entirely from records on an Akai MPC60 — widely called the first album made *only* from samples — and when Pete Rock and DJ Premier chopped horn stabs and Rhodes chords on the E-mu SP-1200, the grid stopped being a metronome and became a **canvas**. You're not performing a beat; you're arranging found sound in time, and the placement of a single kick is a compositional decision.

> Rock asks "where's the *one*?" Boom bap asks "what happens if I move it?"

## OXI One build

- **Kick** (Seq 8): \`steps 1 and 7\`
- **Snare** (Seq 8): \`steps 5 and 13\`
- **Closed hi-hat** (Seq 8): every odd step
- **Open hi-hat** (Seq 8): \`steps 8 and 16\`
- **Tempo:** \`85–95 BPM\` — boom bap breathes slow.`,
    ear: `The whole art of boom bap is *where* things land — slightly wrong on paper, exactly right in the body. Train your ear on the producers who made a sampler swing.

## The assignment

- **Pete Rock** — "They Reminisce Over You (T.R.O.Y.)." Notice how the drums *thud* while the horn loop floats; the kick is doing something your foot can't quite predict.
- **DJ Premier** — Gang Starr, anything. Premier *chops*: he takes a loop, cuts it into single hits, and replays it so the groove is his, not the original record's. Listen for the scratched-in hooks and the dusty snare.
- **J Dilla** — *Donuts*. The kick and snare feel like they're sliding off the grid. They are. On purpose.
- **DJ Shadow** — *Endtroducing.....*. An entire emotional world built from other people's records and an MPC60.

## What to listen for

The kick that lands where you didn't expect — and then *feels inevitable* a bar later. In golden-era hip-hop the kick almost never just sits on beat 3; it moves around beats 2 and 3, often hitting twice in quick succession. That double-thud is **displacement**, and once you hear it you can't un-hear it.

> Air-drum the kick of any boom bap track. The moment your foot *hesitates* is the moment the producer moved the kick off the grid. That hesitation is the groove.`,
    fills: `Hip-hop fills don't roll — they *set up*. The genre is built on space, so a fill is usually just one or two extra snares pointing at the downbeat like an arrow.

## The classic setup

Replace the **open hi-hat** on \`step 16\` with a snare hit, and add another snare on \`step 15\`. Two snares stacked right before the "one" (\`step 1\` of the next bar) — the most recognizable hip-hop turnaround there is. It says "here it comes" without a single tom.

## Why less is the move

A drummer fills the bar; a *producer* leaves it alone until the last possible moment. Cut Chemist and the turntablist tradition turned this into theater — a fill could be a single scratch, a stutter, a half-second of silence. The restraint is the style: the emptier the bar, the louder two snares ring at the end of it.

> In rock a fill is a flourish. In boom bap it's a *cue* — the smallest possible gesture that still says "turn the page."`,
    soul: `Boom bap's "lazy" feel is the heaviest lay-back of the 101 lessons, and every millisecond of it is **on purpose**.

## One switch changed everything

J Dilla turned **quantize off** on his Akai MPC3000 and played the pads by hand — letting the kick drag, the snare fall late, the hats fight the grid. Engineers thought his beats were broken. They weren't. He'd discovered that *conflicting* timing — one element late, another dead on the grid — is what makes a loop feel **alive** instead of mechanical. That discovery rewired modern music; you can hear its children in Questlove, Robert Glasper, half of contemporary R&B.

> The grid is the reference. The soul is everything that refuses to obey it.

## OXI One offsets for the drunk feel

- **Kick** (\`steps 1, 7\`): \`+15 to +20%\` — almost shockingly late. This is the weight, the engine of the Dilla / Pete Rock thud.
- **Snare** (\`steps 5, 13\`): \`+10 to +15%\` — late, but *less* than the kick, so the kick "falls into" the snare.
- **Closed hi-hat:** \`0%\` — dead on the grid. Without an on-grid anchor, "late" has nothing to be late *against*, and the whole thing just sounds slow.
- **Open hi-hat** (\`steps 8, 16\`): \`-5%\` — pushed slightly early. The open hat *anticipates* the snare instead of following it — the gasp before the crack.

## The machine was part of it

This feel lived in the boxes too. The SP-1200's 12-bit converters added a gritty, aliased crunch that producers chased deliberately, and the MPC's **swing** setting delayed every other 16th — think ~\`56–60%\` shuffle, never a clean 50%. Start with the kick alone at \`+18%\`. It'll feel wrong in isolation — then drop the on-grid hat back in and the whole thing snaps into the pocket.`,
  },
}

const electronic: Lesson = {
  id: 'electronic-four-on-floor',
  title: 'Four on the Floor',
  subtitle: 'The engine of house, techno, and dance music',
  genre: 'Electronic',
  level: '101',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [X,_,_,_, X,_,_,_, X,_,_,_, X,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 8, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Clap', family: 'clap', sequencer: 8, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 8, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 8, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_] },
  ],
  tabs: {
    theory: `Four on the floor is the simplest idea in dance music and the most powerful: the kick hits **every quarter note** — \`steps 1, 5, 9, 13\`. No displacement, no syncopation, no mercy. It's a heartbeat you can't argue with, engineered to move a room for six hours.

## Why relentless works

Rock's kick leaves gaps; house fills them. With a kick on all four beats there's no "missing" pulse for the ear to anticipate — so the body stops predicting and simply *obeys*. That hypnosis is the point. Giorgio Moroder proved it in 1977: Donna Summer's "I Feel Love" rode a Moog modular *sequencer* locked to a pulse, and it sounded like the future because nothing human could be that steady.

## The one breath

The open hi-hat on the **& of 2** (\`step 8\`) is the secret weapon. A single open hat in an otherwise locked grid creates one breath per bar — without it the loop feels robotic; with it, it *grooves*. House and techno live and die by that one hat and the snap of the clap.

## The machine is the instrument

The Roland TR-909's kick *is* the genre — Frankie Knuckles in Chicago, the Belleville Three (Juan Atkins, Derrick May, Kevin Saunderson) in Detroit, and every producer since reached for that punchy, tunable boom. Later, Daft Punk filtered whole disco loops over it. The kick isn't keeping time for a band; the kick *is* the band.

> The four-on-the-floor kick doesn't ask you to dance. It assumes you already are.

## OXI One build

- **Kick** (Seq 8): \`steps 1, 5, 9, 13\`
- **Snare + Clap** (Seq 8): layered on \`steps 5 and 13\`
- **Closed hi-hat** (Seq 8): every odd step
- **Open hi-hat** (Seq 8): \`step 8\` only
- **Tempo:** \`120–132 BPM\` house, \`130–145\` techno.`,
    ear: `Four-on-the-floor is everywhere, which makes it easy to hear and hard to hear *well*. Train your ear on the difference between a kick that keeps time and a kick that casts a spell.

## The assignment

- **Giorgio Moroder** — Donna Summer, "I Feel Love." The Rosetta Stone: a sequenced pulse that launched synth-pop, house, and techno in one track.
- **Frankie Knuckles** — the godfather of house, born at Chicago's Warehouse (the club the genre is named for). Listen for warmth laid over the machine.
- **The Belleville Three** — Juan Atkins, Derrick May ("Strings of Life"), Kevin Saunderson. Detroit techno: the same four kicks, but cold, futurist, mechanical on purpose.
- **LCD Soundsystem** — "Dance Yrself Clean." James Murphy plays four-on-the-floor with a *human* hand, and the slight drift is the whole emotional payload.

## What to listen for

Count with the kick: *every* beat has one. That's the foundation. Now listen *above* it — the open hat, the clap's transient, the way the hats push. The difference between a stiff loop and one that moves you is almost never the kick. It's everything riding on top of it.

> A great house record is a perfectly steady kick surrounded by things that are *not* perfectly steady. The tension between them is the dance.`,
    fills: `Electronic music rarely fills with a snare roll — it fills by **taking something away**. The drop is the genre's signature move, and subtraction hits harder than addition.

## The missing kick

Remove the kick from **beat 4** (\`step 13\`) in the last bar before a section change. For the first time in the whole track the relentless pulse *skips* — and the absence is deafening. Your body, trained by hundreds of bars of four-on-the-floor, lurches for a kick that isn't there. Then the kick returns on **beat 1** (\`step 1\`) and the drop lands like a wall.

## Tension is a held breath

This is the opposite of a drum fill: you're not adding energy, you're *withholding* it. A bar of silence, a filtered riser, a single missing kick — these build more anticipation than any tom run, because the listener fills the gap with their own expectation.

> In a band, the drummer plays a fill. In a club, the producer pulls the floor out from under you for exactly one beat — and you jump.`,
    soul: `Electronic music is the one genre where being **on the grid is a stylistic choice**, not a limitation. The metronomic kick *is* the feel. But "on the grid" was never meant to apply to *every* element.

## Steady kick, moving everything else

- **Kick** (\`steps 1, 5, 9, 13\`): \`0% to -3%\` — dead on the grid or barely pushed. The kick's only job is to be the clock.
- **Closed hi-hat:** \`-3 to -5%\` — a subtle push makes the hats feel urgent and forward. This is the difference between house that makes you bob and house that makes you *dance*.
- **Open hi-hat** (\`step 8\`): \`+5 to +8%\` — lay it back slightly. That single open hat is the pattern's exhale, and a late exhale feels relaxed.
- **Clap** (\`steps 5, 13\`): offset it \`+3 to +5%\` from the snare. Two transients nearly-but-not-perfectly together widen the clap and make it feel like a room full of hands instead of one sample.

## Two philosophies

**House** = a slightly pushed hat (\`-3%\`) and a slightly lagging open hat (\`+6%\`) — warmth, swing, the human hand of a James Murphy or a Chicago DJ. **Techno** = everything at \`0%\`, no exceptions. The Detroit rigidity *is* the aggression; the refusal to swing is the statement.

> House asks the machine to feel human. Techno asks the human to feel like the machine. Same four kicks — opposite souls.`,
  },
}

const funk: Lesson = {
  id: 'funk-the-pocket',
  title: 'The Pocket',
  subtitle: 'Ghost notes, 16th note density, and sitting in the groove',
  genre: 'Funk',
  level: '201',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [X,_,_,_, _,_,_,_, _,_,X,_, _,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 8, steps: [_,_,g,_, X,_,g,_, _,_,_,g, X,g,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 8, steps: [X,X,X,X, X,X,X,X, X,X,X,X, X,X,X,X] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 8, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_] },
  ],
  tabs: {
    theory: `Funk lives in the **16th notes**. The hi-hat plays all sixteen in this pattern — that wall of density is what makes the groove feel like it's already moving before anyone touches a backbeat. The art is what you do *inside* that density: where you accent, where you ghost, where you leave a hole.

## Ghost notes are the secret

The lighter snare hits — **ghost notes** (\`steps 3, 7, 12, 14\` here) — are the unsung heroes of funk. They chatter between the full snares on \`steps 5 and 13\` at a whisper, filling space without cluttering it. You *feel* them more than you hear them. Pull them out and the pattern still "works," but it goes flat — a sentence with the rhythm of the words stripped away.

## Density plus restraint

David Garibaldi, with Tower of Power, turned this into a science: *linear* funk, where almost no two limbs strike at the same instant, so every note gets its own slot in the 16th-note grid. The result is busy and *clean* at once. Funk isn't about playing a lot of notes loudly; it's about playing a lot of notes at *different volumes*, so the loud ones mean something.

> Funk is a conversation between the notes you hear and the ones you almost don't.

## OXI One build

- **Kick** (Seq 8): \`steps 1 and 11\`
- **Full snare** (Seq 8): \`steps 5 and 13\`
- **Ghost snare** (Seq 8): \`steps 3, 7, 12, 14\` at \`30–40%\` velocity
- **Closed hi-hat** (Seq 8): all 16 steps
- **Open hi-hat** (Seq 8): \`step 8\`
- **Tempo:** \`95–110 BPM\``,
    ear: `Funk is a feel you have to hear in the *quiet* parts. Train your ear to follow the ghost notes — the chatter under the backbeat that does the actual grooving.

## The assignment

- **Clyde Stubblefield** — James Brown, "Funky Drummer." The most-sampled drum break in history. Listen to the snare *chatter* between the big hits; that's the ghost-note vocabulary the whole genre was built on.
- **Jabo Starks** — also James Brown ("Sex Machine"). Stubblefield's counterpart, with a deeper, rounder pocket.
- **David Garibaldi** — Tower of Power, "What Is Hip?" The clinic in linear funk: every note in its own slot.
- **Zigaboo Modeliste** — The Meters. New Orleans second-line funk: looser, swampier, impossibly deep.
- **Bernard Purdie** — the "Purdie Shuffle" (Steely Dan, "Babylon Sisters"). Ghost notes turned into a groove so famous it has its own name.

## What to listen for

Loudness is not the same as importance. In a James Brown record the ghost notes add *feel* without adding *volume* — solo them in your head and you'll hear a second, quieter rhythm running under the obvious one. That hidden layer is the funk.

> Chad Smith of the Red Hot Chili Peppers puts it simply: the pocket is where the band agrees to *wait*. Funk is the sound of musicians refusing to rush.`,
    fills: `Funk fills don't announce themselves with a tom run — they **build into the one**. The snare gathers speed and shoves you across the bar line into the next downbeat.

## The push into beat 1

Play 16th-note snare hits on \`steps 14, 15, 16\` at *full* velocity — lifting the ghost on \`step 14\` up to a hard hit — then land on the kick on \`step 1\`. Three quick snares stacked right before the downbeat: a *push* into the next bar. It works precisely because the whole pattern has been whispering ghost notes, so three loud snares in a row read as a sudden, deliberate shove.

## Dynamics are the fill

The notes were already there as ghosts; you're not adding hits so much as *turning them up*. That's the funk approach — manipulate velocity, not just placement. A crescendo across \`14 → 15 → 16\` is more musical than three identical hits, because it sounds like a hand *gathering* the bar.

> In funk, the loudest a snare ever gets is the half-second before the one. Save it for there.`,
    soul: `The pocket lives in a tiny argument between two kinds of note: **ghosts that anticipate** and **full hits that land**. Ghosts a hair early, backbeats a hair late — that micro push-pull is why funk feels like it's *moving* even when it loops forever.

## OXI One offsets for the pocket

- **Ghost snares** (\`steps 3, 7, 12, 14\`): \`-3 to -5%\` — ghosts "set up" the full hits; being early makes them feel like anticipation, not filler.
- **Full snare** (\`steps 5 and 13\`): \`+5 to +8%\` — the crack lands heavy. The contrast between early ghosts and late backbeats *is* the tension.
- **Kick** (\`steps 1 and 11\`): \`-3 to -5%\` — push it slightly. A funk kick often leads the snare, propelling the groove forward.
- **Hi-hat** (all 16 steps): alternate \`-3%\` and \`+3%\` consistently odd/even — not random, a *wave*. That subtle early/late ripple across the 16ths is what makes a programmed hat breathe instead of buzz.

## Where to start

Touch only the snare first: ghosts at \`-4%\`, fulls at \`+6%\`. That single contrast transforms the feel before you adjust anything else. Then add the hi-hat wave, then the kick. Build the pocket in layers — it's a balance, not a setting.

> Garibaldi's secret was never speed. It was that every one of those sixteen notes knew exactly how loud, and exactly how late, it was supposed to be.`,
  },
}

const fillsPt1: Lesson = {
  id: 'fills-transitions-pt1',
  title: 'Fills & Transitions Pt. 1',
  subtitle: 'Basic fill vocabulary and how to set up a change',
  genre: 'Cross-genre',
  level: '201',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,X] },
    { name: 'Snare', family: 'snare', sequencer: 8, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,X,X,X] },
    { name: 'Tom High', family: 'tom', sequencer: 8, steps: [_,_,_,_, _,_,_,_, _,_,_,_, _,_,X,_] },
    { name: 'Tom Mid', family: 'tom', sequencer: 8, steps: [_,_,_,_, _,_,_,_, _,_,_,_, _,_,_,X] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 8, steps: [X,_,X,_, X,_,X,_, X,_,X,_, _,_,_,_] },
  ],
  tabs: {
    theory: `A fill is a break in the pattern that signals a transition — into a new section, a new bar, a change in energy. But here's the secret every great drummer knows: the most important part of a fill is not the fill. It's the **landing**.

## The fill serves the one

This pattern runs a simple fill across **beat 4** (\`steps 13–16\`): snare into high tom (\`step 15\`) into mid tom (\`step 16\`), all landing on the kick at \`step 1\` — the "one." The closed hi-hat (riding \`steps 1–11\`) *drops out* across beat 4 so the toms speak clearly. That drop-out is itself a signal: the moment the steady hat disappears, the body knows something is coming.

## Don't fill too early

Keep the fill to the last four steps. Fill too early and you erase the groove you spent the bar establishing — there's nothing to *transition from*. John Bonham understood this better than anyone: his fills are short, late, and devastating because the bar before them is rock-solid. The downbeat kick at \`step 1\` is the payoff. Everything else is set-up.

> A fill without a landing is a question with no answer. The "one" is the answer — protect it.

## OXI One build

- **Kick** (Seq 8): \`steps 1, 9, 16\`
- **Snare** (Seq 8): \`steps 5, 13, 14, 15, 16\`
- **Tom High** (Seq 8): \`step 15\`
- **Tom Mid** (Seq 8): \`step 16\`
- **Closed hi-hat** (Seq 8): \`steps 1, 3, 5, 7, 9, 11\` — drops out on beat 4`,
    ear: `You can hear a fill coming before it arrives. Train your ear on the *approach* — the gathering energy that tells you the bar is about to turn.

## The assignment

- **John Bonham** — Led Zeppelin, "Good Times Bad Times." The bass-drum triplets are famous, but study how he *sets up* a fill: the bar before is dead steady, so the fill explodes out of stillness.
- **Stewart Copeland** — The Police, "Message in a Bottle." Copeland's fills are *hooks* — as memorable as the vocal. A fill can be a part you hum.
- **Jason McGerr** — Death Cab for Cutie. Fills that serve the song's emotion, never the drummer's ego. Restraint as taste.
- **Travis Barker** — blink-182. The opposite pole: fast, precise, rudimental fills that still land exactly on the one. Speed in service of placement.

## What to listen for

The **hi-hat stopping**. In almost every groove the fill is announced by the steady ride or hat breaking — that sudden "opening up" is your cue. And count the bars: fills almost always arrive on bar 4 of a 4-bar phrase. Bar 4 is the question; bar 5, beat 1 is the answer.

> Listen for the silence in the hats *before* the fill. The space is the announcement.`,
    fills: `Three basic fill types — the starter vocabulary every drummer owns. Each is built from this lesson's kit: two toms, no floor tom, so keep the cascade honest to what's on the pads.

1. **Snare roll** — all four steps of beat 4 (\`steps 13, 14, 15, 16\`) are snare hits. Dead simple, works everywhere, the cleanest way to announce a change.
2. **Tom cascade** — high tom (\`step 15\`) into mid tom (\`step 16\`) across beat 4. Moving down the toms signals a *drop*; the descending pitch pulls the energy into the new section.
3. **Kick setup** — remove the kick on beat 3 (\`step 9\`), then add it back *hard* on beat 1 (\`step 1\`). The absence where you expect a kick creates anticipation; the return is the release.

## Mix and match

These aren't separate boxes — Travis Barker would stack all three in a single bar. Master each one cleanly on its own, landing every time on the "one," before you combine them. A sloppy fill that misses the downbeat is worse than no fill at all.

> The three fills are words. Learning to land them is learning to *speak*.`,
    soul: `A fill that **rushes** — lands slightly early — creates excitement and pull. It feels like it's *dragging* you into the next bar. Most good fills rush a little even when the drummer doesn't mean to; the body leans forward toward the change. You can program that intention deliberately.

## OXI One offsets — the fill rush

- **Groove steps before the fill** (\`steps 1–12\`): keep whatever feel you've established — lay back, neutral, or pushed.
- **Fill entry** (\`step 13\`): \`0%\` — start right on the grid, no rush yet.
- **\`step 14\`:** \`-5%\` — begin to push.
- **\`step 15\`:** \`-8%\` — more urgency.
- **\`step 16\`:** \`-10 to -12%\` — maximum rush, right before the landing.
- **Landing kick** (\`step 1\`): \`0% or +3%\` — the sudden *normalization* after a rushed fill creates a snap. Landing dead-on (or a hair late) after rushing into it feels like throwing a punch and then planting your feet.

## The contrast is everything

The rush only works because of the landing. Accelerate into the bar line, then *plant* on the one — that contrast is the whole effect. Without the steady landing, a rushed fill just sounds frantic: a drummer who's lost the tempo instead of one who's bending it.

> Rush the approach, anchor the arrival. Excitement is the gap between the two.`,
  },
}

const reggae: Lesson = {
  id: 'reggae-one-drop',
  title: 'The One Drop',
  subtitle: 'Negative space and the most powerful beat in music',
  genre: 'Reggae',
  level: '201',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [_,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_] },
    { name: 'Snare / Rim', family: 'snare', sequencer: 8, steps: [_,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 8, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 8, steps: [_,_,_,X, _,_,_,_, _,_,_,X, _,_,_,_] },
  ],
  tabs: {
    theory: `The "one drop" is the most radical idea in popular drumming: **beat 1 is empty**. The kick and snare fall *together* on **beat 3** (\`step 9\`), and the downbeat — the very note rock builds its whole identity on — is simply not played. Letting go of the one is the entire genre.

## Negative space is the groove

The power comes from that missing beat 1. Your ear, trained by a lifetime of music, *expects* something there and gets nothing — a held breath — and then beat 3 lands and you feel it in your chest. Carlton Barrett, the drummer for Bob Marley & The Wailers, defined this feel. He didn't invent emptiness; he made emptiness *swing*.

## Drop, then dub

Reggae's children took the subtraction further. In the mixing rooms of King Tubby and Lee "Scratch" Perry, *dub* treated the mixing desk itself as an instrument — dropping the drums out entirely, drenching a single rim-shot in cavernous reverb, letting silence ring. Sly Dunbar later pushed the drums forward into "rockers" and "steppers" feels. But it all starts here, with the courage to leave beat 1 alone.

> Rock fills every beat to prove it's there. Reggae empties the most important one to prove it doesn't have to be.

## OXI One build

- **Kick + Snare/Rim** (Seq 8): both on \`step 9\` only — beat 3, together.
- **Closed hi-hat** (Seq 8): every odd step.
- **Open hi-hat** (Seq 8): \`steps 4 and 12\` — the "a" of beats 1 and 3.
- **Tempo:** \`65–80 BPM\`. Slower is heavier.`,
    ear: `Reggae trains your ear to hear what *isn't* played. The groove is defined by an absence, and learning to feel that absence is the lesson.

## The assignment

- **Carlton Barrett** — Bob Marley & The Wailers, "One Drop," "Stir It Up." The source. Count "1-2-3-4" and feel how the big hit *withholds* on 1 and arrives on 3.
- **Burning Spear** / **Culture** — roots reggae, the one drop at its most hypnotic and spiritual.
- **Sly Dunbar** — Sly & Robbie. Hear how he evolves the one drop into busier "rockers" and "steppers" patterns without losing the weight.
- **King Tubby** / **Lee "Scratch" Perry** — dub. Listen to drums *disappear* and reappear; the space between hits is the instrument.

## What to listen for

The **hole on beat 1**, and the *sway*. The open hi-hat on the "a" of beat 1 (\`step 4\`) creates that signature lilt — a slight anticipation pulling you toward beat 2. Once you can feel the missing downbeat as a *presence* rather than a gap, you're hearing reggae the way a reggae drummer does.

> In most music the drummer tells you where 1 is. In reggae, the drummer trusts you to feel it on your own.`,
    fills: `Reggae fills are **rare and minimal** — the genre is built on space, so adding notes is a bigger deal here than in any other style. A fill in the one drop is a brief flood that makes the surrounding emptiness louder.

## The skank fill

Add snare hits on the **& of every beat** (\`steps 3, 7, 11, 15\`) for a single bar, then drop straight back into the one drop. For one bar the airy pattern suddenly *chatters* on every off-beat — and the contrast between that density and the space around it *is* the fill. You don't need a tom run; you need one bar that breaks the silence and one that restores it.

## Restraint is the instrument

Style Scott and the Roots Radics built whole records on this principle: the drama isn't in the fill, it's in the *return*. The moment you fall back into the empty beat 1 after a busy bar, the listener exhales. In a genre of negative space, the most powerful thing you can do is briefly fill it — and then give it back.

> A reggae fill works like a single loud word in a whispered sentence. Use it once and it lands. Use it twice and it's noise.`,
    soul: `The one drop is the **heaviest lay-back** of any pattern in this curriculum. At \`65–80 BPM\` a 16th-note step lasts \`187–230 ms\` — an enormous amount of room to pull behind the grid before the pattern falls apart. Reggae uses all of it.

## OXI One offsets for maximum weight

- **Kick + Snare/Rim** (\`step 9\`): \`+20 to +25%\` — the most extreme lay-back you'll program. It should feel almost *wrong* the first time you hear it solo. In context, it feels like the floor dropping out from under you.
- **Closed hi-hat:** \`+8 to +12%\` — the hat lays back too, but *less* than the drop. That gap creates a sway rather than a thud.
- **Open hi-hat** (\`steps 4 and 12\`): \`-5%\` — push these slightly *early*. They're the anticipatory lift before the next beat, pulling you forward just before the drop pulls you back.

## The two-way pull

The entire groove is the interplay between the early open hat and the late drop. Try the open hat at \`-5%\` and the drop at \`+22%\`: that \`~27%\` swing across just a few steps is what makes the one drop feel like *gravity*. And remember — a slower BPM means more absolute lag at the same percentage. At 70 BPM, \`+22%\` is roughly \`40 ms\` late: detectable by the *body*, not just the ears.

> The kick is so late it almost misses the beat. That "almost" is the whole feeling.`,
  },
}

const latin: Lesson = {
  id: 'latin-clave',
  title: 'Clave',
  subtitle: 'The rhythmic spine of Afro-Cuban and Latin music',
  genre: 'Latin',
  level: '201',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [X,_,_,_, _,_,X,_, _,_,_,_, _,_,_,_] },
    { name: 'Snare / Rim', family: 'snare', sequencer: 8, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,_] },
    { name: 'Claves', family: 'percussion', sequencer: 8, steps: [X,_,_,X, _,_,X,_, _,X,_,_, X,_,_,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 8, steps: [X,_,X,_, X,_,X,_, X,_,X,_, X,_,X,_] },
  ],
  tabs: {
    theory: `The clave (pronounced "clah-veh") is the rhythmic spine of Afro-Cuban music. Everything else in a Latin arrangement locks to it. The son clave pattern is: THREE hits in the first half (steps 1, 4, 7) and TWO hits in the second half (steps 10, 13).

The clave is assigned to Sequencer 8 in your OXI One setup — this is the first pattern that uses both sequencers to give you the full picture.

**OXI One tip:** Claves on Sequencer 8, steps 1, 4, 7, 10, 13. Kick on Sequencer 7, steps 1 and 7. Snare on step 8. BPM: 100–120.`,
    ear: `Listen to any salsa or Afro-Cuban track and clap along, trying to find the clave. It's asymmetric — 3 hits then 2 hits — and once you hear it you can't unhear it.

The clave is always there even when it's not played. The other instruments imply it. Once you internalize the clave feel, you can layer anything over it and it will lock.`,
    fills: `Latin fills often use the conga or timbale — translate this to snare and tom. A common fill: add snare hits on steps 15, 16, and then 1 (crossing the bar line). The anticipation of beat 1 ("the and-a-one") is a classic Latin setup.`,
    soul: `Latin grooves feel tight and propulsive — they push forward, not back. The clave has an urgency to it; it doesn't drag. This is the opposite of reggae or boom bap. Your timing offsets should reflect that.

**OXI One timing offsets for Latin feel:**
- Clave (Sequencer 8, steps 1, 4, 7, 10, 13): **-3 to -5%** — push the clave slightly early. It should feel like it's arriving just ahead of where you expect it, pulling the rest of the band forward.
- Kick (mirrors clave rhythm, steps 1 and 7): **-3 to -5%** — same push as the clave. They should feel locked together.
- Snare / rim (step 8): **+3 to +5%** — slight lay back on the rim. It "answers" the clave with a little sway, creating a tension between the driving clave and the resting rim.
- Hi-hat: **0% to -3%** — neutral or very slightly pushed. Latin hi-hat is tight, not loose.

The key contrast: clave and kick pushing, snare slightly pulling back. That conversation between forward and back is the feel.

Try the clave at -4% first — before any other offsets. It will immediately feel more alive than at 0%.`,
  },
}

const jazz: Lesson = {
  id: 'jazz-swing',
  title: 'Swing Feel',
  subtitle: 'Triplet grid, the ride cymbal, and the art of comping',
  genre: 'Jazz',
  level: 'masterclass',
  instruments: [
    { name: 'Ride Cymbal', family: 'cymbal', sequencer: 8, steps: [X,_,_,X, X,_,_,X, X,_,_,X, X,_,_,X] },
    { name: 'Hi-Hat (foot)', family: 'hihat', sequencer: 8, steps: [_,_,_,_, X,_,_,_, _,_,_,_, X,_,_,_] },
    { name: 'Snare (comp)', family: 'snare', sequencer: 8, steps: [_,_,_,_, _,_,X,_, _,_,_,_, _,_,X,_] },
    { name: 'Kick (feather)', family: 'kick', sequencer: 8, steps: [X,_,_,_, _,_,_,_, X,_,_,_, _,_,_,_] },
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
    soul: `In a 16-step sequencer, true triplet swing can't be programmed perfectly — but you can approximate it with timing offsets on the "off" ride hits. Those are the hits on steps 4, 8, 12, and 16 in this pattern: the "let" of "tri-p-let." They should land late.

**OXI One timing offsets to approximate swing:**
- Ride "on" hits (steps 1, 5, 9, 13): **0%** — the downbeats are the anchor. Keep them on the grid.
- Ride "off" hits (steps 4, 8, 12, 16): **+10 to +15%** — push these late to simulate the delayed triplet. +12% is a good starting point. The more you increase it, the "harder" the swing.
- Foot hi-hat (steps 5 and 13): **0%** — the hi-hat foot is the time-keeper. Grid only.
- Kick (feathered, steps 1 and 9): **+5 to +8%** — feathering is a lazy gesture by nature. A slight lag fits.
- Snare (comp, steps 7 and 15): **variable** — push to -8% when "answering" a phrase (urgency), lay back to +10% for a heavy response. Jazz snare comping is expressive; don't lock it to one offset.

The single most impactful change: ride off-beats at +12%. That one move transforms a stiff grid into something that swings.`,
  },
}

const fillsPt2: Lesson = {
  id: 'fills-transitions-pt2',
  title: 'Fills & Transitions Pt. 2',
  subtitle: 'Breathwork, transitions as composition, and the art of the landing',
  genre: 'Cross-genre',
  level: 'masterclass',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [X,_,_,_, _,_,_,_, _,_,_,_, _,_,_,X] },
    { name: 'Snare', family: 'snare', sequencer: 8, steps: [_,_,_,_, X,_,_,_, X,X,_,_, X,X,X,X] },
    { name: 'Tom High', family: 'tom', sequencer: 8, steps: [_,_,_,_, _,_,_,_, _,_,X,_, _,_,_,X] },
    { name: 'Tom Mid', family: 'tom', sequencer: 8, steps: [_,_,_,_, _,_,_,_, _,_,_,X, _,_,X,_] },
    { name: 'Tom Floor', family: 'tom', sequencer: 8, steps: [_,_,_,_, _,_,_,_, _,_,_,_, _,X,_,_] },
    { name: 'Crash', family: 'cymbal', sequencer: 8, steps: [X,_,_,_, _,_,_,_, _,_,_,_, _,_,_,_] },
  ],
  tabs: {
    theory: `A masterclass fill isn't longer or faster — it's better placed. The fill in this pattern starts early (beat 3, step 9) and builds across the entire second half of the bar. The crash on beat 1 is the landing.

"Breathwork" means treating fills like breaths: the pattern is an exhale, the fill is the inhale, and beat 1 is the exhale again. Fills that start too late feel rushed. Fills that start early give the listener time to feel what's coming.

**OXI One tip:** Start the fill setup at step 9 (beat 3). Cascade: snare → high tom → mid tom → floor tom across steps 9–16. Crash on step 1. Kick drives hard on step 1 underneath the crash.`,
    ear: `Listen to John Bonham (Led Zeppelin), Steve Gadd ("50 Ways to Leave Your Lover"), or Questlove. Their fills start with intention — you can feel the "breath" before the fill begins. The bar leading into a fill usually has slightly more energy, slightly more ghost notes, a sense of gathering.`,
    fills: `Three advanced fill shapes:
1. **The slow build**: start with 8th notes, move to 16th notes across the fill — it accelerates naturally.
2. **The reverse cascade**: floor tom → mid tom → high tom → snare (bottom up). Defies expectation, creates a "lift" into the new section.
3. **The dropout fill**: remove everything (kick, toms) in the last 2 beats and just play snare. The sudden nakedness before a big drop is more powerful than any note you could add.`,
    soul: `A masterclass fill combines two timing effects: the fill body rushes (pulling you toward the landing), and the landing itself settles heavy. The ear hears the rush as inevitability — "of course it lands there."

**OXI One timing offsets for a composed fill:**
- Groove section (steps 1–8): maintain your established feel — whatever lay back or push you've been using.
- Early fill notes (steps 9–12): **-3 to -5%** — slight push as the fill begins to build. The gathering feeling starts here.
- Mid fill (steps 13–14): **-8%** — urgency increases.
- Late fill (steps 15–16): **-10 to -12%** — maximum rush.
- Crash on beat 1: **0% or +3%** — land right on or slightly late. After rushing into it, even a dead-on-grid landing feels like weight.
- Kick underneath crash (step 1): **+5%** — the kick lags slightly under the crash for maximum downbeat heaviness.

Additionally, treat velocities across the fill as a crescendo: steps 9–10 at 60%, 11–12 at 75%, 13–14 at 85%, 15–16 at 95%, crash at 100%. The volume arc and the timing arc together create the sensation of inevitability.`,
  },
}

const humanization: Lesson = {
  id: 'masterclass-humanization',
  title: 'Humanization',
  subtitle: 'Velocity, timing, and breathing soul into a drum machine',
  genre: 'Cross-genre',
  level: 'masterclass',
  instruments: [
    { name: 'Kick', family: 'kick', sequencer: 8, steps: [X,_,_,_, X,_,_,_, X,_,_,_, X,_,_,_] },
    { name: 'Snare', family: 'snare', sequencer: 8, steps: [_,_,g,_, X,_,g,_, g,_,_,g, X,_,g,_] },
    { name: 'Hi-Hat Closed', family: 'hihat', sequencer: 8, steps: [X,g,X,g, X,g,X,g, X,g,X,g, X,g,X,g] },
    { name: 'Hi-Hat Open', family: 'hihat', sequencer: 8, steps: [_,_,_,_, _,_,_,X, _,_,_,_, _,_,_,X] },
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
    soul: `J Dilla programmed his MPC to play behind the beat deliberately — not by accident. That "drunk" feel, combined with intentionally imperfect velocities, became one of the most influential sounds in modern music. You can recreate that system on the OXI One.

**The Dilla method — OXI One offsets:**
- Kick: **+15 to +20%** — very late. Feels wrong in isolation, right in context.
- Snare: **+12 to +18%** — late, but slightly less than the kick. The kick "falls into" the snare.
- Hi-hat: **0%** — the grid anchor. Without something on the grid, "late" has no reference.
- Ghost notes: **-3 to -5%** — push them early. The contrast between early ghosts and late full hits is the pocket.

**Velocity variation — the other half:**
A timing offset alone doesn't complete the feel. Pair it with velocity randomness:
- Main hits: 90–100% velocity (vary ±5% per hit, not identical each loop)
- Hi-hat off-beats: 50–65% (alternate, not uniform)
- Ghost notes: 30–40%

There's also a psychoacoustic trick: quieter notes are *perceived* as slightly late even when they're on the grid. A ghost note at 35% velocity will feel late to the ear even at 0% offset. This means velocity and timing work together — you don't always need large offsets if your velocities are already varied.`,
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

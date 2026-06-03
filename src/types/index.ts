export type StepVelocity = 'full' | 'ghost'

export type Step = {
  active: boolean
  velocity?: StepVelocity  // undefined means 'full' when active
}

export type InstrumentFamily =
  | 'kick'
  | 'snare'
  | 'clap'
  | 'hihat'
  | 'tom'
  | 'cymbal'
  | 'percussion'

export type Instrument = {
  name: string
  family: InstrumentFamily
  sequencer: 7 | 8       // OXI One sequencer assignment
  steps: [               // always exactly 16 steps
    Step, Step, Step, Step,
    Step, Step, Step, Step,
    Step, Step, Step, Step,
    Step, Step, Step, Step,
  ]
}

export type LessonTabs = {
  theory: string        // plain text / basic markdown
  ear: string
  fills: string
  soul: string
}

export type LessonLevel = '101' | '201' | 'masterclass'

export type Lesson = {
  id: string
  title: string
  subtitle: string
  genre: string
  level: LessonLevel
  instruments: Instrument[]
  tabs: LessonTabs
  variations?: Omit<Lesson, 'variations'>[]  // simplified/extended variants
}

export type Progress = {
  completedIds: string[]
}

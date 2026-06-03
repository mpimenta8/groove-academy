import { CURRICULUM } from '../data/curriculum'
import type { LessonLevel } from '../types'

const SECTION_LABELS: Record<LessonLevel, string> = {
  '101':         '101 — Foundations',
  '201':         '201 — Groove & Feel',
  'masterclass': 'Masterclass',
}

const SECTION_ORDER: LessonLevel[] = ['101', '201', 'masterclass']

type CurriculumNavProps = {
  currentIndex: number
  completedIds: string[]
  onSelect: (index: number) => void
  isUnlocked: (index: number) => boolean
}

export function CurriculumNav({ currentIndex, completedIds, onSelect, isUnlocked }: CurriculumNavProps) {
  return (
    <nav className="w-52 border-r border-neutral-800 flex flex-col h-full overflow-y-auto flex-shrink-0">
      <div className="px-4 py-4 border-b border-neutral-800/50">
        <div className="text-white font-bold tracking-widest text-sm">GROOVE</div>
        <div className="text-neutral-600 text-xs tracking-widest">ACADEMY</div>
      </div>

      <div className="flex-1 py-3">
        {SECTION_ORDER.map((level) => {
          const lessonsInSection = CURRICULUM
            .map((lesson, index) => ({ lesson, index }))
            .filter(({ lesson }) => lesson.level === level)

          return (
            <div key={level} className="mb-4 px-3">
              <div className="text-neutral-600 text-xs tracking-widest uppercase mb-2 px-1">
                {SECTION_LABELS[level]}
              </div>
              {lessonsInSection.map(({ lesson, index }) => {
                const isActive = index === currentIndex
                const isDone = completedIds.includes(lesson.id)
                const unlocked = isUnlocked(index)

                return (
                  <button
                    key={lesson.id}
                    onClick={() => onSelect(index)}
                    disabled={!unlocked}
                    className={[
                      'w-full flex items-center gap-2 rounded px-2 py-1.5 mb-0.5 text-left text-xs transition-colors',
                      isActive
                        ? 'bg-green-950/50 border border-green-800 text-green-400'
                        : unlocked
                        ? 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 cursor-pointer'
                        : 'text-neutral-700 disabled:cursor-not-allowed',
                    ].join(' ')}
                  >
                    <div className={[
                      'w-1.5 h-1.5 rounded-full flex-shrink-0',
                      isDone ? 'bg-green-500' : isActive ? 'bg-green-700' : 'bg-neutral-700',
                    ].join(' ')} />
                    <span className="truncate">{lesson.title}</span>
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
    </nav>
  )
}

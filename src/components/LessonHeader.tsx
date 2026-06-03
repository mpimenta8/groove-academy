import type { Lesson, LessonLevel } from '../types'

const LEVEL_STYLES: Record<LessonLevel, string> = {
  '101':         'border-green-700 text-green-400 bg-green-950/40',
  '201':         'border-blue-700 text-blue-400 bg-blue-950/40',
  'masterclass': 'border-purple-700 text-purple-400 bg-purple-950/40',
}

type LessonHeaderProps = {
  lesson: Lesson
  lessonIndex: number
  totalLessons: number
  isComplete: boolean
  onMarkComplete: () => void
  onPrev: () => void
  onNext: () => void
}

export function LessonHeader({
  lesson,
  lessonIndex,
  totalLessons,
  isComplete,
  onMarkComplete,
  onPrev,
  onNext,
}: LessonHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <div className="flex gap-2 items-center mb-1.5">
          <span className={`border rounded px-2 py-0.5 text-xs font-mono tracking-widest ${LEVEL_STYLES[lesson.level]}`}>
            {lesson.level.toUpperCase()}
          </span>
          <span className="border border-neutral-700 text-neutral-500 rounded px-2 py-0.5 text-xs uppercase tracking-wide">
            {lesson.genre}
          </span>
        </div>
        <h1 className="text-white text-xl font-semibold">{lesson.title}</h1>
        <p className="text-neutral-500 text-sm mt-0.5">{lesson.subtitle}</p>
      </div>

      <div className="flex gap-2 items-center flex-shrink-0">
        <button
          onClick={onPrev}
          disabled={lessonIndex === 0}
          className="border border-neutral-700 rounded px-3 py-1.5 text-neutral-500 text-xs disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
        >
          ← Prev
        </button>
        <button
          onClick={onMarkComplete}
          disabled={isComplete}
          className={[
            'border rounded px-3 py-1.5 text-xs cursor-pointer',
            isComplete
              ? 'border-green-800 text-green-600 bg-green-950/30 cursor-default'
              : 'border-green-600 text-green-400 bg-green-950/50 hover:bg-green-900/50',
          ].join(' ')}
        >
          {isComplete ? 'Completed ✓' : 'Mark Complete'}
        </button>
        <button
          onClick={onNext}
          disabled={lessonIndex === totalLessons - 1}
          className="border border-neutral-700 rounded px-3 py-1.5 text-neutral-500 text-xs disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

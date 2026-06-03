import type { Lesson } from '../types'
import { DrumGrid } from './DrumGrid'
import { LessonHeader } from './LessonHeader'
import { LessonTabs } from './LessonTabs'

type LessonViewProps = {
  lesson: Lesson
  lessonIndex: number
  totalLessons: number
  isComplete: boolean
  onMarkComplete: () => void
  onPrev: () => void
  onNext: () => void
}

export function LessonView({
  lesson,
  lessonIndex,
  totalLessons,
  isComplete,
  onMarkComplete,
  onPrev,
  onNext,
}: LessonViewProps) {
  return (
    <main className="flex-1 p-6 overflow-y-auto min-w-0">
      <LessonHeader
        lesson={lesson}
        lessonIndex={lessonIndex}
        totalLessons={totalLessons}
        isComplete={isComplete}
        onMarkComplete={onMarkComplete}
        onPrev={onPrev}
        onNext={onNext}
      />
      <div className="mb-4">
        <DrumGrid instruments={lesson.instruments} />
      </div>
      <LessonTabs tabs={lesson.tabs} />
    </main>
  )
}

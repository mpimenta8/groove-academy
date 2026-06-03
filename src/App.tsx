import { useState } from 'react'
import { CURRICULUM } from './data/curriculum'
import { useProgress } from './hooks/useProgress'
import { CurriculumNav } from './components/CurriculumNav'
import { LessonView } from './components/LessonView'

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { completedIds, markComplete, isComplete, isUnlocked } = useProgress()

  const lesson = CURRICULUM[currentIndex]

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const handleNext = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex < CURRICULUM.length && isUnlocked(nextIndex)) {
      setCurrentIndex(nextIndex)
    }
  }

  const handleSelect = (index: number) => {
    if (isUnlocked(index)) setCurrentIndex(index)
  }

  const handleMarkComplete = () => {
    markComplete(lesson.id)
  }

  return (
    <div className="flex h-screen bg-neutral-950 overflow-hidden">
      <CurriculumNav
        currentIndex={currentIndex}
        completedIds={completedIds}
        onSelect={handleSelect}
        isUnlocked={isUnlocked}
      />
      <LessonView
        lesson={lesson}
        lessonIndex={currentIndex}
        totalLessons={CURRICULUM.length}
        isComplete={isComplete(lesson.id)}
        onMarkComplete={handleMarkComplete}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  )
}

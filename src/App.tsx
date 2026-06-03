import { useProgress } from './hooks/useProgress'
import { CurriculumNav } from './components/CurriculumNav'
import { LessonView } from './components/LessonView'
import { CURRICULUM } from './data/curriculum'

export default function App() {
  const { completedIds, currentLessonIndex, markComplete, setCurrentLesson, isComplete, isUnlocked } = useProgress()

  const lesson = CURRICULUM[currentLessonIndex]

  const handlePrev = () => {
    if (currentLessonIndex > 0) setCurrentLesson(currentLessonIndex - 1)
  }

  const handleNext = () => {
    const nextIndex = currentLessonIndex + 1
    if (nextIndex < CURRICULUM.length && isUnlocked(nextIndex)) {
      setCurrentLesson(nextIndex)
    }
  }

  const handleSelect = (index: number) => {
    if (isUnlocked(index)) setCurrentLesson(index)
  }

  const handleMarkComplete = () => {
    markComplete(lesson.id)
  }

  return (
    <div className="flex h-screen bg-neutral-950 overflow-hidden">
      <CurriculumNav
        currentIndex={currentLessonIndex}
        completedIds={completedIds}
        onSelect={handleSelect}
        isUnlocked={isUnlocked}
      />
      <LessonView
        lesson={lesson}
        lessonIndex={currentLessonIndex}
        totalLessons={CURRICULUM.length}
        isComplete={isComplete(lesson.id)}
        onMarkComplete={handleMarkComplete}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  )
}

import { useState, useCallback } from 'react'
import { CURRICULUM } from '../data/curriculum'

const STORAGE_KEY = 'groove-academy-progress'

type ProgressState = {
  completedIds: string[]
}

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { completedIds: [] }
    return JSON.parse(raw) as ProgressState
  } catch {
    return { completedIds: [] }
  }
}

function saveProgress(state: ProgressState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(loadProgress)

  const markComplete = useCallback((lessonId: string) => {
    setProgress(prev => {
      if (prev.completedIds.includes(lessonId)) return prev
      const next = { completedIds: [...prev.completedIds, lessonId] }
      saveProgress(next)
      return next
    })
  }, [])

  const isComplete = useCallback(
    (lessonId: string) => progress.completedIds.includes(lessonId),
    [progress.completedIds]
  )

  const isUnlocked = useCallback(
    (lessonIndex: number) => {
      if (lessonIndex === 0) return true
      const prevLesson = CURRICULUM[lessonIndex - 1]
      return progress.completedIds.includes(prevLesson.id)
    },
    [progress.completedIds]
  )

  return { completedIds: progress.completedIds, markComplete, isComplete, isUnlocked }
}

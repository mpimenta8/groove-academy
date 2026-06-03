import { useState, useCallback } from 'react'
import { CURRICULUM } from '../data/curriculum'

const STORAGE_KEY = 'groove-academy-progress'

type ProgressState = {
  completedIds: string[]
  currentLessonIndex: number
}

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { completedIds: [], currentLessonIndex: 0 }
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return {
      completedIds: parsed.completedIds ?? [],
      currentLessonIndex: parsed.currentLessonIndex ?? 0,
    }
  } catch {
    return { completedIds: [], currentLessonIndex: 0 }
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
      const next = { ...prev, completedIds: [...prev.completedIds, lessonId] }
      saveProgress(next)
      return next
    })
  }, [])

  const setCurrentLesson = useCallback((index: number) => {
    setProgress(prev => {
      if (prev.currentLessonIndex === index) return prev
      const next = { ...prev, currentLessonIndex: index }
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

  return {
    completedIds: progress.completedIds,
    currentLessonIndex: progress.currentLessonIndex,
    markComplete,
    setCurrentLesson,
    isComplete,
    isUnlocked,
  }
}

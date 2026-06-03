import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LessonHeader } from '../components/LessonHeader'
import { CURRICULUM } from '../data/curriculum'

const lesson = CURRICULUM[0] // rock-backbeat

describe('LessonHeader', () => {
  it('renders the lesson title', () => {
    render(
      <LessonHeader
        lesson={lesson}
        lessonIndex={0}
        totalLessons={10}
        isComplete={false}
        onMarkComplete={vi.fn()}
        onPrev={vi.fn()}
        onNext={vi.fn()}
      />
    )
    expect(screen.getByText('The Backbeat')).toBeInTheDocument()
  })

  it('renders the level badge', () => {
    render(
      <LessonHeader
        lesson={lesson}
        lessonIndex={0}
        totalLessons={10}
        isComplete={false}
        onMarkComplete={vi.fn()}
        onPrev={vi.fn()}
        onNext={vi.fn()}
      />
    )
    expect(screen.getByText('101')).toBeInTheDocument()
  })

  it('calls onMarkComplete when button clicked', async () => {
    const onMarkComplete = vi.fn()
    render(
      <LessonHeader
        lesson={lesson}
        lessonIndex={0}
        totalLessons={10}
        isComplete={false}
        onMarkComplete={onMarkComplete}
        onPrev={vi.fn()}
        onNext={vi.fn()}
      />
    )
    await userEvent.click(screen.getByText('Mark Complete'))
    expect(onMarkComplete).toHaveBeenCalledOnce()
  })

  it('shows Completed state when isComplete is true', () => {
    render(
      <LessonHeader
        lesson={lesson}
        lessonIndex={0}
        totalLessons={10}
        isComplete={true}
        onMarkComplete={vi.fn()}
        onPrev={vi.fn()}
        onNext={vi.fn()}
      />
    )
    expect(screen.getByText('Completed ✓')).toBeInTheDocument()
  })

  it('disables Prev button on first lesson', () => {
    render(
      <LessonHeader
        lesson={lesson}
        lessonIndex={0}
        totalLessons={10}
        isComplete={false}
        onMarkComplete={vi.fn()}
        onPrev={vi.fn()}
        onNext={vi.fn()}
      />
    )
    expect(screen.getByText('← Prev')).toBeDisabled()
  })
})

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CurriculumNav } from '../components/CurriculumNav'
import { CURRICULUM } from '../data/curriculum'

describe('CurriculumNav', () => {
  it('renders all 10 lesson titles', () => {
    render(
      <CurriculumNav
        currentIndex={0}
        completedIds={[]}
        onSelect={vi.fn()}
        isUnlocked={() => true}
      />
    )
    for (const lesson of CURRICULUM) {
      expect(screen.getByText(lesson.title)).toBeInTheDocument()
    }
  })

  it('renders section headers for each level', () => {
    render(
      <CurriculumNav
        currentIndex={0}
        completedIds={[]}
        onSelect={vi.fn()}
        isUnlocked={() => true}
      />
    )
    expect(screen.getByText(/101/)).toBeInTheDocument()
    expect(screen.getByText(/201/)).toBeInTheDocument()
    expect(screen.getByText(/masterclass/i)).toBeInTheDocument()
  })

  it('calls onSelect with lesson index when clicked', async () => {
    const onSelect = vi.fn()
    render(
      <CurriculumNav
        currentIndex={0}
        completedIds={[]}
        onSelect={onSelect}
        isUnlocked={() => true}
      />
    )
    await userEvent.click(screen.getByText('Boom Bap'))
    expect(onSelect).toHaveBeenCalledWith(1)
  })

  it('does not call onSelect for locked lessons', async () => {
    const onSelect = vi.fn()
    render(
      <CurriculumNav
        currentIndex={0}
        completedIds={[]}
        onSelect={onSelect}
        isUnlocked={(i) => i === 0}
      />
    )
    await userEvent.click(screen.getByText('Boom Bap'))
    expect(onSelect).not.toHaveBeenCalled()
  })
})

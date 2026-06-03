import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LessonTabs } from '../components/LessonTabs'
import type { LessonTabs as LessonTabsType } from '../types'

const tabs: LessonTabsType = {
  theory: 'Theory content here',
  ear: 'Ear training content',
  fills: 'Fills content',
  soul: 'Soul content',
}

describe('LessonTabs', () => {
  it('renders all four tab labels', () => {
    render(<LessonTabs tabs={tabs} />)
    expect(screen.getByText('Theory')).toBeInTheDocument()
    expect(screen.getByText('Ear Training')).toBeInTheDocument()
    expect(screen.getByText('Fills')).toBeInTheDocument()
    expect(screen.getByText('Soul & Feel')).toBeInTheDocument()
  })

  it('shows Theory content by default', () => {
    render(<LessonTabs tabs={tabs} />)
    expect(screen.getByText('Theory content here')).toBeInTheDocument()
  })

  it('switches to Ear Training content on click', async () => {
    render(<LessonTabs tabs={tabs} />)
    await userEvent.click(screen.getByText('Ear Training'))
    expect(screen.getByText('Ear training content')).toBeInTheDocument()
    expect(screen.queryByText('Theory content here')).not.toBeInTheDocument()
  })

  it('switches to Fills content on click', async () => {
    render(<LessonTabs tabs={tabs} />)
    await userEvent.click(screen.getByText('Fills'))
    expect(screen.getByText('Fills content')).toBeInTheDocument()
  })

  it('switches to Soul content on click', async () => {
    render(<LessonTabs tabs={tabs} />)
    await userEvent.click(screen.getByText('Soul & Feel'))
    expect(screen.getByText('Soul content')).toBeInTheDocument()
  })
})

import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { CURRICULUM } from '../data/curriculum'

beforeEach(() => localStorage.clear())

describe('App', () => {
  it('renders the first lesson on load', () => {
    render(<App />)
    expect(screen.getAllByText(CURRICULUM[0].title).length).toBeGreaterThan(0)
  })

  it('navigates to next lesson', async () => {
    render(<App />)
    // Mark first lesson complete to unlock second
    await userEvent.click(screen.getByText('Mark Complete'))
    await userEvent.click(screen.getByText('Next →'))
    expect(screen.getAllByText(CURRICULUM[1].title).length).toBeGreaterThan(0)
  })

  it('navigates back with Prev', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Mark Complete'))
    await userEvent.click(screen.getByText('Next →'))
    await userEvent.click(screen.getByText('← Prev'))
    expect(screen.getAllByText(CURRICULUM[0].title).length).toBeGreaterThan(0)
  })

  it('selecting a lesson from sidebar updates the view', async () => {
    render(<App />)
    // Unlock lesson 2 by completing lessons 0 and 1
    await userEvent.click(screen.getByText('Mark Complete')) // complete lesson 0
    await userEvent.click(screen.getByText('Next →'))
    await userEvent.click(screen.getByText('Mark Complete')) // complete lesson 1
    // Now click lesson 2 in the nav
    await userEvent.click(screen.getByText(CURRICULUM[2].title))
    expect(screen.getAllByText(CURRICULUM[2].title).length).toBeGreaterThan(0)
  })
})

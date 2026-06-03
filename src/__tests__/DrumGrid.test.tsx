import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DrumGrid } from '../components/DrumGrid'
import type { Instrument } from '../types'

const makeInstrument = (name: string, activeSteps: number[]): Instrument => ({
  name,
  family: 'kick',
  sequencer: 7,
  steps: Array.from({ length: 16 }, (_, i) => ({
    active: activeSteps.includes(i),
  })) as Instrument['steps'],
})

describe('DrumGrid', () => {
  it('renders instrument names', () => {
    const instruments = [makeInstrument('Kick', [0, 8])]
    render(<DrumGrid instruments={instruments} />)
    expect(screen.getByText('Kick')).toBeInTheDocument()
  })

  it('renders 16 step cells per instrument', () => {
    const instruments = [makeInstrument('Kick', [0])]
    render(<DrumGrid instruments={instruments} />)
    const cells = document.querySelectorAll('[data-step]')
    expect(cells).toHaveLength(16)
  })

  it('marks active steps with data-active', () => {
    const instruments = [makeInstrument('Kick', [0, 8])]
    render(<DrumGrid instruments={instruments} />)
    const activeCells = document.querySelectorAll('[data-active="true"]')
    expect(activeCells).toHaveLength(2)
  })

  it('renders beat markers 1–4', () => {
    const instruments = [makeInstrument('Kick', [])]
    render(<DrumGrid instruments={instruments} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })
})

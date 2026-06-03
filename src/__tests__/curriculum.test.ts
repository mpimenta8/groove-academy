import { describe, it, expect } from 'vitest'
import { CURRICULUM } from '../data/curriculum'

describe('curriculum', () => {
  it('has exactly 10 lessons', () => {
    expect(CURRICULUM).toHaveLength(10)
  })

  it('lessons are ordered: three 101, four 201, three masterclass', () => {
    const levels = CURRICULUM.map(l => l.level)
    expect(levels).toEqual([
      '101', '101', '101',
      '201', '201', '201', '201',
      'masterclass', 'masterclass', 'masterclass',
    ])
  })

  it('every lesson has exactly 16 steps per instrument', () => {
    for (const lesson of CURRICULUM) {
      for (const instrument of lesson.instruments) {
        expect(instrument.steps).toHaveLength(16)
      }
    }
  })

  it('every lesson has all four tab fields', () => {
    for (const lesson of CURRICULUM) {
      expect(lesson.tabs.theory.length).toBeGreaterThan(0)
      expect(lesson.tabs.ear.length).toBeGreaterThan(0)
      expect(lesson.tabs.fills.length).toBeGreaterThan(0)
      expect(lesson.tabs.soul.length).toBeGreaterThan(0)
    }
  })

  it('every instrument has sequencer 7 or 8', () => {
    for (const lesson of CURRICULUM) {
      for (const instrument of lesson.instruments) {
        expect([7, 8]).toContain(instrument.sequencer)
      }
    }
  })

  it('every lesson has a unique id', () => {
    const ids = CURRICULUM.map(l => l.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

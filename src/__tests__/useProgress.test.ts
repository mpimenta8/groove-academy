// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useProgress } from '../hooks/useProgress'
import { CURRICULUM } from '../data/curriculum'

beforeEach(() => {
  localStorage.clear()
})

describe('useProgress', () => {
  it('starts with no completed lessons', () => {
    const { result } = renderHook(() => useProgress())
    expect(result.current.completedIds).toEqual([])
  })

  it('marks a lesson complete', () => {
    const { result } = renderHook(() => useProgress())
    act(() => result.current.markComplete('rock-backbeat'))
    expect(result.current.completedIds).toContain('rock-backbeat')
  })

  it('does not duplicate completed ids', () => {
    const { result } = renderHook(() => useProgress())
    act(() => result.current.markComplete('rock-backbeat'))
    act(() => result.current.markComplete('rock-backbeat'))
    expect(result.current.completedIds.filter(id => id === 'rock-backbeat')).toHaveLength(1)
  })

  it('isComplete returns true for completed lessons', () => {
    const { result } = renderHook(() => useProgress())
    act(() => result.current.markComplete('rock-backbeat'))
    expect(result.current.isComplete('rock-backbeat')).toBe(true)
  })

  it('isComplete returns false for incomplete lessons', () => {
    const { result } = renderHook(() => useProgress())
    expect(result.current.isComplete('rock-backbeat')).toBe(false)
  })

  it('isUnlocked returns true for lesson 0 always', () => {
    const { result } = renderHook(() => useProgress())
    expect(result.current.isUnlocked(0)).toBe(true)
  })

  it('isUnlocked returns true when previous lesson is complete', () => {
    const { result } = renderHook(() => useProgress())
    act(() => result.current.markComplete(CURRICULUM[0].id))
    expect(result.current.isUnlocked(1)).toBe(true)
  })

  it('isUnlocked returns false when previous lesson is not complete', () => {
    const { result } = renderHook(() => useProgress())
    expect(result.current.isUnlocked(1)).toBe(false)
  })

  it('persists to localStorage', () => {
    const { result } = renderHook(() => useProgress())
    act(() => result.current.markComplete('rock-backbeat'))
    const stored = JSON.parse(localStorage.getItem('groove-academy-progress') ?? '{}')
    expect(stored.completedIds).toContain('rock-backbeat')
  })

  it('loads from localStorage on init', () => {
    localStorage.setItem('groove-academy-progress', JSON.stringify({ completedIds: ['rock-backbeat'] }))
    const { result } = renderHook(() => useProgress())
    expect(result.current.completedIds).toContain('rock-backbeat')
  })
})

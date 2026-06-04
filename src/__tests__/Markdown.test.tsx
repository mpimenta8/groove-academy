import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Markdown } from '../components/Markdown'

describe('Markdown', () => {
  it('renders **bold** as <strong>', () => {
    const { container } = render(<Markdown source="hello **world**" />)
    expect(container.querySelector('strong')?.textContent).toBe('world')
  })

  it('renders *italic* as <em>', () => {
    const { container } = render(<Markdown source="an *emphasis* here" />)
    expect(container.querySelector('em')?.textContent).toBe('emphasis')
  })

  it('renders `code` as <code>', () => {
    const { container } = render(<Markdown source="set `step 7` active" />)
    expect(container.querySelector('code')?.textContent).toBe('step 7')
  })

  it('does not parse asterisks inside inline code', () => {
    const { container } = render(<Markdown source="`a*b*c`" />)
    expect(container.querySelector('code')?.textContent).toBe('a*b*c')
    expect(container.querySelector('em')).toBeNull()
    expect(container.querySelector('strong')).toBeNull()
  })

  it('renders ## as h3 and ### as h4', () => {
    const { container } = render(<Markdown source={'## Big\n\n### Small'} />)
    expect(container.querySelector('h3')?.textContent).toBe('Big')
    expect(container.querySelector('h4')?.textContent).toBe('Small')
  })

  it('renders - lines as a ul with one li per line', () => {
    const { container } = render(<Markdown source={'- one\n- two\n- three'} />)
    const items = container.querySelectorAll('ul li')
    expect(items).toHaveLength(3)
    expect(items[0].textContent).toBe('one')
  })

  it('renders numbered lines as an ol', () => {
    const { container } = render(<Markdown source={'1. first\n2. second'} />)
    const items = container.querySelectorAll('ol li')
    expect(items).toHaveLength(2)
    expect(items[1].textContent).toBe('second')
  })

  it('renders > lines as a blockquote', () => {
    const { container } = render(<Markdown source="> a remembered line" />)
    expect(container.querySelector('blockquote')?.textContent).toBe('a remembered line')
  })

  it('splits blank-line-separated blocks into separate paragraphs', () => {
    const { container } = render(<Markdown source={'first para\n\nsecond para'} />)
    expect(container.querySelectorAll('p')).toHaveLength(2)
  })

  it('leaves no literal markup in a plain bold paragraph', () => {
    const { container } = render(<Markdown source="the **pocket** matters" />)
    expect(container.textContent).not.toContain('*')
  })
})

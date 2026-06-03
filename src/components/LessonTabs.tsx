import { useState } from 'react'
import type { LessonTabs as LessonTabsType } from '../types'

type Tab = 'theory' | 'ear' | 'fills' | 'soul'

const TAB_LABELS: Record<Tab, string> = {
  theory: 'Theory',
  ear: 'Ear Training',
  fills: 'Fills',
  soul: 'Soul & Feel',
}

type LessonTabsProps = {
  tabs: LessonTabsType
}

export function LessonTabs({ tabs }: LessonTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('theory')

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden">
      <div className="flex border-b border-neutral-800">
        {(Object.keys(TAB_LABELS) as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={[
              'px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer',
              activeTab === tab
                ? 'text-green-400 border-b-2 border-green-400 bg-green-950/30'
                : 'text-neutral-500 hover:text-neutral-300',
            ].join(' ')}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>
      <div className="p-4 bg-neutral-950 text-neutral-300 text-sm leading-relaxed whitespace-pre-wrap">
        {tabs[activeTab]}
      </div>
    </div>
  )
}

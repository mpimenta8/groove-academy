import type { Instrument, InstrumentFamily } from '../types'

const FAMILY_COLORS: Record<InstrumentFamily, string> = {
  kick:       'bg-green-400',
  snare:      'bg-cyan-400',
  clap:       'bg-purple-500',
  hihat:      'bg-amber-400',
  tom:        'bg-orange-400',
  cymbal:     'bg-yellow-300',
  percussion: 'bg-gray-400',
}

const BEAT_MARKERS = ['1', '', '', '', '2', '', '', '', '3', '', '', '', '4', '', '', '']

type DrumGridProps = {
  instruments: Instrument[]
}

export function DrumGrid({ instruments }: DrumGridProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
      {/* Beat markers row */}
      <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: '72px repeat(16, 1fr)' }}>
        <div />
        {BEAT_MARKERS.map((label, i) => (
          <div key={i} className="text-center text-neutral-500 text-xs h-4 leading-4">
            {label}
          </div>
        ))}
      </div>

      {/* Instrument rows */}
      {instruments.map((instrument) => (
        <div
          key={instrument.name}
          className="grid gap-1 mb-1.5 items-center"
          style={{ gridTemplateColumns: '72px repeat(16, 1fr)' }}
        >
          <div className="text-neutral-400 text-xs truncate pr-2">{instrument.name}</div>
          {instrument.steps.map((step, stepIndex) => {
            const isGhost = step.active && step.velocity === 'ghost'
            const activeColor = FAMILY_COLORS[instrument.family]
            return (
              <div
                key={stepIndex}
                data-step={stepIndex}
                data-active={step.active}
                className={[
                  'rounded h-5 transition-colors',
                  step.active
                    ? `${activeColor} ${isGhost ? 'opacity-35' : 'opacity-100'}`
                    : 'bg-neutral-800',
                  !step.active && stepIndex % 4 === 0 ? 'bg-neutral-700' : '',
                ].join(' ')}
              />
            )
          })}
        </div>
      ))}

      {/* Color legend */}
      <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-neutral-800">
        {(Object.entries(FAMILY_COLORS) as [InstrumentFamily, string][])
          .filter(([family]) =>
            instruments.some(i => i.family === family)
          )
          .map(([family, color]) => (
            <div key={family} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-sm ${color}`} />
              <span className="text-neutral-500 text-xs uppercase tracking-wide">{family}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

const beats = ['All', 'Eagles', 'Phillies', 'Sixers', 'Flyers']

export default function DateBar() {
  const [active, setActive] = useState('All')

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div style={{
      background: 'var(--green)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      padding: '7px 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(232,213,176,0.6)'
      }}>
        {today}
      </div>
      <div style={{ display: 'flex' }}>
        {beats.map(beat => (
          <button
            key={beat}
            onClick={() => setActive(beat)}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 14px',
              color: active === beat ? 'var(--kraft)' : 'rgba(232,213,176,0.5)',
              background: 'transparent',
              border: 'none',
              borderRight: '1px solid rgba(255,255,255,0.08)',
              borderBottom: active === beat ? '2px solid var(--kraft-dark)' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {beat}
          </button>
        ))}
      </div>
    </div>
  )
}
export default function Masthead() {
  return (
    <div style={{
      background: 'var(--kraft)',
      borderBottom: '4px solid var(--green)',
      padding: '2.5rem 2rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(100,70,20,0.04) 8px, rgba(100,70,20,0.04) 9px)'
      }} />
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        position: 'relative',
        textAlign: 'center'
      }}>
        <Rule label="Est. Philadelphia, PA · 2025" />
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: '80px',
          lineHeight: 0.95,
          color: 'var(--green)',
          letterSpacing: '-0.02em'
        }}>
          Sports Hoagie<sup style={{ fontSize: '24px', color: 'var(--red)' }}>®</sup>
        </div>
        <div style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 400,
          fontSize: '14px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--green-mid)',
          marginTop: '0.6rem'
        }}>
          Philly Sports · Served Fresh · No Filter
        </div>
        <Rule label="Hot takes, cold stats, and opinions stacked high" italic />
      </div>
    </div>
  )
}

function Rule({ label, italic }: { label: string; italic?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      margin: '0.75rem 0'
    }}>
      <div style={{ flex: 1, height: '1.5px', background: 'var(--green)' }} />
      <span style={{
        fontFamily: italic ? "'Libre Baskerville', serif" : "'Oswald', sans-serif",
        fontStyle: italic ? 'italic' : 'normal',
        fontSize: italic ? '12px' : '11px',
        fontWeight: italic ? 400 : 600,
        letterSpacing: italic ? '0' : '0.18em',
        textTransform: italic ? 'none' : 'uppercase',
        color: italic ? 'var(--mid)' : 'var(--green-mid)',
        whiteSpace: 'nowrap'
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: '1.5px', background: 'var(--green)' }} />
    </div>
  )
}
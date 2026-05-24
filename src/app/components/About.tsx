export default function About() {
  return (
    <div style={{
      background: 'var(--kraft)',
      border: '1.5px solid var(--border)',
      padding: '2rem',
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      marginBottom: '2.5rem'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'var(--green)',
        border: '3px solid var(--green-mid)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: '28px',
          color: 'var(--kraft)'
        }}>
          GR
        </span>
      </div>

      <div>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '22px',
          color: 'var(--green)',
          marginBottom: '6px'
        }}>
          Behind the Counter
        </h3>
        <p style={{
          fontSize: '13px',
          lineHeight: 1.7,
          color: 'var(--text)'
        }}>
          Lifelong Philadelphian. Former sports writer. Perpetually heartbroken
          by the Sixers, unreasonably optimistic about everyone else. Sports
          Hoagie is where I get to write about Philly sports the way they
          deserve — honestly, loudly, and with mustard.
        </p>
      </div>

      <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
        <button style={{
          display: 'inline-block',
          border: '2px solid var(--green)',
          color: 'var(--green)',
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 600,
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '10px 22px',
          background: 'transparent',
          cursor: 'pointer'
        }}>
          My Story
        </button>
      </div>
    </div>
  )
}
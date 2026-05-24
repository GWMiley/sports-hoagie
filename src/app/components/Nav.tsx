export default function Nav() {
  return (
    <nav style={{
      background: 'var(--green)',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '50px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '3px solid var(--kraft-dark)'
    }}>
      <div style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        fontSize: '18px',
        color: 'var(--kraft)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase'
      }}>
        Sports Hoagie
      </div>
      <div style={{ display: 'flex', gap: '1.75rem' }}>
        {['Eagles', 'Phillies', 'Sixers', 'Flyers', 'Podcast', 'Stats'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            color: 'rgba(232,213,176,0.7)',
            textDecoration: 'none',
            fontFamily: "'Oswald', sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            {link}
          </a>
        ))}
      </div>
      <button style={{
        background: 'var(--red)',
        color: '#fff',
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        border: 'none',
        padding: '7px 18px',
        cursor: 'pointer'
      }}>
        Subscribe
      </button>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--green)',
      padding: '1.75rem 2rem',
      borderTop: '4px solid var(--kraft-dark)',
      textAlign: 'center'
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900,
        fontSize: '28px',
        color: 'var(--kraft)',
        marginBottom: '0.4rem'
      }}>
        Sports Hoagie
      </div>
      <p style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: '11px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(232,213,176,0.5)'
      }}>
        Philly sports · served fresh · no filter · est. 2025
      </p>
    </footer>
  )
}
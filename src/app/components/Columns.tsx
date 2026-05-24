const columns = [
  {
    beat: 'Eagles',
    title: 'Why Sirianni Deserves More Credit',
    excerpt: 'The criticisms are loud, the defenders quiet. But the record doesn\'t lie, and neither does the film.',
    date: 'May 19 · 5 min read'
  },
  {
    beat: 'Phillies',
    title: 'Schwarber\'s April Was a Lie. May Is the Truth.',
    excerpt: 'Numbers can mislead. Context clarifies. Kyle\'s two-month split tells a very specific story.',
    date: 'May 17 · 4 min read'
  },
  {
    beat: 'Sixers',
    title: 'The Joel Embiid Era Is Over. What Comes Next?',
    excerpt: 'No finger-pointing. No eulogy. Just an honest look at where the Sixers go from here.',
    date: 'May 14 · 6 min read'
  }
]

export default function Columns() {
  return (
    <>
      <SectionLabel text="The Menu — Latest Columns" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        background: '#fff',
        border: '1.5px solid var(--border)',
        marginBottom: '2.5rem'
      }}>
        {columns.map((col, i) => (
          <div key={i} style={{
            padding: '1.5rem',
            borderRight: i < 2 ? '1px solid var(--border)' : 'none',
            cursor: 'pointer'
          }}>
            <div style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--red)',
              marginBottom: '8px'
            }}>
              {col.beat}
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: 1.2,
              marginBottom: '10px',
              color: 'var(--black)'
            }}>
              {col.title}
            </h3>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.6,
              color: '#5a4030',
              marginBottom: '1rem'
            }}>
              {col.excerpt}
            </p>
            <div style={{
              fontSize: '11px',
              color: 'var(--mid)',
              fontStyle: 'italic'
            }}>
              {col.date}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{
      fontFamily: "'Oswald', sans-serif",
      fontWeight: 600,
      fontSize: '11px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--green)',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      <span style={{ color: 'var(--red)', fontSize: '8px' }}>◆</span>
      {text}
      <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}
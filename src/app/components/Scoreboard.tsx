import { SectionLabel } from './Columns'

const teams = [
  {
    team: 'Eagles',
    record: '4–1',
    label: 'Preseason',
    trend: '↑ Hot',
    up: true
  },
  {
    team: 'Phillies',
    record: '34–18',
    label: 'Season Record',
    trend: '↑ 1st NL East',
    up: true
  },
  {
    team: 'Sixers',
    record: '22–47',
    label: 'Season Record',
    trend: '↓ Lottery',
    up: false
  },
  {
    team: 'Flyers',
    record: '28–39',
    label: 'Season Record',
    trend: '↓ Missed playoffs',
    up: false
  }
]

export default function Scoreboard() {
  return (
    <>
      <SectionLabel text="Scoreboard" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        background: '#fff',
        border: '1.5px solid var(--border)',
        marginBottom: '2.5rem'
      }}>
        {teams.map((t, i) => (
          <div key={i} style={{
            padding: '1.25rem',
            borderRight: i < 3 ? '1px solid var(--border)' : 'none',
            textAlign: 'center'
          }}>
            <div style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--mid)',
              marginBottom: '6px'
            }}>
              {t.team}
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: '38px',
              lineHeight: 1,
              color: 'var(--black)'
            }}>
              {t.record}
            </div>
            <div style={{
              fontSize: '11px',
              color: 'var(--mid)',
              marginTop: '4px',
              fontStyle: 'italic'
            }}>
              {t.label}
            </div>
            <div style={{
              display: 'inline-block',
              marginTop: '8px',
              fontFamily: "'Oswald', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              padding: '3px 10px',
              letterSpacing: '0.04em',
              background: t.up ? 'var(--green-light)' : 'var(--red-light)',
              color: t.up ? 'var(--green)' : 'var(--red)'
            }}>
              {t.trend}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
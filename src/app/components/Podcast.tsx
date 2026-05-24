import { SectionLabel } from './Columns'

const episodes = [
  {
    num: 'Ep. 47',
    title: "Eagles' WR Room: Fixed or Fragile?",
    desc: 'A deep look at the wide receiver depth chart heading into camp',
    duration: '52 min · May 22'
  },
  {
    num: 'Ep. 46',
    title: 'Phillies Bullpen Deep Dive',
    desc: "The arms, the roles, and the closer question nobody's answering",
    duration: '44 min · May 15'
  },
  {
    num: 'Ep. 45',
    title: 'Draft Grades & Honest Takes',
    desc: "Every Philly team's offseason haul graded with no mercy",
    duration: '61 min · May 8'
  }
]

export default function Podcast() {
  return (
    <>
      <SectionLabel text="The Podcast — Order Up" />
      <div style={{
        background: 'var(--green)',
        padding: '2rem',
        marginBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '30px',
            color: 'var(--kraft)'
          }}>
            Sports Hoagie Pod
          </h2>
          <a href="#" style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: '12px',
            fontWeight: 600,
            color: 'rgba(232,213,176,0.6)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            textDecoration: 'none'
          }}>
            All episodes →
          </a>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(255,255,255,0.1)'
        }}>
          {episodes.map((ep, i) => (
            <div key={i} style={{
              background: 'var(--green)',
              padding: '1.25rem',
              cursor: 'pointer'
            }}>
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '11px',
                color: 'var(--kraft-dark)',
                letterSpacing: '0.1em',
                marginBottom: '4px'
              }}>
                {ep.num}
              </div>
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: '17px',
                color: 'var(--kraft)',
                lineHeight: 1.2,
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.02em'
              }}>
                {ep.title}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'rgba(232,213,176,0.6)',
                lineHeight: 1.5,
                fontStyle: 'italic',
                marginBottom: '10px'
              }}>
                {ep.desc}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'var(--red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <div style={{
                    width: 0,
                    height: 0,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderLeft: '7px solid #fff',
                    marginLeft: '2px'
                  }} />
                </div>
                <span style={{
                  fontSize: '11px',
                  color: 'rgba(232,213,176,0.5)',
                  fontFamily: "'Oswald', sans-serif"
                }}>
                  {ep.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
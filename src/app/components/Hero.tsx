export default function Hero() {
  return (
    <>
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
        Today&apos;s Special
        <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 320px',
        marginBottom: '2.5rem',
        background: '#fff',
        border: '1.5px solid var(--border)',
        borderTop: '4px solid var(--green)'
      }}>
        <div style={{ padding: '2rem', borderRight: '1px solid var(--border)' }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--red)',
            color: '#fff',
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '3px 12px',
            marginBottom: '1rem'
          }}>
            Eagles
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: '40px',
            lineHeight: 1.1,
            color: 'var(--black)',
            marginBottom: '1rem'
          }}>
            Hurts Is Different Now — and{' '}
            <em style={{ color: 'var(--red)' }}>That</em>{' '}
            Should Terrify the NFC
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '1rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border)'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              color: 'var(--kraft)',
              flexShrink: 0
            }}>
              GR
            </div>
            <div>
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                color: 'var(--green)'
              }}>
                Garrett R.
              </div>
              <div style={{
                fontSize: '12px',
                color: 'var(--mid)',
                fontStyle: 'italic'
              }}>
                May 21, 2026 · 8 min read
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '15px',
            lineHeight: 1.75,
            color: '#3a2a1a',
            marginBottom: '1.5rem'
          }}>
            The version of Jalen Hurts we watched last Sunday wasn&apos;t just
            better — he was operating at a different altitude. Command. Patience.
            The footwork in the pocket. This is what it looks like when a
            quarterback has fully arrived, and the rest of the NFC East still
            hasn&apos;t figured out how to stop it.
          </p>

          <a href="#" style={{
            display: 'inline-block',
            background: 'var(--green)',
            color: 'var(--kraft)',
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '9px 20px',
            textDecoration: 'none'
          }}>
            Read the column →
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { beat: 'Phillies', title: 'The Rotation Question No One Wants to Answer', date: 'May 20 · 6 min read' },
            { beat: 'Sixers', title: 'Tanking Is a Strategy. A Bad One.', date: 'May 18 · 5 min read' },
            { beat: 'Flyers', title: 'Why This Draft Class Could Change Everything', date: 'May 16 · 7 min read' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '1.25rem',
              borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              flex: 1,
              cursor: 'pointer'
            }}>
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--red)',
                marginBottom: '5px'
              }}>
                {item.beat}
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: '17px',
                lineHeight: 1.25,
                color: 'var(--black)',
                marginBottom: '6px'
              }}>
                {item.title}
              </h3>
              <div style={{
                fontSize: '11px',
                color: 'var(--mid)',
                fontStyle: 'italic'
              }}>
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
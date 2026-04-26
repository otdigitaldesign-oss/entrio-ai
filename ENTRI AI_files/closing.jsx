/* global React */
const useStateC = React.useState;
const useEffectC = React.useEffect;
const useRefC = React.useRef;

// ───────────────────────────────────────────────────────── Metrics
function Metrics() {
  const items = [
  { v: '3,000+', label: 'Equities under coverage', sub: 'Across 14 global exchanges' },
  { v: '4 weeks', label: 'Average time to deploy', sub: 'From signed term sheet to production' },
  { v: '12B+', label: 'Data points processed daily', sub: 'Tick · alt-data · fundamentals' },
  { v: '99.99%', label: 'Uptime, last 24 months', sub: 'Multi-region, hot-failover' }];


  return (
    <section style={{
      position: 'relative',
      padding: '120px 0',
      background: '#000',
      borderBottom: '1px solid var(--line)'
    }}>
      <div className="shell">
        <div className="eyebrow" style={{ marginBottom: 56 }}>
          <span className="sec-num">§ 03</span> By the numbers
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--line-strong)'
        }}>
          {items.map((m, i) =>
          <div key={i} style={{
            padding: '40px 28px 32px',
            borderRight: i < items.length - 1 ? '1px solid var(--line)' : 'none',
            position: 'relative'
          }}>
              <div style={{
              fontSize: 'clamp(40px, 4.6vw, 64px)',
              letterSpacing: '-0.04em', lineHeight: 1,
              marginBottom: 24, fontWeight: "400"
            }}>
                {m.v.includes('+') || m.v.includes('%') ?
              <>
                    <span style={{ fontWeight: "400" }}>{m.v.replace(/[+%]/, '')}</span>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.7em' }}>
                      {m.v.includes('+') ? '+' : '%'}
                    </span>
                  </> :
              m.v}
              </div>
              <div style={{
              fontSize: 13.5, fontWeight: 400, color: 'var(--text)',
              letterSpacing: '-0.005em', marginBottom: 6
            }}>{m.label}</div>
              <div style={{
              fontSize: 12, fontWeight: 300, color: 'var(--text-faint)',
              lineHeight: 1.5
            }}>{m.sub}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ───────────────────────────────────────────────────────── Testimonials
function Testimonials() {
  const quotes = [
  {
    quote: "Engine collapsed three vendors and a quant team's worth of infrastructure into a single integration. The signal quality is genuinely differentiated.",
    name: 'Anika Voss',
    title: 'Head of Quant Research',
    firm: 'Brevan & Co.',
    featured: true
  },
  {
    quote: "We went from RFP to production trading in under a month. That's not a sales line — it's literally what happened.",
    name: 'Marcus Lindquist',
    title: 'CTO, Markets Division',
    firm: 'Northstar Capital'
  },
  {
    quote: "The reasoning chains alone justified the contract. Compliance now reviews trades in minutes, not days.",
    name: 'Priya Raghavan',
    title: 'Chief Risk Officer',
    firm: 'Meridian Asset Mgmt'
  }];


  return (
    <section style={{
      position: 'relative', padding: '140px 0',
      background: 'linear-gradient(180deg, #000 0%, #060912 100%)',
      borderBottom: '1px solid var(--line)'
    }}>
      <div className="shell">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          alignItems: 'end', marginBottom: 64
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="sec-num">§ 04</span> What clients say
            </div>
            <h2 className="h-section" style={{ fontWeight: "300" }}>
              Trusted at the<br />
              <span className="serif">edge</span> of the market.
            </h2>
          </div>
          <p className="lede">
            Engine is deployed at multi-strategy hedge funds, tier-one banks,
            and the modern wealth platforms reshaping how institutions invest.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: 18
        }}>
          {quotes.map((q, i) => <QuoteCard key={i} {...q} />)}
        </div>
      </div>
    </section>);

}

function QuoteCard({ quote, name, title, firm, featured }) {
  const [hover, setHover] = useStateC(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="glass"
      style={{
        position: 'relative',
        borderRadius: 14, padding: featured ? 40 : 32,
        display: 'flex', flexDirection: 'column',
        minHeight: featured ? 320 : 280,
        transition: 'all 0.5s cubic-bezier(.2,.7,.2,1)',
        borderColor: hover ? 'rgba(106,169,255,0.2)' : 'var(--line)',
        background: featured ?
        'linear-gradient(180deg, rgba(106,169,255,0.05) 0%, rgba(10,16,32,0.6) 100%)' :
        undefined
      }}>
      
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none" style={{ marginBottom: 24, opacity: 0.5 }}>
        <path d="M0 22V12C0 5.4 4 0.6 11 0v4C7 5 5 7.6 5 12h6v10H0zm17 0V12c0-6.6 4-11.4 11-12v4c-4 1-6 3.6-6 8h6v10H17z" fill="var(--accent)" />
      </svg>

      <p style={{
        fontSize: featured ? 22 : 17,
        lineHeight: 1.45, fontWeight: 300,
        letterSpacing: '-0.015em',
        color: 'var(--text)',
        margin: 0, flex: 1
      }}>
        {quote}
      </p>

      <div style={{
        marginTop: 32, paddingTop: 20,
        borderTop: '1px solid var(--line)',
        display: 'flex', alignItems: 'center', gap: 12
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, #1a2540, #0a1020)',
          border: '1px solid var(--line-strong)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, color: 'var(--text-dim)', fontFamily: 'var(--serif)', fontStyle: 'italic'
        }}>
          {name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 400, letterSpacing: '-0.005em' }}>{name}</div>
          <div style={{ fontSize: 11.5, color: 'var(--text-faint)', fontWeight: 300, lineHeight: "1.8" }}>
            {title} · <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', lineHeight: "1.8" }}>{firm}</span>
          </div>
        </div>
      </div>
    </div>);

}

// ───────────────────────────────────────────────────────── CTA Closer
function CTACloser() {
  return (
    <section style={{
      position: 'relative', padding: '160px 0',
      background: '#000', overflow: 'hidden'
    }}>
      <div className="glow" style={{
        width: 900, height: 600,
        background: 'radial-gradient(circle, rgba(106,169,255,0.18), transparent 60%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)'
      }} />
      <div className="grid-bg" />

      <div className="shell" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 32, display: 'inline-flex' }}>
          <span className="sec-num">§ 05</span> Get started
        </div>
        <h2 className="h-display" style={{ maxWidth: 1000, margin: '0 auto', fontSize: 'clamp(40px, 5.4vw, 80px)', fontWeight: "300" }}>
          Run your desk on the<br />
          same <span className="serif">intelligence</span> the
          frontier&nbsp;runs on.
        </h2>
        <p style={{
          maxWidth: 540, margin: '32px auto 0',
          fontSize: 16, color: 'var(--text-dim)', fontWeight: 300, lineHeight: 1.55
        }}>
          Engine is invitation-only during private beta. Tell us about your firm and we'll be in touch within 48 hours.
        </p>
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 14, marginTop: 44
        }}>
          <a href="#" className="cta">
            Request access
            <span className="arrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6m0 0L5.5 2.5M8 5L5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
          </a>
          <a href="#" className="cta cta-ghost">Talk to research</a>
        </div>
      </div>
    </section>);

}

// ───────────────────────────────────────────────────────── Footer
function Footer() {
  return (
    <footer style={{
      background: '#000', borderTop: '1px solid var(--line)',
      padding: '80px 0 40px'
    }}>
      <div className="shell">
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr',
          gap: 80, alignItems: 'flex-start',
          paddingBottom: 60, borderBottom: '1px solid var(--line)'
        }}>
          <div>
            <Logo />
            <p style={{
              maxWidth: 380, marginTop: 24, fontSize: 14,
              color: 'var(--text-dim)', lineHeight: 1.55, fontWeight: 300
            }}>
              The intelligence engine for capital markets. Built in New York and London by engineers from Citadel, Two Sigma, and Bloomberg.
            </p>
            <div style={{
              marginTop: 32, display: 'flex', gap: 12, alignItems: 'center'
            }}>
              <span style={{
                fontSize: 11, color: 'var(--text-faint)',
                letterSpacing: '0.14em', textTransform: 'uppercase'
              }}>Compliance</span>
              {['SOC 2', 'ISO 27001', 'GDPR'].map((c) =>
              <span key={c} className="glass" style={{
                padding: '5px 10px', borderRadius: 4, fontSize: 11,
                color: 'var(--text-dim)', fontWeight: 300
              }}>{c}</span>
              )}
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32
          }}>
            {[
            ['Platform', ['Data', 'Analytics', 'Workflows', 'API', 'Status']],
            ['Company', ['Research', 'Careers', 'Press', 'Contact', 'Security']]].
            map(([title, items]) =>
            <div key={title}>
                <div style={{
                fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--text-faint)', marginBottom: 18
              }}>{title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((it) =>
                <li key={it} style={{ marginBottom: 10 }}>
                      <a href="#" style={{
                    fontSize: 13.5, color: 'var(--text-dim)',
                    textDecoration: 'none', fontWeight: 300,
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
                    {it}</a>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div style={{
          paddingTop: 32, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 16
        }}>
          <div style={{ fontSize: 11.5, color: 'var(--text-faint)', fontWeight: 300 }}>© 2026 ENTRIO AI, Inc. All rights reserved.

          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 11.5, color: 'var(--text-faint)' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
            <span style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic',
              color: 'var(--text-faint)'
            }}>NY · LON</span>
          </div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Metrics, Testimonials, CTACloser, Footer });
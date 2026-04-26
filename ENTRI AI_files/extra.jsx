/* global React */
const useStateR = React.useState;

// ───────────────────────────────────────────────────────── Research
function Research() {
  const [filter, setFilter] = useStateR('All');
  const tags = ['All', 'Equities', 'Fixed Income', 'AI/ML', 'Macro'];

  const items = [
  {
    tag: 'AI/ML',
    title: 'Reasoning chains as audit primitives',
    excerpt: 'Why explainability in trading systems is no longer a compliance afterthought, but a first-class engineering surface.',
    date: 'Apr 2026',
    read: '12 min',
    author: 'Anika Voss',
    featured: true
  },
  {
    tag: 'Equities',
    title: 'The half-life of an alpha signal in 2026',
    excerpt: 'A study across 3,000 equities suggests classical factor edges decay 4× faster than they did a decade ago.',
    date: 'Mar 2026',
    read: '8 min',
    author: 'Marcus Lindquist'
  },
  {
    tag: 'Fixed Income',
    title: 'Credit spreads, regime shifts, and the noise floor',
    excerpt: 'How modern intelligence systems separate persistent signal from microstructure noise in IG and HY markets.',
    date: 'Mar 2026',
    read: '10 min',
    author: 'Priya Raghavan'
  },
  {
    tag: 'AI/ML',
    title: 'Beyond the chatbot: structured agents on the desk',
    excerpt: 'A field report on deploying multi-agent research workflows across three buy-side institutions.',
    date: 'Feb 2026',
    read: '15 min',
    author: 'Engine Research'
  },
  {
    tag: 'Macro',
    title: 'Cross-asset signal coherence in tightening cycles',
    excerpt: 'Decomposing what carries between rates, equities, and FX when policy changes — and what does not.',
    date: 'Feb 2026',
    read: '9 min',
    author: 'Daniel Okafor'
  },
  {
    tag: 'Equities',
    title: 'Earnings revisions as a leading indicator',
    excerpt: 'A point-in-time analysis of analyst revisions and the predictive lag they introduce into momentum factors.',
    date: 'Jan 2026',
    read: '7 min',
    author: 'Engine Research'
  }];


  const visible = filter === 'All' ? items : items.filter((i) => i.tag === filter);

  return (
    <section id="research" style={{
      position: 'relative', padding: '140px 0',
      background: '#000', borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)'
    }}>
      <div className="shell">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          alignItems: 'end', marginBottom: 56
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="sec-num">§ R</span> Research
            </div>
            <h2 className="h-section" style={{ fontWeight: "300" }}>
              Field notes from the<br />
              <span className="serif">frontier</span> of markets.
            </h2>
          </div>
          <p className="lede">
            Engine Research publishes original work on quantitative methods,
            market microstructure, and AI systems for capital markets — written
            by practitioners, peer-reviewed inside the firm.
          </p>
        </div>

        {/* Filter pills */}
        <div style={{
          display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap',
          paddingBottom: 24, borderBottom: '1px solid var(--line)',
          alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {tags.map((t) =>
            <button key={t} onClick={() => setFilter(t)} style={{
              padding: '8px 14px', borderRadius: 999,
              background: filter === t ? 'rgba(106,169,255,0.1)' : 'transparent',
              border: '1px solid ' + (filter === t ? 'rgba(106,169,255,0.4)' : 'var(--line)'),
              color: filter === t ? 'var(--accent)' : 'var(--text-dim)',
              fontSize: 12, fontWeight: 300, fontFamily: 'inherit',
              letterSpacing: '-0.005em', cursor: 'pointer',
              transition: 'all 0.3s'
            }}>{t}</button>
            )}
          </div>
          <span style={{ fontSize: 11.5, color: 'var(--text-faint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {visible.length} {visible.length === 1 ? 'paper' : 'papers'}
          </span>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18
        }}>
          {visible.map((it, i) => <ResearchCard key={it.title} {...it} />)}
        </div>

        <div style={{
          marginTop: 56, display: 'flex', justifyContent: 'center'
        }}>
          <a href="#" className="cta cta-ghost">
            View all research
            <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6m0 0L5.5 2.5M8 5L5.5 7.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

}

function ResearchCard({ tag, title, excerpt, date, read, author, featured }) {
  const [hover, setHover] = useStateR(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="glass"
      style={{
        position: 'relative', borderRadius: 14, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        minHeight: 320,
        gridColumn: featured ? 'span 1' : 'span 1',
        background: featured ?
        'linear-gradient(180deg, rgba(106,169,255,0.05) 0%, rgba(10,16,32,0.6) 100%)' :
        undefined,
        borderColor: hover ? 'rgba(106,169,255,0.25)' : featured ? 'rgba(106,169,255,0.18)' : 'var(--line)',
        transition: 'all 0.5s cubic-bezier(.2,.7,.2,1)',
        cursor: 'pointer'
      }}>
      
      {/* Header strip */}
      <div style={{
        padding: '16px 22px', borderBottom: '1px solid var(--line)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 11, color: 'var(--text-faint)'
      }}>
        <span style={{
          padding: '3px 10px', borderRadius: 999,
          background: 'rgba(106,169,255,0.08)',
          border: '1px solid rgba(106,169,255,0.18)',
          color: 'var(--accent)', letterSpacing: '0.06em',
          fontSize: 10.5, fontWeight: 400
        }}>{tag}</span>
        <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic' }}>{date}</span>
      </div>

      <div style={{ padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: 20, fontWeight: 300, letterSpacing: '-0.02em',
          lineHeight: 1.2, margin: '0 0 14px'
        }}>{title}</h3>
        <p style={{
          fontSize: 13.5, lineHeight: 1.5, fontWeight: 300,
          color: 'var(--text-dim)', margin: 0, flex: 1
        }}>{excerpt}</p>

        <div style={{
          marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 11.5, color: 'var(--text-faint)'
        }}>
          <span>By <span style={{ color: 'var(--text-dim)' }}>{author}</span></span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.8" />
              <path d="M6 3v3l2 1.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
            {read}
          </span>
        </div>
      </div>
    </article>);

}

// ───────────────────────────────────────────────────────── Company
function Company() {
  return (
    <section id="company" style={{
      position: 'relative', padding: '160px 0',
      background: 'linear-gradient(180deg, #000 0%, #060912 60%, #000 100%)',
      overflow: 'hidden'
    }}>
      <div className="glow" style={{
        width: 700, height: 500,
        background: 'radial-gradient(circle, rgba(106,169,255,0.1), transparent 60%)',
        top: 0, right: '-10%'
      }} />

      <div className="shell" style={{ position: 'relative' }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          <span className="sec-num">§ C</span> Company
        </div>

        {/* Founding story — large editorial block */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          alignItems: 'start', marginBottom: 100
        }}>
          <h2 className="h-section" style={{ fontWeight: "300" }}>
            Built by <span className="serif">practitioners</span>,<br />
            for the desks they<br />
            once worked.
          </h2>
          <div>
            <p style={{
              fontSize: 17, lineHeight: 1.6, fontWeight: 300,
              color: 'var(--text-dim)', margin: '0 0 24px'
            }}>
              Entrio AI was founded in 2023 by a team of engineers and quant
              researchers from Citadel, Two Sigma, Goldman Sachs, and Bloomberg.
              We had spent a combined four decades building intelligence systems
              inside firms that wouldn't share them — and concluded the rest of
              the market deserved better tooling.
            </p>
            <p style={{
              fontSize: 15, lineHeight: 1.65, fontWeight: 300,
              color: 'var(--text-dim)', margin: 0
            }}>
              The thesis was simple: the buy-side and sell-side don't need
              another vendor. They need a substrate — clean data, honest
              analytics, and workflows that respect how desks actually run.
              Three years and forty engineers later, that substrate is Entrio.
            </p>
          </div>
        </div>

        {/* Philosophy strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid var(--line-strong)',
          borderBottom: '1px solid var(--line)',
          marginBottom: 80
        }}>
          {[
          {
            n: '01',
            t: 'Practitioners first',
            c: 'Every product decision passes a desk-test. If a portfolio manager wouldn\'t use it on a Monday morning, we don\'t ship it.'
          },
          {
            n: '02',
            t: 'Honest math',
            c: 'No survivorship bias, no in-sample fitting, no marketing benchmarks. Our research is reproducible or it doesn\'t leave the building.'
          },
          {
            n: '03',
            t: 'Quietly engineered',
            c: 'We optimize for fewer abstractions, longer-lived APIs, and infrastructure that compounds. Hype ages badly in finance.'
          }].
          map((p, i) =>
          <div key={p.n} style={{
            padding: '36px 28px',
            borderRight: i < 2 ? '1px solid var(--line)' : 'none'
          }}>
              <span className="sec-num" style={{ fontSize: 13 }}>{p.n}</span>
              <h4 style={{
              fontSize: 22, fontWeight: 200, letterSpacing: '-0.02em',
              margin: '14px 0 14px'
            }}>{p.t}</h4>
              <p style={{
              fontSize: 13.5, lineHeight: 1.55, fontWeight: 300,
              color: 'var(--text-dim)', margin: 0
            }}>{p.c}</p>
            </div>
          )}
        </div>

        {/* Offices + team meta */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60,
          alignItems: 'start'
        }}>
          {/* Offices */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Offices</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <OfficeCard
                city="New York"
                country="United States"
                addr="One World Trade Center"
                neighborhood="Financial District · NY 10007"
                tz="EST · UTC−5"
                team="62 engineers, researchers, ops"
                role="HQ · Markets, Engineering" />
              
              <OfficeCard
                city="New York"
                country="United Kingdom"
                addr="22 Bishopsgate"
                neighborhood="City of London · EC2N 4BQ"
                tz="GMT · UTC+0"
                team="34 engineers, sales, research"
                role="EMEA · Sales, Compliance" />
              
            </div>
          </div>

          {/* Team meta */}
          <div className="glass" style={{
            padding: 28, borderRadius: 14
          }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>By the firm</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
              ['Founded', '2023'],
              ['Headcount', '96 across NY · LON'],
              ['Investors', 'Sequoia · Index · Lightspeed'],
              ['Hiring', '14 open roles']].
              map(([k, v]) =>
              <div key={k} style={{
                display: 'flex', justifyContent: 'space-between',
                paddingBottom: 14, borderBottom: '1px solid var(--line)',
                fontSize: 13.5
              }}>
                  <span style={{ color: 'var(--text-faint)', fontWeight: 300 }}>{k}</span>
                  <span style={{
                  color: 'var(--text)', fontWeight: 300,
                  fontFamily: k === 'Investors' ? 'var(--serif)' : 'inherit',
                  fontStyle: k === 'Investors' ? 'italic' : 'normal'
                }}>{v}</span>
                </div>
              )}
            </div>
            <a href="#" className="cta" style={{ marginTop: 24, width: '100%', justifyContent: 'center', padding: '12px 18px', fontSize: 13 }}>
              See open roles
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6m0 0L5.5 2.5M8 5L5.5 7.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

function OfficeCard({ city, country, addr, neighborhood, tz, team, role }) {
  return (
    <div className="glass" style={{
      padding: 28, borderRadius: 14, position: 'relative',
      minHeight: 240,
      display: 'flex', flexDirection: 'column'
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        marginBottom: 28
      }}>
        <div>
          <div style={{
            fontSize: 28, letterSpacing: '-0.025em',
            lineHeight: 1, fontWeight: "400"
          }}>{city}</div>
          <div style={{
            fontSize: 12, color: 'var(--text-faint)',
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            marginTop: 6
          }}>{country}</div>
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          border: '1px solid var(--line-strong)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent)'
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1C4.5 1 2.5 3 2.5 5.5c0 3 4.5 7.5 4.5 7.5s4.5-4.5 4.5-7.5C11.5 3 9.5 1 7 1z" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="7" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13.5, color: 'var(--text)', fontWeight: 300, lineHeight: 1.5 }}>{addr}</div>
        <div style={{ fontSize: 12, color: 'var(--text-faint)', fontWeight: 300, marginTop: 4 }}>{neighborhood}</div>
      </div>

      <div style={{
        marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--line)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16
      }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 4 }}>Timezone</div>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--text-dim)' }}>{tz}</div>
        </div>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 4 }}>Function</div>
          <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--text-dim)' }}>{role}</div>
        </div>
      </div>
    </div>);

}

Object.assign(window, { Research, Company });
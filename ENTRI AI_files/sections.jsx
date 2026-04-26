/* global React */
// Note: hooks accessed via React.* to avoid scope collisions across babel files
const useStateS = React.useState;
const useEffectS = React.useEffect;
const useRefS = React.useRef;

// ───────────────────────────────────────────────────────── Features
function Features() {
  const features = [
  {
    n: '',
    title: 'Data',
    tag: 'Foundational layer',
    desc: 'Clean, normalized, point-in-time data across equities, fixed income, FX, and alternatives. Curated by a team of capital markets engineers.',
    bullets: ['3,000+ tickers, 30+ years of history', 'Sub-second tick replay', 'Vendor-agnostic ingest'],
    icon: <DataIcon />
  },
  {
    n: '',
    title: 'Analytics',
    tag: 'Reasoning layer',
    desc: 'Engine reasons over your data with quant models, factor decomposition, and AI-native research agents that understand your portfolio.',
    bullets: ['Factor & risk attribution', 'Natural-language queries', 'Backtest in seconds'],
    icon: <AnalyticsIcon />,
    featured: true
  },
  {
    n: '',
    title: 'Workflows',
    tag: 'Execution layer',
    desc: 'Operationalise insights through trading, research, and compliance workflows that plug directly into your existing OMS, EMS, and CRM.',
    bullets: ['One-click deployment', 'Audit-ready logging', 'API-first integrations'],
    icon: <WorkflowsIcon />
  }];


  return (
    <section id="platform" style={{
      position: 'relative',
      padding: '160px 0 140px',
      borderTop: '1px solid var(--line)',
      background: '#000'
    }}>
      <div className="shell">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          alignItems: 'end', marginBottom: 80
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="sec-num">§ 01</span> The Platform
            </div>
            <h2 className="h-section" style={{ fontWeight: "300" }}>
              Three <span className="serif">primitives</span>,<br />
              one cohesive system.
            </h2>
          </div>
          <p className="lede">
            Most platforms ship a tool. Engine ships a substrate — the data, analytics,
            and workflows your desk depends on, unified under a single intelligence layer
            that learns the way your firm actually works.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18
        }}>
          {features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </div>
    </section>);

}

function FeatureCard({ n, title, tag, desc, bullets, icon, featured }) {
  const [hover, setHover] = useStateS(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="glass"
      style={{
        position: 'relative',
        padding: 32, borderRadius: 14,
        minHeight: 460,
        display: 'flex', flexDirection: 'column',
        transition: 'all 0.5s cubic-bezier(.2,.7,.2,1)',
        transform: 'translateY(0px)',
        borderColor: featured ? 'rgba(106,169,255,0.25)' : 'var(--line)',
        background: featured ?
        'linear-gradient(180deg, rgba(106,169,255,0.06) 0%, rgba(10,16,32,0.7) 100%)' :
        undefined,
        overflow: 'hidden'
      }}>
      
      {/* glow */}
      <div style={{
        position: 'absolute', inset: -1, borderRadius: 14,
        background: 'radial-gradient(circle at 50% 0%, rgba(106,169,255,0.18), transparent 60%)',
        opacity: hover || featured ? 1 : 0,
        transition: 'opacity 0.5s', pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <span className="sec-num" style={{ fontSize: 12 }}>{n}</span>
        <span style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--text-faint)', fontWeight: 400
        }}>{tag}</span>
      </div>

      <div style={{
        position: 'relative', width: 56, height: 56, marginBottom: 36,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--line)',
        color: featured ? 'var(--accent)' : 'var(--text)',
        transition: 'color 0.5s'
      }}>
        {icon}
      </div>

      <h3 style={{
        fontSize: 28, letterSpacing: '-0.025em',
        margin: '0 0 14px', position: 'relative', fontWeight: "400"
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: 14.5, lineHeight: 1.55, fontWeight: 300,
        color: 'var(--text-dim)', margin: 0, position: 'relative'
      }}>{desc}</p>

      <div style={{ flex: 1 }} />

      <ul style={{
        listStyle: 'none', padding: 0, margin: '32px 0 0',
        display: 'flex', flexDirection: 'column', gap: 10,
        position: 'relative',
        borderTop: '1px solid var(--line)', paddingTop: 20
      }}>
        {bullets.map((b) =>
        <li key={b} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontSize: 12.5, color: 'var(--text-dim)', fontWeight: 300
        }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5l2 2 4-4" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {b}
          </li>
        )}
      </ul>
    </div>);

}

function DataIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.9" style={{ stroke: "rgb(106, 169, 255)" }}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>);

}
function AnalyticsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.9">
      <path d="M3 20h18" />
      <path d="M5 20V11" />
      <path d="M10 20V7" />
      <path d="M15 20v-6" />
      <path d="M20 20V4" />
      <circle cx="20" cy="4" r="1.4" fill="currentColor" />
    </svg>);

}
function WorkflowsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.9" style={{ stroke: "rgb(140, 177, 250)" }}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" style={{ stroke: "rgb(106, 169, 255)" }} />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3h12V9" />
      <path d="M12 12v3" />
    </svg>);

}

// ───────────────────────────────────────────────────────── Who We Serve
function WhoWeServe() {
  const tabs = [
  {
    key: 'platforms',
    label: 'Investment Platforms',
    kicker: 'For wealth & advisory tech',
    title: 'Embed institutional-grade intelligence into your platform.',
    copy: 'White-label our data and analytics layer. Ship features that took quant teams a decade — in a single sprint.',
    stats: [
    ['Time to integrate', '4 weeks'],
    ['SDKs', 'TS · Python · Go'],
    ['SLA', '99.99%']],

    visual: 'platforms'
  },
  {
    key: 'banks',
    label: 'Banks',
    kicker: 'For sell-side & private wealth',
    title: 'A modern intelligence stack for traditional balance sheets.',
    copy: 'Replace fragmented research, risk, and reporting tools. Engine consolidates your stack while preserving your existing systems of record.',
    stats: [
    ['Compliance', 'SOC 2 · ISO 27001'],
    ['Deployment', 'Cloud · VPC · On-prem'],
    ['Coverage', '40+ asset classes']],

    visual: 'banks'
  },
  {
    key: 'capital',
    label: 'Capital Markets',
    kicker: 'For trading desks & buyside',
    title: 'Real-time signal generation with audit-grade explainability.',
    copy: 'Plug Engine into your OMS/EMS for live signals, factor attribution, and compliance-ready reasoning chains on every decision.',
    stats: [
    ['Latency', '<12ms p99'],
    ['Throughput', '1.2M ticks/s'],
    ['Models in prod', '180+']],

    visual: 'capital'
  }];

  const [active, setActive] = useStateS(0);
  const t = tabs[active];

  return (
    <section id="solutions" style={{
      position: 'relative',
      padding: '140px 0',
      background: 'linear-gradient(180deg, #000 0%, #060912 50%, #000 100%)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      overflow: 'hidden'
    }}>
      <div className="glow" style={{
        width: 800, height: 600,
        background: 'radial-gradient(circle, rgba(106,169,255,0.12), transparent 60%)',
        top: '20%', left: '50%', transform: 'translateX(-50%)'
      }} />

      <div className="shell" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          alignItems: 'end', marginBottom: 56
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="sec-num">§ 02</span> Who we serve
            </div>
            <h2 className="h-section" style={{ fontWeight: "300" }}>
              Built for the firms<br />
              that move <span className="serif">markets</span>.
            </h2>
          </div>
          <p className="lede">
            Engine adapts to the contour of your business. Whether you operate a
            consumer-facing platform, a tier-one bank, or a multi-strategy fund —
            the substrate is the same, the surface is yours.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: 0,
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          marginBottom: 0
        }}>
          {tabs.map((tab, i) =>
          <button
            key={tab.key}
            onClick={() => setActive(i)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              borderRight: i < tabs.length - 1 ? '1px solid var(--line)' : 'none',
              padding: '24px 28px',
              textAlign: 'left',
              cursor: 'pointer',
              position: 'relative',
              color: active === i ? 'var(--text)' : 'var(--text-dim)',
              transition: 'color 0.3s',
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => {if (active !== i) e.currentTarget.style.color = 'var(--text)';}}
            onMouseLeave={(e) => {if (active !== i) e.currentTarget.style.color = 'var(--text-dim)';}}>
            
              <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8
            }}>
                <span style={{
                fontSize: 11, fontFamily: 'var(--serif)', fontStyle: 'italic',
                color: active === i ? 'var(--accent)' : 'var(--text-faint)'
              }}>0{i + 1}</span>
                <span style={{
                fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--text-faint)', fontWeight: 400
              }}>{tab.kicker}</span>
              </div>
              <div style={{
              fontSize: 22, fontWeight: 200, letterSpacing: '-0.02em'
            }}>{tab.label}</div>

              {/* active indicator */}
              <div style={{
              position: 'absolute', left: 0, right: 0, bottom: -1, height: 1,
              background: 'var(--accent)',
              opacity: active === i ? 1 : 0,
              boxShadow: '0 0 12px var(--accent)',
              transition: 'opacity 0.3s'
            }} />
            </button>
          )}
        </div>

        {/* Active panel */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
          padding: '64px 0 16px',
          alignItems: 'center',
          minHeight: 420
        }}>
          <div key={t.key} style={{ animation: 'fadeIn 0.6s ease' }}>
            <h3 style={{
              fontSize: 38, letterSpacing: '-0.025em',
              lineHeight: 1.1, margin: '0 0 24px', maxWidth: 520, fontWeight: "300"
            }}>{t.title}</h3>
            <p className="lede" style={{ marginBottom: 36 }}>{t.copy}</p>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
              borderTop: '1px solid var(--line)', paddingTop: 28, maxWidth: 480
            }}>
              {t.stats.map(([k, v]) =>
              <div key={k}>
                  <div style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 8 }}>{k}</div>
                  <div style={{ fontSize: 18, fontWeight: 300, letterSpacing: '-0.015em' }}>{v}</div>
                </div>
              )}
            </div>

            <a href="#" style={{
              marginTop: 40, display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 13, color: 'var(--accent)', textDecoration: 'none',
              borderBottom: '1px solid rgba(106,169,255,0.3)',
              paddingBottom: 4
            }}>
              Read the case study
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6m0 0L5.5 2.5M8 5L5.5 7.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>

          <div key={t.key + '-v'} style={{ animation: 'fadeIn 0.6s ease' }}>
            <ServeVisual kind={t.visual} />
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: none; } }`}</style>
    </section>);

}

function ServeVisual({ kind }) {
  if (kind === 'platforms') {
    return (
      <div className="glass-strong" style={{ borderRadius: 14, padding: 24, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--text-faint)', marginBottom: 18
        }}>Embedded SDK · live</div>
        <div style={{
          fontFamily: 'ui-monospace, "SF Mono", monospace', fontSize: 12.5, lineHeight: 1.7,
          color: 'var(--text-dim)'
        }}>
          <div><span style={{ color: '#c39dff' }}>import</span> {'{ engine }'} <span style={{ color: '#c39dff' }}>from</span> <span style={{ color: '#7fd6a8' }}>'@engineai/sdk'</span></div>
          <div style={{ marginTop: 12 }}><span style={{ color: 'var(--text-faint)' }}>// Real-time portfolio analytics</span></div>
          <div><span style={{ color: '#c39dff' }}>const</span> insights = <span style={{ color: '#c39dff' }}>await</span> engine.<span style={{ color: '#6aa9ff' }}>analyze</span>({'{'}</div>
          <div style={{ paddingLeft: 20 }}>portfolio: <span style={{ color: '#7fd6a8' }}>'client_847'</span>,</div>
          <div style={{ paddingLeft: 20 }}>signals: [<span style={{ color: '#7fd6a8' }}>'risk'</span>, <span style={{ color: '#7fd6a8' }}>'momentum'</span>],</div>
          <div style={{ paddingLeft: 20 }}>horizon: <span style={{ color: '#e88a8a' }}>30</span></div>
          <div>{'}'})</div>
          <div style={{ marginTop: 12 }}><span style={{ color: 'var(--text-faint)' }}>// → 12 signals, 2.4s, $0.018</span></div>
        </div>
        <div style={{
          marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--line)',
          display: 'flex', gap: 12, alignItems: 'center', fontSize: 11,
          color: 'var(--text-faint)'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7fd6a8', boxShadow: '0 0 8px #7fd6a8' }} />
          200 OK · 247ms · cached
        </div>
      </div>);

  }
  if (kind === 'banks') {
    return (
      <div className="glass-strong" style={{ borderRadius: 14, padding: 24 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 18 }}>
          Risk Surface · Q3 desk
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 3 }}>
          {Array.from({ length: 64 }).map((_, i) => {
            const v = Math.random();
            return (
              <div key={i} style={{
                aspectRatio: '1',
                background: `rgba(106,169,255,${v * 0.6})`,
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 2
              }} />);

          })}
        </div>
        <div style={{
          marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16,
          borderTop: '1px solid var(--line)', paddingTop: 20
        }}>
          {[['VaR 95%', '$2.4M'], ['Stress', '-7.1%'], ['Limit util.', '42%']].map(([k, v]) =>
          <div key={k}>
              <div style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{k}</div>
              <div style={{ fontSize: 16, fontWeight: 300, marginTop: 4 }}>{v}</div>
            </div>
          )}
        </div>
      </div>);

  }
  // capital
  return (
    <div className="glass-strong" style={{ borderRadius: 14, padding: 24, fontSize: 12 }}>
      <div style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
        Reasoning chain · trade #84012
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
        { tag: 'INGEST', t: 'Ticks NVDA · 14:23:41.122', c: 'var(--text-dim)' },
        { tag: 'SIGNAL', t: 'Vol regime shift detected (z=2.41)', c: 'var(--text)' },
        { tag: 'MODEL', t: 'Cross-asset momo · confidence 0.82', c: 'var(--text)' },
        { tag: 'GUARD', t: 'Compliance check passed · within mandate', c: '#7fd6a8' },
        { tag: 'ROUTE', t: 'OMS · 2,400 shares @ market', c: 'var(--accent)' }].
        map((s, i) =>
        <div key={i} style={{
          display: 'flex', gap: 12, alignItems: 'flex-start',
          paddingBottom: 14, borderBottom: i < 4 ? '1px solid var(--line)' : 'none'
        }}>
            <span style={{
            fontSize: 9.5, letterSpacing: '0.14em',
            fontFamily: 'ui-monospace,monospace',
            color: 'var(--text-faint)', minWidth: 56, marginTop: 2
          }}>{s.tag}</span>
            <span style={{ color: s.c, fontSize: 12.5, fontWeight: 300, lineHeight: 1.4 }}>{s.t}</span>
          </div>
        )}
      </div>
    </div>);

}

Object.assign(window, { Features, WhoWeServe });
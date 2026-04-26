/* global React */
const { useEffect, useRef, useState } = React;

// ───────────────────────────────────────────────────────── Logo
function Logo() {
  return (
    <a href="#" className="logo" style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      textDecoration: 'none', color: 'var(--text)'
    }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
        <circle cx="11" cy="11" r="1.6" fill="var(--accent)" />
        <line x1="11" y1="1" x2="11" y2="21" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
        <line x1="1" y1="11" x2="21" y2="11" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      </svg>
      <span style={{ fontSize: 15, fontWeight: 400, letterSpacing: '-0.01em' }}>
        ENTRIO<span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', marginLeft: 4 }}>AI</span>
      </span>
    </a>);

}

// ───────────────────────────────────────────────────────── Nav
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Platform', 'Solutions', 'Research', 'Company'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '14px 0' : '22px 0',
      transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
      background: scrolled ? 'rgba(0,0,0,0.6)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent'
    }}>
      <div className="shell" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Logo />
        <div style={{ display: 'flex', alignItems: 'center', gap: 38 }}>
          {links.map((l, i) =>
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontSize: 13, color: 'var(--text-dim)', textDecoration: 'none',
            fontWeight: 300, letterSpacing: '-0.005em',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>
            {l}</a>
          )}
          <span style={{ width: 1, height: 16, background: 'var(--line)' }} />
          <a href="#contact" className="cta" style={{
            padding: '9px 16px', fontSize: 12.5,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)'
          }}>
            Request access
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6m0 0L5.5 2.5M8 5L5.5 7.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </nav>);

}

// ───────────────────────────────────────────────────────── Hero
function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const ref = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      setMouse({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={ref} style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: 140, paddingBottom: 100,
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 100% 80% at 50% 0%, #0a1426 0%, #000 55%)'
    }}>
      {/* glows */}
      <div className="glow" style={{
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(106,169,255,0.18), transparent 60%)',
        top: -200, left: `${mouse.x * 20 + 30}%`,
        transform: 'translateX(-50%)',
        transition: 'left 1.2s cubic-bezier(.2,.7,.2,1)'
      }} />
      <div className="glow" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(106,169,255,0.08), transparent 70%)',
        bottom: -100, right: 0, opacity: 0.8
      }} />

      <div className="grid-bg" />
      <div className="noise" />

      {/* Floating ticker bar */}
      <TickerBar />

      <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
        {/* eyebrow */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginTop: 28, marginBottom: 36
        }}>
          <div className="glass" style={{
            padding: '7px 14px 7px 7px', borderRadius: 999,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 12, color: 'var(--text-dim)', fontWeight: 300
          }}>
            <span style={{
              padding: '3px 10px', borderRadius: 999,
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase',
              fontWeight: 500
            }}>New</span>
            Engine 2.0 — Real-time market intelligence
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: 2, opacity: 0.6 }}>
              <path d="M2 5h6m0 0L5.5 2.5M8 5L5.5 7.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="h-display" style={{
          textAlign: 'center', maxWidth: 1180, margin: '0 auto', fontWeight: "400"
        }}>
          The <span className="serif">Intelligence</span> Engine<br />
          for Capital Markets
        </h1>

        {/* Subtitle */}
        <p style={{
          textAlign: 'center', maxWidth: 580, margin: '32px auto 0',
          fontSize: 17, lineHeight: 1.55, fontWeight: 300,
          color: 'var(--text-dim)'
        }}>
          A unified data, analytics, and workflow layer for investment platforms,
          banks, and capital markets desks. Deployed in weeks, not quarters.
        </p>

        {/* CTAs */}
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
          <a href="#" className="cta cta-ghost">
            View capabilities
          </a>
        </div>

        {/* Trust micro-strip */}
        <div style={{
          marginTop: 96,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 56, flexWrap: 'wrap',
          opacity: 0.55
        }}>
          <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
            Powering desks at
          </span>
          {['Goldhaven', 'Citadelica', 'Brevan & Co.', 'Northstar Capital', 'Meridian'].map((n) =>
          <span key={n} style={{
            fontSize: 14, fontWeight: 300, letterSpacing: '-0.01em',
            color: 'var(--text-dim)',
            fontFamily: n.includes('&') ? 'var(--serif)' : 'var(--sans)',
            fontStyle: n.includes('&') ? 'italic' : 'normal'
          }}>{n}</span>
          )}
        </div>

        {/* Hero panel — terminal preview */}
        <HeroTerminal />
      </div>
    </section>);

}

// ───────────────────────────────────────────────────────── Ticker
function TickerBar() {
  const items = [
  { sym: 'AAPL', val: '227.41', d: '+0.84%' },
  { sym: 'MSFT', val: '432.18', d: '+1.22%' },
  { sym: 'NVDA', val: '124.96', d: '-0.31%' },
  { sym: 'JPM', val: '218.05', d: '+0.42%' },
  { sym: 'GS', val: '514.77', d: '+0.66%' },
  { sym: 'MS', val: '108.92', d: '+0.18%' },
  { sym: 'BLK', val: '953.04', d: '+1.04%' },
  { sym: 'V', val: '286.30', d: '-0.12%' },
  { sym: 'BAC', val: '42.81', d: '+0.55%' },
  { sym: 'C', val: '67.92', d: '+0.91%' }];

  const stream = [...items, ...items, ...items];

  return (
    <div style={{
      position: 'absolute', top: 92, left: 0, right: 0, zIndex: 1,
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(10px)',
      overflow: 'hidden', height: 36,
      display: 'flex', alignItems: 'center',
      maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)'
    }}>
      <div style={{
        display: 'flex', gap: 36, whiteSpace: 'nowrap',
        animation: 'ticker 90s linear infinite'
      }}>
        {stream.map((t, i) =>
        <span key={i} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 11.5, fontWeight: 400,
          fontFamily: 'ui-monospace, "SF Mono", monospace',
          color: 'var(--text-dim)', letterSpacing: '0.02em'
        }}>
            <span style={{ color: 'var(--text)' }}>{t.sym}</span>
            <span>{t.val}</span>
            <span style={{ color: t.d.startsWith('+') ? '#7fd6a8' : '#e88a8a' }}>{t.d}</span>
            <span style={{ color: 'var(--text-faint)', marginLeft: 12 }}>·</span>
          </span>
        )}
      </div>
      <style>{`@keyframes ticker { 0% {transform: translateX(0)} 100% {transform: translateX(-33.333%)} }`}</style>
    </div>);

}

// ───────────────────────────────────────────────────────── Hero Terminal
function HeroTerminal() {
  return (
    <div style={{
      marginTop: 90, position: 'relative',
      maxWidth: 1180, margin: '90px auto 0'
    }}>
      {/* glow under panel */}
      <div style={{
        position: 'absolute', inset: '20% 10% -10% 10%',
        background: 'radial-gradient(ellipse, rgba(106,169,255,0.25), transparent 60%)',
        filter: 'blur(80px)', zIndex: 0
      }} />

      <div className="glass-strong" style={{
        position: 'relative', borderRadius: 16, overflow: 'hidden',
        boxShadow: '0 60px 120px -40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)'
      }}>
        {/* Top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '14px 20px',
          borderBottom: '1px solid var(--line)',
          fontSize: 11.5, color: 'var(--text-faint)',
          fontFamily: 'ui-monospace, "SF Mono", monospace'
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3a3f48' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3a3f48' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3a3f48' }} />
          <span style={{ marginLeft: 16 }}>engine.ai / terminal</span>
          <span style={{ marginLeft: 'auto' }}>LIVE · 14:23:41 EST</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 280px', minHeight: 380 }}>
          {/* Left rail */}
          <div style={{
            borderRight: '1px solid var(--line)',
            padding: '22px 18px',
            fontSize: 12
          }}>
            <div style={{
              fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--text-faint)', marginBottom: 16
            }}>Watchlists</div>
            {[
            { n: 'Tech leaders', c: 24, active: false },
            { n: 'Quant signals', c: 17, active: true },
            { n: 'Earnings beat', c: 9, active: false },
            { n: 'Vol regime', c: 12, active: false },
            { n: 'Credit spreads', c: 33, active: false }].
            map((w) =>
            <div key={w.n} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 12px', borderRadius: 6,
              background: w.active ? 'rgba(106,169,255,0.08)' : 'transparent',
              border: w.active ? '1px solid rgba(106,169,255,0.18)' : '1px solid transparent',
              color: w.active ? 'var(--text)' : 'var(--text-dim)',
              marginBottom: 4,
              fontWeight: 300
            }}>
                <span>{w.n}</span>
                <span style={{ color: 'var(--text-faint)', fontSize: 11 }}>{w.c}</span>
              </div>
            )}

            <div style={{
              fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--text-faint)', margin: '24px 0 16px'
            }}>Models</div>
            {['Mean reversion v3', 'Cross-asset momo', 'Sector rotation'].map((m) =>
            <div key={m} style={{
              padding: '10px 12px', color: 'var(--text-dim)', fontWeight: 300
            }}>{m}</div>
            )}
          </div>

          {/* Center — chart */}
          <div style={{ padding: '22px 24px', position: 'relative' }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              marginBottom: 20
            }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                  Quant Signals · Composite Score
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginTop: 8 }}>
                  <span style={{ fontSize: 36, letterSpacing: '-0.03em', fontWeight: "500" }}>+2.847</span>
                  <span style={{ color: '#7fd6a8', fontSize: 13 }}>+0.124 (4.55%)</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((t, i) =>
                <span key={t} style={{
                  padding: '5px 10px', fontSize: 11, borderRadius: 4,
                  background: i === 2 ? 'rgba(255,255,255,0.06)' : 'transparent',
                  color: i === 2 ? 'var(--text)' : 'var(--text-faint)',
                  cursor: 'pointer'
                }}>{t}</span>
                )}
              </div>
            </div>

            <Chart />

            {/* Footer signals */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
              marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--line)'
            }}>
              {[
              ['Sharpe', '2.41'],
              ['Drawdown', '-3.2%'],
              ['Win rate', '68%'],
              ['Beta', '0.42']].
              map(([k, v]) =>
              <div key={k}>
                  <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{k}</div>
                  <div style={{ fontSize: 18, fontWeight: 300, marginTop: 4, letterSpacing: '-0.02em' }}>{v}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right — signals feed */}
          <div style={{
            borderLeft: '1px solid var(--line)',
            padding: '22px 18px', fontSize: 12
          }}>
            <div style={{
              fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--text-faint)', marginBottom: 16,
              display: 'flex', justifyContent: 'space-between'
            }}>
              <span>Live signals</span>
              <span style={{ color: 'var(--accent)' }}>● 24</span>
            </div>
            {[
            { t: '14:23', sym: 'NVDA', msg: 'Vol regime shift', score: '+0.84' },
            { t: '14:21', sym: 'JPM', msg: 'Earnings revision', score: '+0.62' },
            { t: '14:18', sym: 'XOP', msg: 'Cross-asset divergence', score: '-0.41' },
            { t: '14:15', sym: 'MSFT', msg: 'Options skew anomaly', score: '+0.38' },
            { t: '14:11', sym: 'TSLA', msg: 'News sentiment spike', score: '+0.27' },
            { t: '14:08', sym: 'GS', msg: 'Credit spread compress', score: '+0.22' }].
            map((s, i) =>
            <div key={i} style={{
              padding: '10px 0',
              borderBottom: '1px solid var(--line)',
              display: 'flex', flexDirection: 'column', gap: 4
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'ui-monospace,monospace' }}>
                  <span style={{ color: 'var(--text-faint)', fontSize: 10.5 }}>{s.t}</span>
                  <span style={{ color: s.score.startsWith('+') ? '#7fd6a8' : '#e88a8a', fontSize: 11 }}>{s.score}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 500, fontSize: 12, color: 'var(--text)' }}>{s.sym}</span>
                  <span style={{ color: 'var(--text-dim)', fontSize: 11.5, fontWeight: 300 }}>{s.msg}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}

function Chart() {
  // generate a smooth-ish line
  const pts = [];
  let v = 50;
  for (let i = 0; i < 80; i++) {
    v += Math.sin(i * 0.4) * 4 + (Math.random() - 0.4) * 5;
    v = Math.max(20, Math.min(90, v));
    pts.push(v);
  }
  // ensure end higher
  for (let i = 60; i < 80; i++) pts[i] = Math.min(95, pts[i] + (i - 60) * 0.6);
  const W = 720,H = 200;
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i / (pts.length - 1) * W} ${H - p / 100 * H}`).join(' ');
  const area = `${path} L ${W} ${H} L 0 ${H} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={200} preserveAspectRatio="none">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(106,169,255,0.35)" />
          <stop offset="100%" stopColor="rgba(106,169,255,0)" />
        </linearGradient>
      </defs>
      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((y) =>
      <line key={y} x1="0" y1={H * y} x2={W} y2={H * y} stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
      )}
      <path d={area} fill="url(#cg)" />
      <path d={path} fill="none" stroke="var(--accent)" strokeWidth="1.4" strokeLinejoin="round" />
      {/* end dot */}
      <circle cx={W} cy={H - pts[pts.length - 1] / 100 * H} r="3" fill="var(--accent)" />
      <circle cx={W} cy={H - pts[pts.length - 1] / 100 * H} r="6" fill="var(--accent)" opacity="0.25" />
    </svg>);

}

Object.assign(window, { Logo, Nav, Hero });
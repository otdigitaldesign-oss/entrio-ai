/* global React, ReactDOM */

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // CSS var bridge — apply tweaks live
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--accent', t.accent);
    r.setProperty('--accent-glow', t.accent + '59');
    r.setProperty('--accent-soft', t.accent + '1f');
    document.body.style.fontWeight = t.bodyWeight;
  }, [t.accent, t.bodyWeight]);

  // intersection fade-up
  React.useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Features/>
        <WhoWeServe/>
        <Metrics/>
        {t.showResearch && <Research/>}
        <Testimonials/>
        {t.showCompany && <Company/>}
        <CTACloser/>
      </main>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Sections"/>
        <TweakToggle label="Show Research" value={t.showResearch} onChange={v => setTweak('showResearch', v)}/>
        <TweakToggle label="Show Company"  value={t.showCompany}  onChange={v => setTweak('showCompany', v)}/>

        <TweakSection label="Theme"/>
        <TweakColor label="Accent color" value={t.accent} onChange={v => setTweak('accent', v)}/>
        <TweakRadio label="Body weight" value={t.bodyWeight}
          options={['200','300','400']}
          onChange={v => setTweak('bodyWeight', v)}/>
      </TweaksPanel>
    </>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showResearch": true,
  "showCompany": true,
  "accent": "#6aa9ff",
  "bodyWeight": "300"
}/*EDITMODE-END*/;

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

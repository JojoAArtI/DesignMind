// DesignMind Landing Page — CSS Styles
export function getLandingCSS(): string {
    return `
        :root {
            --bg: #0a0a0f;
            --surface: #13131a;
            --surface-alt: #1a1a24;
            --surface-elevated: #22222e;
            --primary: #22d3ee;
            --primary-glow: rgba(34, 211, 238, 0.15);
            --primary-dim: rgba(34, 211, 238, 0.6);
            --secondary: #a78bfa;
            --secondary-glow: rgba(167, 139, 250, 0.15);
            --accent-green: #4ade80;
            --accent-orange: #fb923c;
            --accent-rose: #fb7185;
            --accent-yellow: #fbbf24;
            --foreground: #e4e4e7;
            --muted: #71717a;
            --muted-dim: #52525b;
            --border: #27272a;
            --border-hover: #3f3f46;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
            background: var(--bg);
            color: var(--foreground);
            font-family: 'Inter', -apple-system, sans-serif;
            font-size: 0.9375rem;
            line-height: 1.6;
            overflow-x: hidden;
        }
        .page-glow {
            position: fixed; top: -200px; left: 50%; transform: translateX(-50%);
            width: 800px; height: 500px;
            background: radial-gradient(ellipse, var(--primary-glow) 0%, transparent 70%);
            pointer-events: none; z-index: 0;
        }
        /* ── NAV ── */
        nav {
            position: fixed; top: 0; left: 0; right: 0; z-index: 100;
            background: rgba(10, 10, 15, 0.8); backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--border);
            padding: 0 2rem; height: 56px;
            display: flex; align-items: center; justify-content: space-between;
        }
        .nav-brand { font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 600; color: #fff; display: flex; align-items: center; gap: 0.5rem; text-decoration:none; }
        .nav-dot { width: 8px; height: 8px; background: var(--accent-green); border-radius: 50%; animation: pulse 2s infinite; }
        .nav-links { display: flex; gap: 1.5rem; }
        .nav-links a { color: var(--muted); text-decoration: none; font-size: 0.8125rem; font-family: 'JetBrains Mono', monospace; transition: color 0.2s; letter-spacing: 0.02em; }
        .nav-links a:hover { color: var(--primary); }
        /* ── HERO ── */
        .hero {
            min-height: 100vh; display: flex; align-items: center; justify-content: center;
            padding: 7rem 2rem 4rem; position: relative;
        }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; max-width: 1200px; width: 100%; align-items: center; }
        .hero-tag {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: var(--primary-glow); color: var(--primary);
            padding: 6px 14px; border-radius: 100px;
            font-family: 'JetBrains Mono', monospace; font-size: 0.6875rem;
            border: 1px solid rgba(34,211,238,0.2); text-transform: uppercase; letter-spacing: 0.08em;
            margin-bottom: 1.5rem;
        }
        .hero h1 { font-family: 'JetBrains Mono', monospace; font-size: 3.5rem; font-weight: 700; line-height: 1.1; margin-bottom: 1.5rem; }
        .hero h1 .gradient-text {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .hero-desc { color: var(--muted); font-size: 1.125rem; line-height: 1.7; max-width: 500px; margin-bottom: 2rem; }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: var(--primary); color: #000; font-weight: 600;
            padding: 12px 24px; border-radius: 6px; text-decoration: none;
            font-family: 'JetBrains Mono', monospace; font-size: 0.8125rem;
            transition: all 0.2s; border: none; cursor: pointer;
        }
        .btn-primary:hover { box-shadow: 0 0 24px var(--primary-glow), 0 0 60px rgba(34,211,238,0.1); transform: translateY(-1px); }
        .btn-secondary {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: transparent; color: var(--foreground);
            padding: 12px 24px; border-radius: 6px; text-decoration: none;
            font-family: 'JetBrains Mono', monospace; font-size: 0.8125rem;
            border: 1px solid var(--border); transition: all 0.2s; cursor:pointer;
        }
        .btn-secondary:hover { border-color: var(--primary); color: var(--primary); }
        /* ── TERMINAL ── */
        .terminal {
            background: #000; border: 1px solid var(--border); border-radius: 8px;
            overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px var(--primary-glow);
        }
        .terminal-bar {
            background: var(--surface-alt); padding: 10px 14px;
            display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--border);
        }
        .t-dot { width: 11px; height: 11px; border-radius: 50%; }
        .t-dot.r { background: #ff5f56; } .t-dot.y { background: #ffbd2e; } .t-dot.g { background: #27c93f; }
        .t-title { margin-left: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.6875rem; color: var(--muted); }
        .terminal-body { padding: 1.25rem; font-family: 'JetBrains Mono', monospace; font-size: 0.8125rem; line-height: 1.7; min-height: 260px; }
        .t-prompt { color: var(--accent-green); }
        .t-cmd { color: var(--foreground); }
        .t-key { color: var(--primary); }
        .t-str { color: var(--secondary); }
        .t-num { color: var(--accent-orange); }
        .t-cmt { color: var(--muted-dim); }
        .t-cursor { display: inline-block; width: 8px; height: 1.1em; background: var(--primary); vertical-align: middle; animation: blink 1s step-end infinite; }
        /* ── STATS ── */
        .stats-bar {
            display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
            background: var(--border); border: 1px solid var(--border); border-radius: 8px;
            overflow: hidden; max-width: 1200px; margin: 0 auto;
        }
        .stat-item { background: var(--surface); padding: 2rem; text-align: center; }
        .stat-num { font-family: 'JetBrains Mono', monospace; font-size: 2.5rem; font-weight: 700; color: var(--primary); }
        .stat-label { font-size: 0.75rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.25rem; }
        /* ── SECTIONS ── */
        section { padding: 6rem 2rem; position: relative; }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-tag { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary); margin-bottom: 0.75rem; }
        .section-title { font-family: 'JetBrains Mono', monospace; font-size: 2.25rem; font-weight: 600; color: #fff; margin-bottom: 1rem; }
        .section-desc { color: var(--muted); font-size: 1rem; max-width: 600px; margin: 0 auto; }
        /* ── HOW IT WORKS ── */
        .pipeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 1000px; margin: 0 auto; }
        .pipe-step {
            background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
            padding: 2rem; text-align: center; position: relative; transition: all 0.3s;
        }
        .pipe-step:hover { border-color: var(--primary); transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
        .pipe-num { font-family: 'JetBrains Mono', monospace; font-size: 2rem; font-weight: 700; color: var(--primary); opacity: 0.3; margin-bottom: 0.5rem; }
        .pipe-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .pipe-title { font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: 0.5rem; }
        .pipe-desc { font-size: 0.8125rem; color: var(--muted); line-height: 1.6; }
        .pipe-arrow { display: none; }
        /* ── STYLE CARDS ── */
        .styles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .style-card {
            background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
            overflow: hidden; transition: all 0.3s; cursor: default;
        }
        .style-card:hover { border-color: var(--primary); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
        .style-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
        .style-name { font-family: 'JetBrains Mono', monospace; font-size: 0.9375rem; font-weight: 600; color: #fff; }
        .style-colors { display: flex; gap: 4px; }
        .color-dot { width: 14px; height: 14px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); }
        .style-body { padding: 1.25rem 1.5rem; }
        .style-phil { font-size: 0.8125rem; color: var(--muted); line-height: 1.6; margin-bottom: 1rem; }
        .style-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .style-tag { font-size: 0.6875rem; padding: 3px 10px; border-radius: 100px; background: var(--surface-alt); color: var(--muted); border: 1px solid var(--border); font-family: 'JetBrains Mono', monospace; }
        /* ── DOMAINS ── */
        .domain-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; max-width: 1200px; margin: 0 auto; }
        .domain-card {
            background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
            padding: 1.5rem; transition: all 0.3s;
        }
        .domain-card:hover { border-color: var(--secondary); transform: translateY(-2px); }
        .domain-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
        .domain-name { font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; font-weight: 600; color: #fff; margin-bottom: 0.5rem; }
        .domain-desc { font-size: 0.75rem; color: var(--muted); line-height: 1.5; margin-bottom: 0.75rem; }
        .domain-meta { display: flex; gap: 6px; flex-wrap: wrap; }
        .domain-badge { font-size: 0.625rem; padding: 2px 8px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.05em; }
        .badge-density { background: rgba(34,211,238,0.1); color: var(--primary); border: 1px solid rgba(34,211,238,0.2); }
        .badge-a11y { background: rgba(74,222,128,0.1); color: var(--accent-green); border: 1px solid rgba(74,222,128,0.2); }
        /* ── TOOLS ── */
        .tools-list { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
        .tool-item { background: var(--surface); padding: 1.25rem 1.5rem; display: grid; grid-template-columns: 200px 1fr; gap: 1rem; align-items: start; transition: background 0.2s; }
        .tool-item:hover { background: var(--surface-alt); }
        .tool-name { font-family: 'JetBrains Mono', monospace; font-size: 0.8125rem; color: var(--primary); font-weight: 500; }
        .tool-desc { font-size: 0.8125rem; color: var(--muted); line-height: 1.5; }
        /* ── INTEGRATION ── */
        .integration-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
        .code-block {
            background: #000; border: 1px solid var(--border); border-radius: 8px; overflow: hidden;
        }
        .code-header { padding: 10px 16px; background: var(--surface-alt); border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .code-lang { font-family: 'JetBrains Mono', monospace; font-size: 0.6875rem; color: var(--muted); text-transform: uppercase; }
        .code-body { padding: 1.25rem; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; line-height: 1.8; color: var(--foreground); white-space: pre; overflow-x: auto; }
        /* ── ANTI-PATTERN SHOWCASE ── */
        .ap-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; max-width: 1200px; margin: 0 auto; }
        .ap-card { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 1.5rem; border-left: 3px solid var(--accent-rose); transition: all 0.3s; }
        .ap-card:hover { border-color: var(--accent-rose); transform: translateY(-2px); }
        .ap-name { font-family: 'JetBrains Mono', monospace; font-size: 0.8125rem; font-weight: 600; color: var(--accent-rose); margin-bottom: 0.5rem; }
        .ap-why { font-size: 0.75rem; color: var(--muted); line-height: 1.5; margin-bottom: 0.75rem; }
        .ap-fix { font-size: 0.75rem; color: var(--accent-green); line-height: 1.5; }
        .ap-fix::before { content: '✓ '; }
        /* ── FOOTER ── */
        .footer { background: var(--surface); border-top: 1px solid var(--border); padding: 3rem 2rem; }
        .footer-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; }
        .footer-brand { font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: 0.75rem; }
        .footer-tagline { color: var(--muted); font-size: 0.8125rem; line-height: 1.6; }
        .footer-col-title { font-family: 'JetBrains Mono', monospace; font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 1rem; }
        .footer-link { display: block; color: var(--muted); font-size: 0.8125rem; text-decoration: none; margin-bottom: 0.5rem; transition: color 0.2s; }
        .footer-link:hover { color: var(--primary); }
        .footer-bottom { max-width: 1200px; margin: 2rem auto 0; padding-top: 1.5rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .footer-copy { font-size: 0.75rem; color: var(--muted-dim); font-family: 'JetBrains Mono', monospace; }
        .footer-vitals { display: flex; gap: 1.5rem; }
        .footer-vital { font-size: 0.6875rem; font-family: 'JetBrains Mono', monospace; color: var(--primary); }
        /* ── ANIMATIONS ── */
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); } 70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); } 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-in.visible { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.1s; } .delay-2 { transition-delay: 0.2s; } .delay-3 { transition-delay: 0.3s; } .delay-4 { transition-delay: 0.4s; }
        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr; text-align: center; }
            .hero-desc { margin: 0 auto 2rem; }
            .hero-actions { justify-content: center; }
            .hero .terminal { display: none; }
            .pipeline { grid-template-columns: 1fr; max-width: 400px; }
            .stats-bar { grid-template-columns: repeat(2, 1fr); }
            .integration-grid { grid-template-columns: 1fr; }
            .footer-inner { grid-template-columns: 1fr 1fr; }
            .tool-item { grid-template-columns: 1fr; }
            .nav-links { display: none; }
        }
        @media (max-width: 600px) {
            .hero h1 { font-size: 2.25rem; }
            .stats-bar { grid-template-columns: 1fr 1fr; }
            .domain-grid { grid-template-columns: 1fr; }
            .footer-inner { grid-template-columns: 1fr; }
        }
    `;
}

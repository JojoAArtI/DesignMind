// DesignMind Landing Page — CSS Styles (Memoria Design System)
export function getLandingCSS(): string {
    return `
        /* ── MEMORIA DESIGN SYSTEM ── */
        /* Monochromatic. Light typography. Sequential revelation. */

        :root {
            --bg: #0a0a0a;
            --surface: rgba(23, 23, 23, 0.8);
            --surface-card: rgba(23, 23, 23, 0.6);
            --surface-hover: rgba(38, 38, 38, 0.5);
            --surface-active: rgba(38, 38, 38, 0.6);
            --border: rgba(38, 38, 38, 0.6);
            --border-default: #262626;
            --border-hover: #404040;
            --border-focus: #525252;
            --text-primary: #ffffff;
            --text-secondary: #e5e5e5;
            --text-body: #d4d4d4;
            --text-muted: #a3a3a3;
            --text-dim: #737373;
            --text-ghost: #525252;
            --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            --mono: 'JetBrains Mono', 'Fira Code', monospace;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
            background: var(--bg);
            color: var(--text-body);
            font-family: var(--font);
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.6;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* ── NAV ── */
        nav {
            position: fixed; top: 0; left: 0; right: 0; z-index: 100;
            background: rgba(10, 10, 10, 0.85);
            backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            padding: 0 2rem; height: 56px;
            display: flex; align-items: center; justify-content: space-between;
        }
        .nav-brand {
            font-family: var(--font); font-size: 0.875rem; font-weight: 500;
            color: var(--text-primary); display: flex; align-items: center; gap: 0.625rem;
            text-decoration: none; letter-spacing: 0.02em;
        }
        .nav-dot {
            width: 6px; height: 6px; background: var(--text-dim);
            border-radius: 50%; opacity: 0.6;
        }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links a {
            color: var(--text-dim); text-decoration: none; font-size: 0.75rem;
            font-weight: 400; transition: color 0.3s; letter-spacing: 0.06em;
            text-transform: uppercase;
        }
        .nav-links a:hover { color: var(--text-primary); }

        /* ── HERO ── */
        .hero {
            min-height: 100vh; display: flex; align-items: center; justify-content: center;
            padding: 8rem 2rem 5rem; position: relative;
        }
        .hero-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 5rem;
            max-width: 1100px; width: 100%; align-items: center;
        }
        .hero-tag {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: rgba(38, 38, 38, 0.4); color: var(--text-dim);
            padding: 6px 14px; border-radius: 100px;
            font-size: 0.625rem; font-weight: 500;
            border: 1px solid var(--border);
            text-transform: uppercase; letter-spacing: 0.15em;
            margin-bottom: 2rem;
        }
        .hero h1 {
            font-family: var(--font); font-size: 3.5rem; font-weight: 300;
            line-height: 1.08; margin-bottom: 1.75rem; color: var(--text-primary);
            letter-spacing: -0.02em;
        }
        .hero-desc {
            color: var(--text-muted); font-size: 1rem; line-height: 1.7;
            max-width: 460px; margin-bottom: 2.5rem; font-weight: 300;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: var(--text-primary); color: var(--bg); font-weight: 500;
            padding: 12px 28px; border-radius: 8px; text-decoration: none;
            font-size: 0.8125rem; transition: all 0.3s; border: none; cursor: pointer;
            letter-spacing: 0.02em;
        }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-secondary {
            display: inline-flex; align-items: center; gap: 0.5rem;
            background: transparent; color: var(--text-muted);
            padding: 12px 28px; border-radius: 8px; text-decoration: none;
            font-size: 0.8125rem; font-weight: 400;
            border: 1px solid var(--border-default); transition: all 0.3s; cursor: pointer;
        }
        .btn-secondary:hover { border-color: var(--border-hover); color: var(--text-primary); }

        /* ── TERMINAL ── */
        .terminal {
            background: rgba(10, 10, 10, 0.9); border: 1px solid var(--border-default); border-radius: 12px;
            overflow: hidden;
        }
        .terminal-bar {
            background: rgba(23, 23, 23, 0.8); padding: 12px 16px;
            display: flex; align-items: center; gap: 8px;
            border-bottom: 1px solid var(--border);
        }
        .t-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--text-ghost); opacity: 0.4; }
        .t-dot.r { background: #525252; } .t-dot.y { background: #525252; } .t-dot.g { background: #525252; }
        .t-title { margin-left: 8px; font-family: var(--mono); font-size: 0.6875rem; color: var(--text-ghost); }
        .terminal-body {
            padding: 1.5rem; font-family: var(--mono); font-size: 0.8125rem;
            line-height: 1.8; min-height: 260px; color: var(--text-body);
        }
        .t-prompt { color: var(--text-dim); }
        .t-cmd { color: var(--text-secondary); }
        .t-key { color: var(--text-primary); }
        .t-str { color: var(--text-muted); }
        .t-num { color: var(--text-secondary); }
        .t-cmt { color: var(--text-ghost); }
        .t-cursor {
            display: inline-block; width: 8px; height: 1.1em;
            background: var(--text-dim); vertical-align: middle;
            animation: blink 1.2s step-end infinite; opacity: 0.5;
        }

        /* ── STATS ── */
        .stats-bar {
            display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
            background: var(--border-default); border: 1px solid var(--border-default); border-radius: 12px;
            overflow: hidden; max-width: 1100px; margin: 0 auto;
        }
        .stat-item { background: rgba(23, 23, 23, 0.6); padding: 2.5rem 2rem; text-align: center; }
        .stat-num {
            font-family: var(--font); font-size: 3rem; font-weight: 300;
            color: var(--text-primary); letter-spacing: -0.03em;
        }
        .stat-label {
            font-size: 0.625rem; color: var(--text-dim); text-transform: uppercase;
            letter-spacing: 0.2em; margin-top: 0.5rem; font-weight: 500;
        }

        /* ── SECTIONS ── */
        section { padding: 7rem 2rem; position: relative; }
        .section-header { text-align: center; margin-bottom: 4.5rem; }
        .section-tag {
            display: inline-block; font-size: 0.625rem; text-transform: uppercase;
            letter-spacing: 0.2em; color: var(--text-dim); margin-bottom: 1rem;
            font-weight: 500;
        }
        .section-title {
            font-family: var(--font); font-size: 2rem; font-weight: 300;
            color: var(--text-primary); margin-bottom: 1rem; letter-spacing: -0.01em;
        }
        .section-desc { color: var(--text-muted); font-size: 0.9375rem; max-width: 520px; margin: 0 auto; font-weight: 300; line-height: 1.7; }

        /* ── HOW IT WORKS ── */
        .pipeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
        .pipe-step {
            background: var(--surface-card); border: 1px solid var(--border-default);
            border-radius: 12px; padding: 2.5rem 2rem; text-align: center;
            position: relative; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .pipe-step:hover { border-color: var(--border-hover); transform: scale(1.01); }
        .pipe-num {
            font-family: var(--font); font-size: 2.5rem; font-weight: 300;
            color: var(--text-primary); opacity: 0.12; margin-bottom: 0.75rem;
            letter-spacing: -0.03em;
        }
        .pipe-icon {
            width: 48px; height: 48px; margin: 0 auto 1.25rem;
            display: flex; align-items: center; justify-content: center;
            background: rgba(38, 38, 38, 0.6); border-radius: 12px;
            border: 1px solid var(--border);
        }
        .pipe-icon svg { width: 22px; height: 22px; stroke: var(--text-muted); stroke-width: 1.5; fill: none; }
        .pipe-title {
            font-size: 0.9375rem; font-weight: 500; color: var(--text-primary);
            margin-bottom: 0.75rem; letter-spacing: 0.01em;
        }
        .pipe-desc { font-size: 0.8125rem; color: var(--text-muted); line-height: 1.65; font-weight: 300; }

        /* ── STYLE CARDS ── */
        .styles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.25rem; max-width: 1100px; margin: 0 auto; }
        .style-card {
            background: var(--surface-card); border: 1px solid var(--border-default);
            border-radius: 12px; overflow: hidden;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: default;
        }
        .style-card:hover { border-color: var(--border-hover); transform: scale(1.01); }
        .style-header {
            padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border);
            display: flex; align-items: center; justify-content: space-between;
        }
        .style-name { font-size: 0.875rem; font-weight: 500; color: var(--text-primary); letter-spacing: 0.01em; }
        .style-colors { display: flex; gap: 5px; }
        .color-dot { width: 12px; height: 12px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.06); }
        .style-body { padding: 1.25rem 1.5rem; }
        .style-phil { font-size: 0.8125rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1rem; font-weight: 300; }
        .style-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .style-tag {
            font-size: 0.625rem; padding: 3px 10px; border-radius: 100px;
            background: rgba(38, 38, 38, 0.5); color: var(--text-dim);
            border: 1px solid var(--border); font-weight: 500;
            text-transform: uppercase; letter-spacing: 0.08em;
        }

        /* ── DOMAINS ── */
        .domain-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; max-width: 1100px; margin: 0 auto; }
        .domain-card {
            background: var(--surface-card); border: 1px solid var(--border-default);
            border-radius: 12px; padding: 1.5rem;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .domain-card:hover { border-color: var(--border-hover); transform: scale(1.01); }
        .domain-icon {
            width: 40px; height: 40px; margin-bottom: 1rem;
            display: flex; align-items: center; justify-content: center;
            background: rgba(38, 38, 38, 0.6); border-radius: 10px;
            border: 1px solid var(--border);
        }
        .domain-icon svg { width: 20px; height: 20px; stroke: var(--text-muted); stroke-width: 1.5; fill: none; }
        .domain-name { font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem; }
        .domain-desc { font-size: 0.75rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0.75rem; font-weight: 300; }
        .domain-meta { display: flex; gap: 6px; flex-wrap: wrap; }
        .domain-badge {
            font-size: 0.5625rem; padding: 2px 8px; border-radius: 4px;
            text-transform: uppercase; letter-spacing: 0.06em; font-weight: 500;
            background: rgba(38, 38, 38, 0.5); color: var(--text-dim);
            border: 1px solid var(--border);
        }

        /* ── TOOLS ── */
        .tools-list {
            max-width: 900px; margin: 0 auto; display: flex; flex-direction: column;
            gap: 1px; background: var(--border-default); border: 1px solid var(--border-default);
            border-radius: 12px; overflow: hidden;
        }
        .tool-item {
            background: rgba(23, 23, 23, 0.6); padding: 1.25rem 1.5rem;
            display: grid; grid-template-columns: 200px 1fr; gap: 1rem;
            align-items: start; transition: background 0.3s;
        }
        .tool-item:hover { background: var(--surface-hover); }
        .tool-name { font-family: var(--mono); font-size: 0.8125rem; color: var(--text-primary); font-weight: 400; }
        .tool-desc { font-size: 0.8125rem; color: var(--text-muted); line-height: 1.6; font-weight: 300; }

        /* ── INTEGRATION ── */
        .integration-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; max-width: 1000px; margin: 0 auto; }
        .code-block {
            background: rgba(10, 10, 10, 0.9); border: 1px solid var(--border-default);
            border-radius: 12px; overflow: hidden;
        }
        .code-header {
            padding: 12px 16px; background: rgba(23, 23, 23, 0.8);
            border-bottom: 1px solid var(--border);
            display: flex; justify-content: space-between; align-items: center;
        }
        .code-lang {
            font-family: var(--mono); font-size: 0.625rem; color: var(--text-dim);
            text-transform: uppercase; letter-spacing: 0.1em;
        }
        .code-body {
            padding: 1.5rem; font-family: var(--mono); font-size: 0.75rem;
            line-height: 1.8; color: var(--text-body); white-space: pre; overflow-x: auto;
        }

        /* ── ANTI-PATTERNS ── */
        .ap-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; max-width: 1100px; margin: 0 auto; }
        .ap-card {
            background: var(--surface-card); border: 1px solid var(--border-default);
            border-radius: 12px; padding: 1.5rem;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .ap-card:hover { border-color: var(--border-hover); transform: scale(1.01); }
        .ap-name { font-size: 0.8125rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.5rem; }
        .ap-why { font-size: 0.75rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0.75rem; font-weight: 300; }
        .ap-fix { font-size: 0.75rem; color: var(--text-dim); line-height: 1.6; font-weight: 400; }
        .ap-fix::before { content: '\\2713\\0020'; opacity: 0.5; }

        /* ── FOOTER ── */
        .footer {
            background: rgba(23, 23, 23, 0.5); border-top: 1px solid var(--border-default);
            padding: 4rem 2rem 2rem;
        }
        .footer-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; }
        .footer-brand { font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.75rem; }
        .footer-tagline { color: var(--text-muted); font-size: 0.8125rem; line-height: 1.7; font-weight: 300; }
        .footer-col-title {
            font-size: 0.5625rem; text-transform: uppercase; letter-spacing: 0.2em;
            color: var(--text-dim); margin-bottom: 1.25rem; font-weight: 500;
        }
        .footer-link {
            display: block; color: var(--text-dim); font-size: 0.8125rem;
            text-decoration: none; margin-bottom: 0.625rem; transition: color 0.3s; font-weight: 300;
        }
        .footer-link:hover { color: var(--text-primary); }
        .footer-bottom {
            max-width: 1100px; margin: 3rem auto 0; padding-top: 2rem;
            border-top: 1px solid var(--border); display: flex;
            justify-content: space-between; align-items: center;
        }
        .footer-copy { font-size: 0.6875rem; color: var(--text-ghost); font-weight: 300; }
        .footer-vitals { display: flex; gap: 2rem; }
        .footer-vital {
            font-size: 0.5625rem; font-family: var(--mono); color: var(--text-dim);
            text-transform: uppercase; letter-spacing: 0.1em;
        }

        /* ── ANIMATIONS (Memoria: Sequential Revelation, Blur-to-Clear) ── */
        @keyframes blink { 50% { opacity: 0; } }

        @keyframes blur-in {
            from { opacity: 0; filter: blur(10px); transform: translateY(16px); }
            to { opacity: 1; filter: blur(0px); transform: translateY(0); }
        }

        @keyframes count-up {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
            opacity: 0; filter: blur(8px); transform: translateY(16px);
            transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                        filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                        transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-in.visible { opacity: 1; filter: blur(0px); transform: translateY(0); }
        .delay-1 { transition-delay: 0.08s; }
        .delay-2 { transition-delay: 0.16s; }
        .delay-3 { transition-delay: 0.24s; }
        .delay-4 { transition-delay: 0.32s; }
        .delay-5 { transition-delay: 0.40s; }

        /* Hero text reveal */
        .hero h1 {
            animation: blur-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
        }
        .hero-tag {
            animation: blur-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.0s both;
        }
        .hero-desc {
            animation: blur-in 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
        }
        .hero-actions {
            animation: blur-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both;
        }
        .terminal {
            animation: blur-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr; text-align: center; }
            .hero-desc { margin: 0 auto 2.5rem; }
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
            .stat-num { font-size: 2.25rem; }
            .domain-grid { grid-template-columns: 1fr; }
            .footer-inner { grid-template-columns: 1fr; }
            .section-title { font-size: 1.625rem; }
        }
    `;
}

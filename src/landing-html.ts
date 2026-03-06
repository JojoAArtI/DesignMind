// DesignMind Landing Page — HTML Body (Memoria Design System)
export function getLandingHTML(sseUrl: string): string {
    return `

    <nav>
        <a href="#" class="nav-brand"><div class="nav-dot"></div> DesignMind</a>
        <div class="nav-links">
            <a href="#styles">Styles</a>
            <a href="#domains">Domains</a>
            <a href="#tools">Tools</a>
            <a href="#integrate">Integrate</a>
        </div>
    </nav>

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="hero">
        <div class="hero-grid">
            <div>
                <div class="hero-tag"><div class="nav-dot"></div> MCP Server v1.0.0</div>
                <h1>Design<br>Intelligence<br>Layer</h1>
                <p class="hero-desc">The missing piece in AI-powered development. DesignMind encodes design philosophy, style rules, and anti-patterns directly into the Model Context Protocol — so every generated UI is intentional, not accidental.</p>
                <div class="hero-actions">
                    <a href="#integrate" class="btn-primary">Get Started</a>
                    <a href="#styles" class="btn-secondary">Explore Styles</a>
                </div>
            </div>
            <div class="terminal">
                <div class="terminal-bar">
                    <div class="t-dot r"></div><div class="t-dot y"></div><div class="t-dot g"></div>
                    <span class="t-title">designmind — intake</span>
                </div>
                <div class="terminal-body"><span class="t-prompt">$</span> <span class="t-cmd">designmind intake</span>
<span class="t-cmt">// Analyzing project context...</span>
{
  <span class="t-key">"detected_domain"</span>: <span class="t-str">"developer-tools"</span>,
  <span class="t-key">"top_match"</span>: {
    <span class="t-key">"style"</span>: <span class="t-str">"Dark Precision"</span>,
    <span class="t-key">"score"</span>: <span class="t-num">94</span>,
    <span class="t-key">"rationale"</span>: <span class="t-str">"Monospace-first,<br>    dark surfaces, data-dense"</span>
  },
  <span class="t-key">"session"</span>: <span class="t-str">"active"</span><span class="t-cursor"></span>
}</div>
            </div>
        </div>
    </section>

    <!-- ═══════════════ STATS BAR ═══════════════ -->
    <section style="padding: 0 2rem 5rem;">
        <div class="stats-bar animate-in">
            <div class="stat-item"><div class="stat-num" data-count="7">7</div><div class="stat-label">Design Styles</div></div>
            <div class="stat-item"><div class="stat-num" data-count="10">10</div><div class="stat-label">Domain Profiles</div></div>
            <div class="stat-item"><div class="stat-num" data-count="13">13</div><div class="stat-label">MCP Tools</div></div>
            <div class="stat-item"><div class="stat-num" data-count="12">12</div><div class="stat-label">Component Types</div></div>
        </div>
    </section>

    <!-- ═══════════════ HOW IT WORKS ═══════════════ -->
    <section id="pipeline">
        <div class="section-header">
            <div class="section-tag">How It Works</div>
            <h2 class="section-title">Three-step Design Pipeline</h2>
            <p class="section-desc">From project description to pixel-perfect spec in seconds. Every decision is traceable and validated.</p>
        </div>
        <div class="pipeline">
            <div class="pipe-step animate-in">
                <div class="pipe-num">01</div>
                <div class="pipe-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
                <div class="pipe-title">Intake</div>
                <div class="pipe-desc">Describe your project, users, and emotional register. DesignMind scores every style against your context and returns ranked recommendations with rationale.</div>
            </div>
            <div class="pipe-step animate-in delay-1">
                <div class="pipe-num">02</div>
                <div class="pipe-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
                <div class="pipe-title">Configure</div>
                <div class="pipe-desc">Select a style and receive a complete personalized spec — colors, typography, spacing, borders, component rules, interaction specs, and anti-patterns.</div>
            </div>
            <div class="pipe-step animate-in delay-2">
                <div class="pipe-num">03</div>
                <div class="pipe-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <div class="pipe-title">Build + Guard</div>
                <div class="pipe-desc">Generate UI with full constraint validation. Log every decision, check for drift, and export tokens as CSS, Tailwind, or Figma format.</div>
            </div>
        </div>
    </section>

    <!-- ═══════════════ DESIGN STYLES ═══════════════ -->
    <section id="styles">
        <div class="section-header">
            <div class="section-tag">Design Styles</div>
            <h2 class="section-title">7 Encoded Philosophies</h2>
            <p class="section-desc">Each style is a complete design system with encoded rules, not just a color palette. Philosophy, tokens, constraints, anti-patterns.</p>
        </div>
        <div class="styles-grid">
            <div class="style-card animate-in">
                <div class="style-header">
                    <span class="style-name">Neo-Brutalism</span>
                    <div class="style-colors"><div class="color-dot" style="background:#FF6B6B"></div><div class="color-dot" style="background:#4ECDC4"></div><div class="color-dot" style="background:#FFF9E6"></div><div class="color-dot" style="background:#1A1A1A"></div></div>
                </div>
                <div class="style-body">
                    <p class="style-phil">Raw, unapologetic. Bold colors, heavy borders, intentional roughness. Every element announces itself.</p>
                    <div class="style-tags"><span class="style-tag">Portfolios</span><span class="style-tag">Startups</span><span class="style-tag">Creative</span></div>
                </div>
            </div>
            <div class="style-card animate-in delay-1">
                <div class="style-header">
                    <span class="style-name">Dark Precision</span>
                    <div class="style-colors"><div class="color-dot" style="background:#22D3EE"></div><div class="color-dot" style="background:#A78BFA"></div><div class="color-dot" style="background:#1E1E1E"></div><div class="color-dot" style="background:#121212"></div></div>
                </div>
                <div class="style-body">
                    <p class="style-phil">Built for dark mode. High-contrast data viz on dark surfaces with monospace accents. Every pixel serves the data.</p>
                    <div class="style-tags"><span class="style-tag">Dev Tools</span><span class="style-tag">IDEs</span><span class="style-tag">DevOps</span></div>
                </div>
            </div>
            <div class="style-card animate-in delay-2">
                <div class="style-header">
                    <span class="style-name">Industrial Minimalism</span>
                    <div class="style-colors"><div class="color-dot" style="background:#2563EB"></div><div class="color-dot" style="background:#1E293B"></div><div class="color-dot" style="background:#F8FAFC"></div><div class="color-dot" style="background:#0F172A"></div></div>
                </div>
                <div class="style-body">
                    <p class="style-phil">Stripped to essentials. Functional density over decoration. Data-driven, information-rich dashboards that breathe.</p>
                    <div class="style-tags"><span class="style-tag">Dashboards</span><span class="style-tag">Analytics</span><span class="style-tag">Enterprise</span></div>
                </div>
            </div>
            <div class="style-card animate-in delay-3">
                <div class="style-header">
                    <span class="style-name">Glassmorphism</span>
                    <div class="style-colors"><div class="color-dot" style="background:#8B5CF6"></div><div class="color-dot" style="background:rgba(255,255,255,0.1)"></div><div class="color-dot" style="background:#0F0B1A"></div><div class="color-dot" style="background:#7C3AED"></div></div>
                </div>
                <div class="style-body">
                    <p class="style-phil">Frosted glass surfaces with depth. Translucent layers that create visual hierarchy through blur and light.</p>
                    <div class="style-tags"><span class="style-tag">Consumer</span><span class="style-tag">Music</span><span class="style-tag">Finance</span></div>
                </div>
            </div>
            <div class="style-card animate-in delay-4">
                <div class="style-header">
                    <span class="style-name">Soft Modernism</span>
                    <div class="style-colors"><div class="color-dot" style="background:#6366F1"></div><div class="color-dot" style="background:#F9FAFB"></div><div class="color-dot" style="background:#F3F4F6"></div><div class="color-dot" style="background:#1F2937"></div></div>
                </div>
                <div class="style-body">
                    <p class="style-phil">Approachable, calm, trustworthy. Gentle shadows, generous spacing. Makes complex software feel simple.</p>
                    <div class="style-tags"><span class="style-tag">SaaS</span><span class="style-tag">Healthcare</span><span class="style-tag">Education</span></div>
                </div>
            </div>
            <div class="style-card animate-in delay-5">
                <div class="style-header">
                    <span class="style-name">Clean Utility</span>
                    <div class="style-colors"><div class="color-dot" style="background:#0EA5E9"></div><div class="color-dot" style="background:#FFFFFF"></div><div class="color-dot" style="background:#F0F9FF"></div><div class="color-dot" style="background:#0C4A6E"></div></div>
                </div>
                <div class="style-body">
                    <p class="style-phil">Function-first minimalism. No waste. Efficient layouts for productivity tools where content is king.</p>
                    <div class="style-tags"><span class="style-tag">Productivity</span><span class="style-tag">Admin</span><span class="style-tag">CRM</span></div>
                </div>
            </div>
            <div class="style-card animate-in">
                <div class="style-header">
                    <span class="style-name">Warm Editorial</span>
                    <div class="style-colors"><div class="color-dot" style="background:#DC2626"></div><div class="color-dot" style="background:#FFFBEB"></div><div class="color-dot" style="background:#1C1917"></div><div class="color-dot" style="background:#F5F5F4"></div></div>
                </div>
                <div class="style-body">
                    <p class="style-phil">Typography-driven. Serif elegance meets modern layout. Long-form content becomes a reading experience.</p>
                    <div class="style-tags"><span class="style-tag">Blogs</span><span class="style-tag">Magazines</span><span class="style-tag">Editorial</span></div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════ DOMAINS ═══════════════ -->
    <section id="domains">
        <div class="section-header">
            <div class="section-tag">Domain Intelligence</div>
            <h2 class="section-title">10 Industry Profiles</h2>
            <p class="section-desc">Each domain carries encoded constraints — information density, accessibility requirements, compliance rules, and visual priorities.</p>
        </div>
        <div class="domain-grid">
            <div class="domain-card animate-in"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div><div class="domain-name">Logistics</div><div class="domain-desc">Fleet management, warehouse ops, route optimization.</div><div class="domain-meta"><span class="domain-badge">High Density</span><span class="domain-badge">WCAG AA</span></div></div>
            <div class="domain-card animate-in delay-1"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div><div class="domain-name">FinTech</div><div class="domain-desc">Banking, trading, payments, financial dashboards.</div><div class="domain-meta"><span class="domain-badge">High Density</span><span class="domain-badge">PCI DSS</span></div></div>
            <div class="domain-card animate-in delay-2"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><div class="domain-name">Healthcare</div><div class="domain-desc">Patient portals, telemedicine, clinical dashboards.</div><div class="domain-meta"><span class="domain-badge">Medium</span><span class="domain-badge">WCAG AAA</span></div></div>
            <div class="domain-card animate-in delay-3"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg></div><div class="domain-name">Creative Tools</div><div class="domain-desc">Design software, content creation, creative suites.</div><div class="domain-meta"><span class="domain-badge">Medium</span><span class="domain-badge">WCAG AA</span></div></div>
            <div class="domain-card animate-in delay-4"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div><div class="domain-name">Developer Tools</div><div class="domain-desc">IDEs, CI/CD, monitoring, API management.</div><div class="domain-meta"><span class="domain-badge">Very High</span><span class="domain-badge">Dark Mode</span></div></div>
            <div class="domain-card animate-in"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div><div class="domain-name">E-Commerce</div><div class="domain-desc">Stores, marketplaces, product catalogs.</div><div class="domain-meta"><span class="domain-badge">Medium</span><span class="domain-badge">ADA</span></div></div>
            <div class="domain-card animate-in delay-1"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div><div class="domain-name">Education</div><div class="domain-desc">LMS, courses, student portals.</div><div class="domain-meta"><span class="domain-badge">Medium</span><span class="domain-badge">Section 508</span></div></div>
            <div class="domain-card animate-in delay-2"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></div><div class="domain-name">Media</div><div class="domain-desc">Streaming, news, content aggregators.</div><div class="domain-meta"><span class="domain-badge">Medium</span><span class="domain-badge">FCC</span></div></div>
            <div class="domain-card animate-in delay-3"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div><div class="domain-name">Enterprise SaaS</div><div class="domain-desc">CRM, ERP, project management, HR platforms.</div><div class="domain-meta"><span class="domain-badge">High</span><span class="domain-badge">SOC 2</span></div></div>
            <div class="domain-card animate-in delay-4"><div class="domain-icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="domain-name">Consumer Social</div><div class="domain-desc">Social platforms, messaging, community apps.</div><div class="domain-meta"><span class="domain-badge">Low</span><span class="domain-badge">COPPA</span></div></div>
        </div>
    </section>

    <!-- ═══════════════ TOOLS ═══════════════ -->
    <section id="tools">
        <div class="section-header">
            <div class="section-tag">Tool Explorer</div>
            <h2 class="section-title">13 MCP Tools</h2>
            <p class="section-desc">Every tool is callable via the Model Context Protocol. From intake to export, the entire design pipeline is automated.</p>
        </div>
        <div class="tools-list animate-in">
            <div class="tool-item"><span class="tool-name">list_styles</span><span class="tool-desc">Returns all available design styles with philosophy summaries, emotional intent, and use cases.</span></div>
            <div class="tool-item"><span class="tool-name">intake</span><span class="tool-desc">Project intelligence gathering — context-scored style recommendations with rationale.</span></div>
            <div class="tool-item"><span class="tool-name">get_domain_profile</span><span class="tool-desc">Domain-specific design constraints, density rules, and compliance requirements.</span></div>
            <div class="tool-item"><span class="tool-name">configure_style</span><span class="tool-desc">Full personalized design spec with colors, typography, spacing, components, and anti-patterns.</span></div>
            <div class="tool-item"><span class="tool-name">get_component_hierarchy</span><span class="tool-desc">Layout composition rules for dashboard and landing page types.</span></div>
            <div class="tool-item"><span class="tool-name">get_interaction_spec</span><span class="tool-desc">Animation philosophy, transition timing, hover/focus rules, loading patterns.</span></div>
            <div class="tool-item"><span class="tool-name">validate_decision</span><span class="tool-desc">Real-time CSS constraint checking against active style rules. Returns approved or violation.</span></div>
            <div class="tool-item"><span class="tool-name">get_style_diff</span><span class="tool-desc">Compare two styles — see exactly where they conflict and what overlaps.</span></div>
            <div class="tool-item"><span class="tool-name">get_compatible_styles</span><span class="tool-desc">Style blending and coexistence rules for multi-style projects.</span></div>
            <div class="tool-item"><span class="tool-name">log_decision</span><span class="tool-desc">Record design decisions for drift tracking. Every CSS choice becomes auditable.</span></div>
            <div class="tool-item"><span class="tool-name">check_drift</span><span class="tool-desc">Detect accumulated design inconsistencies — spacing drift, color drift, radius mismatches.</span></div>
            <div class="tool-item"><span class="tool-name">export_tokens</span><span class="tool-desc">Export configured tokens as CSS custom properties, Tailwind config, or Figma Tokens JSON.</span></div>
            <div class="tool-item"><span class="tool-name">get_anti_patterns</span><span class="tool-desc">What breaks a style, why it breaks, and how to correct it.</span></div>
        </div>
    </section>

    <!-- ═══════════════ ANTI-PATTERNS ═══════════════ -->
    <section id="antipatterns">
        <div class="section-header">
            <div class="section-tag">Design Guardrails</div>
            <h2 class="section-title">Encoded Anti-Patterns</h2>
            <p class="section-desc">Every style ships with explicit rules about what not to do — and why. Examples from Neo-Brutalism.</p>
        </div>
        <div class="ap-grid">
            <div class="ap-card animate-in"><div class="ap-name">Soft/Blurred Shadows</div><div class="ap-why">Blurred shadows simulate realism. Brutalism rejects realism — an offset shadow says "I'm a designed object."</div><div class="ap-fix">Use hard offset shadows: 4px 4px 0px #1A1A1A</div></div>
            <div class="ap-card animate-in delay-1"><div class="ap-name">Subtle Borders</div><div class="ap-why">1px borders disappear. Borders are structural elements, not afterthoughts.</div><div class="ap-fix">Minimum 2px borders, dark color, full opacity</div></div>
            <div class="ap-card animate-in delay-2"><div class="ap-name">Gradient Backgrounds</div><div class="ap-why">Gradients introduce smoothness that contradicts the raw, flat aesthetic.</div><div class="ap-fix">Use solid background colors only</div></div>
            <div class="ap-card animate-in delay-3"><div class="ap-name">Rounded Everything</div><div class="ap-why">Universal rounding creates softness. Brutalism demands sharp, definite edges.</div><div class="ap-fix">Default 0px radius. Reserve rounding for intentional contrast</div></div>
            <div class="ap-card animate-in delay-4"><div class="ap-name">Thin Typography</div><div class="ap-why">Light type signals delicacy — the opposite of brutalism's demanded presence.</div><div class="ap-fix">Minimum weight 400 for body, 700+ for headings</div></div>
            <div class="ap-card animate-in delay-5"><div class="ap-name">Opacity Hovers</div><div class="ap-why">Opacity is too subtle. Brutalism demands physical-feeling interactions.</div><div class="ap-fix">Use translate + shadow reduction for hover states</div></div>
        </div>
    </section>

    <!-- ═══════════════ INTEGRATION ═══════════════ -->
    <section id="integrate">
        <div class="section-header">
            <div class="section-tag">Quick Start</div>
            <h2 class="section-title">Connect in Seconds</h2>
            <p class="section-desc">DesignMind runs as a standard MCP server — connect via stdio locally or SSE remotely.</p>
        </div>
        <div class="integration-grid">
            <div class="code-block animate-in">
                <div class="code-header"><span class="code-lang">Local (stdio)</span></div>
                <div class="code-body"><span class="t-cmt">// Add to your MCP client config</span>
{
  <span class="t-key">"mcpServers"</span>: {
    <span class="t-key">"designmind"</span>: {
      <span class="t-key">"command"</span>: <span class="t-str">"npx"</span>,
      <span class="t-key">"args"</span>: [<span class="t-str">"designmind-mcp"</span>]
    }
  }
}</div>
            </div>
            <div class="code-block animate-in delay-1">
                <div class="code-header"><span class="code-lang">Remote (SSE)</span></div>
                <div class="code-body"><span class="t-cmt">// Connect to the hosted server</span>
{
  <span class="t-key">"mcpServers"</span>: {
    <span class="t-key">"designmind"</span>: {
      <span class="t-key">"url"</span>: <span class="t-str">"${sseUrl}"</span>
    }
  }
}

<span class="t-cmt">// Health: /health</span>
<span class="t-cmt">// SSE:    /sse</span></div>
            </div>
        </div>
    </section>

    <!-- ═══════════════ FOOTER ═══════════════ -->
    <footer class="footer">
        <div class="footer-inner">
            <div>
                <div class="footer-brand">DesignMind</div>
                <p class="footer-tagline">The Design Intelligence Layer for AI-Powered Development. Encoding philosophy directly into the protocol — so every generated pixel is intentional.</p>
            </div>
            <div>
                <div class="footer-col-title">Protocol</div>
                <a href="#tools" class="footer-link">13 MCP Tools</a>
                <a href="#styles" class="footer-link">7 Design Styles</a>
                <a href="#domains" class="footer-link">10 Domains</a>
                <a href="#integrate" class="footer-link">Integration</a>
            </div>
            <div>
                <div class="footer-col-title">Styles</div>
                <a href="#styles" class="footer-link">Neo-Brutalism</a>
                <a href="#styles" class="footer-link">Dark Precision</a>
                <a href="#styles" class="footer-link">Glassmorphism</a>
                <a href="#styles" class="footer-link">Warm Editorial</a>
            </div>
            <div>
                <div class="footer-col-title">Resources</div>
                <a href="https://github.com/joeinarthur" class="footer-link" target="_blank">GitHub</a>
                <a href="https://www.npmjs.com/package/designmind-mcp" class="footer-link" target="_blank">npm Package</a>
                <a href="/health" class="footer-link">Health Check</a>
            </div>
        </div>
        <div class="footer-bottom">
            <span class="footer-copy">2025 DesignMind — Built with obsession.</span>
            <div class="footer-vitals">
                <span class="footer-vital">v1.0.0</span>
                <span class="footer-vital">Protocol: MCP</span>
                <span class="footer-vital">Status: Operational</span>
            </div>
        </div>
    </footer>

    <script>
        // Intersection Observer — sequential reveal with blur-to-clear
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.classList.add('visible'); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
        document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(a.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Animated counters — numbers grow, not appear
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    if (!target || el.dataset.counted) return;
                    el.dataset.counted = 'true';
                    let current = 0;
                    const step = Math.ceil(target / 20);
                    const interval = setInterval(() => {
                        current = Math.min(current + step, target);
                        el.textContent = current.toString();
                        if (current >= target) clearInterval(interval);
                    }, 50);
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.stat-num[data-count]').forEach(el => countObserver.observe(el));
    </script>
    `;
}

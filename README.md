# DesignMind MCP

**A Design Intelligence Layer for AI-Powered Development Tools**

DesignMind is an MCP server that acts as a design reasoning engine. It encodes the rules, philosophy, constraints, and decision logic of 8 real frontend design movements into structured, queryable knowledge — and enforces them throughout the code generation process.

> When a developer says "build me a logistics dashboard in industrial minimalism", the AI doesn't guess. It queries DesignMind, gets a formal specification, and checks every design decision against it in real time.

## Connecting to a Hosted Instance (SSE)

If you are using a hosted version of DesignMind (e.g., on Render), you can connect via **SSE (Server-Sent Events)** instead of a local binary.

### 1. Cursor
Go to **Settings** → **Cursor Settings** → **MCP** → **Add New MCP Server**:
- **Name:** `DesignMind`
- **Type:** `sse`
- **URL:** `https://your-app-name.onrender.com/sse`

### 2. Claude Desktop
Edit your `claude_desktop_config.json`:
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "designmind": {
      "url": "https://your-app-name.onrender.com/sse"
    }
  }
}
```

## Quick Start (Local Development)

```bash
npm install
```

### 2. Build

```bash
npm run build
```

### 3. Configure in your AI tool

Add to your MCP server configuration (e.g., `.cursor/mcp.json`, `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "designmind": {
      "command": "node",
      "args": ["d:/joeinarthur/DesignMind/dist/index.js"]
    }
  }
}
```

## Design Styles (8 at launch)

| Style | Best For | Emotional Intent |
|-------|----------|-----------------|
| **Neo-Brutalism** | Creative portfolios, startup pages | Playful rebellion, confident irreverence |
| **Industrial Minimalism** | Operations dashboards, logistics | Authority, precision, clarity under pressure |
| **Enterprise Brutalism** | SaaS platforms, admin dashboards | Institutional authority, structural confidence |
| **Clean Utility** | Productivity tools, docs, admin panels | Calm efficiency, invisible competence |
| **Glassmorphism** | Consumer fintech, portfolios, media | Sophisticated elegance, modern luxury |
| **Soft Modernism** | Consumer SaaS, health, education | Warm approachability, gentle confidence |
| **Dark Precision** | Developer tools, IDE extensions, DevOps | Technical mastery, focused intensity |
| **Warm Editorial** | Blogs, news sites, documentation | Intellectual warmth, curated authority |

## MCP Tools (13 tools)

### Discovery
- **`list_styles`** — Browse all styles with philosophy and best-fit use cases
- **`get_compatible_styles`** — Which styles can coexist and blending rules

### Project Setup
- **`intake`** — Project intelligence gathering → compatibility-scored recommendations
- **`get_domain_profile`** — Domain-specific design constraints (10 domains)
- **`configure_style`** — Get the full personalized spec + start a drift-tracking session

### During Generation
- **`get_component_hierarchy`** — Layout composition rules by page type
- **`get_interaction_spec`** — Animation, transitions, hover, focus, loading rules
- **`get_anti_patterns`** — What breaks this style and why
- **`validate_decision`** — Real-time constraint checking (APPROVED / VIOLATION / SUGGESTION)
- **`get_style_diff`** — Compare two styles side-by-side

### Session & Drift
- **`log_decision`** — Record a design decision for tracking
- **`check_drift`** — Detect accumulated inconsistencies

### Export
- **`export_tokens`** — Export as CSS custom properties, Tailwind config, or Figma tokens

## Example Workflow

```
1. AI calls intake() → gets scored recommendations
2. Developer picks "industrial-minimalism" (94% match)
3. AI calls configure_style("industrial-minimalism") → gets full spec + session ID
4. During code generation, AI calls validate_decision() for each CSS choice
5. AI logs decisions with log_decision()
6. Periodically calls check_drift() to catch inconsistencies
7. At the end, export_tokens("industrial-minimalism", "css") for reuse
```

## Architecture

```
src/
├── index.ts          # MCP server + 13 tool registrations
├── types.ts           # All TypeScript interfaces
├── domains.ts         # 10 domain profiles
├── session.ts         # Session manager + drift detection
├── intake.ts          # Scoring/recommendation engine
├── validator.ts       # Real-time decision validation
├── exporter.ts        # Token export (CSS/Tailwind/Figma)
└── styles/
    ├── index.ts       # Style registry
    ├── neo-brutalism.ts
    ├── industrial-minimalism.ts
    ├── enterprise-brutalism.ts
    ├── clean-utility.ts
    ├── glassmorphism.ts
    ├── soft-modernism.ts
    ├── dark-precision.ts
    └── warm-editorial.ts
```

## License

MIT

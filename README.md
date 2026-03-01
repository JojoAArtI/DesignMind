# DesignMind 🧠✨

**AI coding tools are aesthetically blind. DesignMind gives them sight.**

DesignMind is an Open-Source Model Context Protocol (MCP) server that acts as a **design reasoning engine**. It doesn't just store templates; it encodes the rules, philosophy, and "soul" of professional design movements into a machine-readable protocol that any AI can query, understand, and enforce.

## The Problem we're solving

When you ask Cursor or Claude to build a dashboard, the AI makes thousands of micro-decisions. It guesses. It's inconsistent. It creates "design drift" — rounded corners next to sharp ones, inconsistent spacing, and typography that clashes. 

Design knowledge has always lived in Figma files, design blogs, or the heads of designers. **DesignMind moves that knowledge into the protocol layer.** 

## 🌐 Use the Live Instance

You don't even need to host this yourself. I've deployed a public instance for the community:

**SSE URL:** `https://designmind.onrender.com/sse`

### 1. In Cursor
Go to **Settings** → **Cursor Settings** → **MCP** → **Add New MCP Server**:
- **Name:** `DesignMind`
- **Type:** `sse`
- **URL:** `https://designmind.onrender.com/sse`

### 2. In Claude Desktop
Add this to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "designmind": {
      "url": "https://designmind.onrender.com/sse"
    }
  }
}
```

---

## 🎨 8 Core Design Styles (at launch)

DesignMind ships with 8 deeply specified movements, from **Neo-Brutalism** to **Industrial Minimalism**. Each style includes:
- **Philosophy:** The emotional intent and functional contract.
- **Tokens:** 18 role-assigned colors, curated typography scales, and spacing systems.
- **Validation:** Real-time checking where the AI asks "Is 8px radius allowed in this style?" and the server answers with a **Violation** or **Approval**.
- **Anti-Patterns:** Explicit "don'ts" that prevent the AI from making common mistakes.

---

## 🤝 Contribute: Add a New Style!

DesignMind is only as powerful as the knowledge it holds. We want to encode the entire history of design.

**Want to add your own style?** 
1. Look at `src/styles/neo-brutalism.ts` as a template.
2. Create a new file in `src/styles/your-style.ts`.
3. Map out the philosophy, tokens, and 12 component patterns.
4. Open a Pull Request!

We are looking for designers and developers to help us encode:
- *Bento-Grid Modernism*
- *Skeuomorphic Revival*
- *Cyberpunk Precision*
- *Bauhaus Functionalism*

---

## 🛠️ Local Development

If you want to run your own local instance or modify the engine:

```bash
# Clone and install
git clone https://github.com/JojoAArtI/DesignMind.git
npm install

# Build
npm run build

# Run locally via stdio (for local MCP config)
node dist/index.js
```

## The Architecture

DesignMind uses **TypeScript** and the **MCP SDK**. The engine is split into:
- **Intake Engine:** Scores style compatibility based on project context.
- **Drift Detector:** Watches design decisions over time to find inconsistencies.
- **Validator:** Real-time CSS constraint checking.
- **Exporter:** Converts any movement into CSS, Tailwind, or Figma Variables.

---

*Made with ❤️ for the future of AI-assisted design.*

# DesignMind 🧠✨

**AI coding tools are aesthetically blind. DesignMind is how we give them sight.**

I’m tired of seeing AI build ugly things. When we ask Cursor or Claude to "make a dashboard," we’re asking it to make thousands of micro-design decisions—spacing, shadows, color harmony—that it doesn't actually understand. It’s guessing. And when AI guesses at scale, it creates "design drift"—a product that works but feels like it was designed by a committee of robots.

DesignMind is a Design Intelligence Layer. It’s not a template library; it’s a living, breathing set of rules and philosophies for how things *should* feel. We've encoded the "soul" of professional design movements into a protocol that any AI can query.

## 🌐 Use the Live Brain (Right Now)

You don't need to host this yourself to start using it. I’ve deployed a public instance for everyone to plug into.

**SSE URL:** `https://designmind.onrender.com/sse`

### Connect to Cursor
1. Open **Settings** → **Cursor Settings** → **MCP**.
2. Click **"+ Add New MCP Server"**.
3. **Name:** `DesignMind` | **Type:** `sse`.
4. **URL:** `https://designmind.onrender.com/sse`

### Connect to Claude Desktop
Add this to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "designmind": { "url": "https://designmind.onrender.com/sse" }
  }
}
```

### Connect to Google Antigravity
1. Open the **Agent session** menu (click the `...` icon at the top).
2. Select **MCP Servers** -> **Manage MCP Servers**.
3. Click **View raw config** to open `mcp_config.json`.
4. Add one of the following to the `mcpServers` object:

**Option A: Remote (Cloud) — Recommended**
No download required. Uses the live DesignMind brain.
```json
"designmind": {
  "type": "sse",
  "url": "https://designmind.onrender.com/sse"
}
```

**Option B: Local (Developer)**
Use this if you want to modify styles or run your own instance.
```json
"designmind": {
  "command": "node",
  "args": ["/absolute/path/to/DesignMind/dist/index.js"],
  "env": {}
}
```

---

## 🎨 8 Movements for the AI Era

DesignMind launched with 8 deeply specified styles, from **Neo-Brutalism** to **Industrial Minimalism**. 

Each style isn't just a list of hex codes; it's a **Functional Contract**. It includes:
- **The Philosophy:** Why this style exists (e.g., "The radical honesty of the structure").
- **Real-time Validation:** The AI asks, "Is a 12px radius okay here?" and DesignMind answers with a **Violation** or **Approval** based on the style's core rules.
- **Anti-Patterns:** Explicit "don'ts" that stop the AI from making common, lazy design mistakes.

---

## 🤝 Contribute: Teach the AI a New Style

DesignMind is only as powerful as the design knowledge we feed it. We want to encode the entire history of design—from the Bauhaus movement to the latest Bento-grid trends.

**How to contribute:**
1. Check out `src/styles/neo-brutalism.ts` to see how a "Design Brain" is structured.
2. Create your own style in `src/styles/`.
3. Open a Pull Request! We’re looking for someone to help us bring **Skeuomorphic Revival**, **Cyberpunk Precision**, or **Bauhaus Functionalism** to life.

---

## 🛠️ Running it Locally (for the tinkerers)

If you want to modify the engine or run your own private version:

```bash
# 1. Clone it
git clone https://github.com/JojoAArtI/DesignMind.git

# 2. Fuel it
npm install

# 3. Build it
npm run build

# 4. Use it (Locally)
# Add this to your local MCP config (standard stdio mode):
# "command": "node", "args": ["/path/to/DesignMind/dist/index.js"]
```

## 🚀 The Wisdom of Deployment (A Note from the Build)

If you're deploying this yourself (e.g., on Render), here’s a lesson I learned the hard way: 
**Don't put `typescript` or `@types` in `devDependencies`.** 

When you deploy to a production environment like Render, it won't install them, and your build will fail because it can't find `tsc`. I've updated the `package.json` so it works out of the box, but remember that for your next project.

Also, the **Free Tier** on Render sleeps after 15 minutes of silence. If your AI tool takes 30 seconds to respond the first time you use it in the morning, don't panic—it’s just the brain waking up.

---

*Built with ❤️ for the future of AI-assisted design.*
[GitHub](https://github.com/JojoAArtI/DesignMind)

#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { z } from 'zod';
import express from 'express';

import { getStyle, getAllStyles, getStyleIds } from './styles/index.js';
import { getDomainProfile, getAllDomains, getDomainIds } from './domains.js';
import { createSession, logDecision, checkDrift, getSession } from './session.js';
import { runIntake } from './intake.js';
import { validateDecision } from './validator.js';
import { exportTokens } from './exporter.js';
import { getLandingCSS } from './landing-styles.js';
import { getLandingHTML } from './landing-html.js';

const server = new McpServer({
    name: 'designmind',
    version: '1.0.0',
});

// ─────────────────────────────────────────────────────────────────────────────
// 1. list_styles — List all available design styles
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'list_styles',
    {
        description: 'Returns all available design styles with philosophy summaries, emotional intent, and best-fit use cases. Use this to discover what styles are available before making a selection.',
        inputSchema: {},
    },
    async () => {
        const styles = getAllStyles();
        const output = styles.map(s => ({
            id: s.id,
            name: s.name,
            philosophy: s.philosophy.summary,
            emotionalIntent: s.philosophy.emotionalIntent,
            bestFor: s.philosophy.bestFor,
            notIdealFor: s.philosophy.notIdealFor,
        }));
        return { content: [{ type: 'text', text: JSON.stringify(output, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 2. intake — Project intelligence gathering + scored recommendations
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'intake',
    {
        description: 'Runs project intelligence gathering. Provide a project description and context answers to receive a compatibility-scored style recommendation set with rationale and risk analysis. This should be the first tool called when starting a new project.',
        inputSchema: {
            project_description: z.string().describe('What the project is — describe the product, its purpose, and its users'),
            end_user: z.string().describe('Who is the end user? (executive, field operator, consumer, developer, creative, reader)'),
            interaction_pattern: z.string().describe('Primary interaction pattern: data-heavy, action-driven, read-only, creative-workspace, or mixed'),
            devices: z.array(z.string()).describe('Target devices: desktop, mobile, tablet, embedded'),
            emotional_register: z.string().describe('Emotional register: authoritative, calm, urgent, approachable, playful, professional, luxurious, technical'),
            existing_brand: z.boolean().describe('Does this project need to respect an existing brand?'),
            brand_description: z.string().optional().describe('If existing brand, describe its visual identity briefly'),
            industry: z.string().optional().describe('Industry domain: logistics, fintech, healthcare, creative-tools, developer-tools, e-commerce, education, media, enterprise-saas, consumer-social'),
        },
    },
    async (args) => {
        const result = runIntake({
            projectDescription: args.project_description,
            endUser: args.end_user,
            interactionPattern: args.interaction_pattern,
            devices: args.devices,
            emotionalRegister: args.emotional_register,
            existingBrand: args.existing_brand,
            brandDescription: args.brand_description,
            industry: args.industry,
        });

        const output = {
            detectedDomain: result.domain ? { id: result.domain.id, name: result.domain.name, description: result.domain.description } : null,
            recommendations: result.recommendations.map(r => ({
                style: r.styleName,
                styleId: r.styleId,
                score: `${r.score}%`,
                rationale: r.rationale,
                risk: r.risk,
            })),
        };
        return { content: [{ type: 'text', text: JSON.stringify(output, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 3. get_domain_profile — Domain-specific design constraints
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'get_domain_profile',
    {
        description: 'Returns design constraints, density requirements, accessibility needs, visual priorities, and appropriate/inappropriate aesthetic approaches for a given domain. Available domains: logistics, fintech, healthcare, creative-tools, developer-tools, e-commerce, education, media, enterprise-saas, consumer-social.',
        inputSchema: {
            domain: z.string().describe('Domain identifier (e.g., "logistics", "fintech", "healthcare")'),
        },
    },
    async ({ domain }) => {
        const profile = getDomainProfile(domain);
        if (!profile) {
            const availableDomains = getDomainIds();
            return { content: [{ type: 'text', text: `Domain "${domain}" not found. Available domains: ${availableDomains.join(', ')}` }] };
        }
        return { content: [{ type: 'text', text: JSON.stringify(profile, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 4. configure_style — Personalized spec for project context
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'configure_style',
    {
        description: 'Returns a complete, personalized design specification adjusted for the project context. This is not a generic spec — it includes philosophy, color tokens with usage rules, typography with reasoning, spacing system, border/shadow rules, component patterns for 12 component types, interaction specifications, and anti-patterns. Call this after selecting a style from intake recommendations.',
        inputSchema: {
            style_id: z.string().describe('Style identifier (e.g., "industrial-minimalism", "neo-brutalism")'),
            project_context: z.string().optional().describe('Brief project context to customize the spec delivery'),
        },
    },
    async ({ style_id, project_context }) => {
        const style = getStyle(style_id);
        if (!style) {
            return { content: [{ type: 'text', text: `Style "${style_id}" not found. Available: ${getStyleIds().join(', ')}` }] };
        }

        // Create a session for this style configuration
        const session = createSession(style_id);

        const output = {
            sessionId: session.id,
            configuredFor: project_context || 'General usage',
            style: {
                id: style.id,
                name: style.name,
                version: style.version,
                philosophy: style.philosophy,
                colors: style.colors,
                typography: style.typography,
                spacing: style.spacing,
                bordersShadows: style.bordersShadows,
                interactions: style.interactions,
                antiPatterns: style.antiPatterns,
            },
            note: 'A drift-tracking session has been created. Use log_decision() with the session ID to record decisions and check_drift() to detect inconsistencies.',
        };
        return { content: [{ type: 'text', text: JSON.stringify(output, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 5. get_component_hierarchy — Layout composition rules by page type
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'get_component_hierarchy',
    {
        description: 'Returns layout composition rules for a specific page type: what components are needed, visual priority ordering, relationship rules between components, and responsive behavior. Also returns component-level styling rules for each element.',
        inputSchema: {
            style_id: z.string().describe('Style identifier'),
            page_type: z.string().describe('Page type: "dashboard" or "landing"'),
        },
    },
    async ({ style_id, page_type }) => {
        const style = getStyle(style_id);
        if (!style) {
            return { content: [{ type: 'text', text: `Style "${style_id}" not found. Available: ${getStyleIds().join(', ')}` }] };
        }

        const hierarchy = style.componentHierarchies[page_type];
        if (!hierarchy) {
            return { content: [{ type: 'text', text: `Page type "${page_type}" not found for ${style.name}. Available: ${Object.keys(style.componentHierarchies).join(', ')}` }] };
        }

        const output = {
            style: style.name,
            pageType: page_type,
            hierarchy,
            componentDetails: style.components,
        };
        return { content: [{ type: 'text', text: JSON.stringify(output, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 6. get_interaction_spec — Animation, motion, and interaction rules
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'get_interaction_spec',
    {
        description: 'Returns the complete interaction specification for a style: animation philosophy, transition timing and easing, hover behavior rules, focus state rules, loading patterns, and cursor behavior. This dimension is critical for coherent interactive experiences.',
        inputSchema: {
            style_id: z.string().describe('Style identifier'),
        },
    },
    async ({ style_id }) => {
        const style = getStyle(style_id);
        if (!style) {
            return { content: [{ type: 'text', text: `Style "${style_id}" not found. Available: ${getStyleIds().join(', ')}` }] };
        }
        return { content: [{ type: 'text', text: JSON.stringify(style.interactions, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 7. validate_decision — Real-time constraint checking
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'validate_decision',
    {
        description: 'Real-time design constraint checking. Submit a CSS property and value to check against the active style\'s rules. Returns APPROVED, VIOLATION (with explanation and correct value), or SUGGESTION. Use this before applying any design decision to ensure consistency. Validates: border-radius, border-width, box-shadow, font-family, font-weight, font-size, spacing (padding/margin/gap), colors, and transition durations.',
        inputSchema: {
            style_id: z.string().describe('Style identifier to validate against'),
            property: z.string().describe('CSS property being decided (e.g., "border-radius", "font-family", "padding", "box-shadow")'),
            value: z.string().describe('The proposed CSS value (e.g., "8px", "16px", "rgba(0,0,0,0.5)")'),
        },
    },
    async ({ style_id, property, value }) => {
        const style = getStyle(style_id);
        if (!style) {
            return { content: [{ type: 'text', text: `Style "${style_id}" not found. Available: ${getStyleIds().join(', ')}` }] };
        }

        const result = validateDecision(style, property, value);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 8. get_style_diff — Compare two styles
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'get_style_diff',
    {
        description: 'Shows exactly where two styles conflict, which rules overlap, and what the specific differences are. Useful when considering style alternatives or planning multi-style projects.',
        inputSchema: {
            style_a: z.string().describe('First style identifier'),
            style_b: z.string().describe('Second style identifier'),
        },
    },
    async ({ style_a, style_b }) => {
        const a = getStyle(style_a);
        const b = getStyle(style_b);
        if (!a) return { content: [{ type: 'text', text: `Style "${style_a}" not found.` }] };
        if (!b) return { content: [{ type: 'text', text: `Style "${style_b}" not found.` }] };

        const diff = {
            styles: [a.name, b.name],
            philosophy: { [a.name]: a.philosophy.emotionalIntent, [b.name]: b.philosophy.emotionalIntent },
            differences: {
                borderRadius: { [a.name]: a.bordersShadows.radius.default, [b.name]: b.bordersShadows.radius.default, conflict: a.bordersShadows.radius.default !== b.bordersShadows.radius.default },
                borderWidth: { [a.name]: a.bordersShadows.borderWidth.default, [b.name]: b.bordersShadows.borderWidth.default, conflict: a.bordersShadows.borderWidth.default !== b.bordersShadows.borderWidth.default },
                shadowStyle: { [a.name]: a.bordersShadows.shadows.rationale, [b.name]: b.bordersShadows.shadows.rationale },
                typography: { [a.name]: a.typography.fonts.heading.split(',')[0], [b.name]: b.typography.fonts.heading.split(',')[0] },
                baseSpacing: { [a.name]: a.spacing.baseUnit, [b.name]: b.spacing.baseUnit },
                animationPhilosophy: { [a.name]: a.interactions.animation.philosophy, [b.name]: b.interactions.animation.philosophy },
                colorPrimary: { [a.name]: a.colors.primary.value, [b.name]: b.colors.primary.value },
                surfaceColor: { [a.name]: a.colors.surface.value, [b.name]: b.colors.surface.value },
            },
            compatible: a.compatibleStyles.includes(style_b) || b.compatibleStyles.includes(style_a),
            blendingGuidance: a.compatibleStyles.includes(style_b) ? a.blendingRules : b.compatibleStyles.includes(style_a) ? b.blendingRules : ['These styles are not listed as compatible. Blending is not recommended without careful boundary rules.'],
        };
        return { content: [{ type: 'text', text: JSON.stringify(diff, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 9. get_compatible_styles — Blending and coexistence rules
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'get_compatible_styles',
    {
        description: 'Returns which styles can coexist within a project and the specific rules for combining them safely. Use this when planning multi-style projects or considering style blending.',
        inputSchema: {},
    },
    async () => {
        const styles = getAllStyles();
        const compatibility = styles.map(s => ({
            style: s.name,
            styleId: s.id,
            compatibleWith: s.compatibleStyles,
            blendingRules: s.blendingRules,
        }));
        return { content: [{ type: 'text', text: JSON.stringify(compatibility, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 10. log_decision — Record a design decision for drift tracking
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'log_decision',
    {
        description: 'Records a design decision to the session state for drift tracking. Every significant CSS decision should be logged so check_drift() can detect accumulated inconsistencies. Returns the logged entry with timestamp.',
        inputSchema: {
            session_id: z.string().describe('Session ID returned by configure_style()'),
            component: z.string().describe('Component name (e.g., "hero-card", "nav-button", "sidebar")'),
            property: z.string().describe('CSS property decided (e.g., "border-radius", "padding", "background-color")'),
            value: z.string().describe('The CSS value used (e.g., "8px", "#FF6B6B", "16px 24px")'),
        },
    },
    async ({ session_id, component, property, value }) => {
        const entry = logDecision(session_id, component, property, value);
        if (!entry) {
            return { content: [{ type: 'text', text: `Session "${session_id}" not found. Create a session using configure_style() first.` }] };
        }
        return { content: [{ type: 'text', text: JSON.stringify({ logged: true, entry }, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 11. check_drift — Detect accumulated design inconsistencies
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'check_drift',
    {
        description: 'Reviews all decisions logged to a session and detects accumulated design inconsistencies — spacing drift, color drift, radius inconsistencies, font mismatches, and more. Call this periodically during generation to catch drift before it compounds.',
        inputSchema: {
            session_id: z.string().describe('Session ID to check for drift'),
        },
    },
    async ({ session_id }) => {
        const session = getSession(session_id);
        if (!session) {
            return { content: [{ type: 'text', text: `Session "${session_id}" not found.` }] };
        }

        const issues = checkDrift(session_id);
        const output = {
            sessionId: session_id,
            styleId: session.styleId,
            totalDecisions: session.decisions.length,
            driftIssues: issues.length,
            status: issues.length === 0 ? 'CLEAN — No drift detected. All decisions are consistent.' : `DRIFT DETECTED — ${issues.length} inconsistencies found.`,
            issues,
        };
        return { content: [{ type: 'text', text: JSON.stringify(output, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 12. export_tokens — Export configured token set
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'export_tokens',
    {
        description: 'Exports the configured design system as reusable tokens. Formats: "css" (CSS custom properties), "tailwind" (Tailwind CSS config), or "figma" (Figma Tokens JSON). The export includes colors, typography, spacing, borders, shadows, and transitions.',
        inputSchema: {
            style_id: z.string().describe('Style identifier to export'),
            format: z.enum(['css', 'tailwind', 'figma']).describe('Export format: css, tailwind, or figma'),
        },
    },
    async ({ style_id, format }) => {
        const style = getStyle(style_id);
        if (!style) {
            return { content: [{ type: 'text', text: `Style "${style_id}" not found. Available: ${getStyleIds().join(', ')}` }] };
        }

        const result = exportTokens(style, format);
        return { content: [{ type: 'text', text: result.content }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// 13. get_anti_patterns — Explicit anti-pattern rules
// ─────────────────────────────────────────────────────────────────────────────
server.registerTool(
    'get_anti_patterns',
    {
        description: 'Returns the explicit list of anti-patterns for a style: what breaks it, why it breaks it, and how to correct it. This is the encoded knowledge of what happens when someone doesn\'t understand the rules deeply enough. Essential reading before generating code in any style.',
        inputSchema: {
            style_id: z.string().describe('Style identifier'),
        },
    },
    async ({ style_id }) => {
        const style = getStyle(style_id);
        if (!style) {
            return { content: [{ type: 'text', text: `Style "${style_id}" not found. Available: ${getStyleIds().join(', ')}` }] };
        }

        const output = {
            style: style.name,
            antiPatterns: style.antiPatterns,
            borderShadowRules: style.bordersShadows.rules,
            typographyRules: style.typography.rules,
            spacingRules: style.spacing.rules,
            interactionRules: style.interactions.animation.rules,
        };
        return { content: [{ type: 'text', text: JSON.stringify(output, null, 2) }] };
    }
);

// ─────────────────────────────────────────────────────────────────────────────
// Start the server — supports both stdio (local) and HTTP/SSE (hosted)
// ─────────────────────────────────────────────────────────────────────────────
async function main() {
    const PORT = process.env.PORT;

    if (PORT) {
        // ─── HTTP/SSE mode (for hosted deployment) ────────────────────────
        const app = express();
        app.use(express.json());

        // Store transports by session ID
        const transports: Record<string, SSEServerTransport> = {};

        // Health check endpoint (required by hosting platforms)
        app.get('/health', (_req, res) => {
            res.json({ status: 'ok', server: 'designmind', version: '1.0.0' });
        });

        // Root landing page — comprehensive design intelligence showcase
        app.get('/', (req, res) => {
            const sseUrl = `${req.protocol}://${req.get('host')}/sse`;
            res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DesignMind MCP | Design Intelligence Layer for AI</title>
    <meta name="description" content="The Design Intelligence Layer for AI-Powered Development. 7 design styles, 10 domain profiles, 13 MCP tools — encoding philosophy directly into the protocol.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>${getLandingCSS()}</style>
</head>
<body>
${getLandingHTML(sseUrl)}
</body>
</html>
            `);
        });

        // SSE endpoint — establishes the event stream
        app.get('/sse', async (req, res) => {
            console.log('SSE connection requested');
            const transport = new SSEServerTransport('/messages', res);
            const sessionId = transport.sessionId;
            transports[sessionId] = transport;

            transport.onclose = () => {
                console.log(`Session closed: ${sessionId}`);
                delete transports[sessionId];
            };

            // Each SSE connection gets its own server instance sharing the same tools
            const sessionServer = new McpServer({ name: 'designmind', version: '1.0.0' });
            registerAllTools(sessionServer);
            await sessionServer.connect(transport);
            console.log(`SSE session started: ${sessionId}`);
        });

        // Messages endpoint — receives client JSON-RPC requests
        app.post('/messages', async (req, res) => {
            const sessionId = req.query.sessionId as string;
            if (!sessionId) { res.status(400).send('Missing sessionId'); return; }

            const transport = transports[sessionId];
            if (!transport) { res.status(404).send('Session not found'); return; }

            await transport.handlePostMessage(req, res, req.body);
        });

        app.listen(parseInt(PORT), '0.0.0.0', () => {
            console.log(`DesignMind MCP Server running on http://0.0.0.0:${PORT}`);
            console.log(`  SSE endpoint:     /sse`);
            console.log(`  Messages endpoint: /messages`);
            console.log(`  Health check:      /health`);
        });

        // Graceful shutdown
        process.on('SIGINT', async () => {
            console.log('Shutting down...');
            for (const id in transports) {
                await transports[id].close();
                delete transports[id];
            }
            process.exit(0);
        });
    } else {
        // ─── Stdio mode (for local MCP use) ───────────────────────────────
        registerAllTools(server);
        const transport = new StdioServerTransport();
        await server.connect(transport);
        console.error('DesignMind MCP Server running on stdio');
    }
}

// Register all tools on a given server instance
function registerAllTools(srv: McpServer) {
    // Tools are already registered on the module-level `server` for stdio mode.
    // For SSE mode, we need to re-register on the per-session server.
    // This check avoids double-registration in stdio mode.
    if (srv === server) return;

    // Re-register all 13 tools on the session server...
    // We re-use the same handler functions but on a different McpServer instance.
    srv.registerTool('list_styles', { description: 'Returns all available design styles with philosophy summaries, emotional intent, and best-fit use cases.', inputSchema: {} }, async () => { const styles = getAllStyles(); return { content: [{ type: 'text', text: JSON.stringify(styles.map(s => ({ id: s.id, name: s.name, philosophy: s.philosophy.summary, emotionalIntent: s.philosophy.emotionalIntent, bestFor: s.philosophy.bestFor, notIdealFor: s.philosophy.notIdealFor })), null, 2) }] }; });
    srv.registerTool('intake', { description: 'Project intelligence gathering → scored recommendations.', inputSchema: { project_description: z.string(), end_user: z.string(), interaction_pattern: z.string(), devices: z.array(z.string()), emotional_register: z.string(), existing_brand: z.boolean(), brand_description: z.string().optional(), industry: z.string().optional() } }, async (args: any) => { const result = runIntake({ projectDescription: args.project_description, endUser: args.end_user, interactionPattern: args.interaction_pattern, devices: args.devices, emotionalRegister: args.emotional_register, existingBrand: args.existing_brand, brandDescription: args.brand_description, industry: args.industry }); return { content: [{ type: 'text', text: JSON.stringify({ detectedDomain: result.domain ? { id: result.domain.id, name: result.domain.name } : null, recommendations: result.recommendations.map(r => ({ style: r.styleName, styleId: r.styleId, score: `${r.score}%`, rationale: r.rationale, risk: r.risk })) }, null, 2) }] }; });
    srv.registerTool('get_domain_profile', { description: 'Domain-specific design constraints.', inputSchema: { domain: z.string() } }, async ({ domain }: any) => { const p = getDomainProfile(domain); return { content: [{ type: 'text', text: p ? JSON.stringify(p, null, 2) : `Domain not found. Available: ${getDomainIds().join(', ')}` }] }; });
    srv.registerTool('configure_style', { description: 'Full personalized design spec + session creation.', inputSchema: { style_id: z.string(), project_context: z.string().optional() } }, async ({ style_id, project_context }: any) => { const style = getStyle(style_id); if (!style) return { content: [{ type: 'text', text: `Not found. Available: ${getStyleIds().join(', ')}` }] }; const session = createSession(style_id); return { content: [{ type: 'text', text: JSON.stringify({ sessionId: session.id, style: { id: style.id, name: style.name, philosophy: style.philosophy, colors: style.colors, typography: style.typography, spacing: style.spacing, bordersShadows: style.bordersShadows, interactions: style.interactions, antiPatterns: style.antiPatterns } }, null, 2) }] }; });
    srv.registerTool('get_component_hierarchy', { description: 'Layout composition rules by page type.', inputSchema: { style_id: z.string(), page_type: z.string() } }, async ({ style_id, page_type }: any) => { const style = getStyle(style_id); if (!style) return { content: [{ type: 'text', text: `Not found.` }] }; const h = style.componentHierarchies[page_type]; return { content: [{ type: 'text', text: h ? JSON.stringify({ style: style.name, pageType: page_type, hierarchy: h, componentDetails: style.components }, null, 2) : `Page type not found.` }] }; });
    srv.registerTool('get_interaction_spec', { description: 'Animation and interaction rules.', inputSchema: { style_id: z.string() } }, async ({ style_id }: any) => { const style = getStyle(style_id); return { content: [{ type: 'text', text: style ? JSON.stringify(style.interactions, null, 2) : 'Not found.' }] }; });
    srv.registerTool('validate_decision', { description: 'Real-time constraint checking.', inputSchema: { style_id: z.string(), property: z.string(), value: z.string() } }, async ({ style_id, property, value }: any) => { const style = getStyle(style_id); if (!style) return { content: [{ type: 'text', text: 'Not found.' }] }; return { content: [{ type: 'text', text: JSON.stringify(validateDecision(style, property, value), null, 2) }] }; });
    srv.registerTool('get_style_diff', { description: 'Compare two styles.', inputSchema: { style_a: z.string(), style_b: z.string() } }, async ({ style_a, style_b }: any) => { const a = getStyle(style_a), b = getStyle(style_b); if (!a || !b) return { content: [{ type: 'text', text: 'Style not found.' }] }; return { content: [{ type: 'text', text: JSON.stringify({ styles: [a.name, b.name], compatible: a.compatibleStyles.includes(style_b) || b.compatibleStyles.includes(style_a), differences: { radius: { [a.name]: a.bordersShadows.radius.default, [b.name]: b.bordersShadows.radius.default }, typography: { [a.name]: a.typography.fonts.heading.split(',')[0], [b.name]: b.typography.fonts.heading.split(',')[0] }, primary: { [a.name]: a.colors.primary.value, [b.name]: b.colors.primary.value } } }, null, 2) }] }; });
    srv.registerTool('get_compatible_styles', { description: 'Blending and coexistence rules.', inputSchema: {} }, async () => { return { content: [{ type: 'text', text: JSON.stringify(getAllStyles().map(s => ({ style: s.name, styleId: s.id, compatibleWith: s.compatibleStyles, blendingRules: s.blendingRules })), null, 2) }] }; });
    srv.registerTool('log_decision', { description: 'Record a design decision.', inputSchema: { session_id: z.string(), component: z.string(), property: z.string(), value: z.string() } }, async ({ session_id, component, property, value }: any) => { const e = logDecision(session_id, component, property, value); return { content: [{ type: 'text', text: e ? JSON.stringify({ logged: true, entry: e }, null, 2) : 'Session not found.' }] }; });
    srv.registerTool('check_drift', { description: 'Detect design inconsistencies.', inputSchema: { session_id: z.string() } }, async ({ session_id }: any) => { const session = getSession(session_id); if (!session) return { content: [{ type: 'text', text: 'Session not found.' }] }; const issues = checkDrift(session_id); return { content: [{ type: 'text', text: JSON.stringify({ sessionId: session_id, totalDecisions: session.decisions.length, driftIssues: issues.length, status: issues.length === 0 ? 'CLEAN' : `DRIFT: ${issues.length} issues`, issues }, null, 2) }] }; });
    srv.registerTool('export_tokens', { description: 'Export as CSS, Tailwind, or Figma tokens.', inputSchema: { style_id: z.string(), format: z.enum(['css', 'tailwind', 'figma']) } }, async ({ style_id, format }: any) => { const style = getStyle(style_id); if (!style) return { content: [{ type: 'text', text: 'Not found.' }] }; return { content: [{ type: 'text', text: exportTokens(style, format).content }] }; });
    srv.registerTool('get_anti_patterns', { description: 'Anti-pattern rules for a style.', inputSchema: { style_id: z.string() } }, async ({ style_id }: any) => { const style = getStyle(style_id); if (!style) return { content: [{ type: 'text', text: 'Not found.' }] }; return { content: [{ type: 'text', text: JSON.stringify({ style: style.name, antiPatterns: style.antiPatterns, rules: { borders: style.bordersShadows.rules, typography: style.typography.rules, spacing: style.spacing.rules } }, null, 2) }] }; });
}

main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
});

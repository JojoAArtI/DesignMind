import { DesignStyle, TokenExport, ExportFormat } from './types.js';

export function exportTokens(style: DesignStyle, format: ExportFormat): TokenExport {
    switch (format) {
        case 'css':
            return { format: 'css', content: exportCSS(style) };
        case 'tailwind':
            return { format: 'tailwind', content: exportTailwind(style) };
        case 'figma':
            return { format: 'figma', content: exportFigma(style) };
        default:
            return { format: 'css', content: exportCSS(style) };
    }
}

function exportCSS(style: DesignStyle): string {
    const lines: string[] = [];
    lines.push(`/* DesignMind — ${style.name} v${style.version} */`);
    lines.push(`/* ${style.philosophy.summary} */`);
    lines.push('');
    lines.push(':root {');
    lines.push('  /* ─── Colors ─── */');
    for (const [key, token] of Object.entries(style.colors)) {
        const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        lines.push(`  ${cssVar}: ${token.value}; /* ${token.usage.split('.')[0]} */`);
    }
    lines.push('');
    lines.push('  /* ─── Typography ─── */');
    lines.push(`  --font-heading: ${style.typography.fonts.heading};`);
    lines.push(`  --font-body: ${style.typography.fonts.body};`);
    lines.push(`  --font-mono: ${style.typography.fonts.mono};`);
    for (const [key, val] of Object.entries(style.typography.scale)) {
        lines.push(`  --text-${key}: ${val};`);
    }
    for (const [key, val] of Object.entries(style.typography.weights)) {
        lines.push(`  --font-weight-${key}: ${val};`);
    }
    for (const [key, val] of Object.entries(style.typography.lineHeights)) {
        lines.push(`  --leading-${key}: ${val};`);
    }
    lines.push('');
    lines.push('  /* ─── Spacing ─── */');
    lines.push(`  --spacing-unit: ${style.spacing.baseUnit};`);
    for (const mult of style.spacing.scale) {
        lines.push(`  --spacing-${mult}: ${mult * style.spacing.baseValue}px;`);
    }
    lines.push('');
    lines.push('  /* ─── Borders & Shadows ─── */');
    for (const [key, val] of Object.entries(style.bordersShadows.radius)) {
        if (key !== 'rationale') lines.push(`  --radius-${key}: ${val};`);
    }
    for (const [key, val] of Object.entries(style.bordersShadows.borderWidth)) {
        lines.push(`  --border-${key}: ${val};`);
    }
    for (const [key, val] of Object.entries(style.bordersShadows.shadows)) {
        if (key !== 'rationale') lines.push(`  --shadow-${key}: ${val};`);
    }
    lines.push('');
    lines.push('  /* ─── Transitions ─── */');
    for (const [key, val] of Object.entries(style.interactions.transitions.duration)) {
        lines.push(`  --duration-${key}: ${val};`);
    }
    for (const [key, val] of Object.entries(style.interactions.transitions.easing)) {
        lines.push(`  --easing-${key}: ${val};`);
    }
    lines.push('}');
    return lines.join('\n');
}

function exportTailwind(style: DesignStyle): string {
    const config: Record<string, unknown> = {
        theme: {
            extend: {
                colors: {} as Record<string, string>,
                fontFamily: {
                    heading: [style.typography.fonts.heading],
                    body: [style.typography.fonts.body],
                    mono: [style.typography.fonts.mono],
                },
                fontSize: { ...style.typography.scale },
                fontWeight: { ...style.typography.weights },
                lineHeight: { ...style.typography.lineHeights },
                letterSpacing: { ...style.typography.letterSpacing },
                borderRadius: {} as Record<string, string>,
                borderWidth: { ...style.bordersShadows.borderWidth },
                boxShadow: {} as Record<string, string>,
                transitionDuration: { ...style.interactions.transitions.duration },
                transitionTimingFunction: { ...style.interactions.transitions.easing },
            },
        },
    };

    const colors = (config.theme as Record<string, Record<string, Record<string, unknown>>>).extend.colors as Record<string, string>;
    for (const [key, token] of Object.entries(style.colors)) {
        colors[key.replace(/([A-Z])/g, '-$1').toLowerCase()] = token.value;
    }

    const radii = (config.theme as Record<string, Record<string, Record<string, unknown>>>).extend.borderRadius as Record<string, string>;
    for (const [key, val] of Object.entries(style.bordersShadows.radius)) {
        if (key !== 'rationale') radii[key] = val;
    }

    const shadows = (config.theme as Record<string, Record<string, Record<string, unknown>>>).extend.boxShadow as Record<string, string>;
    for (const [key, val] of Object.entries(style.bordersShadows.shadows)) {
        if (key !== 'rationale') shadows[key] = val;
    }

    return `// DesignMind — ${style.name} v${style.version}\n// Tailwind CSS Configuration\n\nexport default ${JSON.stringify(config, null, 2)}`;
}

function exportFigma(style: DesignStyle): string {
    const tokens: Record<string, unknown> = {
        '$schema': 'https://schemas.designtokens.org/dtcg',
        'designmind-style': style.name,
        'designmind-version': style.version,
        color: {} as Record<string, unknown>,
        typography: {} as Record<string, unknown>,
        spacing: {} as Record<string, unknown>,
        borderRadius: {} as Record<string, unknown>,
        borderWidth: {} as Record<string, unknown>,
        boxShadow: {} as Record<string, unknown>,
    };

    const colorTokens = tokens.color as Record<string, unknown>;
    for (const [key, token] of Object.entries(style.colors)) {
        colorTokens[key] = { $type: 'color', $value: token.value, $description: token.usage };
    }

    const typographyTokens = tokens.typography as Record<string, unknown>;
    typographyTokens['font-heading'] = { $type: 'fontFamily', $value: style.typography.fonts.heading };
    typographyTokens['font-body'] = { $type: 'fontFamily', $value: style.typography.fonts.body };
    typographyTokens['font-mono'] = { $type: 'fontFamily', $value: style.typography.fonts.mono };
    for (const [key, val] of Object.entries(style.typography.scale)) {
        typographyTokens[`size-${key}`] = { $type: 'dimension', $value: val };
    }

    const spacingTokens = tokens.spacing as Record<string, unknown>;
    for (const mult of style.spacing.scale) {
        spacingTokens[`${mult}`] = { $type: 'dimension', $value: `${mult * style.spacing.baseValue}px` };
    }

    const radiusTokens = tokens.borderRadius as Record<string, unknown>;
    for (const [key, val] of Object.entries(style.bordersShadows.radius)) {
        if (key !== 'rationale') radiusTokens[key] = { $type: 'dimension', $value: val };
    }

    return JSON.stringify(tokens, null, 2);
}

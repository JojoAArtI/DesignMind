import { Session, DecisionEntry, DriftIssue } from './types.js';
import { getStyle } from './styles/index.js';
import { randomUUID } from 'crypto';

const sessions: Map<string, Session> = new Map();

export function createSession(styleId: string): Session {
    const session: Session = {
        id: randomUUID(),
        styleId,
        decisions: [],
        createdAt: Date.now(),
    };
    sessions.set(session.id, session);
    return session;
}

export function getSession(sessionId: string): Session | undefined {
    return sessions.get(sessionId);
}

export function logDecision(
    sessionId: string,
    component: string,
    property: string,
    value: string
): DecisionEntry | null {
    const session = sessions.get(sessionId);
    if (!session) return null;

    const entry: DecisionEntry = {
        component,
        property,
        value,
        timestamp: Date.now(),
    };
    session.decisions.push(entry);
    return entry;
}

export function checkDrift(sessionId: string): DriftIssue[] {
    const session = sessions.get(sessionId);
    if (!session) return [];

    const style = getStyle(session.styleId);
    if (!style) return [];

    const issues: DriftIssue[] = [];
    const decisions = session.decisions;

    // Group decisions by property for pattern analysis
    const byProperty: Record<string, DecisionEntry[]> = {};
    for (const d of decisions) {
        const key = d.property;
        if (!byProperty[key]) byProperty[key] = [];
        byProperty[key].push(d);
    }

    // Check spacing consistency
    const spacingDecisions = decisions.filter(d =>
        ['padding', 'margin', 'gap', 'spacing'].some(s => d.property.toLowerCase().includes(s))
    );
    if (spacingDecisions.length > 1) {
        const spacingValues = spacingDecisions.map(d => parseFloat(d.value));
        const validValues = spacingValues.filter(v => !isNaN(v));
        if (validValues.length > 1) {
            const baseUnit = style.spacing.baseValue;
            for (let i = 0; i < validValues.length; i++) {
                if (validValues[i] % baseUnit !== 0) {
                    issues.push({
                        property: spacingDecisions[i].property,
                        component: spacingDecisions[i].component,
                        expectedPattern: `Multiples of ${baseUnit}px (${style.spacing.allowedMultiples})`,
                        actualValue: spacingDecisions[i].value,
                        conflictsWith: ['spacing-system'],
                        suggestion: `Use ${Math.round(validValues[i] / baseUnit) * baseUnit}px instead`,
                    });
                }
            }
        }
    }

    // Check border-radius consistency
    const radiusDecisions = decisions.filter(d =>
        d.property.toLowerCase().includes('radius')
    );
    if (radiusDecisions.length > 1) {
        const defaultRadius = parseFloat(style.bordersShadows.radius.default);
        const maxRadius = parseFloat(style.bordersShadows.radius.xl);
        for (const rd of radiusDecisions) {
            const val = parseFloat(rd.value);
            if (!isNaN(val) && val > maxRadius) {
                issues.push({
                    property: rd.property,
                    component: rd.component,
                    expectedPattern: `Maximum radius: ${style.bordersShadows.radius.xl} (${style.bordersShadows.radius.rationale})`,
                    actualValue: rd.value,
                    conflictsWith: ['border-radius-rules'],
                    suggestion: `Reduce to ${style.bordersShadows.radius.default} or below ${style.bordersShadows.radius.xl}`,
                });
            }
        }
    }

    // Check border-width consistency
    const borderDecisions = decisions.filter(d =>
        d.property.toLowerCase().includes('border-width') || d.property.toLowerCase().includes('border')
    );
    if (borderDecisions.length > 2) {
        const values = new Set(borderDecisions.map(d => d.value));
        if (values.size > 3) {
            issues.push({
                property: 'border-width',
                component: 'multiple',
                expectedPattern: `Consistent border widths from the scale: ${Object.values(style.bordersShadows.borderWidth).join(', ')}`,
                actualValue: `${values.size} different values used: ${Array.from(values).join(', ')}`,
                conflictsWith: borderDecisions.map(d => d.component),
                suggestion: 'Consolidate to 2-3 border widths from the defined scale',
            });
        }
    }

    // Check color drift - too many unique colors
    const colorDecisions = decisions.filter(d =>
        ['color', 'background', 'fill', 'stroke'].some(s => d.property.toLowerCase().includes(s))
    );
    if (colorDecisions.length > 3) {
        const uniqueColors = new Set(colorDecisions.map(d => d.value.toLowerCase()));
        const tokenColors = Object.values(style.colors).map(c => c.value.toLowerCase());
        const offSystemColors = Array.from(uniqueColors).filter(c => !tokenColors.includes(c));
        if (offSystemColors.length > 0) {
            issues.push({
                property: 'color',
                component: 'multiple',
                expectedPattern: 'Colors from the defined token system only',
                actualValue: `${offSystemColors.length} off-system colors: ${offSystemColors.slice(0, 3).join(', ')}${offSystemColors.length > 3 ? '...' : ''}`,
                conflictsWith: colorDecisions.filter(d => offSystemColors.includes(d.value.toLowerCase())).map(d => d.component),
                suggestion: 'Map all colors to the defined color tokens. Use the style\'s color system exclusively.',
            });
        }
    }

    // Check font family consistency
    const fontDecisions = decisions.filter(d =>
        d.property.toLowerCase().includes('font-family') || d.property.toLowerCase().includes('font')
    );
    if (fontDecisions.length > 0) {
        const allowedFonts = [
            style.typography.fonts.heading.toLowerCase(),
            style.typography.fonts.body.toLowerCase(),
            style.typography.fonts.mono.toLowerCase(),
        ];
        for (const fd of fontDecisions) {
            const isAllowed = allowedFonts.some(af => af.includes(fd.value.toLowerCase()) || fd.value.toLowerCase().includes(af.split(',')[0].replace(/'/g, '').trim()));
            if (!isAllowed) {
                issues.push({
                    property: fd.property,
                    component: fd.component,
                    expectedPattern: `Font families: heading="${style.typography.fonts.heading}", body="${style.typography.fonts.body}", mono="${style.typography.fonts.mono}"`,
                    actualValue: fd.value,
                    conflictsWith: ['typography-system'],
                    suggestion: `Use the defined font pairing. ${style.typography.fonts.rationale}`,
                });
            }
        }
    }

    return issues;
}

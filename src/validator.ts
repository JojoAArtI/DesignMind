import { ValidationResult, DesignStyle } from './types.js';

export function validateDecision(
    style: DesignStyle,
    property: string,
    value: string
): ValidationResult {
    const prop = property.toLowerCase().trim();
    const val = value.trim();

    // ─── Border Radius Validation ──────────────────────────────────
    if (prop.includes('border-radius') || prop.includes('radius')) {
        return validateBorderRadius(style, val);
    }

    // ─── Border Width Validation ───────────────────────────────────
    if (prop.includes('border-width') || (prop.includes('border') && !prop.includes('radius') && !prop.includes('color'))) {
        return validateBorderWidth(style, val);
    }

    // ─── Box Shadow Validation ─────────────────────────────────────
    if (prop.includes('shadow')) {
        return validateBoxShadow(style, val);
    }

    // ─── Font Family Validation ────────────────────────────────────
    if (prop.includes('font-family') || prop === 'font') {
        return validateFontFamily(style, val);
    }

    // ─── Font Weight Validation ────────────────────────────────────
    if (prop.includes('font-weight') || prop.includes('weight')) {
        return validateFontWeight(style, val);
    }

    // ─── Font Size Validation ──────────────────────────────────────
    if (prop.includes('font-size') || prop.includes('size')) {
        return validateFontSize(style, val);
    }

    // ─── Spacing Validation (padding, margin, gap) ─────────────────
    if (['padding', 'margin', 'gap'].some(s => prop.includes(s))) {
        return validateSpacing(style, val);
    }

    // ─── Color Validation ──────────────────────────────────────────
    if (prop.includes('color') || prop.includes('background')) {
        return validateColor(style, val);
    }

    // ─── Transition Duration ───────────────────────────────────────
    if (prop.includes('transition') || prop.includes('duration') || prop.includes('animation')) {
        return validateTransition(style, val);
    }

    // Default: approve with note
    return {
        status: 'APPROVED',
        property,
        value: val,
        message: `No specific rule found for "${property}" in ${style.name}. Decision accepted.`,
    };
}

function validateBorderRadius(style: DesignStyle, value: string): ValidationResult {
    const numVal = parseFloat(value);
    if (isNaN(numVal)) {
        if (value === 'none' || value === '0' || value === '0px') {
            return { status: 'APPROVED', property: 'border-radius', value, message: 'Zero radius is within spec.' };
        }
        return { status: 'APPROVED', property: 'border-radius', value, message: 'Non-numeric radius value accepted.' };
    }

    const maxRadius = parseFloat(style.bordersShadows.radius.xl);
    const defaultRadius = parseFloat(style.bordersShadows.radius.default);

    if (numVal > maxRadius) {
        return {
            status: 'VIOLATION',
            property: 'border-radius',
            value,
            message: `VIOLATION — ${style.name} caps radius at ${style.bordersShadows.radius.xl}. ${style.bordersShadows.radius.rationale}`,
            correctValue: style.bordersShadows.radius.default,
            rationale: style.bordersShadows.radius.rationale,
        };
    }

    if (numVal > defaultRadius * 2 && numVal <= maxRadius) {
        return {
            status: 'SUGGESTION',
            property: 'border-radius',
            value,
            message: `${value} is within limits but larger than the style default (${style.bordersShadows.radius.default}). Consider using the default for consistency.`,
            correctValue: style.bordersShadows.radius.default,
            rationale: style.bordersShadows.radius.rationale,
        };
    }

    return { status: 'APPROVED', property: 'border-radius', value, message: `${value} is within the ${style.name} border-radius specification.` };
}

function validateBorderWidth(style: DesignStyle, value: string): ValidationResult {
    const numVal = parseFloat(value);
    if (isNaN(numVal)) {
        return { status: 'APPROVED', property: 'border-width', value, message: 'Non-numeric border value accepted.' };
    }

    const allowedWidths = Object.values(style.bordersShadows.borderWidth).map(v => parseFloat(v)).filter(v => !isNaN(v));
    const maxWidth = Math.max(...allowedWidths);
    const defaultWidth = parseFloat(style.bordersShadows.borderWidth.default);

    if (numVal > maxWidth + 2) {
        return {
            status: 'VIOLATION',
            property: 'border-width',
            value,
            message: `VIOLATION — ${value} exceeds the maximum border width for ${style.name}. Maximum is ${maxWidth}px.`,
            correctValue: style.bordersShadows.borderWidth.default,
            rationale: style.bordersShadows.rules.join(' '),
        };
    }

    return { status: 'APPROVED', property: 'border-width', value, message: `Border width ${value} is acceptable for ${style.name}.` };
}

function validateBoxShadow(style: DesignStyle, value: string): ValidationResult {
    const styleId = style.id;

    // Neo-brutalism: must be hard offset (no blur)
    if (styleId === 'neo-brutalism' && value !== 'none') {
        if (value.includes('blur') || (value.match(/\d+px/g)?.length === 4 && parseFloat(value.match(/\d+px/g)![2]) > 0)) {
            // Check for blur component in shadow value (3rd numeric in standard box-shadow)
            const parts = value.match(/(\d+)px/g);
            if (parts && parts.length >= 3) {
                const blur = parseFloat(parts[2]);
                if (blur > 0) {
                    return {
                        status: 'VIOLATION',
                        property: 'box-shadow',
                        value,
                        message: `VIOLATION — Neo-Brutalism requires hard offset shadows with NO blur. ${style.bordersShadows.shadows.rationale}`,
                        correctValue: style.bordersShadows.shadows.md,
                        rationale: style.bordersShadows.shadows.rationale,
                    };
                }
            }
        }
    }

    // Glassmorphism: must be soft/diffused
    if (styleId === 'glassmorphism' && value !== 'none') {
        const parts = value.match(/(\d+)px/g);
        if (parts && parts.length >= 2) {
            const xOffset = parseFloat(parts[0]);
            const yOffset = parseFloat(parts[1]);
            if (xOffset > 0 && (parts.length < 3 || parseFloat(parts[2]) === 0)) {
                return {
                    status: 'VIOLATION',
                    property: 'box-shadow',
                    value,
                    message: `VIOLATION — Glassmorphism requires soft, diffused shadows. Hard offset shadows break the glass metaphor.`,
                    correctValue: style.bordersShadows.shadows.md,
                    rationale: style.bordersShadows.shadows.rationale,
                };
            }
        }
    }

    return { status: 'APPROVED', property: 'box-shadow', value, message: `Shadow value is acceptable for ${style.name}.` };
}

function validateFontFamily(style: DesignStyle, value: string): ValidationResult {
    const val = value.toLowerCase().replace(/'/g, '').replace(/"/g, '');
    const allowedFamilies = [
        style.typography.fonts.heading,
        style.typography.fonts.body,
        style.typography.fonts.mono,
    ].map(f => f.toLowerCase().replace(/'/g, '').replace(/"/g, ''));

    const firstFont = val.split(',')[0].trim();
    const isAllowed = allowedFamilies.some(f => f.includes(firstFont) || firstFont.includes(f.split(',')[0].trim()));

    if (!isAllowed) {
        return {
            status: 'VIOLATION',
            property: 'font-family',
            value,
            message: `VIOLATION — "${firstFont}" is not part of the ${style.name} font pairing. ${style.typography.fonts.rationale}`,
            correctValue: style.typography.fonts.body,
            rationale: style.typography.fonts.rationale,
        };
    }

    return { status: 'APPROVED', property: 'font-family', value, message: `Font family is within the ${style.name} specification.` };
}

function validateFontWeight(style: DesignStyle, value: string): ValidationResult {
    const numVal = parseInt(value);
    if (isNaN(numVal)) return { status: 'APPROVED', property: 'font-weight', value, message: 'Named weight accepted.' };

    const allowedWeights = Object.values(style.typography.weights);
    if (!allowedWeights.includes(numVal)) {
        const closest = allowedWeights.reduce((prev, curr) => Math.abs(curr - numVal) < Math.abs(prev - numVal) ? curr : prev);
        return {
            status: 'SUGGESTION',
            property: 'font-weight',
            value,
            message: `Weight ${value} is not in the defined scale for ${style.name}. Closest defined weight: ${closest}.`,
            correctValue: String(closest),
        };
    }

    return { status: 'APPROVED', property: 'font-weight', value, message: `Font weight ${value} is within spec.` };
}

function validateFontSize(style: DesignStyle, value: string): ValidationResult {
    const allowedSizes = Object.values(style.typography.scale);
    if (!allowedSizes.includes(value)) {
        return {
            status: 'SUGGESTION',
            property: 'font-size',
            value,
            message: `Size ${value} is not in the defined type scale for ${style.name}. Available sizes: ${allowedSizes.join(', ')}.`,
            correctValue: style.typography.scale.base,
        };
    }
    return { status: 'APPROVED', property: 'font-size', value, message: `Font size is within the type scale.` };
}

function validateSpacing(style: DesignStyle, value: string): ValidationResult {
    const numVal = parseFloat(value);
    if (isNaN(numVal)) return { status: 'APPROVED', property: 'spacing', value, message: 'Non-numeric spacing accepted.' };

    const baseUnit = style.spacing.baseValue;
    if (numVal % baseUnit !== 0) {
        const corrected = Math.round(numVal / baseUnit) * baseUnit;
        return {
            status: 'VIOLATION',
            property: 'spacing',
            value,
            message: `VIOLATION — ${value} is not a multiple of the ${baseUnit}px base unit. ${style.spacing.allowedMultiples}`,
            correctValue: `${corrected}px`,
            rationale: style.spacing.rules.join(' '),
        };
    }

    return { status: 'APPROVED', property: 'spacing', value, message: `Spacing ${value} aligns with the ${baseUnit}px grid.` };
}

function validateColor(style: DesignStyle, value: string): ValidationResult {
    // We validate against the token system but allow transparent, inherit, currentColor
    const specialValues = ['transparent', 'inherit', 'currentcolor', 'initial', 'unset'];
    if (specialValues.includes(value.toLowerCase())) {
        return { status: 'APPROVED', property: 'color', value, message: 'Special CSS value accepted.' };
    }

    const tokenValues = Object.values(style.colors).map(c => c.value.toLowerCase());
    if (!tokenValues.includes(value.toLowerCase())) {
        return {
            status: 'SUGGESTION',
            property: 'color',
            value,
            message: `Color "${value}" is not in the ${style.name} token system. Consider using a defined token for consistency.`,
        };
    }

    return { status: 'APPROVED', property: 'color', value, message: 'Color is from the defined token system.' };
}

function validateTransition(style: DesignStyle, value: string): ValidationResult {
    const numVal = parseFloat(value);
    if (isNaN(numVal)) return { status: 'APPROVED', property: 'transition', value, message: 'Non-numeric transition value accepted.' };

    const maxDuration = parseFloat(style.interactions.transitions.duration.verySlow);
    if (numVal > maxDuration + 200) {
        return {
            status: 'VIOLATION',
            property: 'transition-duration',
            value,
            message: `VIOLATION — ${value} exceeds the maximum transition duration for ${style.name}. Max: ${style.interactions.transitions.duration.verySlow}. ${style.interactions.animation.philosophy}`,
            correctValue: style.interactions.transitions.duration.normal,
            rationale: style.interactions.animation.philosophy,
        };
    }

    return { status: 'APPROVED', property: 'transition-duration', value, message: `Transition duration is within spec.` };
}

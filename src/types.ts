// DesignMind — Core Type Definitions

// ─── Color System ────────────────────────────────────────────────────────────

export interface ColorToken {
    value: string;
    role: string;
    usage: string;
}

export interface ColorSystem {
    primary: ColorToken;
    primaryHover: ColorToken;
    secondary: ColorToken;
    surface: ColorToken;
    surfaceAlt: ColorToken;
    background: ColorToken;
    foreground: ColorToken;
    muted: ColorToken;
    mutedForeground: ColorToken;
    border: ColorToken;
    borderHover: ColorToken;
    danger: ColorToken;
    success: ColorToken;
    warning: ColorToken;
    info: ColorToken;
    overlay: ColorToken;
    accent: ColorToken;
    accentForeground: ColorToken;
}

// ─── Typography ──────────────────────────────────────────────────────────────

export interface FontPairing {
    heading: string;
    body: string;
    mono: string;
    rationale: string;
}

export interface TypeScale {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
}

export interface TypographySpec {
    fonts: FontPairing;
    scale: TypeScale;
    weights: {
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
    };
    lineHeights: {
        tight: string;
        normal: string;
        relaxed: string;
        loose: string;
    };
    letterSpacing: {
        tight: string;
        normal: string;
        wide: string;
    };
    rules: string[];
}

// ─── Spacing ─────────────────────────────────────────────────────────────────

export interface SpacingSystem {
    baseUnit: string;
    baseValue: number;
    scale: number[];
    allowedMultiples: string;
    rules: string[];
}

// ─── Borders & Shadows ──────────────────────────────────────────────────────

export interface BorderShadowRules {
    radius: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
        default: string;
        rationale: string;
    };
    borderWidth: {
        none: string;
        thin: string;
        default: string;
        thick: string;
        heavy: string;
    };
    shadows: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        inner: string;
        rationale: string;
    };
    rules: string[];
}

// ─── Component Patterns ─────────────────────────────────────────────────────

export interface ComponentPattern {
    description: string;
    rules: string[];
    variants: string[];
}

export interface ComponentPatterns {
    button: ComponentPattern;
    card: ComponentPattern;
    table: ComponentPattern;
    navbar: ComponentPattern;
    sidebar: ComponentPattern;
    modal: ComponentPattern;
    form: ComponentPattern;
    badge: ComponentPattern;
    input: ComponentPattern;
    dropdown: ComponentPattern;
    tabs: ComponentPattern;
    toast: ComponentPattern;
}

// ─── Interaction Spec ───────────────────────────────────────────────────────

export interface InteractionSpec {
    philosophy: string;
    transitions: {
        duration: {
            instant: string;
            fast: string;
            normal: string;
            slow: string;
            verySlow: string;
        };
        easing: {
            default: string;
            in: string;
            out: string;
            inOut: string;
            bounce: string;
        };
    };
    hover: {
        behavior: string;
        rules: string[];
    };
    focus: {
        behavior: string;
        rules: string[];
    };
    loading: {
        pattern: string;
        rules: string[];
    };
    animation: {
        philosophy: string;
        rules: string[];
    };
}

// ─── Anti-Patterns ──────────────────────────────────────────────────────────

export interface AntiPattern {
    name: string;
    description: string;
    why: string;
    correction: string;
}

// ─── Component Hierarchy ────────────────────────────────────────────────────

export interface ComponentHierarchy {
    pageType: string;
    components: {
        name: string;
        priority: number;
        placement: string;
        responsiveBehavior: string;
    }[];
    layoutRules: string[];
    relationships: string[];
}

// ─── Full Design Style ──────────────────────────────────────────────────────

export interface DesignStyle {
    id: string;
    name: string;
    version: string;
    philosophy: {
        summary: string;
        emotionalIntent: string;
        functionalContract: string;
        bestFor: string[];
        notIdealFor: string[];
    };
    colors: ColorSystem;
    typography: TypographySpec;
    spacing: SpacingSystem;
    bordersShadows: BorderShadowRules;
    components: ComponentPatterns;
    interactions: InteractionSpec;
    antiPatterns: AntiPattern[];
    componentHierarchies: Record<string, ComponentHierarchy>;
    compatibleStyles: string[];
    blendingRules: string[];
}

// ─── Domain Profile ─────────────────────────────────────────────────────────

export interface DomainProfile {
    id: string;
    name: string;
    description: string;
    informationDensity: 'low' | 'medium' | 'high' | 'very-high';
    accessibilityRequirements: string[];
    visualPriority: string[];
    appropriateStyles: string[];
    inappropriateStyles: string[];
    constraints: string[];
    compliance: string[];
}

// ─── Intake & Recommendation ────────────────────────────────────────────────

export interface IntakeAnswers {
    endUser: string;
    interactionPattern: string;
    devices: string[];
    emotionalRegister: string;
    existingBrand: boolean;
    brandDescription?: string;
    projectDescription: string;
    industry?: string;
}

export interface StyleRecommendation {
    styleId: string;
    styleName: string;
    score: number;
    rationale: string;
    risk: string;
}

// ─── Session & Drift Tracking ───────────────────────────────────────────────

export interface DecisionEntry {
    component: string;
    property: string;
    value: string;
    timestamp: number;
}

export interface Session {
    id: string;
    styleId: string;
    decisions: DecisionEntry[];
    createdAt: number;
}

export interface DriftIssue {
    property: string;
    component: string;
    expectedPattern: string;
    actualValue: string;
    conflictsWith: string[];
    suggestion: string;
}

// ─── Validation ─────────────────────────────────────────────────────────────

export type ValidationStatus = 'APPROVED' | 'VIOLATION' | 'SUGGESTION';

export interface ValidationResult {
    status: ValidationStatus;
    property: string;
    value: string;
    message: string;
    correctValue?: string;
    rationale?: string;
}

// ─── Token Export ────────────────────────────────────────────────────────────

export type ExportFormat = 'css' | 'tailwind' | 'figma';

export interface TokenExport {
    format: ExportFormat;
    content: string;
}

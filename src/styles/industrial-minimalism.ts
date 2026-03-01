import { DesignStyle } from '../types.js';

const industrialMinimalism: DesignStyle = {
    id: 'industrial-minimalism',
    name: 'Industrial Minimalism',
    version: '1.0.0',
    philosophy: {
        summary: 'Precision-engineered design that treats the interface as a functional instrument. Every element exists because it serves a measurable purpose. Decoration is eliminated not for aesthetic preference but because it introduces noise into the signal.',
        emotionalIntent: 'Authority, precision, competence, clarity under pressure',
        functionalContract: 'The interface communicates that the system behind it is serious, reliable, and built for people who value efficiency over aesthetics. Form follows function absolutely.',
        bestFor: ['Operations dashboards', 'Logistics platforms', 'Data monitoring tools', 'Scientific instruments', 'Industrial control panels', 'Military/defense UIs'],
        notIdealFor: ['Consumer social apps', 'Creative portfolios', 'Children\'s platforms', 'Marketing landing pages', 'Entertainment apps'],
    },
    colors: {
        primary: { value: '#0A84FF', role: 'primary', usage: 'Actionable elements and data highlights. Used with restraint — primary color should occupy less than 10% of any viewport.' },
        primaryHover: { value: '#409CFF', role: 'primary-hover', usage: 'Slightly lighter on hover for feedback without noise.' },
        secondary: { value: '#5E5CE6', role: 'secondary', usage: 'Secondary data categories, supporting metrics. Never for decoration.' },
        surface: { value: '#1C1C1E', role: 'surface', usage: 'Card and panel backgrounds. Dark to reduce eye strain during prolonged monitoring.' },
        surfaceAlt: { value: '#2C2C2E', role: 'surface-alt', usage: 'Elevated surfaces, nested panels. Subtle elevation through brightness shift.' },
        background: { value: '#000000', role: 'background', usage: 'True black background. Maximum contrast for data readability.' },
        foreground: { value: '#F5F5F7', role: 'foreground', usage: 'Primary text. High-contrast white-gray against dark backgrounds.' },
        muted: { value: '#3A3A3C', role: 'muted', usage: 'Disabled elements, subtle dividers. Should be barely visible.' },
        mutedForeground: { value: '#98989D', role: 'muted-foreground', usage: 'Secondary labels, timestamps, metadata. Informational but not primary.' },
        border: { value: '#38383A', role: 'border', usage: 'Structural dividers between panels. Thin and functional — not decorative.' },
        borderHover: { value: '#48484A', role: 'border-hover', usage: 'Subtle hover indication on interactive containers.' },
        danger: { value: '#FF453A', role: 'danger', usage: 'Critical alerts, system errors, threshold violations. Demands immediate attention.' },
        success: { value: '#30D158', role: 'success', usage: 'Healthy status, completed operations, within-threshold values.' },
        warning: { value: '#FFD60A', role: 'warning', usage: 'Approaching thresholds, requires monitoring. Not yet critical.' },
        info: { value: '#64D2FF', role: 'info', usage: 'Informational indicators, neutral data highlights.' },
        overlay: { value: 'rgba(0, 0, 0, 0.7)', role: 'overlay', usage: 'Modal overlays. Darker than typical to maintain immersion.' },
        accent: { value: '#FF9F0A', role: 'accent', usage: 'Accent for key metrics, warnings, attention-requiring data points.' },
        accentForeground: { value: '#000000', role: 'accent-foreground', usage: 'Text on accent backgrounds.' },
    },
    typography: {
        fonts: {
            heading: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
            body: "'Inter', 'SF Pro Text', -apple-system, sans-serif",
            mono: "'SF Mono', 'JetBrains Mono', 'Fira Code', monospace",
            rationale: 'Inter provides mechanical precision with excellent legibility at all sizes. Monospace is used extensively for data values to ensure alignment and scanability. No decorative fonts — every character must be legible under stress.',
        },
        scale: { xs: '0.6875rem', sm: '0.75rem', base: '0.8125rem', lg: '0.9375rem', xl: '1.0625rem', '2xl': '1.25rem', '3xl': '1.5rem', '4xl': '2rem', '5xl': '2.5rem' },
        weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 },
        lineHeights: { tight: '1.2', normal: '1.4', relaxed: '1.6', loose: '1.8' },
        letterSpacing: { tight: '-0.01em', normal: '0', wide: '0.08em' },
        rules: [
            'Data values MUST use monospace font for columnar alignment',
            'Labels use wide letter-spacing (0.08em) and uppercase for scanability',
            'Body text stays small (13px base) — this is an information-dense environment',
            'Headings are medium weight (500), not bold — authority comes from spacing, not weight',
            'Never use italic — it reduces scanability in data-heavy contexts',
        ],
    },
    spacing: {
        baseUnit: '4px',
        baseValue: 4,
        scale: [0, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48],
        allowedMultiples: 'Multiples of 4px. Tight scale — maximum density without collision.',
        rules: [
            'Component padding: 8px-16px — space is premium in data-dense layouts',
            'Panel gaps: 4px-8px — tight gaps maximize data visibility',
            'Section spacing: 24px-32px — clear separation without waste',
            'Data cell padding: 8px 12px — uniform for scanability',
            'Every pixel must justify its existence — generous spacing is wasteful here',
        ],
    },
    bordersShadows: {
        radius: {
            none: '0px', sm: '2px', md: '4px', lg: '6px', xl: '8px', full: '9999px',
            default: '2px',
            rationale: 'Maximum radius is 2px for standard elements. Sharp edges communicate precision and seriousness. Rounded corners introduce softness that contradicts the industrial character.',
        },
        borderWidth: { none: '0px', thin: '1px', default: '1px', thick: '2px', heavy: '3px' },
        shadows: {
            none: 'none', sm: '0 1px 2px rgba(0,0,0,0.3)', md: '0 2px 4px rgba(0,0,0,0.3)', lg: '0 4px 8px rgba(0,0,0,0.3)', xl: '0 8px 16px rgba(0,0,0,0.4)', inner: 'inset 0 1px 2px rgba(0,0,0,0.2)',
            rationale: 'Shadows are minimal and dark. They create functional depth separation between panels, not decorative effect. On dark backgrounds, shadows are barely visible — elevation is communicated through background brightness shifts.',
        },
        rules: [
            'Borders are structural dividers — 1px, low-contrast. They organize, not decorate.',
            'Border-radius MUST NOT exceed 2px on functional elements. 4px is acceptable only for pill-shaped status badges.',
            'Rounded corners at 8px violate this style. Sharp edges reinforce precision and authority.',
            'Shadows are used sparingly — prefer background brightness differences for elevation.',
            'Focus rings: 1px solid primary color with 2px offset.',
        ],
    },
    components: {
        button: {
            description: 'Compact, utilitarian buttons that prioritize clarity over presence.',
            rules: ['Padding: 6px 16px', 'Border: 1px solid border-color', 'Border-radius: 2px', 'Text: small, medium weight, no uppercase unless icon-only', 'Hover: background brightness shift, no shadow or translate', 'Active: darker background, 1px inset shadow'],
            variants: ['primary (primary bg, white text)', 'secondary (surface-alt bg)', 'ghost (transparent, text only)', 'danger (danger bg)', 'icon-only (square, centered icon)'],
        },
        card: {
            description: 'Data panels with minimal chrome. The content IS the interface.',
            rules: ['Border: 1px solid border-color', 'Border-radius: 2px', 'Background: surface color', 'Padding: 16px', 'No shadow — use border for definition', 'Header area: label text, uppercase, wide letter-spacing'],
            variants: ['metric (single KPI display)', 'chart (visualization container)', 'table (data grid container)', 'status (green/yellow/red indicator)'],
        },
        table: {
            description: 'Dense data tables optimized for scanability and comparison.',
            rules: ['Cell padding: 8px 12px', 'Header: uppercase, wide letter-spacing, border-bottom 1px', 'Row borders: 1px solid, low-contrast', 'Data values: monospace font', 'Sortable columns: subtle arrow indicator', 'No zebra striping — use hover highlight'],
            variants: ['compact (6px padding)', 'default (8px padding)', 'comfortable (12px padding)'],
        },
        navbar: {
            description: 'Minimal top bar with system status integration.',
            rules: ['Height: 48px max', 'Background: surface color', 'Bottom border: 1px', 'Items: small text, regular weight', 'System status indicators in right section'],
            variants: ['default', 'with-breadcrumbs', 'with-status-bar'],
        },
        sidebar: {
            description: 'Collapsible navigation panel with category grouping.',
            rules: ['Width: 240px expanded, 48px collapsed', 'Background: background or surface-alt', 'Right border: 1px', 'Nav items: small, medium weight', 'Active: left accent border (2px primary)', 'Category headers: uppercase, muted, wide tracking'],
            variants: ['expanded', 'collapsed', 'mini (icons only)'],
        },
        modal: {
            description: 'Focused dialog for confirmations and data entry.',
            rules: ['Border: 1px solid border-color', 'Border-radius: 2px', 'Background: surface color', 'Max-width: 480px', 'Overlay: heavy dark overlay (0.7 opacity)', 'Header: medium weight, no uppercase'],
            variants: ['confirmation', 'form', 'data-display', 'alert'],
        },
        form: {
            description: 'Compact form layouts for settings and data input.',
            rules: ['Labels: small, uppercase, wide tracking, above input', 'Inputs: 1px border, 2px radius, surface-alt background', 'Focus: primary color border', 'Errors: danger color border + small error text below', 'Spacing: 16px between form groups'],
            variants: ['vertical', 'horizontal', 'inline', 'compact'],
        },
        badge: {
            description: 'Status indicators and categorical tags.',
            rules: ['Padding: 2px 8px', 'Font-size: xs', 'Uppercase, wide tracking', 'Border-radius: 2px or full for pills', 'Background: semi-transparent status color', 'Border: 1px solid matching status color'],
            variants: ['status (dot + text)', 'count (numeric)', 'tag (categorical)', 'priority (colored)'],
        },
        input: {
            description: 'Data entry fields optimized for precision.',
            rules: ['Border: 1px solid border-color', 'Background: surface-alt or transparent', 'Padding: 6px 12px', 'Border-radius: 2px', 'Font: monospace for numeric inputs', 'Focus: primary border, no shadow'],
            variants: ['text', 'number', 'search', 'textarea', 'code'],
        },
        dropdown: {
            description: 'Compact selection menus.',
            rules: ['Trigger: input styling', 'Menu: 1px border, surface background, 2px radius', 'Items: 8px 12px padding', 'Active: primary background at 10% opacity', 'No shadows on menu — border only'],
            variants: ['select', 'multi-select', 'command-menu', 'filter'],
        },
        tabs: {
            description: 'Panel switching with minimal visual weight.',
            rules: ['Active: primary color bottom border (2px)', 'Inactive: muted text, no border', 'Container: 1px bottom border', 'Padding: 8px 16px', 'Text: small, medium weight'],
            variants: ['underline', 'segment (background switch)', 'vertical'],
        },
        toast: {
            description: 'System notifications that don\'t disrupt workflow.',
            rules: ['Border: 1px solid border-color', 'Background: surface-alt', 'Border-radius: 2px', 'Left border: 3px solid status color', 'Position: top-right, fixed', 'Auto-dismiss: 5 seconds'],
            variants: ['info', 'success', 'warning', 'error', 'system'],
        },
    },
    interactions: {
        philosophy: 'Interactions are invisible. The best feedback is instant and unobtrusive. The user should never wait for an animation to complete before taking their next action. Speed is respect.',
        transitions: {
            duration: { instant: '0ms', fast: '80ms', normal: '120ms', slow: '200ms', verySlow: '300ms' },
            easing: { default: 'ease-out', in: 'ease-in', out: 'ease-out', inOut: 'ease-in-out', bounce: 'ease-out' },
        },
        hover: {
            behavior: 'Subtle brightness shift on background. No transforms, no shadows appearing, no scale changes.',
            rules: ['Background brightness shift only (lighten 5-10%)', 'Border color may shift to higher contrast', 'Cursor change is the primary hover indicator', 'Never delay or animate the hover state entrance'],
        },
        focus: {
            behavior: 'Thin, visible focus ring using primary color.',
            rules: ['1px solid primary color', '2px offset from element', 'Must be visible against dark backgrounds', 'Never remove focus indicators for keyboard accessibility'],
        },
        loading: {
            pattern: 'Minimal spinners and progress indicators.',
            rules: ['Thin circular spinner (2px stroke)', 'Linear progress bars: 2px height, no border-radius', 'Skeleton screens: subtle pulse on surface-alt color', 'Never block the entire viewport for loading'],
        },
        animation: {
            philosophy: 'Animation is a liability. Every millisecond of animation is a millisecond the user is waiting instead of working.',
            rules: ['Maximum duration: 200ms for any UI animation', 'No entrance/exit animations for panels', 'Charts may animate on first load only (300ms max)', 'Tooltips appear instantly, no fade', 'Page transitions: instant, no animation'],
        },
    },
    antiPatterns: [
        { name: 'Rounded Corners > 2px', description: 'Using border-radius above 2px on cards, panels, or buttons', why: 'Rounded corners introduce friendliness and approachability — qualities that contradict the precision-focused industrial aesthetic. A 2px radius is the maximum before corners start communicating "soft."', correction: 'Cap border-radius at 2px. Use 0px for maximum effect.' },
        { name: 'Decorative Shadows', description: 'Large, colorful, or blurred shadows for aesthetic effect', why: 'Shadows in this style exist only for depth separation. They are functional. A large, soft shadow is a decorative choice that wastes visual energy.', correction: 'Minimal shadows or no shadows. Use background brightness for elevation.' },
        { name: 'Large, Bold Typography', description: 'Using oversized headings (> 2rem) or extra-bold weights', why: 'This is not a display-oriented style. Large text wastes information-dense real estate. Authority comes from systematic layout, not type size.', correction: 'Keep headings under 2rem. Use spacing and structure, not scale, for hierarchy.' },
        { name: 'Color for Decoration', description: 'Using primary/accent colors for backgrounds, borders, or fills without functional purpose', why: 'Color is a signal. In data-heavy environments, decorative color competes with meaningful data colors. Every use of color must carry information.', correction: 'Reserve color for status (success/warning/danger), actions (primary), and data highlights.' },
        { name: 'Animated Entrances', description: 'Fade-in, slide-in, or bounce-in animations on page load or navigation', why: 'Animations delay user productivity. In operational contexts, every millisecond matters.', correction: 'Elements appear instantly. Save animation budget for data changes that need attention.' },
        { name: 'Generous Whitespace', description: 'Adding excessive padding or margins between elements', why: 'Space is information real estate. Wasting it on visual breathing room means the user sees less data per viewport.', correction: 'Use the minimum spacing that maintains scanability (4px-16px ranges).' },
    ],
    componentHierarchies: {
        dashboard: {
            pageType: 'dashboard',
            components: [
                { name: 'status-bar', priority: 1, placement: 'top, full-width, fixed', responsiveBehavior: 'Status indicators collapse to icons on mobile' },
                { name: 'sidebar-nav', priority: 2, placement: 'left, fixed-width (240px)', responsiveBehavior: 'Collapses to 48px icon-only mode' },
                { name: 'metric-cards', priority: 3, placement: 'top of content area, horizontal row', responsiveBehavior: '2-column grid on tablet, single column on mobile' },
                { name: 'primary-chart', priority: 4, placement: 'center of content area, full-width', responsiveBehavior: 'Reduces height, simplifies axis labels' },
                { name: 'data-table', priority: 5, placement: 'below chart, full-width', responsiveBehavior: 'Horizontal scroll with fixed first column' },
                { name: 'alert-feed', priority: 6, placement: 'right sidebar or below table', responsiveBehavior: 'Moves to bottom, collapses to count indicator' },
            ],
            layoutRules: ['Grid gap: 4px-8px between panels', 'No section headings — panel labels serve as headers', 'Maximum 4-column grid for metric cards'],
            relationships: ['Metric cards provide summary of data shown in chart and table', 'Chart selection filters table data', 'Alert feed references metrics that triggered alerts'],
        },
        landing: {
            pageType: 'landing',
            components: [
                { name: 'hero-metric', priority: 1, placement: 'top, centered', responsiveBehavior: 'Maintains centered layout' },
                { name: 'feature-grid', priority: 2, placement: 'below hero', responsiveBehavior: '3-column → 1-column' },
                { name: 'technical-specs', priority: 3, placement: 'below features', responsiveBehavior: 'Table becomes vertical key-value list' },
                { name: 'cta-section', priority: 4, placement: 'bottom', responsiveBehavior: 'Full-width CTA' },
            ],
            layoutRules: ['Minimal hero — data speaks, not marketing copy', 'Section gap: 32px', 'Content max-width: 960px'],
            relationships: ['Hero metric proves the value proposition', 'Features explain how the metric is achieved'],
        },
    },
    compatibleStyles: ['dark-precision', 'clean-utility'],
    blendingRules: [
        'Industrial minimalism blends naturally with dark-precision — both share dark palettes and data-dense layouts',
        'Can adopt clean-utility typography rules while maintaining industrial spacing and borders',
        'When blending, the darker palette should dominate — industrial minimalism does not work on light backgrounds',
    ],
};

export default industrialMinimalism;

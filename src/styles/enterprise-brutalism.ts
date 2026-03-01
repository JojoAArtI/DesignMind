import { DesignStyle } from '../types.js';

const enterpriseBrutalism: DesignStyle = {
    id: 'enterprise-brutalism',
    name: 'Enterprise Brutalism',
    version: '1.0.0',
    philosophy: {
        summary: 'The structural confidence of brutalism applied to enterprise software. Heavy visual anchoring, multi-panel layouts, and unapologetically thick borders — but with the restraint and muted palette that corporate environments demand.',
        emotionalIntent: 'Institutional authority, structural confidence, unshakable reliability',
        functionalContract: 'The interface communicates permanence and seriousness. It says: this system was built to last, built by people who know what they\'re doing, and it won\'t break when things get complex.',
        bestFor: ['Enterprise SaaS platforms', 'Internal tools', 'Admin dashboards', 'CRM systems', 'Project management tools', 'Complex multi-panel applications'],
        notIdealFor: ['Consumer mobile apps', 'Creative portfolios', 'Social platforms', 'Children\'s products', 'Marketing microsites'],
    },
    colors: {
        primary: { value: '#2563EB', role: 'primary', usage: 'Primary actions and key navigation elements. A professional blue that communicates trust and system-level authority.' },
        primaryHover: { value: '#1D4ED8', role: 'primary-hover', usage: 'Darker blue on hover for clear interactive feedback.' },
        secondary: { value: '#7C3AED', role: 'secondary', usage: 'Secondary actions, feature highlights, premium indicators.' },
        surface: { value: '#FFFFFF', role: 'surface', usage: 'Card and panel backgrounds. Pure white for maximum border contrast.' },
        surfaceAlt: { value: '#F8FAFC', role: 'surface-alt', usage: 'Alternate surface for sidebars, nested panels, table headers.' },
        background: { value: '#F1F5F9', role: 'background', usage: 'Page background. Cool gray that creates depth behind white panels.' },
        foreground: { value: '#0F172A', role: 'foreground', usage: 'Primary text. Near-black for authority and readability.' },
        muted: { value: '#E2E8F0', role: 'muted', usage: 'Disabled states, section dividers, inactive elements.' },
        mutedForeground: { value: '#64748B', role: 'muted-foreground', usage: 'Secondary text, metadata, helper text.' },
        border: { value: '#1E293B', role: 'border', usage: 'Primary structural borders. Dark and deliberate — these define the architecture of the interface.' },
        borderHover: { value: '#0F172A', role: 'border-hover', usage: 'Near-black on hover for interactive container edges.' },
        danger: { value: '#DC2626', role: 'danger', usage: 'Destructive actions, error states, critical alerts.' },
        success: { value: '#16A34A', role: 'success', usage: 'Success confirmations, healthy statuses, completed items.' },
        warning: { value: '#D97706', role: 'warning', usage: 'Warnings, attention-needed states, approaching limits.' },
        info: { value: '#2563EB', role: 'info', usage: 'Informational callouts, tips, neutral status.' },
        overlay: { value: 'rgba(15, 23, 42, 0.6)', role: 'overlay', usage: 'Modal overlays using the foreground color at 60% opacity.' },
        accent: { value: '#DBEAFE', role: 'accent', usage: 'Selected states, active rows, subtle highlights. Light blue that reads as "selected" without screaming.' },
        accentForeground: { value: '#1E40AF', role: 'accent-foreground', usage: 'Text on accent backgrounds. Darker blue for contrast.' },
    },
    typography: {
        fonts: {
            heading: "'Inter', 'Segoe UI', system-ui, sans-serif",
            body: "'Inter', 'Segoe UI', system-ui, sans-serif",
            mono: "'JetBrains Mono', 'Cascadia Code', 'Consolas', monospace",
            rationale: 'Single font family (Inter) maintains corporate consistency. The uniformity is intentional — enterprise brutalism derives character from structure and weight, not font variety.',
        },
        scale: { xs: '0.75rem', sm: '0.8125rem', base: '0.875rem', lg: '1rem', xl: '1.125rem', '2xl': '1.375rem', '3xl': '1.75rem', '4xl': '2.25rem', '5xl': '3rem' },
        weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 },
        lineHeights: { tight: '1.25', normal: '1.5', relaxed: '1.625', loose: '1.75' },
        letterSpacing: { tight: '-0.01em', normal: '0', wide: '0.05em' },
        rules: [
            'Headings: semibold (600) — bold enough to anchor but not shout',
            'Body: regular (400) for content, medium (500) for emphasis',
            'Label text: uppercase with wide tracking for scanability',
            'Data in tables uses the base size — no size variation within data grids',
            'System fonts as fallback to ensure cross-platform consistency',
        ],
    },
    spacing: {
        baseUnit: '4px',
        baseValue: 4,
        scale: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64],
        allowedMultiples: 'Multiples of 4px. Consistent grid throughout.',
        rules: [
            'Panel padding: 20px-24px — comfortable but not extravagant',
            'Component gaps: 12px-16px within panels',
            'Panel gaps: 16px-24px between major sections',
            'Page margins: 24px-32px',
            'Spacing should feel systematic — noticeable consistency across every screen',
        ],
    },
    bordersShadows: {
        radius: {
            none: '0px', sm: '2px', md: '4px', lg: '6px', xl: '8px', full: '9999px',
            default: '2px',
            rationale: 'Minimal rounding (2px default) softens edges just enough for enterprise acceptability while maintaining the structural character. Never round beyond 6px on functional elements.',
        },
        borderWidth: { none: '0px', thin: '1px', default: '2px', thick: '3px', heavy: '4px' },
        shadows: {
            none: 'none', sm: '0 1px 3px rgba(0,0,0,0.12)', md: '0 2px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)', lg: '0 4px 6px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)', xl: '0 10px 15px rgba(0,0,0,0.12), 0 4px 6px rgba(0,0,0,0.08)', inner: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            rationale: 'Shadows are subtle and functional — they separate layers. The primary elevation mechanism is borders, not shadows. Shadows support but never replace borders.',
        },
        rules: [
            'All panels MUST have visible borders (minimum 2px)',
            'Primary panels and cards use 2-3px borders in dark color',
            'Nested elements use 1px borders in muted color for hierarchy',
            'Shadows are optional and subtle — borders carry the structural weight',
            'Focus states use 2px outline in primary color',
            'Active/selected containers get thicker borders or left accent borders',
        ],
    },
    components: {
        button: {
            description: 'Sturdy, professional buttons with visible borders.',
            rules: ['Padding: 8px 20px', 'Border: 2px solid', 'Border-radius: 2px', 'Font: medium weight, no uppercase for text buttons', 'Hover: background darkens, border may thicken', 'Active: darker shade, slight inset feel'],
            variants: ['primary (blue bg, white text, dark border)', 'secondary (white bg, dark border)', 'outline (transparent bg, dark border)', 'danger (red bg, dark border)', 'ghost (no border, text only)'],
        },
        card: {
            description: 'Bordered panels that form the structural backbone of the interface.',
            rules: ['Border: 2px solid dark', 'Border-radius: 2px', 'Background: white', 'Padding: 20px-24px', 'Header section with border-bottom for separation', 'No drop shadow by default — border is sufficient'],
            variants: ['default', 'with-header (bordered header section)', 'metric (centered KPI)', 'interactive (hover state)'],
        },
        table: {
            description: 'Structured data grids with heavy borders.',
            rules: ['Outer border: 2px solid dark', 'Cell borders: 1px solid muted', 'Header: semibold, surface-alt background, uppercase small text', 'Row hover: accent background', 'Selected row: left accent border (3px primary)', 'Sortable: clear directional indicator'],
            variants: ['bordered', 'compact', 'comfortable', 'striped'],
        },
        navbar: {
            description: 'Enterprise top navigation with structural weight.',
            rules: ['Height: 56px', 'Background: white or foreground (dark mode)', 'Bottom border: 3px solid dark', 'Logo area with right border separator', 'Nav items: medium weight, consistent spacing'],
            variants: ['light', 'dark', 'with-subnav'],
        },
        sidebar: {
            description: 'Multi-level navigation sidebar.',
            rules: ['Width: 260px', 'Background: surface-alt', 'Right border: 2px solid dark', 'Section headers: uppercase, muted, small', 'Active item: left border 3px primary + accent background', 'Hover: muted background'],
            variants: ['expanded', 'collapsed', 'with-submenu'],
        },
        modal: {
            description: 'Professional dialog with enterprise chrome.',
            rules: ['Border: 2px solid dark', 'Border-radius: 2px', 'Background: white', 'Header: border-bottom, semibold title', 'Footer: border-top, right-aligned actions', 'Max-width: 560px'],
            variants: ['confirmation', 'form', 'destructive', 'information'],
        },
        form: {
            description: 'Structured form layouts with clear labels.',
            rules: ['Labels: small, medium weight, above input', 'Input border: 2px solid muted, 2px radius', 'Focus: border color changes to primary', 'Required indicator: red asterisk', 'Error: danger border + error text below', 'Group spacing: 20px'],
            variants: ['vertical', 'horizontal', 'sectioned (with fieldset borders)'],
        },
        badge: {
            description: 'Status and categorical indicators.',
            rules: ['Border: 1px solid matching color', 'Padding: 2px 10px', 'Font: xs, medium weight', 'Border-radius: 2px', 'Background: 10% opacity version of the badge color'],
            variants: ['status', 'priority', 'role', 'count'],
        },
        input: {
            description: 'Professional text inputs.',
            rules: ['Border: 2px solid muted', 'Border-radius: 2px', 'Padding: 8px 12px', 'Background: white', 'Focus: primary border', 'Disabled: muted background, 50% opacity'],
            variants: ['default', 'with-addon', 'with-icon', 'textarea'],
        },
        dropdown: {
            description: 'Enterprise select menus.',
            rules: ['Trigger: matches input styling', 'Menu: 2px border, white bg, subtle shadow', 'Items: 8px 16px padding', 'Active: accent background', 'Group headers: small, muted, uppercase'],
            variants: ['single-select', 'multi-select', 'grouped', 'searchable'],
        },
        tabs: {
            description: 'Section navigation with structural emphasis.',
            rules: ['Active tab: 3px bottom border in primary', 'Inactive: muted text', 'Container: 2px bottom border', 'Padding: 10px 20px', 'Font: medium weight'],
            variants: ['underline', 'boxed (bordered active tab)', 'segment'],
        },
        toast: {
            description: 'Enterprise notification system.',
            rules: ['Border: 2px solid dark', 'Border-radius: 2px', 'Background: white', 'Left border: 4px status color', 'Title: semibold', 'Body: regular, muted-foreground'],
            variants: ['success', 'error', 'warning', 'info'],
        },
    },
    interactions: {
        philosophy: 'Professional and reliable. Interactions should feel like enterprise software — no surprises, no flourishes, just consistent, predictable behavior that users can rely on across thousands of interactions.',
        transitions: {
            duration: { instant: '0ms', fast: '100ms', normal: '150ms', slow: '250ms', verySlow: '350ms' },
            easing: { default: 'ease-in-out', in: 'ease-in', out: 'ease-out', inOut: 'ease-in-out', bounce: 'ease-out' },
        },
        hover: {
            behavior: 'Background color shifts and border color changes. Restrained but clear.',
            rules: ['Background lightens or darkens (5-10%)', 'Border color may sharpen on hover', 'Cursor changes to pointer for interactive elements', 'No transforms or shadows appearing'],
        },
        focus: {
            behavior: 'Visible focus ring matching primary color.',
            rules: ['2px outline in primary color', '2px offset', 'Must work on all backgrounds', 'Never suppress for keyboard users'],
        },
        loading: {
            pattern: 'Skeleton screens and progress indicators.',
            rules: ['Skeleton: muted color blocks, subtle pulse animation', 'Progress bars: 4px height, bordered, primary color fill', 'Spinners: simple circular, primary color, 2px stroke', 'Full-page loading: centered spinner with text status'],
        },
        animation: {
            philosophy: 'Animations exist to confirm actions, not to entertain. They should be invisible when they work and noticeable when they\'re absent.',
            rules: ['Keep under 250ms for UI transitions', 'No entrance animations for page content', 'Dropdown/modal: subtle slide or scale from origin', 'Progress animations may be longer to communicate ongoing process', 'Charts animate on first render only'],
        },
    },
    antiPatterns: [
        { name: 'Playful Colors', description: 'Using saturated pinks, oranges, or pastels in primary UI', why: 'Enterprise brutalism derives authority from restraint. Playful colors undermine the institutional character and make the tool feel unserious.', correction: 'Stick to the blue/gray/slate palette. Color enters only through status indicators and data visualizations.' },
        { name: 'Thin Borders', description: 'Using 1px borders on primary containers', why: 'The whole point of this style is structural weight. 1px borders make panels look tentative. The 2px minimum communicates that these structures were placed with intention.', correction: '2px minimum for primary containers. 1px only for internal dividers within an already-bordered container.' },
        { name: 'Excessive Animation', description: 'Parallax, entrance animations, micro-interactions on every element', why: 'Enterprise users interact with the tool for 8+ hours. Animations that delight on first use become distracting by the hundredth.', correction: 'Remove all decorative animations. Keep only functional feedback (loading, state changes).' },
        { name: 'Rounded Corners > 6px', description: 'Using large border-radius on panels and cards', why: 'Large rounding softens the structural character. Enterprise brutalism is about visible architecture, and round shapes dissolve architectural edges.', correction: 'Cap at 2px for standard elements. 4-6px only for special pill shapes and avatars.' },
        { name: 'Decorative Icons', description: 'Large illustrations, decorative icons, or emoji in the UI', why: 'Every visual element must serve a functional purpose. Decorative elements waste viewport space and compete with data.', correction: 'Icons are 16-20px, functional, and consistent. No illustrations in the main UI.' },
    ],
    componentHierarchies: {
        dashboard: {
            pageType: 'dashboard',
            components: [
                { name: 'top-nav', priority: 1, placement: 'top, full-width, fixed', responsiveBehavior: 'Hamburger menu on mobile' },
                { name: 'sidebar', priority: 2, placement: 'left, fixed 260px', responsiveBehavior: 'Collapses to overlay drawer' },
                { name: 'page-header', priority: 3, placement: 'top of content, includes breadcrumbs and actions', responsiveBehavior: 'Actions move to dropdown menu' },
                { name: 'metric-cards', priority: 4, placement: '4-column grid below header', responsiveBehavior: '2-column on tablet, 1 on mobile' },
                { name: 'primary-content', priority: 5, placement: 'main area below metrics', responsiveBehavior: 'Full-width, vertical stacking' },
                { name: 'secondary-panel', priority: 6, placement: 'right sidebar or below primary', responsiveBehavior: 'Moves below primary content' },
            ],
            layoutRules: ['16px grid gap', 'Content max-width: 1400px', 'Sidebar + content layout with clear border separation'],
            relationships: ['Page header provides context for metrics below', 'Metric cards summarize primary content data', 'Secondary panel provides details/filters for primary'],
        },
        landing: {
            pageType: 'landing',
            components: [
                { name: 'enterprise-hero', priority: 1, placement: 'top, full-width', responsiveBehavior: 'Stack text and CTA' },
                { name: 'social-proof', priority: 2, placement: 'below hero', responsiveBehavior: 'Horizontal scroll logos' },
                { name: 'feature-panels', priority: 3, placement: 'bordered panels in 2-column grid', responsiveBehavior: 'Single column on mobile' },
                { name: 'pricing-table', priority: 4, placement: 'below features', responsiveBehavior: 'Cards stack vertically' },
                { name: 'cta-section', priority: 5, placement: 'bottom', responsiveBehavior: 'Full-width CTA bar' },
            ],
            layoutRules: ['Hero: professional, not flashy — product screenshot as hero image', 'Section gap: 48px', 'All panels bordered consistently'],
            relationships: ['Hero establishes value proposition', 'Social proof validates', 'Features explain', 'Pricing converts'],
        },
    },
    compatibleStyles: ['neo-brutalism', 'clean-utility', 'industrial-minimalism'],
    blendingRules: [
        'Enterprise brutalism and clean-utility can blend by maintaining enterprise borders with clean-utility spacing rules',
        'Colors from industrial-minimalism can be adopted for dark-mode enterprise brutalism',
        'Border conventions are the key unifying element — maintain 2px+ borders when blending',
    ],
};

export default enterpriseBrutalism;

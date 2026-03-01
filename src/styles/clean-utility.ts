import { DesignStyle } from '../types.js';

const cleanUtility: DesignStyle = {
    id: 'clean-utility',
    name: 'Clean Utility',
    version: '1.0.0',
    philosophy: {
        summary: 'Maximized clarity through systematic restraint. Every element is stripped to its functional essence. The design disappears so the content can work. Clean utility is not minimalism for aesthetic reasons — it is minimalism for performance reasons.',
        emotionalIntent: 'Calm efficiency, trustworthy clarity, invisible competence',
        functionalContract: 'The interface should feel so natural that users forget it exists. No cognitive overhead, no visual puzzles, no style getting in the way of the task.',
        bestFor: ['Productivity tools', 'Documentation sites', 'Admin panels', 'Settings interfaces', 'API dashboards', 'Internal tools', 'Accessibility-critical apps'],
        notIdealFor: ['Brand-heavy marketing sites', 'Creative portfolios', 'Gaming platforms', 'Luxury products', 'Entertainment apps'],
    },
    colors: {
        primary: { value: '#2563EB', role: 'primary', usage: 'Primary actions and interactive elements. Standard, accessible blue.' },
        primaryHover: { value: '#1D4ED8', role: 'primary-hover', usage: 'Darker blue on hover.' },
        secondary: { value: '#6366F1', role: 'secondary', usage: 'Secondary actions, linked features.' },
        surface: { value: '#FFFFFF', role: 'surface', usage: 'Card and container backgrounds.' },
        surfaceAlt: { value: '#F9FAFB', role: 'surface-alt', usage: 'Alternate backgrounds for sections, sidebars, table headers.' },
        background: { value: '#FFFFFF', role: 'background', usage: 'Page background. Pure white for maximum cleanliness.' },
        foreground: { value: '#111827', role: 'foreground', usage: 'Primary text. High contrast for readability.' },
        muted: { value: '#F3F4F6', role: 'muted', usage: 'Disabled states, backgrounds for code blocks, secondary sections.' },
        mutedForeground: { value: '#6B7280', role: 'muted-foreground', usage: 'Secondary text, placeholders, captions.' },
        border: { value: '#E5E7EB', role: 'border', usage: 'Subtle structural borders. Present but not prominent.' },
        borderHover: { value: '#D1D5DB', role: 'border-hover', usage: 'Slightly more visible on hover.' },
        danger: { value: '#DC2626', role: 'danger', usage: 'Error states, destructive actions.' },
        success: { value: '#16A34A', role: 'success', usage: 'Success confirmations, positive indicators.' },
        warning: { value: '#D97706', role: 'warning', usage: 'Warnings, caution states.' },
        info: { value: '#2563EB', role: 'info', usage: 'Informational callouts.' },
        overlay: { value: 'rgba(0, 0, 0, 0.4)', role: 'overlay', usage: 'Modal backdrops. Light enough to maintain context.' },
        accent: { value: '#EEF2FF', role: 'accent', usage: 'Selected states, active backgrounds, subtle highlights.' },
        accentForeground: { value: '#3730A3', role: 'accent-foreground', usage: 'Text on accent backgrounds.' },
    },
    typography: {
        fonts: {
            heading: "-apple-system, 'Segoe UI', 'Inter', sans-serif",
            body: "-apple-system, 'Segoe UI', 'Inter', sans-serif",
            mono: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
            rationale: 'System font stack for instant loading and native feel. The font should never be a conscious design element — it should be invisible, like air.',
        },
        scale: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem' },
        weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 },
        lineHeights: { tight: '1.25', normal: '1.5', relaxed: '1.625', loose: '2' },
        letterSpacing: { tight: '-0.025em', normal: '0', wide: '0.025em' },
        rules: [
            'Body text: regular weight, 1rem, 1.5 line-height — the golden standard',
            'Headings: semibold (600) — bold enough to create hierarchy, not enough to dominate',
            'Use tight letter-spacing on large headings only',
            'Never use uppercase for body content — reserve for micro-labels only',
            'Maximum 3 sizes visible at any time to maintain visual calm',
        ],
    },
    spacing: {
        baseUnit: '4px',
        baseValue: 4,
        scale: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96],
        allowedMultiples: 'Multiples of 4px. Generous spacing allowed for readability.',
        rules: [
            'Component padding: 16px-24px — comfortable and readable',
            'Element gaps: 8px-16px — consistent breathing room',
            'Section spacing: 48px-64px — clear visual separation',
            'Page max-width: 768px for text-heavy content, 1200px for dashboards',
            'Whitespace is the primary design element — use it generously',
        ],
    },
    bordersShadows: {
        radius: {
            none: '0px', sm: '4px', md: '6px', lg: '8px', xl: '12px', full: '9999px',
            default: '6px',
            rationale: 'Moderate rounding (6px) creates a friendly but professional feel. Not sharp enough to feel cold, not round enough to feel playful.',
        },
        borderWidth: { none: '0px', thin: '1px', default: '1px', thick: '2px', heavy: '3px' },
        shadows: {
            none: 'none', sm: '0 1px 2px rgba(0,0,0,0.05)', md: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)', lg: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)', xl: '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)', inner: 'inset 0 2px 4px rgba(0,0,0,0.06)',
            rationale: 'Extremely subtle shadows. They exist for functional depth separation but should be nearly imperceptible. The goal is to never draw attention to shadows.',
        },
        rules: [
            'Borders are subtle — 1px, low-contrast gray',
            'Shadows are whisper-soft — the user should not notice them',
            'Cards can use either border OR shadow, rarely both',
            'Focus rings: 2px solid primary with 2px offset',
            'Active states: subtle shadow increase or border color change',
        ],
    },
    components: {
        button: {
            description: 'Clean, understated buttons that communicate function without noise.',
            rules: ['Padding: 8px 16px', 'Border: 1px solid', 'Border-radius: 6px', 'Text: medium weight, natural case', 'Hover: slight background darken', 'Active: subtle inset shadow', 'Minimum height: 36px for touch targets'],
            variants: ['primary (blue bg, white text)', 'secondary (white bg, gray border)', 'ghost (no bg, no border)', 'link (text only, primary color)', 'danger (red text or bg)'],
        },
        card: {
            description: 'Clean containers with minimal chrome.',
            rules: ['Border: 1px solid border-color', 'Border-radius: 6px', 'Background: white', 'Padding: 20px', 'Optional subtle shadow', 'No decorative headers — content starts immediately'],
            variants: ['bordered', 'shadow', 'flat (no border, background only)', 'interactive (hover state)'],
        },
        table: {
            description: 'Clean data tables with minimal visual weight.',
            rules: ['Header: medium weight, muted background', 'Borders: bottom only on rows (1px)', 'Cell padding: 12px 16px', 'No outer border', 'Row hover: subtle muted background', 'Sorted column: subtle indicator'],
            variants: ['simple', 'striped', 'bordered', 'compact'],
        },
        navbar: {
            description: 'Minimal top navigation.',
            rules: ['Height: 48-56px', 'Background: white', 'Bottom border: 1px', 'Items: regular weight, natural case', 'Active: primary color text or underline'],
            variants: ['simple', 'with-breadcrumbs', 'centered'],
        },
        sidebar: {
            description: 'Clean side navigation.',
            rules: ['Width: 240px', 'Background: white or surface-alt', 'No border (or 1px right border)', 'Nav items: regular weight', 'Active: accent background + primary text', 'Hover: muted background'],
            variants: ['persistent', 'collapsible', 'with-sections'],
        },
        modal: {
            description: 'Clean overlay dialog.',
            rules: ['Border-radius: 8px', 'Background: white', 'Shadow: xl', 'Light overlay backdrop', 'Header: semibold, border-bottom optional', 'Max-width: 480px'],
            variants: ['default', 'large', 'sheet (bottom-attached)', 'full-screen-mobile'],
        },
        form: {
            description: 'Clean form layouts.',
            rules: ['Labels: small or base, medium weight, above input', 'Inputs: 1px border, 6px radius', 'Focus: primary border + subtle ring', 'Errors: danger text below input', 'Group spacing: 20px-24px'],
            variants: ['stacked', 'inline', 'horizontal'],
        },
        badge: {
            description: 'Subtle status tags.',
            rules: ['Padding: 2px 8px', 'Font-size: xs-sm', 'Border-radius: full or 4px', 'Background: 10% opacity color', 'No border', 'Regular or medium weight'],
            variants: ['default', 'outline', 'dot (tiny circle indicator)'],
        },
        input: {
            description: 'Clean text inputs.',
            rules: ['Border: 1px solid border-color', 'Border-radius: 6px', 'Padding: 8px 12px', 'Background: white', 'Focus: primary border + subtle box-shadow ring', 'Placeholder: muted foreground color'],
            variants: ['default', 'with-icon', 'with-addon', 'textarea'],
        },
        dropdown: {
            description: 'Simple selection menus.',
            rules: ['Trigger: matches input styling', 'Menu: white, border, 6px radius, subtle shadow', 'Items: 8px 12px padding', 'Active: accent background', 'Separator: 1px muted border'],
            variants: ['select', 'combobox', 'multi-select'],
        },
        tabs: {
            description: 'Clean tab navigation.',
            rules: ['Active: primary text + bottom border (2px)', 'Inactive: muted-foreground text', 'Container: 1px bottom border', 'Padding: 8px 16px', 'Gap: 0 (tabs touch)'],
            variants: ['underline', 'pills (rounded bg tabs)', 'segment'],
        },
        toast: {
            description: 'Minimal notification toasts.',
            rules: ['Background: white or foreground (dark)', 'Border: 1px subtle', 'Border-radius: 6px', 'Shadow: lg', 'Padding: 12px 16px', 'Position: bottom-right or bottom-center'],
            variants: ['info', 'success', 'warning', 'error'],
        },
    },
    interactions: {
        philosophy: 'Interactions should feel like using a well-made physical tool — responsive, predictable, and so natural you don\'t think about them. No jank, no delay, no show.',
        transitions: {
            duration: { instant: '0ms', fast: '100ms', normal: '150ms', slow: '200ms', verySlow: '300ms' },
            easing: { default: 'ease-in-out', in: 'ease-in', out: 'ease-out', inOut: 'ease-in-out', bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
        },
        hover: {
            behavior: 'Subtle background changes and border refinement.',
            rules: ['Background darken/lighten 3-5%', 'Buttons: background color shift', 'Links: underline or darken', 'Cards: shadow increase or border darken', 'No transforms or scale changes'],
        },
        focus: {
            behavior: 'Ring-style focus indicator.',
            rules: ['2px ring in primary color at 30% opacity', '2px offset from element', 'Works on all backgrounds', 'Consistent across all interactive elements'],
        },
        loading: {
            pattern: 'Subtle loading states.',
            rules: ['Skeletons: muted rectangles with gentle pulse', 'Spinners: thin, primary color', 'Progress: thin bar, primary color fill', 'Button loading: inline spinner, disabled state'],
        },
        animation: {
            philosophy: 'Animation is seasoning, not the dish. A little goes a long way.',
            rules: ['Maximum 200ms for micro-interactions', 'Modals/panels: subtle scale(0.95→1) + fade', 'Toasts: slide in from edge', 'Never animate list items individually', 'No parallax, no scroll-linked animations'],
        },
    },
    antiPatterns: [
        { name: 'Heavy Borders', description: 'Using visible, dark, thick borders (2px+)', why: 'Heavy borders create visual weight and structural emphasis. Clean utility is about disappearing — borders should be barely noticed.', correction: '1px borders in subtle gray. Prefer shadows over borders when possible.' },
        { name: 'Aggressive Colors', description: 'Using highly saturated colors for UI elements', why: 'High saturation creates visual noise. Clean utility keeps the palette neutral and reserves color for functional communication.', correction: 'Muted, desaturated colors for UI. Saturated colors only for status indicators and CTAs.' },
        { name: 'Decorative Typography', description: 'Display fonts, script fonts, or highly stylized type', why: 'Typography should be invisible. The moment the user notices the font, the design has failed.', correction: 'System font stack or Inter. Single font family throughout.' },
        { name: 'Visual Clutter', description: 'Too many competing visual elements, dense iconography, heavy chrome', why: 'Every visual element competes for attention. Clean utility says: if it doesn\'t serve the task, it doesn\'t belong.', correction: 'Remove decorative elements. Reduce icon usage. Let whitespace do the work.' },
        { name: 'Complex Animations', description: 'Multi-step animations, bounce effects, parallax scrolling', why: 'Complex animations attract attention to themselves. The interface should be a transparent layer between user and task.', correction: 'Simple fade and slide transitions only. Under 200ms.' },
    ],
    componentHierarchies: {
        dashboard: {
            pageType: 'dashboard',
            components: [
                { name: 'sidebar-nav', priority: 1, placement: 'left, 240px', responsiveBehavior: 'Collapses to hamburger' },
                { name: 'page-header', priority: 2, placement: 'top of content with title and actions', responsiveBehavior: 'Actions move to overflow menu' },
                { name: 'content-cards', priority: 3, placement: 'grid layout in main area', responsiveBehavior: 'Single column on mobile' },
                { name: 'data-table', priority: 4, placement: 'below cards', responsiveBehavior: 'Horizontal scroll' },
            ],
            layoutRules: ['16px grid gap', 'Content max-width: 1200px', 'Generous padding throughout'],
            relationships: ['Page header describes the current view', 'Cards provide summary metrics', 'Table provides detailed data'],
        },
        landing: {
            pageType: 'landing',
            components: [
                { name: 'hero', priority: 1, placement: 'top, centered text', responsiveBehavior: 'Reduce heading size' },
                { name: 'features', priority: 2, placement: '3-column grid', responsiveBehavior: 'Single column' },
                { name: 'cta', priority: 3, placement: 'centered below features', responsiveBehavior: 'Full-width button' },
            ],
            layoutRules: ['Max-width: 768px for text content', 'Section gap: 64px', 'Centered layout throughout'],
            relationships: ['Hero states the value', 'Features explain the how', 'CTA provides the action'],
        },
    },
    compatibleStyles: ['soft-modernism', 'industrial-minimalism', 'enterprise-brutalism'],
    blendingRules: [
        'Clean utility blends easily with soft modernism by adopting warmer colors while keeping structural simplicity',
        'Can borrow industrial minimalism density rules for data-heavy contexts',
        'When blending, always maintain clean utility spacing — this is the defining characteristic',
    ],
};

export default cleanUtility;

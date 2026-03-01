import { DesignStyle } from '../types.js';

const neoBrutalism: DesignStyle = {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism',
    version: '1.0.0',
    philosophy: {
        summary: 'Raw, unapologetic design that embraces bold colors, heavy borders, and intentional roughness. Neo-brutalism rejects polish in favor of authenticity, making digital interfaces feel tangible and confrontational.',
        emotionalIntent: 'Playful rebellion, confident irreverence, creative energy',
        functionalContract: 'Every element announces itself. Nothing hides. The interface is honest about what it is — a constructed digital artifact, not a simulation of the physical world.',
        bestFor: ['Creative portfolios', 'Startup landing pages', 'Design tool interfaces', 'Youth-oriented platforms', 'Cultural/art platforms'],
        notIdealFor: ['Enterprise dashboards', 'Healthcare portals', 'Financial platforms', 'Government services', 'Accessibility-critical tools'],
    },
    colors: {
        primary: { value: '#FF6B6B', role: 'primary', usage: 'Primary actions, key interactive elements, and brand anchoring. Used sparingly for maximum impact.' },
        primaryHover: { value: '#FF5252', role: 'primary-hover', usage: 'Hover state for primary elements, slightly more saturated.' },
        secondary: { value: '#4ECDC4', role: 'secondary', usage: 'Secondary actions, complementary highlights, supporting interactive elements.' },
        surface: { value: '#FFFFFF', role: 'surface', usage: 'Card backgrounds, elevated containers. Always white to maximize border contrast.' },
        surfaceAlt: { value: '#F7F7F7', role: 'surface-alt', usage: 'Alternate surface for visual variety. Barely off-white.' },
        background: { value: '#FFF9E6', role: 'background', usage: 'Page background. Warm cream that prevents sterility while maintaining brightness.' },
        foreground: { value: '#1A1A1A', role: 'foreground', usage: 'Primary text. Near-black for maximum readability against light backgrounds.' },
        muted: { value: '#E8E8E8', role: 'muted', usage: 'Disabled states, subtle dividers. Should feel deliberately muted, not accidentally faded.' },
        mutedForeground: { value: '#6B6B6B', role: 'muted-foreground', usage: 'Secondary text, captions, metadata.' },
        border: { value: '#1A1A1A', role: 'border', usage: 'THE defining element of neo-brutalism. Always dark, always thick. Borders are structural, not decorative.' },
        borderHover: { value: '#000000', role: 'border-hover', usage: 'Pure black on hover for maximum definition.' },
        danger: { value: '#FF4757', role: 'danger', usage: 'Error states, destructive actions. Vivid red that demands attention.' },
        success: { value: '#2ED573', role: 'success', usage: 'Success confirmations, positive indicators.' },
        warning: { value: '#FFA502', role: 'warning', usage: 'Warning states, caution indicators.' },
        info: { value: '#3742FA', role: 'info', usage: 'Informational callouts, neutral highlights.' },
        overlay: { value: 'rgba(0, 0, 0, 0.5)', role: 'overlay', usage: 'Modal backdrops, overlay screens.' },
        accent: { value: '#A8E6CF', role: 'accent', usage: 'Decorative accents, highlights, tag backgrounds.' },
        accentForeground: { value: '#1A1A1A', role: 'accent-foreground', usage: 'Text on accent backgrounds.' },
    },
    typography: {
        fonts: {
            heading: "'Space Grotesk', 'Arial Black', sans-serif",
            body: "'Inter', 'Helvetica Neue', sans-serif",
            mono: "'JetBrains Mono', 'Courier New', monospace",
            rationale: 'Space Grotesk provides geometric boldness for headings. Inter ensures clean readability at body sizes. The contrast between heading and body weights creates visual tension that defines the style.',
        },
        scale: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '2rem', '4xl': '2.5rem', '5xl': '3.5rem' },
        weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 800 },
        lineHeights: { tight: '1.1', normal: '1.5', relaxed: '1.7', loose: '2' },
        letterSpacing: { tight: '-0.02em', normal: '0', wide: '0.05em' },
        rules: [
            'Headings must use bold (800) weight — anything lighter contradicts the brutalist ethos',
            'Body text stays at regular (400) weight for readability contrast',
            'Never use light (300) weight for any visible text — it signals fragility',
            'Uppercase is encouraged for labels, badges, and nav items to reinforce structural intent',
            'Minimum heading size is 2rem — small headings have no place in this style',
        ],
    },
    spacing: {
        baseUnit: '4px',
        baseValue: 4,
        scale: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64],
        allowedMultiples: 'Multiples of 4px only. The grid is non-negotiable.',
        rules: [
            'Component internal padding: minimum 16px (4 units)',
            'Component gaps: 16px or 24px — no in-between values',
            'Section spacing: 48px or 64px — generous breathing room between major sections',
            'Never use odd pixel values — they break the grid and produce sub-pixel rendering',
            'Generous padding is part of the aesthetic — cramped neo-brutalism is an oxymoron',
        ],
    },
    bordersShadows: {
        radius: {
            none: '0px', sm: '2px', md: '4px', lg: '8px', xl: '12px', full: '9999px',
            default: '0px',
            rationale: 'Neo-brutalism primarily uses sharp corners (0px). Radius is reserved for specific intentional contrast moments — a rounded badge among sharp cards creates deliberate visual tension.',
        },
        borderWidth: { none: '0px', thin: '1px', default: '2px', thick: '3px', heavy: '4px' },
        shadows: {
            none: 'none', sm: '2px 2px 0px #1A1A1A', md: '4px 4px 0px #1A1A1A', lg: '6px 6px 0px #1A1A1A', xl: '8px 8px 0px #1A1A1A', inner: 'inset 2px 2px 0px #1A1A1A',
            rationale: 'Shadows are HARD OFFSET only — no blur, no spread. This is the signature of neo-brutalism. The shadow is a solid shape, not a light simulation. It creates a sense of physical layering.',
        },
        rules: [
            'ALL interactive elements must have a visible border of at least 2px',
            'Cards use 3-4px borders with offset shadows — this is non-negotiable',
            'NEVER use blurred/soft shadows — they belong to a different aesthetic entirely',
            'Shadow direction is always bottom-right (positive x, positive y)',
            'Shadow color matches border color for visual coherence',
            'On hover/active, shadows should reduce (element appears pressed down)',
        ],
    },
    components: {
        button: {
            description: 'Bold, chunky buttons with heavy borders and offset shadows. Buttons look like physical objects you can press.',
            rules: [
                'Minimum padding: 12px 24px',
                'Border: 2-3px solid black',
                'Shadow: 4px 4px 0px black (default state)',
                'Hover: translate 2px down and right, shadow reduces to 2px 2px',
                'Active: translate 4px down and right, shadow disappears (fully pressed)',
                'Text: uppercase, bold, letter-spacing wide',
                'Background: solid color, never gradient',
            ],
            variants: ['primary (colored bg)', 'secondary (white bg, colored border)', 'danger (red bg)', 'ghost (no bg, border only)'],
        },
        card: {
            description: 'Flat containers with pronounced borders and offset shadows. Cards are organizational units, not decorative.',
            rules: [
                'Border: 3px solid black',
                'Shadow: 6px 6px 0px black',
                'Background: white or accent color',
                'Padding: 24px minimum',
                'No border-radius (0px)',
                'Cards are always flat — no inner shadows or gradients',
            ],
            variants: ['default (white)', 'accent (colored)', 'interactive (hover effects)'],
        },
        table: {
            description: 'Heavy-bordered data tables with strong visual structure.',
            rules: ['Outer border: 3px solid', 'Cell borders: 2px solid', 'Header: bold, uppercase, colored background', 'Row hover: accent background color', 'No zebra striping — use borders for separation'],
            variants: ['compact', 'comfortable', 'bordered'],
        },
        navbar: {
            description: 'Bold horizontal bar with structural borders.',
            rules: ['Bottom border: 3px solid black', 'Background: white or primary color', 'Nav items: uppercase, bold', 'Active state: colored underline or background'],
            variants: ['light (white bg)', 'dark (colored bg)', 'transparent'],
        },
        sidebar: {
            description: 'Structurally bordered side panel.',
            rules: ['Right border: 3px solid black', 'Nav items have distinct hover states with background color changes', 'Active item has left accent border (4px)', 'Section dividers use 2px borders'],
            variants: ['collapsed', 'expanded', 'overlay'],
        },
        modal: {
            description: 'Heavy-bordered overlay dialog.',
            rules: ['Border: 4px solid black', 'Shadow: 8px 8px 0px black', 'Background: white', 'No border-radius', 'Overlay: semi-transparent black'],
            variants: ['small', 'medium', 'large', 'fullscreen'],
        },
        form: {
            description: 'Inputs with heavy borders matching the brutalist aesthetic.',
            rules: ['Input border: 2-3px solid black', 'Focus: accent color border or shadow change', 'Labels: bold, uppercase', 'Error states: red border with offset shadow'],
            variants: ['inline', 'stacked', 'horizontal'],
        },
        badge: {
            description: 'Small, bold label elements.',
            rules: ['Border: 2px solid black', 'Padding: 4px 12px', 'Text: uppercase, bold, small', 'Background: accent or pastel color', 'May use border-radius: full for intentional contrast'],
            variants: ['default', 'outline', 'pill'],
        },
        input: {
            description: 'Text inputs with visible structure.',
            rules: ['Border: 2-3px solid black', 'Padding: 12px 16px', 'No border-radius', 'Focus: border color change + shadow appears', 'Placeholder: muted foreground'],
            variants: ['default', 'large', 'with-icon', 'textarea'],
        },
        dropdown: {
            description: 'Select menus with brutalist framing.',
            rules: ['Trigger: same as button style', 'Menu: 3px border, offset shadow, no radius', 'Items: generous padding, hover background', 'Active item: accent background'],
            variants: ['default', 'multi-select', 'searchable'],
        },
        tabs: {
            description: 'Tab navigation with bold structural emphasis.',
            rules: ['Active tab: colored bottom border (4px)', 'Inactive tabs: no border, muted text', 'Tab container: bottom border 2px', 'No rounded corners on tabs'],
            variants: ['underline', 'boxed', 'pill'],
        },
        toast: {
            description: 'Notification banners with brutalist framing.',
            rules: ['Border: 3px solid black', 'Shadow: 4px 4px 0px black', 'Strong left accent border (4px) for status color', 'Text: bold title, regular body'],
            variants: ['success', 'error', 'warning', 'info'],
        },
    },
    interactions: {
        philosophy: 'Interactions should feel physical and immediate. Elements respond like real objects — they press down when clicked, they shift when hovered. No ethereal fades or floating animations. Everything is grounded.',
        transitions: {
            duration: { instant: '0ms', fast: '100ms', normal: '150ms', slow: '200ms', verySlow: '300ms' },
            easing: { default: 'ease-out', in: 'ease-in', out: 'ease-out', inOut: 'ease-in-out', bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
        },
        hover: {
            behavior: 'Elements translate slightly (1-2px) and shadows reduce, creating a "lifting" or "pressing" sensation.',
            rules: ['Buttons: translate down-right, shadow shrinks', 'Cards: subtle translate or shadow growth', 'Links: bold underline appears, no color fade', 'Never use opacity changes for hover — too subtle for this style'],
        },
        focus: {
            behavior: 'Strong, visible focus indicators using offset outlines or shadow changes.',
            rules: ['Focus ring: 3px offset outline in accent color', 'Never rely on subtle color changes for focus indication', 'Focus must be visible against any background', 'Tab navigation must produce obvious visual change'],
        },
        loading: {
            pattern: 'Block-based loading states with solid color pulses.',
            rules: ['Skeleton screens use solid color blocks, not gradient shimmers', 'Spinners should be chunky, not thin/elegant', 'Progress bars: thick, bordered, solid fill', 'No dot-dot-dot animations — use a bold "LOADING" text'],
        },
        animation: {
            philosophy: 'Animations are snappy and purposeful. Nothing floats or drifts. Elements snap into place.',
            rules: ['Keep durations under 300ms', 'Use ease-out for entrances, ease-in for exits', 'No parallax scrolling', 'Page transitions: hard cut or fast slide, never fade', 'Micro-animations: translate and shadow changes only'],
        },
    },
    antiPatterns: [
        { name: 'Soft/Blurred Shadows', description: 'Using box-shadow with blur radius', why: 'Blurred shadows simulate realistic lighting. Neo-brutalism rejects realism in favor of intentional, graphic flatness. A blurred shadow says "I\'m trying to look real." An offset shadow says "I\'m a designed object."', correction: 'Use hard offset shadows: box-shadow: 4px 4px 0px #1A1A1A' },
        { name: 'Subtle Borders', description: 'Using 1px borders or low-opacity borders', why: 'Thin borders disappear. In neo-brutalism, borders are structural elements, not afterthoughts. They define shapes with authority.', correction: 'Minimum 2px borders, dark color, full opacity.' },
        { name: 'Gradient Backgrounds', description: 'Using CSS gradients for backgrounds', why: 'Gradients introduce smoothness and blending that contradicts the raw, flat aesthetic. Every surface should be a definite, committed color.', correction: 'Use solid background colors only.' },
        { name: 'Thin/Light Typography', description: 'Using font-weight below 400 for any visible text', why: 'Light type signals delicacy and refinement — the opposite of brutalism. This style demands presence and weight.', correction: 'Minimum weight 400 for body, 700+ for headings.' },
        { name: 'Rounded Everything', description: 'Applying border-radius uniformly to all elements', why: 'Universal rounding creates softness. Brutalism is about sharp, definite edges. Rounding should be rare and intentional.', correction: 'Default to 0px radius. Reserve rounding for specific badges/pills as intentional contrast.' },
        { name: 'Opacity-Based Hover States', description: 'Using opacity changes for interactive feedback', why: 'Opacity is too subtle. Brutalism demands physical-feeling interactions — translate, shadow change, background swap.', correction: 'Use translate + shadow reduction for hover states.' },
        { name: 'Pastel-Only Palette', description: 'Using exclusively soft pastel colors without bold accents', why: 'An all-pastel palette removes the tension and energy. Neo-brutalism needs at least one bold, high-saturation color to anchor the visual system.', correction: 'Ensure primary and accent colors have high saturation. Pastels are fine for backgrounds if paired with bold borders and accents.' },
    ],
    componentHierarchies: {
        dashboard: {
            pageType: 'dashboard',
            components: [
                { name: 'navbar', priority: 1, placement: 'top, full-width', responsiveBehavior: 'Collapses to hamburger menu below 768px' },
                { name: 'stat-cards', priority: 2, placement: 'top section, grid of 3-4', responsiveBehavior: 'Stack to single column on mobile' },
                { name: 'main-chart', priority: 3, placement: 'center, full-width of content area', responsiveBehavior: 'Maintains aspect ratio, reduces padding' },
                { name: 'data-table', priority: 4, placement: 'below chart', responsiveBehavior: 'Horizontal scroll on mobile' },
                { name: 'sidebar', priority: 5, placement: 'left, fixed-width', responsiveBehavior: 'Becomes overlay drawer on mobile' },
            ],
            layoutRules: ['Grid gap: 24px between cards', 'Section padding: 48px vertical', 'Max content width: 1200px'],
            relationships: ['Stat cards feed context for the chart', 'Chart and table should show related data', 'Sidebar navigation groups relate to content sections'],
        },
        landing: {
            pageType: 'landing',
            components: [
                { name: 'hero', priority: 1, placement: 'top, full-viewport-height', responsiveBehavior: 'Text and CTA stack vertically on mobile' },
                { name: 'features-grid', priority: 2, placement: 'below hero', responsiveBehavior: '3-column → 1-column on mobile' },
                { name: 'cta-banner', priority: 3, placement: 'between sections', responsiveBehavior: 'Reduces padding, CTA becomes full-width' },
                { name: 'testimonials', priority: 4, placement: 'below features', responsiveBehavior: 'Horizontal scroll or stack' },
                { name: 'footer', priority: 5, placement: 'bottom', responsiveBehavior: 'Stack columns vertically' },
            ],
            layoutRules: ['Hero: minimum 100vh height', 'Section gap: 64px', 'Feature cards: equal height in row'],
            relationships: ['Hero CTA leads to features explanation', 'Features build toward final CTA', 'Testimonials provide social proof before footer CTA'],
        },
    },
    compatibleStyles: ['enterprise-brutalism'],
    blendingRules: [
        'Neo-brutalism can blend with enterprise-brutalism by sharing border conventions while adjusting color intensity',
        'When blending, maintain the hard shadow convention — this is the unifying element',
        'Color palette should stay consistent — do not mix neo-brutalism pastels with enterprise grays in the same section',
    ],
};

export default neoBrutalism;

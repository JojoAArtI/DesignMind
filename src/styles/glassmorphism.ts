import { DesignStyle } from '../types.js';

const glassmorphism: DesignStyle = {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    version: '1.0.0',
    philosophy: {
        summary: 'Translucent, layered surfaces that create depth through blur and opacity. The glass metaphor brings a sense of physical space to flat screens — surfaces float, stack, and reveal hints of what lies beneath them. It is design that breathes.',
        emotionalIntent: 'Sophisticated elegance, modern luxury, airy depth',
        functionalContract: 'The interface feels dimensional and premium. Layers communicate hierarchy visually — what\'s on top matters most, and the glass effect constantly reminds the user that information exists in structured levels.',
        bestFor: ['Consumer fintech apps', 'Music/media players', 'Portfolio showcases', 'Weather apps', 'Mobile-first experiences', 'Premium product sites'],
        notIdealFor: ['Data-dense dashboards', 'Accessibility-critical apps', 'Low-end device targets', 'Government/institutional sites', 'Print-heavy layouts'],
    },
    colors: {
        primary: { value: '#6366F1', role: 'primary', usage: 'Primary actions. Indigo bridges between warm and cool, harmonizing with gradient backgrounds.' },
        primaryHover: { value: '#4F46E5', role: 'primary-hover', usage: 'Deeper indigo on hover.' },
        secondary: { value: '#EC4899', role: 'secondary', usage: 'Secondary accents. Pink creates vibrant gradient pairings with primary.' },
        surface: { value: 'rgba(255, 255, 255, 0.15)', role: 'surface', usage: 'Glass surface. Semi-transparent white with backdrop blur — this IS the style.' },
        surfaceAlt: { value: 'rgba(255, 255, 255, 0.08)', role: 'surface-alt', usage: 'Secondary glass layer. More transparent for nested elements.' },
        background: { value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', role: 'background', usage: 'Gradient background. The rich backdrop is essential — glass needs something beautiful to show through.' },
        foreground: { value: '#FFFFFF', role: 'foreground', usage: 'Primary text. White for maximum contrast against gradient+glass.' },
        muted: { value: 'rgba(255, 255, 255, 0.1)', role: 'muted', usage: 'Subtle dividers, disabled backgrounds. Very low opacity white.' },
        mutedForeground: { value: 'rgba(255, 255, 255, 0.6)', role: 'muted-foreground', usage: 'Secondary text. Reduced opacity white.' },
        border: { value: 'rgba(255, 255, 255, 0.2)', role: 'border', usage: 'Glass edge borders. Subtle white lines that catch light and define panel edges.' },
        borderHover: { value: 'rgba(255, 255, 255, 0.35)', role: 'border-hover', usage: 'Brighter edge on hover.' },
        danger: { value: '#EF4444', role: 'danger', usage: 'Error states. Bright red visible through glass.' },
        success: { value: '#10B981', role: 'success', usage: 'Success states. Emerald green.' },
        warning: { value: '#F59E0B', role: 'warning', usage: 'Warning states. Amber visible through translucent layers.' },
        info: { value: '#3B82F6', role: 'info', usage: 'Informational. Clear blue.' },
        overlay: { value: 'rgba(0, 0, 0, 0.4)', role: 'overlay', usage: 'Modal backdrop. Darker overlay to separate modal glass from background glass.' },
        accent: { value: 'rgba(99, 102, 241, 0.3)', role: 'accent', usage: 'Accent backgrounds. Tinted glass for selected/active states.' },
        accentForeground: { value: '#FFFFFF', role: 'accent-foreground', usage: 'Text on accent glass.' },
    },
    typography: {
        fonts: {
            heading: "'Outfit', 'Inter', -apple-system, sans-serif",
            body: "'Inter', -apple-system, sans-serif",
            mono: "'JetBrains Mono', 'Fira Code', monospace",
            rationale: 'Outfit provides geometric elegance for headings that matches the modern glass aesthetic. Inter for clean body text. Both have excellent rendering at all sizes against translucent backgrounds.',
        },
        scale: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '2rem', '4xl': '2.5rem', '5xl': '3.5rem' },
        weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 },
        lineHeights: { tight: '1.2', normal: '1.5', relaxed: '1.6', loose: '1.8' },
        letterSpacing: { tight: '-0.02em', normal: '0', wide: '0.05em' },
        rules: [
            'Headings: semibold or bold with negative tracking for modern feel',
            'Body: regular weight, generous line-height for readability against translucent backgrounds',
            'Light weight (300) is acceptable for large display text — glass provides enough visual weight',
            'Text must always be white or very light against glass surfaces — never dark text on glass',
            'Add subtle text-shadow to improve readability: 0 1px 2px rgba(0,0,0,0.1)',
        ],
    },
    spacing: {
        baseUnit: '4px',
        baseValue: 4,
        scale: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80],
        allowedMultiples: 'Multiples of 4px. Generous spacing enhances the airy feeling.',
        rules: [
            'Component padding: 20px-32px — generous to let the glass breathe',
            'Element gaps: 12px-20px — comfortable spacing reflecting the premium feel',
            'Section spacing: 48px-80px — sections should float with clear separation',
            'Glass panels need minimum 16px padding for the blur effect to read properly',
            'Generous spacing is part of the aesthetic — cramped glass looks like an error',
        ],
    },
    bordersShadows: {
        radius: {
            none: '0px', sm: '8px', md: '12px', lg: '16px', xl: '24px', full: '9999px',
            default: '12px',
            rationale: 'Generous rounding (12px+) reinforces the soft, modern, premium quality. Glass panels with sharp corners look broken. The radius communicates that these surfaces are floating, not structural.',
        },
        borderWidth: { none: '0px', thin: '1px', default: '1px', thick: '2px', heavy: '2px' },
        shadows: {
            none: 'none', sm: '0 2px 8px rgba(0,0,0,0.1)', md: '0 4px 16px rgba(0,0,0,0.12)', lg: '0 8px 32px rgba(0,0,0,0.15)', xl: '0 16px 48px rgba(0,0,0,0.2)', inner: 'inset 0 1px 0 rgba(255,255,255,0.1)',
            rationale: 'Shadows are soft and expansive. They simulate the depth of floating glass panels. Inner highlights (inset white at top edge) simulate light refraction through glass edges.',
        },
        rules: [
            'EVERY glass panel: background blur (backdrop-filter: blur(16px-24px))',
            'Glass borders: 1px solid rgba(255,255,255,0.2) — the "edge catch" is essential',
            'Inner highlight: inset 0 1px 0 rgba(255,255,255,0.1) on the top edge of glass panels',
            'External shadow: soft, wide-spread behind glass panels to create floation effect',
            'Never use dark/hard borders — they break the glass metaphor completely',
            'Background must be visually rich (gradient, image, video) — glass on white is invisible',
        ],
    },
    components: {
        button: {
            description: 'Glass buttons that float above the background.',
            rules: ['Background: rgba(255,255,255,0.15)', 'Backdrop-filter: blur(8px)', 'Border: 1px solid rgba(255,255,255,0.2)', 'Border-radius: 12px', 'Padding: 10px 24px', 'Hover: background opacity increases to 0.25', 'Text: white, medium weight'],
            variants: ['glass (default translucent)', 'solid (opaque primary for key CTAs)', 'outline (border only, transparent)', 'pill (full radius)'],
        },
        card: {
            description: 'Floating glass panels — the core visual element.',
            rules: ['Background: rgba(255,255,255,0.1-0.2)', 'Backdrop-filter: blur(16px-24px)', 'Border: 1px solid rgba(255,255,255,0.2)', 'Border-radius: 16px', 'Padding: 24px-32px', 'Shadow: soft, wide spread', 'Inner highlight on top edge'],
            variants: ['glass (default)', 'frosted (higher opacity, more blur)', 'dark-glass (rgba(0,0,0,0.3))', 'bright-glass (rgba(255,255,255,0.3))'],
        },
        table: {
            description: 'Data tables with glass styling on header and rows.',
            rules: ['Container: glass card', 'Header: slightly more opaque glass', 'Row borders: rgba(255,255,255,0.1)', 'Cell padding: 12px 16px', 'Hover: row background opacity increase', 'Text: white throughout'],
            variants: ['glass', 'embedded (no outer glass, just row styling)'],
        },
        navbar: {
            description: 'Floating glass navigation bar.',
            rules: ['Background: rgba(255,255,255,0.1)', 'Backdrop-filter: blur(20px)', 'Border-bottom: 1px solid rgba(255,255,255,0.1)', 'Fixed position, floats above content', 'Items: white text, medium weight', 'Active: brighter text or accent underline'],
            variants: ['floating (with margin and radius)', 'full-width (edge to edge)', 'transparent (blur only on scroll)'],
        },
        sidebar: {
            description: 'Glass side panel.',
            rules: ['Background: rgba(255,255,255,0.08)', 'Backdrop-filter: blur(16px)', 'Right border: 1px solid rgba(255,255,255,0.1)', 'Nav items: white text, subtle hover', 'Active: glass-accent background'],
            variants: ['persistent', 'overlay (mobile)', 'mini (icons only)'],
        },
        modal: {
            description: 'Frosted glass dialog floating above dark overlay.',
            rules: ['Background: rgba(255,255,255,0.15)', 'Backdrop-filter: blur(24px)', 'Border: 1px solid rgba(255,255,255,0.2)', 'Border-radius: 20px', 'Shadow: xl', 'Overlay: dark blur behind modal'],
            variants: ['glass', 'frosted-heavy (higher opacity)'],
        },
        form: {
            description: 'Inputs styled as glass elements.',
            rules: ['Input background: rgba(255,255,255,0.1)', 'Border: 1px solid rgba(255,255,255,0.2)', 'Border-radius: 10px', 'Focus: border brightens to rgba(255,255,255,0.4)', 'Labels: white, medium weight, 60% opacity', 'Placeholder: rgba(255,255,255,0.4)'],
            variants: ['glass', 'frosted'],
        },
        badge: {
            description: 'Glass pill badges.',
            rules: ['Background: rgba(255,255,255,0.15)', 'Border: 1px solid rgba(255,255,255,0.2)', 'Border-radius: full', 'Padding: 4px 12px', 'Text: white, xs'],
            variants: ['glass', 'colored-glass (tinted)', 'solid'],
        },
        input: {
            description: 'Glass-styled text inputs.',
            rules: ['Background: rgba(255,255,255,0.08)', 'Backdrop-filter: blur(4px)', 'Border: 1px solid rgba(255,255,255,0.15)', 'Border-radius: 10px', 'Padding: 10px 16px', 'Text: white', 'Focus: brighter border + subtle glow'],
            variants: ['glass', 'outlined', 'filled (higher opacity)'],
        },
        dropdown: {
            description: 'Glass dropdown menus.',
            rules: ['Menu: glass panel with blur', 'Items: white text, hover increases opacity', 'Separator: rgba(255,255,255,0.1)', 'Border-radius: 12px', 'Shadow: lg'],
            variants: ['glass', 'frosted'],
        },
        tabs: {
            description: 'Glass tab navigation.',
            rules: ['Active: glass-accent background with glow', 'Inactive: transparent, white text at 60%', 'Container: glass background optional', 'Border-radius: 8px on active tab pill'],
            variants: ['underline', 'pills (glass bg on active)', 'segment (glass container)'],
        },
        toast: {
            description: 'Floating glass notification.',
            rules: ['Background: glass', 'Backdrop-filter: blur(16px)', 'Border: 1px solid rgba(255,255,255,0.2)', 'Border-radius: 12px', 'Shadow: lg', 'Left accent: thin glow line in status color'],
            variants: ['glass', 'dark-glass'],
        },
    },
    interactions: {
        philosophy: 'Interactions should feel fluid and magical, like light passing through crystal. Smooth transitions, gentle fades, and subtle luminous effects create a premium, almost tactile experience.',
        transitions: {
            duration: { instant: '0ms', fast: '150ms', normal: '250ms', slow: '350ms', verySlow: '500ms' },
            easing: { default: 'cubic-bezier(0.4, 0, 0.2, 1)', in: 'cubic-bezier(0.4, 0, 1, 1)', out: 'cubic-bezier(0, 0, 0.2, 1)', inOut: 'cubic-bezier(0.4, 0, 0.2, 1)', bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
        },
        hover: {
            behavior: 'Glass becomes more opaque/visible on hover. Like pressing against frosted glass.',
            rules: ['Background opacity increases 5-10%', 'Border brightens slightly', 'Subtle scale transform (1.01-1.02) for cards', 'Buttons: background opacity increase + subtle glow'],
        },
        focus: {
            behavior: 'Luminous focus ring that glows.',
            rules: ['Box-shadow: 0 0 0 2px rgba(99,102,241,0.5)', 'Subtle glow around the focus ring', 'Must be visible against any glass background', 'Ring color matches primary color at reduced opacity'],
        },
        loading: {
            pattern: 'Shimmering glass loading states.',
            rules: ['Skeleton: glass rectangles with slow shimmer gradient', 'Spinners: thin, luminous ring', 'Progress bars: glass container with glowing fill', 'Glass panels can show loading shimmer across surface'],
        },
        animation: {
            philosophy: 'Animation should feel like light — fluid, continuous, unhurried. Nothing snaps or bounces. Everything flows.',
            rules: ['Entry animations: fade + subtle rise (translate-y -8px to 0)', 'Exit: fade out + subtle drop', 'Duration: 250-500ms — slower than typical to create premium feel', 'Parallax layers moving at different speeds create depth', 'Background gradients may slowly shift/breathe'],
        },
    },
    antiPatterns: [
        { name: 'Sharp Corners on Glass', description: 'Using border-radius below 8px on glass panels', why: 'Sharp corners break the glass metaphor. Real glass objects have smooth, polished edges. Sharp corners make glass panels look like overlaid rectangles rather than physical surfaces.', correction: 'Minimum 12px radius on glass panels. 8px absolute minimum for small elements.' },
        { name: 'Dark/Opaque Borders', description: 'Using visible, dark-colored borders', why: 'Dark borders destroy the translucent illusion. Glass edges are defined by subtle light catches, not drawn lines.', correction: 'Use rgba(255,255,255,0.1-0.25) borders only. Never solid dark colors.' },
        { name: 'Plain White Background', description: 'Using a white or light solid color as the page background', why: 'Glass effects are INVISIBLE against white backgrounds. The entire style depends on a rich backdrop showing through the translucent panels.', correction: 'Use gradient, image, or video backgrounds. Rich, saturated colors.' },
        { name: 'Heavy Text Shadows', description: 'Using thick, visible text shadows', why: 'Heavy text shadows look dated. Text on glass should rely on contrast from the blur effect, not forced shadow.', correction: 'Subtle text-shadow: 0 1px 2px rgba(0,0,0,0.1). Or none at all.' },
        { name: 'No Backdrop Blur', description: 'Using translucent backgrounds without backdrop-filter blur', why: 'Translucent rectangles without blur look like broken opacity settings. The BLUR is what creates the glass effect.', correction: 'Always pair translucent backgrounds with backdrop-filter: blur(12px+).' },
        { name: 'Hard Offset Shadows', description: 'Using neo-brutalist style hard shadows', why: 'Hard shadows belong to a completely different aesthetic. Glass requires soft, diffused shadows that simulate natural light.', correction: 'Use soft shadows with large spread: 0 8px 32px rgba(0,0,0,0.15).' },
    ],
    componentHierarchies: {
        dashboard: {
            pageType: 'dashboard',
            components: [
                { name: 'glass-navbar', priority: 1, placement: 'top, floating with margin', responsiveBehavior: 'Full-width on mobile, removes margin' },
                { name: 'metric-cards', priority: 2, placement: 'grid of glass cards', responsiveBehavior: 'Stack vertically on mobile' },
                { name: 'main-chart', priority: 3, placement: 'glass card, center', responsiveBehavior: 'Full-width, reduced height' },
                { name: 'data-panels', priority: 4, placement: 'below chart, 2-column', responsiveBehavior: 'Stack vertically' },
            ],
            layoutRules: ['20px grid gaps', 'Cards float with visible background showing between them', 'No sidebar — use floating navigation'],
            relationships: ['Metric cards overview feeds into chart detail', 'Data panels expand on metric card selection'],
        },
        landing: {
            pageType: 'landing',
            components: [
                { name: 'glass-hero', priority: 1, placement: 'full viewport, centered glass panel over gradient', responsiveBehavior: 'Panel becomes full-width with margin' },
                { name: 'feature-cards', priority: 2, placement: '3-column glass cards', responsiveBehavior: 'Single column, still glass' },
                { name: 'glass-cta', priority: 3, placement: 'centered glass panel', responsiveBehavior: 'Full-width below features' },
            ],
            layoutRules: ['Background gradient covers full page', 'Sections separated by 80px+', 'Everything floats — no full-width blocks'],
            relationships: ['Hero captures attention with glass effect', 'Features explain value', 'CTA converts with premium feel'],
        },
    },
    compatibleStyles: ['soft-modernism'],
    blendingRules: [
        'Glassmorphism can borrow soft-modernism typography and spacing while maintaining glass surfaces',
        'Glass effects work on top of ANY background style — but the background must be rich/colorful',
        'Never blend glass with brutalist borders — they are fundamentally incompatible aesthetic languages',
    ],
};

export default glassmorphism;

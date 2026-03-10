import { DomainProfile } from './types.js';

const domainProfiles: Record<string, DomainProfile> = {
    logistics: {
        id: 'logistics',
        name: 'Logistics & Supply Chain',
        description: 'Fleet management, warehouse operations, delivery tracking, route optimization.',
        informationDensity: 'very-high',
        accessibilityRequirements: ['High contrast for warehouse environments', 'Large touch targets for mobile use', 'Color-blind safe status indicators'],
        visualPriority: ['Live status indicators', 'Map/route visualization', 'Metric KPIs', 'Alert notifications', 'Data tables'],
        appropriateStyles: ['industrial-minimalism', 'dark-precision', 'enterprise-brutalism'],
        inappropriateStyles: ['glassmorphism', 'warm-editorial', 'soft-modernism'],
        constraints: ['Must work on ruggedized tablets', 'Glanceable at arm\'s length', 'Minimal training required'],
        compliance: ['ADA/WCAG 2.1 AA minimum'],
    },
    fintech: {
        id: 'fintech',
        name: 'Financial Technology',
        description: 'Banking apps, payment platforms, trading interfaces, financial dashboards.',
        informationDensity: 'high',
        accessibilityRequirements: ['WCAG 2.1 AA', 'Screen reader compatible', 'Keyboard navigable'],
        visualPriority: ['Account balances', 'Transaction status', 'Charts/trends', 'Action buttons', 'Security indicators'],
        appropriateStyles: ['clean-utility', 'enterprise-brutalism', 'industrial-minimalism', 'dark-precision'],
        inappropriateStyles: ['neo-brutalism', 'glassmorphism'],
        constraints: ['Trust-signaling design', 'Conservative use of color', 'Data accuracy emphasis'],
        compliance: ['PCI DSS visual guidelines', 'WCAG 2.1 AA', 'Financial regulation UI requirements'],
    },
    healthcare: {
        id: 'healthcare',
        name: 'Healthcare & Medical',
        description: 'Patient portals, clinical dashboards, telemedicine, health tracking.',
        informationDensity: 'medium',
        accessibilityRequirements: ['WCAG 2.1 AAA preferred', 'Elderly-accessible font sizes', 'High contrast mode', 'Screen reader full support'],
        visualPriority: ['Patient status', 'Critical alerts', 'Medication info', 'Appointment scheduling', 'Navigation'],
        appropriateStyles: ['clean-utility', 'soft-modernism'],
        inappropriateStyles: ['neo-brutalism', 'enterprise-brutalism', 'dark-precision', 'glassmorphism'],
        constraints: ['Calming color palette', 'No anxiety-inducing visual patterns', 'Large text defaults', 'Clear iconography'],
        compliance: ['HIPAA UI considerations', 'WCAG 2.1 AAA', 'Section 508'],
    },
    'creative-tools': {
        id: 'creative-tools',
        name: 'Creative & Design Tools',
        description: 'Design software, creative suites, content creation platforms.',
        informationDensity: 'medium',
        accessibilityRequirements: ['Keyboard shortcuts', 'Customizable workspace', 'Color-picker accessibility'],
        visualPriority: ['Canvas/workspace', 'Tool palette', 'Property panels', 'Layer hierarchy', 'Preview'],
        appropriateStyles: ['dark-precision', 'industrial-minimalism', 'neo-brutalism', 'glassmorphism'],
        inappropriateStyles: ['warm-editorial', 'enterprise-brutalism'],
        constraints: ['Chrome must not compete with user content', 'Neutral UI that works with any color palette being designed', 'Customizable themes'],
        compliance: ['WCAG 2.1 AA'],
    },
    'developer-tools': {
        id: 'developer-tools',
        name: 'Developer Tools & DevOps',
        description: 'IDEs, CI/CD platforms, monitoring tools, API management.',
        informationDensity: 'very-high',
        accessibilityRequirements: ['Keyboard-first navigation', 'Screen reader for critical alerts', 'Monospace font support'],
        visualPriority: ['Code/data content', 'Build/deploy status', 'Error indicators', 'Logs/output', 'Navigation'],
        appropriateStyles: ['dark-precision', 'industrial-minimalism'],
        inappropriateStyles: ['glassmorphism', 'soft-modernism', 'warm-editorial', 'neo-brutalism'],
        constraints: ['Terminal-like familiarity', 'Maximum information density', 'Keyboard shortcut integration', 'Dark mode mandatory'],
        compliance: ['WCAG 2.1 AA for critical functions'],
    },
    'e-commerce': {
        id: 'e-commerce',
        name: 'E-Commerce & Retail',
        description: 'Online stores, marketplace platforms, product catalogs.',
        informationDensity: 'medium',
        accessibilityRequirements: ['WCAG 2.1 AA', 'Mobile-first', 'Touch-friendly'],
        visualPriority: ['Product imagery', 'Pricing', 'Add-to-cart CTA', 'Reviews/ratings', 'Navigation/search'],
        appropriateStyles: ['clean-utility', 'soft-modernism', 'glassmorphism'],
        inappropriateStyles: ['industrial-minimalism', 'enterprise-brutalism', 'dark-precision'],
        constraints: ['Product images are hero', 'Fast load times critical', 'Trust indicators visible', 'Mobile conversion optimized'],
        compliance: ['WCAG 2.1 AA', 'ADA compliance'],
    },
    education: {
        id: 'education',
        name: 'Education & Learning',
        description: 'LMS platforms, course builders, student portals, educational content.',
        informationDensity: 'medium',
        accessibilityRequirements: ['WCAG 2.1 AA minimum', 'Dyslexia-friendly fonts', 'High contrast options', 'Screen reader support'],
        visualPriority: ['Learning content', 'Progress indicators', 'Navigation/modules', 'Assignments', 'Discussion'],
        appropriateStyles: ['soft-modernism', 'clean-utility', 'warm-editorial'],
        inappropriateStyles: ['dark-precision', 'enterprise-brutalism', 'neo-brutalism'],
        constraints: ['Approachable for all ages', 'Distraction-free reading mode', 'Gamification elements appropriate', 'Progress visibility'],
        compliance: ['WCAG 2.1 AA', 'Section 508', 'CIPA considerations'],
    },
    media: {
        id: 'media',
        name: 'Media & Entertainment',
        description: 'Streaming platforms, news outlets, content aggregators, social media.',
        informationDensity: 'medium',
        accessibilityRequirements: ['WCAG 2.1 AA', 'Captions/subtitles', 'Keyboard navigation for players'],
        visualPriority: ['Content thumbnails', 'Now playing', 'Recommendations', 'Navigation', 'Social interactions'],
        appropriateStyles: ['glassmorphism', 'dark-precision', 'soft-modernism', 'warm-editorial'],
        inappropriateStyles: ['enterprise-brutalism', 'industrial-minimalism'],
        constraints: ['Content-forward layout', 'Immersive dark modes', 'Fast browsing experience', 'Rich media support'],
        compliance: ['WCAG 2.1 AA', 'FCC accessibility guidelines for media'],
    },
    'enterprise-saas': {
        id: 'enterprise-saas',
        name: 'Enterprise SaaS',
        description: 'CRM, ERP, project management, HR platforms, business tools.',
        informationDensity: 'high',
        accessibilityRequirements: ['WCAG 2.1 AA', 'Keyboard navigation', 'Screen reader support'],
        visualPriority: ['Data tables/lists', 'Action buttons', 'Status indicators', 'Navigation', 'Search'],
        appropriateStyles: ['enterprise-brutalism', 'clean-utility', 'industrial-minimalism'],
        inappropriateStyles: ['neo-brutalism', 'glassmorphism', 'warm-editorial'],
        constraints: ['Professional appearance', 'Efficient workflows', 'Consistent patterns across modules', 'White-labeling support'],
        compliance: ['WCAG 2.1 AA', 'SOC 2 UI considerations', 'GDPR consent UI patterns'],
    },
    'consumer-social': {
        id: 'consumer-social',
        name: 'Consumer & Social',
        description: 'Social platforms, community apps, messaging, dating apps.',
        informationDensity: 'low',
        accessibilityRequirements: ['WCAG 2.1 AA', 'Mobile-first', 'Touch-optimized'],
        visualPriority: ['User content/posts', 'Profile info', 'Interaction buttons', 'Navigation', 'Notifications'],
        appropriateStyles: ['soft-modernism', 'glassmorphism', 'neo-brutalism'],
        inappropriateStyles: ['industrial-minimalism', 'dark-precision', 'enterprise-brutalism'],
        constraints: ['Personality-driven design', 'Engaging, not corporate', 'Emoji/media-rich', 'Thumb-zone optimization'],
        compliance: ['WCAG 2.1 AA', 'COPPA if targeting minors'],
    },
};

export function getDomainProfile(domainId: string): DomainProfile | undefined {
    return domainProfiles[domainId];
}

export function getAllDomains(): DomainProfile[] {
    return Object.values(domainProfiles);
}
    
export function getDomainIds(): string[] {
    return Object.keys(domainProfiles);
}

export default domainProfiles;

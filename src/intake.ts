import { IntakeAnswers, StyleRecommendation, DomainProfile } from './types.js';
import { getAllStyles } from './styles/index.js';
import { getDomainProfile, getAllDomains } from './domains.js';

// Map emotional registers to style affinities
const emotionStyleMap: Record<string, Record<string, number>> = {
    authoritative: { 'industrial-minimalism': 30, 'enterprise-brutalism': 25, 'dark-precision': 20, 'clean-utility': 10, 'neo-brutalism': 5 },
    calm: { 'clean-utility': 30, 'soft-modernism': 25, 'warm-editorial': 20, 'glassmorphism': 15 },
    urgent: { 'industrial-minimalism': 25, 'dark-precision': 25, 'enterprise-brutalism': 20, 'neo-brutalism': 15 },
    approachable: { 'soft-modernism': 30, 'clean-utility': 20, 'warm-editorial': 15, 'glassmorphism': 15, 'neo-brutalism': 10 },
    playful: { 'neo-brutalism': 35, 'soft-modernism': 20, 'glassmorphism': 15 },
    professional: { 'enterprise-brutalism': 25, 'clean-utility': 25, 'industrial-minimalism': 20, 'dark-precision': 15 },
    luxurious: { 'glassmorphism': 30, 'warm-editorial': 25, 'soft-modernism': 15, 'dark-precision': 10 },
    technical: { 'dark-precision': 35, 'industrial-minimalism': 25, 'enterprise-brutalism': 15 },
};

// Map user types to style affinities
const userStyleMap: Record<string, Record<string, number>> = {
    executive: { 'enterprise-brutalism': 25, 'clean-utility': 20, 'industrial-minimalism': 15, 'soft-modernism': 10 },
    developer: { 'dark-precision': 35, 'industrial-minimalism': 25, 'clean-utility': 15 },
    consumer: { 'soft-modernism': 25, 'glassmorphism': 20, 'neo-brutalism': 15, 'clean-utility': 10 },
    operator: { 'industrial-minimalism': 30, 'dark-precision': 25, 'enterprise-brutalism': 15 },
    creative: { 'neo-brutalism': 25, 'glassmorphism': 20, 'dark-precision': 15, 'warm-editorial': 10 },
    reader: { 'warm-editorial': 35, 'soft-modernism': 20, 'clean-utility': 15 },
};

// Map interaction patterns to style affinities
const patternStyleMap: Record<string, Record<string, number>> = {
    'data-heavy': { 'industrial-minimalism': 30, 'dark-precision': 25, 'enterprise-brutalism': 20 },
    'action-driven': { 'enterprise-brutalism': 20, 'clean-utility': 20, 'neo-brutalism': 15, 'soft-modernism': 15 },
    'read-only': { 'warm-editorial': 30, 'clean-utility': 20, 'soft-modernism': 15 },
    'creative-workspace': { 'dark-precision': 25, 'glassmorphism': 20, 'neo-brutalism': 15 },
    'mixed': { 'clean-utility': 20, 'enterprise-brutalism': 15, 'soft-modernism': 15 },
};

function inferDomain(description: string): DomainProfile | undefined {
    const desc = description.toLowerCase();
    const keywords: Record<string, string[]> = {
        logistics: ['logistics', 'supply chain', 'warehouse', 'fleet', 'shipping', 'delivery', 'tracking'],
        fintech: ['finance', 'banking', 'payment', 'trading', 'fintech', 'investment', 'portfolio'],
        healthcare: ['health', 'medical', 'patient', 'clinical', 'telemedicine', 'wellness'],
        'creative-tools': ['design', 'creative', 'editor', 'canvas', 'illustration', 'photo', 'video editing'],
        'developer-tools': ['developer', 'code', 'ide', 'devops', 'ci/cd', 'api', 'terminal', 'cli'],
        'e-commerce': ['shop', 'store', 'e-commerce', 'ecommerce', 'product', 'marketplace', 'retail'],
        education: ['education', 'learning', 'course', 'school', 'student', 'lms', 'training'],
        media: ['media', 'streaming', 'video', 'music', 'news', 'content', 'entertainment'],
        'enterprise-saas': ['crm', 'erp', 'enterprise', 'saas', 'business', 'management', 'admin'],
        'consumer-social': ['social', 'community', 'chat', 'messaging', 'profile', 'feed'],
    };

    let bestMatch: string | undefined;
    let bestScore = 0;

    for (const [domain, words] of Object.entries(keywords)) {
        const score = words.filter(w => desc.includes(w)).length;
        if (score > bestScore) {
            bestScore = score;
            bestMatch = domain;
        }
    }

    return bestMatch ? getDomainProfile(bestMatch) : undefined;
}

export function runIntake(answers: IntakeAnswers): {
    domain: DomainProfile | undefined;
    recommendations: StyleRecommendation[];
} {
    const allStyles = getAllStyles();
    const scores: Record<string, number> = {};

    // Initialize scores
    for (const style of allStyles) {
        scores[style.id] = 0;
    }

    // 1. Emotional register scoring
    const emotionKey = answers.emotionalRegister.toLowerCase();
    for (const [emotion, styles] of Object.entries(emotionStyleMap)) {
        if (emotionKey.includes(emotion)) {
            for (const [styleId, score] of Object.entries(styles)) {
                scores[styleId] = (scores[styleId] || 0) + score;
            }
        }
    }

    // 2. End-user scoring
    const userKey = answers.endUser.toLowerCase();
    for (const [userType, styles] of Object.entries(userStyleMap)) {
        if (userKey.includes(userType)) {
            for (const [styleId, score] of Object.entries(styles)) {
                scores[styleId] = (scores[styleId] || 0) + score;
            }
        }
    }

    // 3. Interaction pattern scoring
    const patternKey = answers.interactionPattern.toLowerCase();
    for (const [pattern, styles] of Object.entries(patternStyleMap)) {
        if (patternKey.includes(pattern) || pattern.includes(patternKey)) {
            for (const [styleId, score] of Object.entries(styles)) {
                scores[styleId] = (scores[styleId] || 0) + score;
            }
        }
    }

    // 4. Domain inference and scoring
    const domain = answers.industry
        ? getDomainProfile(answers.industry) || inferDomain(answers.projectDescription)
        : inferDomain(answers.projectDescription);

    if (domain) {
        for (const appropriateStyle of domain.appropriateStyles) {
            scores[appropriateStyle] = (scores[appropriateStyle] || 0) + 20;
        }
        for (const inappropriateStyle of domain.inappropriateStyles) {
            scores[inappropriateStyle] = (scores[inappropriateStyle] || 0) - 25;
        }
    }

    // 5. Device scoring
    if (answers.devices.some(d => d.toLowerCase().includes('mobile'))) {
        scores['soft-modernism'] = (scores['soft-modernism'] || 0) + 10;
        scores['glassmorphism'] = (scores['glassmorphism'] || 0) + 5;
        scores['industrial-minimalism'] = (scores['industrial-minimalism'] || 0) - 5;
    }
    if (answers.devices.some(d => d.toLowerCase().includes('desktop'))) {
        scores['enterprise-brutalism'] = (scores['enterprise-brutalism'] || 0) + 5;
        scores['industrial-minimalism'] = (scores['industrial-minimalism'] || 0) + 5;
        scores['dark-precision'] = (scores['dark-precision'] || 0) + 5;
    }

    // 6. Brand constraint scoring
    if (answers.existingBrand) {
        // Existing brand favors adaptable styles
        scores['clean-utility'] = (scores['clean-utility'] || 0) + 10;
        scores['soft-modernism'] = (scores['soft-modernism'] || 0) + 5;
        // Strongly opinionated styles are harder to adapt
        scores['neo-brutalism'] = (scores['neo-brutalism'] || 0) - 10;
        scores['glassmorphism'] = (scores['glassmorphism'] || 0) - 10;
    }

    // Normalize scores to 0-100
    const maxScore = Math.max(...Object.values(scores), 1);
    const minScore = Math.min(...Object.values(scores), 0);
    const range = maxScore - minScore || 1;

    const recommendations: StyleRecommendation[] = allStyles
        .map(style => {
            const rawScore = scores[style.id] || 0;
            const normalizedScore = Math.round(((rawScore - minScore) / range) * 100);
            return {
                styleId: style.id,
                styleName: style.name,
                score: Math.min(99, Math.max(5, normalizedScore)),
                rationale: generateRationale(style.id, answers, domain),
                risk: generateRisk(style.id, answers, domain),
            };
        })
        .sort((a, b) => b.score - a.score);

    return { domain, recommendations };
}

function generateRationale(styleId: string, answers: IntakeAnswers, domain?: DomainProfile): string {
    const rationales: Record<string, string> = {
        'neo-brutalism': 'Bold, unapologetic visual identity that creates instant brand recognition. Strong for creative and youth-oriented contexts.',
        'industrial-minimalism': 'Handles high data density cleanly, enforces functional hierarchy, removes decorative noise. Built for efficiency-focused environments.',
        'enterprise-brutalism': 'Strong visual anchoring for complex, multi-panel layouts. Professional weight that communicates institutional reliability.',
        'clean-utility': 'Maximized clarity and accessibility. The design disappears so the content can work. Adaptable to any brand.',
        'glassmorphism': 'Premium, modern aesthetic that creates visual depth. Excellent for consumer-facing products that need to feel sophisticated.',
        'soft-modernism': 'Warm, approachable design that reduces cognitive friction. Ideal for products where user comfort drives retention.',
        'dark-precision': 'Purpose-built for technical users who live in dark mode. Maximum information density with developer-native patterns.',
        'warm-editorial': 'Content-forward design with reading-optimized typography. Perfect for products where text quality drives engagement.',
    };
    return rationales[styleId] || 'A robust design system for this project context.';
}

function generateRisk(styleId: string, answers: IntakeAnswers, domain?: DomainProfile): string {
    const risks: Record<string, string> = {
        'neo-brutalism': 'Can feel unprofessional in enterprise contexts. Heavy borders increase visual weight on small screens.',
        'industrial-minimalism': 'Can feel cold and impersonal for consumer-facing products. Steep learning curve for non-technical users.',
        'enterprise-brutalism': 'Heavy on viewport real estate. Can feel institutional and rigid for creative contexts.',
        'clean-utility': 'May feel too lightweight or generic for brand-heavy products. Can lack visual distinction.',
        'glassmorphism': 'Performance concerns with backdrop blur on low-end devices. Accessibility challenges with translucent backgrounds.',
        'soft-modernism': 'Can feel juvenile or unserious for high-stakes professional contexts. Rounded forms waste screen space.',
        'dark-precision': 'Alienating for non-technical users. Dark-only approach limits use in bright-environment contexts.',
        'warm-editorial': 'Not suited for data-heavy or interactive-heavy interfaces. Serif typography can feel dated to some audiences.',
    };
    return risks[styleId] || 'Consider the project context carefully before committing.';
}

import { DesignStyle } from '../types.js';
import neoBrutalism from './neo-brutalism.js';
import industrialMinimalism from './industrial-minimalism.js';
import enterpriseBrutalism from './enterprise-brutalism.js';
import cleanUtility from './clean-utility.js';
import glassmorphism from './glassmorphism.js';
import softModernism from './soft-modernism.js';
import darkPrecision from './dark-precision.js';
import warmEditorial from './warm-editorial.js';

const styleRegistry: Record<string, DesignStyle> = {
    'neo-brutalism': neoBrutalism,
    'industrial-minimalism': industrialMinimalism,
    'enterprise-brutalism': enterpriseBrutalism,
    'clean-utility': cleanUtility,
    'glassmorphism': glassmorphism,
    'soft-modernism': softModernism,
    'dark-precision': darkPrecision,
    'warm-editorial': warmEditorial,
};

export function getStyle(styleId: string): DesignStyle | undefined {
    return styleRegistry[styleId];
}

export function getAllStyles(): DesignStyle[] {
    return Object.values(styleRegistry);
}

export function getStyleIds(): string[] {
    return Object.keys(styleRegistry);
}

export default styleRegistry;

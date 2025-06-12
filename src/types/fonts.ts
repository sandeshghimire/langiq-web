// Font utility types and constants for consistent usage across the project

export type FontFamily = 'inter' | 'poppins' | 'roboto' | 'open-sans' | 'helvetica';

export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export const fontClasses = {
    inter: {
        light: 'font-inter-light',
        normal: 'font-inter-normal',
        medium: 'font-inter-medium',
        semibold: 'font-inter-semibold',
        bold: 'font-inter-bold',
    },
    poppins: {
        light: 'font-poppins-light',
        normal: 'font-poppins-normal',
        medium: 'font-poppins-medium',
        semibold: 'font-poppins-semibold',
        bold: 'font-poppins-bold',
    },
    roboto: {
        light: 'font-roboto-light',
        normal: 'font-roboto-normal',
        medium: 'font-roboto-medium',
        bold: 'font-roboto-bold',
    },
    'open-sans': {
        light: 'font-open-sans-light',
        normal: 'font-open-sans-normal',
        medium: 'font-open-sans-medium',
        semibold: 'font-open-sans-semibold',
        bold: 'font-open-sans-bold',
    },
    helvetica: 'font-helvetica',
} as const;

// Helper function to get font class
export function getFontClass(family: FontFamily, weight?: FontWeight): string {
    if (family === 'helvetica') {
        return fontClasses.helvetica;
    }

    if (!weight) {
        weight = 'normal';
    }

    return fontClasses[family][weight];
}

// Commonly used font combinations
export const fontCombinations = {
    // Heading + Body combinations
    modernClean: {
        heading: 'font-inter-bold',
        subheading: 'font-inter-semibold',
        body: 'font-open-sans-normal',
        caption: 'font-inter-normal',
    },
    friendly: {
        heading: 'font-poppins-bold',
        subheading: 'font-poppins-semibold',
        body: 'font-open-sans-normal',
        caption: 'font-open-sans-normal',
    },
    technical: {
        heading: 'font-roboto-bold',
        subheading: 'font-roboto-medium',
        body: 'font-roboto-normal',
        caption: 'font-roboto-light',
    },
    classic: {
        heading: 'font-helvetica font-bold',
        subheading: 'font-helvetica font-semibold',
        body: 'font-open-sans-normal',
        caption: 'font-helvetica font-normal',
    },
} as const;

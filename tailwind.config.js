/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
                handwritten: ['var(--font-handwritten)'],
            },
            colors: {
                gray: {
                    750: '#2d3748',
                    850: '#1a202c',
                    950: '#0f1117',
                },
            },
            animation: {
                'gradient-slow': 'gradient-slow 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
                'pulse-slower': 'pulse-slower 7s ease-in-out infinite',
                'fade-in': 'fade-in 0.8s ease-in forwards',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
                'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
                'slide-up': 'slide-up 1s ease-out forwards',
                'typing': 'typing 2.5s steps(40, end)',
                'typing-delay': 'typing 2.5s 0.5s steps(40, end)',
                'bounce-subtle': 'bounce-subtle 5s infinite ease-in-out',
            },
            keyframes: {
                'gradient-slow': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.7' },
                    '50%': { opacity: '1' },
                },
                'pulse-slower': {
                    '0%, 100%': { opacity: '0.1' },
                    '50%': { opacity: '0.2' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'fade-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'typing': {
                    '0%': { width: '0', opacity: '0' },
                    '1%': { opacity: '1' },
                    '100%': { width: '100%', opacity: '1' },
                },
                'bounce-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}

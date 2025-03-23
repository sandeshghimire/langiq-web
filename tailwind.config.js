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
        },
    },
    plugins: [],
}

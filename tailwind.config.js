/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'accent': '#48A6A7',
                'accent-light': '#9ACBD0',
            },
            backgroundColor: {
                'main': '#F2EFE7',
                'secondary': '#9ACBD0',
            },
            textColor: {
                'main': '#006A71',
            },
        },
    },
    plugins: [],
} 
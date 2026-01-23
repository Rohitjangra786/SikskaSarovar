/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./constants/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#168B99', // Custom Teal
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#00385D', // Custom Dark Blue
                    950: '#082f49',
                },
                accent: {
                    50: '#fcf8ec',
                    100: '#f7edcd',
                    200: '#efdb9b',
                    300: '#D3B16D', // Custom Gold
                    400: '#ca8a04',
                    500: '#D3B16D', // Using Gold as primary accent
                    600: '#854d0e',
                    700: '#713f12',
                    800: '#5e320f',
                    900: '#451a03',
                    950: '#451a03',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                barlow: ['Barlow Condensed', 'sans-serif']
            },
            colors: {
                mainColor: '#3B82F6'
            }
        }
    },
    plugins: [],
}
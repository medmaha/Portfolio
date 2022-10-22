/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {
                "bg-primary": "000000e3",
            },
            screens: {
                mobile: { raw: "(min-width: 500px)" },
                // => @media (min-height: 800px) { ... }
            },
        },
    },
    plugins: [],
}


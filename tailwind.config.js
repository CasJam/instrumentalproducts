/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        extend: {
            screens: {
                xs: "400px",
            },
            fontFamily: {
                text: ["apparat", "sans-serif"],
                display: ["niveau-grotesk", "sans-serif"],
                labels: ["ff-ernestine-pro", "serif"],
            },
            colors: {
                black: "#031E27",
                white: "#ffffff",
                "off-white": "#FEFCF4",
                gray: {
                    50: "#f6f6f5",
                    100: "#e7e7e6",
                    200: "#d2d1cf",
                    300: "#b3b2ad",
                    400: "#8c8a84",
                    500: "#716f69",
                    600: "#605f5a",
                    700: "#51514d",
                    800: "#474743",
                    900: "#3e3e3b",
                    950: "#272725",
                },
                primary: {
                    50: "#fef3f2",
                    100: "#ffe4e1",
                    200: "#ffcec9",
                    300: "#feaba3",
                    400: "#fb7a6e",
                    500: "#f24333",
                    600: "#e03222",
                    700: "#bd2618",
                    800: "#9c2318",
                    900: "#81241b",
                    950: "#460e09",
                },
                surfaces: {
                    50: "#f8f7f4",
                    100: "#f2f1eb",
                    200: "#dddacb",
                    300: "#c7c1aa",
                    400: "#b0a587",
                    500: "#a0916f",
                    600: "#938263",
                    700: "#7a6a54",
                    800: "#645748",
                    900: "#52473c",
                    950: "#2b241f",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

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
                text: ["barlow", "sans-serif"],
                display: ["barlow", "sans-serif"],
                labels: ["barlow", "serif"],
            },
            colors: {
                black: "#182125",
                white: "#ffffff",
                "off-white": "#ffffff",
                gray: {
                    50: "#f4f5f7",
                    100: "#e4e8e9",
                    200: "#cbd3d6",
                    300: "#a7b3b9",
                    400: "#7c8c94",
                    500: "#5c6b73",
                    600: "#535f67",
                    700: "#475057",
                    800: "#3f464b",
                    900: "#383d41",
                    950: "#22262a",
                },
                primary: {
                    50: "#fef2f3",
                    100: "#fee2e4",
                    200: "#ffc9cd",
                    300: "#fda4aa",
                    400: "#fa6f78",
                    500: "#f1424e",
                    600: "#df2935",
                    700: "#bb1a25",
                    800: "#9b1922",
                    900: "#801c23",
                    950: "#46090d",
                },
                secondary: {
                    50: "#f4f7f9",
                    100: "#eaf0f5",
                    200: "#d9e3ec",
                    300: "#c1d1e0",
                    400: "#a8b9d1",
                    500: "#91a2c3",
                    600: "#7180ac",
                    700: "#68759a",
                    800: "#555f7e",
                    900: "#495166",
                    950: "#2b2f3b",
                },
                surfaces: {
                    50: "#f3f8f8",
                    100: "#e1ebec",
                    200: "#c6d9db",
                    300: "#9ebec2",
                    400: "#6f9ba1",
                    500: "#537f87",
                    600: "#486a72",
                    700: "#3f585f",
                    800: "#394b51",
                    900: "#334146",
                    950: "#253237",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
      extend: {
        screens: {
          xs: "400px",
        },
          fontFamily: {
          text: ["alda", "serif"],
          display: ["paralucent", "sans-serif"]
        },
        colors: {
          black: "#061423",
          "off-white": {
            '50': '#f8f5f2',
            '100': '#f0eae4',
            '200': '#e1d4c7',
            '300': '#cdb7a4',
            '400': '#b8967f',
            '500': '#aa7d65',
            '600': '#9c6c5a',
            '700': '#82594c',
            '800': '#6a4a42',
            '900': '#573d37',
            '950': '#2e1f1c',
          },
          gray: {
            50: "#f5f6f6",
            100: "#e5e7e8",
            200: "#cdd1d4",
            300: "#aab1b6",
            400: "#808990",
            500: "#656e75",
            600: "#565d64"
          },
          primary: {
            '50': '#fff1f3',
            '100': '#ffe3e7',
            '200': '#ffccd4',
            '300': '#ffa2b2',
            '400': '#fe6e8a',
            '500': '#f7325d',
            '600': '#e51950',
            '700': '#c10f42',
            '800': '#a20f3f',
            '900': '#8a113c',
            '950': '#4d041b',
          },
          secondary: {
            '50': '#f0f7ff',
            '100': '#dfeeff',
            '200': '#b8dfff',
            '300': '#7ac5ff',
            '400': '#49b2fd',
            '500': '#098eee',
            '600': '#0070cc',
            '700': '#0058a5',
            '800': '#044c88',
            '900': '#0a4070',
            '950': '#06274b'
          },
          tertiary: {
            500: "#0B2847"
          },
        },
      },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};

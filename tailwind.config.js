/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bRadius: "linear-gradient(89.56deg, #FC8C02 -42.7%, #5618FF 117.16%)",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

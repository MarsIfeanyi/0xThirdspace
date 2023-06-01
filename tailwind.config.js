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
        "lg-1": "#FC8C02",
        "bl-1": "#0F0F0F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradfient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "lg-2": "linear-gradient(89.56deg, #FC8C02 -42.7%, #5618FF 117.16%)",
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

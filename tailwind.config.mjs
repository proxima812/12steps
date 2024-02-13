/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "center-gradient-dark":
          "radial-gradient(76.33% 76.59% at 50.15% 6.06%, #1a1a1a 0, rgba(26, 26, 26, 0.38) 100%)",
        "center-gradient-light":
          "radial-gradient(76.33% 76.59% at 50.15% 6.06%, #fff 0, rgba(255, 255, 255, 0.38) 100%)",
      },
   
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

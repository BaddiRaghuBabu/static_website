/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@shadcn/ui/tailwind")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

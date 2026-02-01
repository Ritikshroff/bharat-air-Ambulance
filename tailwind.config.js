const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          red: {
            DEFAULT: "#E53935",
            dark: "#B71C1C",
            light: "#FFEBEE",
          },
          blue: {
            DEFAULT: "#1565C0",
            dark: "#0D47A1",
            light: "#E3F2FD",
          },
          dark: "#212121",
          grey: "#F5F5F5",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};

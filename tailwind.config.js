/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "black-gradient":
          "var(--black-gradient, radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%))",
      },
    },
  },
  plugins: [],
};

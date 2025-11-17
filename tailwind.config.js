/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'fluid-title': 'clamp(1.5rem, 4vw, 3rem)',
        'fluid-base': 'clamp(0.9rem, 2vw, 1.2rem)',
      },
    },
  },
  plugins: [],
};

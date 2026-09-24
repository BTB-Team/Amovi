/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amovi: {
          primary: '#0F172A',   // رنگ تیره شرکتی برای هدر و متون
          secondary: '#2563EB', // رنگ آبی جذاب برای دکمه‌های CTA و رزرو
          accent: '#F8FAFC',    // رنگ روشن برای پس‌زمینه کارت‌ها
        }
      }
    },
  },
  plugins: [],
}
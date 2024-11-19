/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        footerBackground: "#FAF5F5",
        myBlack:"#21243D",
        myButton: "#F98585",
        background: "#f6f1f1",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
} satisfies Config;

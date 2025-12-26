import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      colors: {
        // Định nghĩa màu nếu muốn dùng biến semantic thay vì hardcode
        primary: {
          DEFAULT: "#1e3a8a", // blue-900
          hover: "#1e40af",
        },
        accent: {
          DEFAULT: "#f59e0b", // amber-500
        }
      }
    },
  },
  plugins: [],
};
export default config;
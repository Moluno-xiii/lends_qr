import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39CDCC",
        secondary: "#213F7D",
        "text-primary": "#545F7D ",
        error: "#E4033B",
      },
    },
  },
  plugins: [],
};
export default config;

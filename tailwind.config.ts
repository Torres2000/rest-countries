/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Dark-Blue":
          "hsl(209, 23%, 22%)" /*(Dark Mode Elements)*/,
        "Very-Dark-Blue-bg":
          "hsl(207,26%,17%)" /* (Dark Mode Background) */,
        "Very-Dark-Blue-text":
          "hsl(200, 15%, 8%)" /* (Light Mode Text) */,
        "Dark-Gray":
          "hsl(0, 0%, 52%)" /*  (Light Mode Input) */,
        "Very-Light-Gray":
          "hsl(0, 0%, 98% )" /*  (Light Mode Background) */,
      },
    },
  },
  plugins: [],
};
export default config;

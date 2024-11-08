import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "alpha-50": "#ffffff0a",
        "alpha-300": "#ffffff29",
        "alpha-400": "#ffffff3d",
        "alpha-600": "#ffffff7a",
        "alpha-800": "#ffffffcc",
        "alpha-900": "#ffffffeb",
        "text-color": "rgba(var(--text-color))",
        "text-gray-900": "rgb(var(--text-color)/ 90%)",
        "text-gray-800": "rgb(var(--text-color)/ 80%)",
        "text-gray-700": "rgb(var(--text-color)/ 70%)",
        "brand-50": "rgba(var(--brand-50))",
        "brand-100": "rgba(var(--brand-100))",
        "brand-200": "rgba(var(--brand-200))",
        "brand-500": "rgba(var(--brand-500))",
        "brand-600": "rgba(var(--brand-600))",
        "brand-800": "rgba(var(--brand-800))",
        "slate-100": "rgba(var(--slate-100))",
        "bg-color": "rgba(var(--bg-color))",
        "brand-background": "rgba(var(--brand-background))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    // fontSize: {
    //   base: "1rem",
    //   sm: "0.875rem",
    // },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;

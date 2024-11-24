import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand': {
                            'primary': '#4697b5',
                            'dark': '#0A0A0A',
                            'card': '#1A1A1A',
                            'text': '#6B7280'
                        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      fontSize: {
        '7xl': '5rem',
    },
    borderRadius: {
        'card': '1.5rem'
    },
    },
  },
  plugins: [],
} satisfies Config;

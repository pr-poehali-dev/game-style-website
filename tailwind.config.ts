import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "gaming-neon-green": "hsl(var(--gaming-neon-green))",
        "gaming-neon-pink": "hsl(var(--gaming-neon-pink))",
        "gaming-neon-purple": "hsl(var(--gaming-neon-purple))",
        "gaming-neon-blue": "hsl(var(--gaming-neon-blue))",
        "gaming-neon-cyan": "hsl(var(--gaming-neon-cyan))",
        "gaming-neon-orange": "hsl(var(--gaming-neon-orange))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "neon-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "cyber-glitch": {
          "0%, 14%, 15%, 49%, 50%, 99%, 100%": {
            transform: "translate(0)",
            filter: "hue-rotate(0deg)",
          },
          "15%, 49%": {
            transform: "translate(-2px, 2px)",
            filter: "hue-rotate(90deg)",
          },
        },
        "hologram-flicker": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.2) saturate(1.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        cartBounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "cyber-glitch": "cyber-glitch 4s ease-in-out infinite",
        "hologram-flicker": "hologram-flicker 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "cart-bounce": "cartBounce 0.6s ease-in-out",
        "product-hover": "transform 0.3s ease-in-out",
        "price-glow": "neon-pulse 1.5s ease-in-out infinite",
      },
      boxShadow: {
        "neon-green": "0 0 20px hsl(var(--gaming-neon-green) / 0.5)",
        "neon-purple": "0 0 20px hsl(var(--gaming-neon-purple) / 0.5)",
        "neon-pink": "0 0 20px hsl(var(--gaming-neon-pink) / 0.5)",
        "neon-cyan": "0 0 20px hsl(var(--gaming-neon-cyan) / 0.5)",
        "cyber-glow":
          "0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.1)",
        hologram:
          "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(255, 0, 255, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

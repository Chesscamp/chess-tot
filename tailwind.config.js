/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",


    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        leanground: "#F3EAF4",
      },
      width:{
        "w-w":"90%",
      },
      height:{
        "h":"6%",
        "h-h":"12%",
        "f":"47%"
      },
      backgroundColor:{
        "cust-purple":"#6209CE",
        "cust-brown":"#2D2D2D"

      },
    },
  },
  plugins: [],
};

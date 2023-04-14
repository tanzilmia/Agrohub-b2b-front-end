/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      Primary: "#219EBC",
      Secondary: "#3C3C3B",
      Success: "#10B981",
      Warning: "#F59E0B",
      Danger: "#EF4444",
      Info: "#3B82F6",
      Light: "#F9FAFB",
      Dark: "#1F2937",
      Rose: "#FF6B6B",
      Sky: "#7FDBFF",
      primary: "#219EBC",
      secondary: "#3C3C3B",
      success: "#10B981",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#3B82F6",
      light: "#F9FAFB",
      dark: "#1F2937",
      rose: "#FF6B6B",
      sky: "#7FDBFF",
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};

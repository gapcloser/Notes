module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ["Josefin Sans", "sans-serif"],
      secondary: ["Comfortaa", "cursive"],
    },
    extend: {
      colors: {
        back: "#f2f2f2",
        blueColor: "#5786ff",
      },
      height: {
        half: "50vh",
      },
      minHeight: {
        oneFour: "25vh",
        3: "3rem",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

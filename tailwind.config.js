/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#928a97",
          "200": "#000c24",
          "300": "#0a0a0a",
          "400": "rgba(146, 138, 151, 0.27)",
        },
        white: "#fff",
        black: "#000",
        tomato: "#f44336",
        silver: "#c4c4c4",
        aquamarine: "#5be7c3",
        "new-light": "#838397",
      },
      fontFamily: {
        spartan: "Spartan",
      },
      borderRadius: {
        "16xl": "35px",
      },
    },
    fontSize: {
      "5xl": "24px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "19xl": "38px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

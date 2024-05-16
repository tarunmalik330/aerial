/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "text-xs": "32px",
        "text-sm": "40px",
        "text-md": "86.15px",
        "text-lg": "130px"
      },
      letterSpacing: {
        "letterspacing-xs": "4px"
      },
      lineHeight: {
        "lh-xs": "110%",
        "lh-xxs": "120%",
        "lh-xsm": "130%",
        "lh-sm": "147%",
        "lh-md": "150%"
      },
      backgroundSize: {
        "bgsize": "100% 100%"
      },
      colors: {
        "color-orange": "#E67E22",
        "color-lightblack": "#362720",
        "color-lightblack-xs": "#4D4D4D",
        "color-lightblack-sm": "#4D4D4D",
        "color-grey": "#A0A0A0",
        "color-lightgrey": "#F1F1F1"
      },
      borderRadius: {
        "radius-xs": "10px",
        "radius-sm": "106px",
      },
      backgroundColor: {
        "bg-darkblack": "#111111",
        "bg-lightyellow": "#FFF7EF",
        "bg-orange": "#E67E22"
      }

    },
  },
  plugins: [],
}


import type { Config } from "tailwindcss";
import color from "tailwindcss/colors";

const PRIMARY = {
  primary: "#0F2657",
  secondary: "#53B6ED",
  tietary: "#9FDFF6",
};

const NEUTRAL = {
  black: "#191D24",
  white: "#FFFFFF",
  border: "#C9CFD9",
  bg: "#F1F4F6",
  bodyText: "#64728C",
  sideBar: "#0F2657",
  greyText: "#8D99AE",
};

const ERROR = {
  150: "#910D2C",
  critical: "#DA1414",
  100: "#EF476F",
  50: "#FBD0DA",
};

const WARNING = {
  150: "#996B00",
  100: "#FFD166",
  50: "#FFF0CC",
};

const TINT = {
  250: "#82CAF2",
  200: "#B1DEF7",
  150: "#DFF1FC",
  100: "#E8F5FD",
  50: "#F1F9FE",
};

const SUCCESS = {
  150: "#065031",
  100: "#0EAD69",
  50: "#D5FCEB",
};
const SHADE = {
  250: "#06293C",
  200: "#0B486A",
  150: "#106898",
  100: "#1587C6",
  50: "#26A3E8",
};

const GREY = {
  100: "#8A8A8A",
};

const BORDER = {
  primary: "#CDCED9",
  secondary: "#CDCED9",
};
const TEXT = {
  main: "#393A4A",
  secondary: "#6B6C7E",
};

const palette = {
  brand: {
    ...PRIMARY,
  },
  success: {
    ...SUCCESS,
  },
  text: {
    ...TEXT,
  },
  shade: {
    ...SHADE,
  },
  tint: {
    ...TINT,
  },
  warning: {
    ...WARNING,
  },
  grey: {
    ...GREY,
  },
  error: {
    ...ERROR,
  },
  neutral: {
    ...NEUTRAL,
  },
  border: {
    ...BORDER,
  },
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      ...palette,
      ...color,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      open_sans: ["Open Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
      poppin: ["Poppins", "sans-serif"],
      dm_san: ["DM Sans", "sans-serif"],
      fira: ["Fira Sans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

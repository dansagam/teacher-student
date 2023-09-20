import type { Config } from "tailwindcss";
import color from "tailwindcss/colors";

export const TEXT = {
  primary: "#23262F",
  secondary: "#777E90",
  light: "#1D1D1D",
  lightRgba: "rgba(29, 29, 29, 0.7)",
  black_main: "#1B1B1B",
};
export const ERROR = {
  70: "rgba(209, 8, 8, 0.7)",
  30: "rgba(209, 8, 8, 0.3)",
};
export const BACKGROUND = {
  main: "#F5F5F5",
  white: "#ffffff",
  card: "#D9D9D9",
  footer: "#FFF9EA",
  home_top: "#F4EFEF",
  cart_bg: "#F4F5F6",
  misc: "rgba(217, 217, 217, 0.15)",
};
export const PRIMARY = {
  main: "#F3B400",
  secondary: "#FFF9EA",
  neutral_500: "#848FAC",
  auth_link: "#F48220",
};

export const COMMON = {
  white: "#fff",
  black: "#000",
  white_50: "rgba(255, 255, 255, 0.5)",
  black_50: "rgba(0, 0, 0, 0.5)",
};
export const NEUTRAL = {
  6: "#E6E8EC",
  2: "#23262F",
  7: "#777E90",
  4: " #777E91",
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

const MISC = {
  100: "#2F2F2F",
};

const GREY = {
  100: "#8A8A8A",
};

export const palette = {
  primary: {
    ...PRIMARY,
  },
  text: {
    ...TEXT,
  },
  success: {
    ...SUCCESS,
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
  background: {
    ...BACKGROUND,
  },
  common: {
    ...COMMON,
  },
  neutrals: {
    ...NEUTRAL,
  },
  error: {
    ...ERROR,
  },
  misc: {
    ...MISC,
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
      spacing: {
        // "8xl": "96rem",
        "8xl": "1980px",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    screens: {
      xxlB: { max: "2560px" },
      // => @media (max-width: 1535px) { ... }
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xxl: { max: "1440px" },
      // => @media (max-width: 1279px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1028px" },
      // => @media (max-width: 1023px) { ... }

      mdlg: { max: "912px" },

      md: { max: "834px" },
      // => @media (max-width: 767px) { ... }

      xlsm: { max: "550px" },
      // => @media (max-width: 550px) { ... }

      mdsm: { max: "425px" },
      // => @media (max-width: 425px) { ... }

      minsm: { max: "414px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "375px" },
      // => @media (max-width: 639px) { ... }
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1440px",
      vvsm: { max: "320px" },

      vsm: { max: "280px" },
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

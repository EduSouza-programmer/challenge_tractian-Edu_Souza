import { generateMedia } from "styled-media-query";
import * as polished from "polished";

import {
  mediaQueries,
  shadows,
  icons,
  modifiers,
  cubicBezier,
} from "@/utils/theme/theme.helpers";

export default {
  modifiers,
  gridLayout: {
    container: "130rem",
    gutter: "3.2rem",
  },
  models: {
    button: {
      size: {
        xxsmall: "0",
        xsmall: "0.8rem",
        small: `0.8rem 1.6rem`,
        medium: `1rem 3.2rem`,
        large: `1.1rem 4.0rem`,
        xlarge: `1.3rem 5.1rem`,
      },
      height: {
        xsmall: "3rem",
        small: "3.5rem",
        medium: "4rem",
        large: "5rem",
        xlarge: "6rem",
      },
    },
    icon: {
      list: icons,
      size: {
        xxsmall: "1.8rem",
        xsmall: "2.1rem",
        small: "2.4rem",
        medium: "2.6rem",
        large: "2.8rem",
      },
    },
    textField: {
      size: {
        small: `0.4rem 0`,
        medium: `0.8rem 0`,
        large: `0.8rem 0`,
      },
      height: {
        small: "2.3rem",
        medium: "2.7rem",
        large: "3.2rem",
      },
    },
  },
  typography: {
    fontFamily: `"Poppins", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"`,
    fontWeight: {
      light: 300,
      medium: 400,
      semiBold: 500,
      boldLight: 600,
      bold: 700,
    },
    fontSizes: {
      xxsmall: "1.2rem",
      xsmall: "1.4rem",
      small: "1.6rem",
      medium: "1.8rem",
      large: "2.0rem",
      xlarge: "2.8rem",
      xxlarge: "3.6rem",
      huge: "5.2rem",
    },
    lineHeight: {
      hack: "1",
      xcompact: "1.7rem",
      compact: "1.9rem",
      normal: "2.4rem",
      reading: "2.6rem",
      xreading: "3.2rem",
      xxreading: "4.0rem",
    },
  },
  palette: {
    page: {
      primary: {
        main: "#2563eb",
        light: polished.darken(0.1, "#334BC8"),
        dark: "#1e3a8a",
      },
      secondary: {
        main: "#5EDF80",
      },
      background: {
        primary: {
          main: "#fbfbfb",
        },
        secondary: {
          main: "#E5E5E5",
        },
        white: {
          main: "#fff",
        },
        blue: {
          main: "#2196f3",
        },
      },
      white: {
        main: "#FAFAFA",
      },
      black: {
        main: "#030517",
      },
      gray: {
        main: "#8F8F8F",
        light: "#EAEAEA",
        dark: "#2E2F42",
      },
      red: {
        main: "#FF5F5F",
      },
      blue: {
        main: "#001C33",
      },
    },
    textField: {
      primary: {
        main: "#EAEAEA",
        dark: polished.darken(0.018, "#EAEAEA"),
      },
      secondary: {
        main: "#F2F2F2",
        dark: polished.darken(0.1, "#F2F2F2"),
      },
    },
    radio: {
      primary: {
        main: "#334BC8",
      },
      secondary: {
        main: "#3CD3C1",
      },
    },
    checkbox: {
      primary: {
        main: "#334BC8",
      },
      secondary: {
        main: "#3CD3C1",
        dark: polished.darken(0.15, "#3CD3C1"),
      },
    },
    button: {
      none: {
        main: undefined,
        light: undefined,
        dark: undefined,
      },
      primary: {
        main: "#1e3a8a",
        light: polished.lighten(0.1, "#1e3a8a"),
        dark: polished.darken(0.1, "#1e3a8a"),
      },
      secondary: {
        main: "#5EDF80",
        light: polished.lighten(0.1, "#5EDF80"),
        dark: polished.darken(0.1, "#5EDF80"),
      },
      white: {
        main: "#fff",
        ligth: "",
        dark: "",
      },
    },
    icon: {
      white: {
        main: "#F2F2F2",
      },
      black: {
        main: "#030517",
      },
      blue: {
        main: "#011FBB",
      },
      pink: {
        main: "#F231A5",
      },
      gray: {
        main: "#8F8F8F",
      },
    },
    notify: {
      error: {
        main: "#FF5F5F",
      },
      warning: {
        main: "#C89601",
      },
      info: {
        main: "",
      },
      success: {
        main: "#2563eb",
      },
      disabled: {
        main: polished.lighten(0.2, "#8F8F8F"),
        light: polished.lighten(0.3, "#8F8F8F"),
        dark: polished.darken(0.1, "#8F8F8F"),
      },
      hint: {
        main: "#00000061",
      },
    },
    text: {
      black: {
        main: "#000000de",
        dark: "",
        light: "",
      },
      blue: {
        main: "#2563eb",
        dark: "#001C33",
        light: "",
      },
      white: {
        main: "#FFFFFF",
        dark: "",
        light: "",
      },
      pink: {
        main: "#F231A5",
        dark: "",
        light: "",
      },
      gray: {
        main: "#7B7B7B",
        dark: "",
        light: "",
      },
    },
    action: {
      active: {
        main: "#334BC8",
      },
      hover: "",
      selected: "",
      disabled: "",
      disabledBackground: "",
      focus: "",
    },
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
    huge: "10rem",
    xhuge: "14rem",
  },
  zIndex: {
    underBase: 1,
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  media: generateMedia({
    ...mediaQueries,
  }),
  polished,
  boxShadow: {
    ...shadows,
  },
  borderRadius: {
    "1": "0.4rem",
    "2": "0.5rem",
    "3": "0.2rem",
    "4": "0.8rem",
    "5": "6.8rem",
  },
  time: {
    default: "0.3s",
    fast: "0.1s",
  },
  cubicBezier,
} as const;

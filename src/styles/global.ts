import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

import reset from "./cssReset";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

html {
      font-size: 62.5%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }


  ${reset}

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins'), local('Poppins-Light'),
        url('/fonts/poppins-v15-latin-300.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins'), local('Poppins-Regular'),
        url('./fonts/poppins-v15-latin-regular.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins'), local('Poppins-SemiBold'),
        url('./fonts/poppins-v15-latin-600.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }



  ${({ theme, removeBg }) => css`
    body {
      font-family: "Poppins", "Roboto", "-apple-system", "BlinkMacSystemFont",
        "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans",
        "Helvetica Neue", "sans-serif";
      font-size: 1.6rem;
      line-height: ${theme.typography.lineHeight.hack};
      /* line-height: 1.43; */

      ${!removeBg &&
      css`
        background-color: ${theme.palette.page.background.primary.main};
      `}
    }
  `}
`;

export default GlobalStyles;

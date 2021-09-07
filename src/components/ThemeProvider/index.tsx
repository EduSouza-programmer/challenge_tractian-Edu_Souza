import { ReactNode } from "react";
import { ThemeProvider as StyledComponentProvider } from "styled-components";
import GlobalStyles from "@/styles/global";

import mainTheme from "@/styles/themes/main.theme";

type Props = {
  children: ReactNode;
};

function ThemeProvider({ children }: Props) {
  return (
    <StyledComponentProvider theme={mainTheme}>
      <GlobalStyles />
      {children}
    </StyledComponentProvider>
  );
}

export default ThemeProvider;

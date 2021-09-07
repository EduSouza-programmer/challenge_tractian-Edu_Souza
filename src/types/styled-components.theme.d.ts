/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from "@/styles/themes/main.theme";

import "styled-components";

export type Theme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

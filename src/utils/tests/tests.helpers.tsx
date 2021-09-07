import { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import {
  render,
  RenderResult,
  screen,
  ByRoleMatcher,
} from "@testing-library/react";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);

export const renderGet = (element: JSX.Element, getByRole: ByRoleMatcher) => {
  const { container } = renderWithTheme(element);

  return { el: screen.getByRole(getByRole), container };
};

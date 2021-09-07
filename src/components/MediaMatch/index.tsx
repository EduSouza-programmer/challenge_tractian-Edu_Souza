import styled, { css, DefaultTheme } from "styled-components";
import { Breakpoint } from "@/types";

export type MediaMatchProps = {
  lessThan?: Breakpoint;
  greaterThan?: Breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (theme: DefaultTheme, size: Breakpoint) => css`
    ${theme.media.lessThan(size)`display: block`}
  `,
  greaterThan: (theme: DefaultTheme, size: Breakpoint) => css`
    ${theme.media.greaterThan(size)`display: block`}
  `,
};

const MediaMatch = styled.div<MediaMatchProps>`
  ${({ theme, lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(theme, lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(theme, greaterThan)}
  `}
`;

export default MediaMatch;

/* eslint-disable no-use-before-define */
import styled, { css, DefaultTheme } from "styled-components";

import typography from "@/components/Typography";

import {
  WrapperImageProps,
  TextsProps,
  WrapperProps,
} from "./UserFeedbackBase.types";

export const modifiers = {
  sizes: {
    xsmall: () => css`
      grid-template-columns: 3.6rem 1fr;

      ${WrapperImage} {
        width: 3.6rem;
        height: 3.6rem;

        border-width: 0.1rem;
      }
    `,
    small: () => css`
      grid-template-columns: 4.2rem 1fr;

      ${WrapperImage} {
        width: 4.2rem;
        height: 4.2rem;

        border-width: 0.15rem;
      }
    `,
    medium: () => css`
      grid-template-columns: 6.4rem 1fr;

      ${WrapperImage} {
        width: 6.4rem;
        height: 6.4rem;

        border-width: 0.2rem;
      }
    `,

    large: () => css`
      grid-template-columns: 8.6rem 1fr;

      ${WrapperImage} {
        width: 8.6rem;
        height: 8.6rem;
        border-width: 0.3rem;
      }
    `,
  },

  borderColors: {
    white: (theme: DefaultTheme) => css`
      border-color: ${theme.palette.page.white.main};
    `,
    blue: (theme: DefaultTheme) => css`
      border-color: ${theme.palette.page.primary.main};
    `,
  },

  colors: {
    white: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.white.main};
    `,
    blue: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.blue.dark};
    `,
  },
} as const;

export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => css`
    display: grid;
    align-items: center;

    ${!!size && modifiers.sizes[size]}
  `}
`;

export const WrapperImage = styled.div<WrapperImageProps>`
  ${({ theme, borderColor }) => css`
    position: relative;
    border-radius: 50%;
    border-style: solid;
    margin-top: ${theme.spacings.small};

    ${!!borderColor && modifiers.borderColors[borderColor](theme)}

    img {
      border-radius: 50%;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.small};
  `}
`;

export const UserName = styled(typography).attrs(({ forwardedAs = "h3" }) => ({
  forwardedAs,
}))<TextsProps>`
  ${({ theme, size, color }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    margin-bottom: calc(${theme.spacings.xxsmall} - 5px);

    ${!!size && theme.modifiers.TYPOGRAPHY.sizes[size](theme)}

    ${!!color && modifiers.colors[color](theme)}
  `}
`;

export const Professional = styled(typography).attrs(
  ({ forwardedAs = "span", size = "xxsmall" }) => ({
    forwardedAs,
    size,
  })
)<TextsProps>`
  ${({ theme, color }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    opacity: 0.8;

    ${!!color && modifiers.colors[color](theme)}
  `}
`;

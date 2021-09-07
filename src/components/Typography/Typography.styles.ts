import styled, { css, DefaultTheme } from "styled-components";

import { WrapperProps, Responsive } from "./Typography.types";

export const modifiers = {
  sizes: {
    xxsmall: (theme: DefaultTheme) => css`
      font-size: ${theme.typography.fontSizes.xxsmall};
    `,
    xsmall: (theme: DefaultTheme) => css`
      font-size: ${theme.typography.fontSizes.xsmall};
    `,
    small: (theme: DefaultTheme) => css`
      font-size: ${theme.typography.fontSizes.small};
    `,
    medium: (theme: DefaultTheme) => css`
      font-size: ${theme.typography.fontSizes.medium};
    `,
    large: (theme: DefaultTheme) => css`
      font-size: ${theme.typography.fontSizes.large};
    `,
    xlarge: (theme: DefaultTheme) => css`
      font-size: ${theme.typography.fontSizes.xlarge};
    `,
    xxlarge: (theme: DefaultTheme) => css`
      font-size: ${theme.typography.fontSizes.xxlarge};
    `,
    huge: (theme: DefaultTheme) => css`
      font-size: ${theme.typography.fontSizes.huge};
    `,
  },

  responsive: (resp: Responsive, theme: DefaultTheme) => css`
    font-size: calc(
      ${resp.min}px + (${resp.max} - ${resp.min}) *
        ((100vw - 320px) / (1920 - 320))
    );

    ${theme.media.lessThan("320")`
        font-size: ${resp.min}px;
      `}
    ${theme.media.greaterThan("1920")`
        font-size: ${resp.max}px;
      `}

      ${resp.isNoWrapperText &&
    css`
      white-space: nowrap;
    `}
  `,
  colors: {
    white: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.white.main};
    `,
    black: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.black.main};
    `,
    blue: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.blue.main};
    `,
    pink: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.pink.main};
    `,
    gray: (theme: DefaultTheme) => css`
      color: ${theme.palette.text.gray.main};
    `,
  },
  notifys: {
    error: (theme: DefaultTheme) => css`
      color: ${theme.palette.notify.error.main};
    `,
    success: (theme: DefaultTheme) => css`
      color: ${theme.palette.notify.success.main};
    `,
    warning: (theme: DefaultTheme) => css`
      color: ${theme.palette.notify.warning.main};
    `,
    hint: (theme: DefaultTheme) => css`
      color: ${theme.palette.notify.hint.main};
    `,
  },

  disabled: (theme: DefaultTheme) => css`
    color: ${theme.palette.notify.disabled.main};
    cursor: not-allowed;
  `,
} as const;

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size, responsive, color, notify, disabled }) => css`
    ${!!size && modifiers.sizes[size](theme)}

    ${!!color && modifiers.colors[color](theme)}

    ${!!responsive && !size && modifiers.responsive(responsive, theme)}

    ${!!notify?.success && modifiers.notifys.success(theme)}
    ${!!notify?.hint && modifiers.notifys.hint(theme)}
    ${!!notify?.warning && modifiers.notifys.warning(theme)}
    ${!!notify?.error && modifiers.notifys.error(theme)}

    ${disabled && modifiers.disabled(theme)}
  `}
`;

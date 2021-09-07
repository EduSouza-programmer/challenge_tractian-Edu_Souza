import styled, { css, DefaultTheme } from "styled-components";

import { WrapperProps } from "./Icon.types";

export const modifiers = {
  sizes: {
    xxsmall: (theme: DefaultTheme) => css`
      svg {
        width: ${theme.models.icon.size.xxsmall};
      }
    `,
    xsmall: (theme: DefaultTheme) => css`
      svg {
        width: ${theme.models.icon.size.xsmall};
      }
    `,
    small: (theme: DefaultTheme) => css`
      svg {
        width: ${theme.models.icon.size.small};
      }
    `,
    medium: (theme: DefaultTheme) => css`
      svg {
        width: ${theme.models.icon.size.medium};
      }
    `,
    large: (theme: DefaultTheme) => css`
      svg {
        width: ${theme.models.icon.size.large};
      }
    `,
  },
  colors: {
    white: (theme: DefaultTheme) => css`
      color: ${theme.palette.icon.white.main};
    `,
    black: (theme: DefaultTheme) => css`
      color: ${theme.palette.icon.black.main};
    `,
    blue: (theme: DefaultTheme) => css`
      color: ${theme.palette.icon.blue.main};
    `,
    pink: (theme: DefaultTheme) => css`
      color: ${theme.palette.icon.pink.main};
    `,
    gray: (theme: DefaultTheme) => css`
      color: ${theme.palette.icon.gray.main};
    `,
  },
  positions: {
    left: (theme: DefaultTheme) => css`
      order: 0;
      margin-right: ${theme.spacings.xxsmall};
    `,
    right: (theme: DefaultTheme) => css`
      order: 1;
      margin-left: ${theme.spacings.xxsmall};
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
  },

  disabled: (theme: DefaultTheme) => css`
    color: ${theme.palette.notify.disabled.main};
    cursor: not-allowed;
  `,
} as const;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size, color, position, notify, disabled }) => css`
    ${!!size && modifiers.sizes[size](theme)}

    ${!!color && modifiers.colors[color](theme)}

    ${!!position && modifiers.positions[position](theme)}

    ${!!notify?.success && modifiers.notifys.success(theme)}
    ${!!notify?.warning && modifiers.notifys.warning(theme)}
    ${!!notify?.error && modifiers.notifys.error(theme)}

    ${disabled && modifiers.disabled(theme)}
  `}
`;

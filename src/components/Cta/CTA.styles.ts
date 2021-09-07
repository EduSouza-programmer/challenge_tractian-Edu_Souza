/* eslint-disable consistent-return */
/* eslint-disable default-case */
import styled, { css, DefaultTheme } from "styled-components";

import {
  WrapperProps,
  TypographyColor,
  ButtonColor,
  Appearance,
} from "./CTA.types";

export const modifiers = {
  sizes: {
    xxsmall: (theme: DefaultTheme) => css`
      padding: ${theme.models.button.size.xxsmall};
      height: initial;
    `,
    xsmall: (theme: DefaultTheme) => css`
      height: ${theme.models.button.height.xsmall};
      padding: ${theme.models.button.size.xsmall};
    `,
    small: (theme: DefaultTheme) => css`
      height: ${theme.models.button.height.small};
      padding: ${theme.models.button.size.small};
    `,
    medium: (theme: DefaultTheme) => css`
      height: ${theme.models.button.height.medium};
      padding: ${theme.models.button.size.medium};
    `,
    large: (theme: DefaultTheme) => css`
      height: ${theme.models.button.height.large};
      padding: ${theme.models.button.size.large};
    `,
    xlarge: (theme: DefaultTheme) => css`
      height: ${theme.models.button.height.xlarge};
      padding: ${theme.models.button.size.xlarge};
    `,
  },

  colors: {
    none: (theme: DefaultTheme) => css`
      background-color: ${theme.palette.button.none.main};
    `,
    primary: (theme: DefaultTheme) => css`
      background-color: ${theme.palette.button.primary.main};
    `,
    secondary: (theme: DefaultTheme) => css`
      background-color: ${theme.palette.button.secondary.main};
    `,
    white: (theme: DefaultTheme) => css`
      background-color: ${theme.palette.button.white.main};
    `,
  },

  appearances: {
    none: () => css`
      background-color: transparent;
    `,

    button: (
      theme: DefaultTheme,
      _: TypographyColor,
      color: ButtonColor
    ) => css`
      border-radius: ${theme.borderRadius[5]};
      outline: none;

      &:hover {
        background-color: ${theme.palette.button[color].dark};
      }

      &:focus {
        box-shadow: 0 0 0.3rem ${theme.palette.page.black.main};
        border: 0.1rem solid ${theme.palette.page.black.main};
      }

      &:active {
        background-color: ${theme.palette.button[color].main};
      }
    `,
    link: (theme: DefaultTheme, color: TypographyColor) => css`
      background-color: transparent;
      border-bottom: 0.1rem solid ${theme.palette.text[color].main};
      padding: ${theme.models.button.size.xxsmall};

      outline: none;

      &:hover {
        background-color: transparent;
      }

      &:focus {
        box-shadow: 0 0 0.3rem ${theme.palette.text[color].main};
        border: 0;
      }

      &:active {
        background-color: transparent;
      }
    `,
  },

  fullWidth: () => css`
    width: 100%;
  `,

  disabled: (theme: DefaultTheme, appearence: Appearance) => css`
    cursor: not-allowed;
    ${() => {
      switch (appearence) {
        case "none":
          return css`
            background-color: transparent;
          `;

        case "button":
          return css`
            background-color: ${theme.palette.notify.disabled.light};

            &:hover {
              background-color: ${theme.palette.notify.disabled.light};
            }
          `;
        case "link":
          return css`
            background-color: transparent;
          `;
      }
    }}
  `,
} as const;

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, fullWidth, appearance, label, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    border: 0;

    ${!!size && modifiers.sizes[size](theme)}
    ${!!color && modifiers.colors[color](theme)}
    ${fullWidth && modifiers.fullWidth}
    ${!!appearance &&
    modifiers.appearances[appearance](theme, label!.color!, color!)}

    ${disabled && modifiers.disabled(theme, appearance!)}
  `}
`;

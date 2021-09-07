import styled, { css, DefaultTheme } from "styled-components";

import typography from "@/components/Typography";
import { InputProps, LabelProps } from "./Checkbox.types";

export const modifiers = {
  colors: {
    primary: (theme: DefaultTheme) => css`
      border: 0.2rem solid ${theme.palette.checkbox.primary.main};

      &::before {
        border: 0.2rem solid ${theme.palette.page.white.main};
      }

      &:checked {
        background: ${theme.palette.checkbox.primary.main};
        &::before {
          opacity: 1;
        }
      }

      &:focus {
        box-shadow: 0 0 0.3rem ${theme.palette.checkbox.primary.main};
      }
    `,
    secondary: (theme: DefaultTheme) => css`
      border: 0.2rem solid ${theme.palette.checkbox.secondary.dark};

      &::before {
        border: 0.2rem solid ${theme.palette.page.white.main};
      }

      &:checked {
        background: ${theme.palette.checkbox.secondary.dark};
        &::before {
          opacity: 1;
        }
      }

      &:focus {
        box-shadow: 0 0 0.3rem ${theme.palette.checkbox.secondary.main};
      }
    `,
  },
  disabled: (theme: DefaultTheme) => css`
    border: 0.2rem solid ${theme.palette.notify.disabled.main};
    cursor: not-allowed;

    &:checked {
      background: ${theme.palette.notify.disabled.main};
    }
  `,
} as const;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input<InputProps>`
  ${({ theme, color, disabled }) => css`
    appearance: none;
    outline: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: ${theme.borderRadius[3]};
    cursor: pointer;

    transition: border, background ${theme.time.fast} ease-in-out;

    ${!!color && modifiers.colors[color](theme)}

    &::before {
      content: "";
      width: 0.6rem;
      height: 0.9rem;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;

      transition: all ${theme.time.fast} ease-in-out;
    }

    ${!!disabled && modifiers.disabled(theme)}
  `}
`;

export const Label = styled(typography).attrs(({ forwardedAs = "label" }) => ({
  forwardedAs,
}))<LabelProps>`
  ${({ theme, disabled }) => css`
    margin-left: ${theme.spacings.xxsmall};
    cursor: pointer;

    ${disabled && theme.modifiers.TYPOGRAPHY.disabled(theme)}
  `}
`;

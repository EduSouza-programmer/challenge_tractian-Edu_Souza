import styled, { css, DefaultTheme } from "styled-components";

import typography from "@/components/Typography";

import { LabelProps, InputProps } from "./Radio.types";

export const modifiers = {
  colors: {
    primary: (theme: DefaultTheme) => css`
      border: 0.2rem solid ${theme.palette.radio.primary.main};

      &::before {
        background: ${theme.palette.radio.primary.main};
      }

      &:focus {
        box-shadow: 0 0 0.2rem ${theme.palette.radio.primary.main};
      }
    `,
    secondary: (theme: DefaultTheme) => css`
      border: 0.2rem solid ${theme.palette.radio.secondary.main};

      &::before {
        background: ${theme.palette.radio.secondary.main};
      }

      &:focus {
        box-shadow: 0 0 0.2rem ${theme.palette.radio.secondary.main};
      }
    `,
  },
  disabled: (theme: DefaultTheme) => css`
    border: 0.2rem solid ${theme.palette.notify.disabled.main};
    cursor: not-allowed;

    &::before {
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

    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8rem;
    height: 1.8rem;

    border-radius: 50%;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0);

      transition: transform ${theme.time.fast} ease-in-out;
    }

    &:checked {
      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }

    ${!!color && modifiers.colors[color](theme)}
    ${disabled && modifiers.disabled(theme)}
  `}
`;

export const Label = styled(typography).attrs(({ forwardedAs = "label" }) => ({
  forwardedAs,
}))<LabelProps>`
  ${({ theme, disabled }) => css`
    margin-left: ${theme.spacings.xxsmall};
    cursor: pointer;
    align-self: flex-end;

    ${disabled && theme.modifiers.TYPOGRAPHY.disabled(theme)}
  `}
`;

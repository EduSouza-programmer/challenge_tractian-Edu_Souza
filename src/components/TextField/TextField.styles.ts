import styled, { css, DefaultTheme } from "styled-components";

import typography from "@/components/Typography";
import icon from "@/components/Icon";

import { InputProps, LabelProps, InputWrapperProps } from "./TextField.types";

export const modifiers = {
  sizes: {
    small: (theme: DefaultTheme) => css`
      padding: ${theme.models.textField.size.small};
      height: ${theme.models.textField.height.small};
      font-size: ${theme.typography.fontSizes.xxsmall};
    `,
    medium: (theme: DefaultTheme) => css`
      padding: ${theme.models.textField.size.medium};
      height: ${theme.models.textField.height.medium};
      font-size: ${theme.typography.fontSizes.xsmall};
    `,
    large: (theme: DefaultTheme) => css`
      padding: ${theme.models.textField.size.large};
      height: ${theme.models.textField.height.large};
      font-size: ${theme.typography.fontSizes.small};
    `,
  },
  colors: {
    primary: (theme: DefaultTheme) => css`
      background-color: ${theme.palette.textField.primary.main};
      border: 0.1rem solid ${theme.palette.textField.primary.dark};
    `,

    secondary: (theme: DefaultTheme) => css`
      background-color: ${theme.palette.textField.secondary.main};
      border: 0.1rem solid ${theme.palette.textField.secondary.main};
    `,
  },

  notifys: {
    error: (theme: DefaultTheme) => css`
      border: 0.1rem solid ${theme.palette.notify.error.main};
    `,
    success: (theme: DefaultTheme) => css`
      border: 0.1rem solid ${theme.palette.notify.success.main};
    `,
    warning: (theme: DefaultTheme) => css`
      border: 0.1rem solid ${theme.palette.notify.warning.main};
    `,
  },
  disable: (theme: DefaultTheme) => css`
    background-color: ${theme.palette.notify.disabled.light};
    border: 0;

    input {
      color: ${theme.palette.notify.disabled.main};
      cursor: not-allowed;
      &::placeholder {
        color: currentColor;
      }
    }
  `,
} as const;

export const Wrapper = styled.div``;

export const Icon = styled(icon)`
  ${({ theme }) => css`
    transform: scale(0.9);
    transition: all ${theme.time.fast} ease-in-out;
  `}
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, color, notify, disabled }) => css`
    display: flex;
    align-items: center;
    border-radius: ${theme.borderRadius[1]};
    padding: 0 ${theme.spacings.xsmall};

    transition: all ${theme.time.fast} ease-in-out;
    &:focus-within {
      box-shadow: 0 0 0.15rem ${theme.palette.page.primary.main};

      ${Icon} {
        transform: scale(1.1);
      }
    }

    ${!!color && modifiers.colors[color](theme)}

    ${!!notify?.success && modifiers.notifys.success(theme)}
    ${!!notify?.warning && modifiers.notifys.warning(theme)}
    ${!!notify?.error && modifiers.notifys.error(theme)}

    ${disabled && modifiers.disable(theme)}
  `}
`;

export const Input = styled.var.attrs({ as: "input" })<InputProps>`
  ${({ theme, size }) => css`
    background-color: transparent;
    width: 100%;
    border: 0;
    outline: none;

    ${!!size && modifiers.sizes[size](theme)}
  `}
`;

export const Label = styled(typography).attrs(({ forwardedAs = "label" }) => ({
  forwardedAs,
}))<LabelProps>`
  ${({ theme, disabled }) => css`
    cursor: pointer;
    display: inline-block;
    margin-bottom: calc(${theme.spacings.xxsmall} / 2);

    ${disabled && theme.modifiers.TYPOGRAPHY.disabled(theme)}
  `}
`;

export const TextNotify = styled(typography).attrs(
  ({ forwardedAs = "span", size = "xxsmall" }) => ({ forwardedAs, size })
)`
  font-style: italic;
`;

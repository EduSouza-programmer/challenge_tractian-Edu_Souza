import styled, { css, DefaultTheme, keyframes } from "styled-components";

import user from "@/components/UserFeedbackBase";
import typography from "@/components/Typography";

import { WrapperProps } from "./UserFeedbackCard.types";

const entrace = keyframes`
  from {
      transform: translateY(-10rem) scale(0.8);
  }

  to {
    transform: translateY(0) scale(1);
      opacity: 1;
  }

`;

const modifiers = {
  playAnimation: (theme: DefaultTheme, delay: string) => css`
    animation-duration: 0.6s;
    animation-timing-function: ${theme.cubicBezier["ease-in-sine"]};
    animation-fill-mode: forwards;

    ${theme.media.greaterThan("600")`
      animation-delay: ${delay}s;

    `}

    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${entrace};
    }
  `,
};

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, isAnimation, delay }) => css`
    max-width: 38.4rem;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    border-radius: ${theme.borderRadius[1]};
    break-inside: avoid;
    opacity: 0;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      ${theme.palette.page.background.blue.main};

    ${isAnimation && modifiers.playAnimation(theme, delay)}
  `}
`;

export const User = styled(user).attrs(
  ({ size = "xsmall", borderColor = "blue", color = "blue" }) => ({
    size,
    borderColor,
    color,
  })
)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const Message = styled(typography).attrs(
  ({ size = "small", forwardedAs = "q", color = "blue" }) => ({
    size,
    forwardedAs,
    color,
  })
)`
  ${({ theme }) => css`
    line-height: calc(${theme.typography.lineHeight.normal} - 2px);
  `}
`;

import styled, { css, DefaultTheme } from "styled-components";
import typography from "@/components/Typography";

import { WrapperImageProps } from "./CardPerformance.types";

export const Wrapper = styled.article`
  ${({ theme }) => css`
    ${theme.media.greaterThan("710")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}

    ${theme.media.greaterThan("900")`
        flex-direction: row;
    `}
  `}
`;

export const Content = styled.div``;

export const Title = styled(typography).attrs(
  ({ size = "large", color = "black", forwardedAs = "h3" }) => ({
    size,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: ${theme.typography.lineHeight.normal};
    text-align: center;
    margin-bottom: ${theme.spacings.xsmall};

    ${theme.media.greaterThan("600")`
      font-size: calc(${theme.typography.fontSizes.large} + 4px);
    `}
  `}
`;

export const Description = styled(typography).attrs(
  ({ size = "xsmall", color = "black", forwardedAs = "p" }) => ({
    size,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: ${theme.typography.lineHeight.normal};
    text-align: left;
    margin-bottom: ${theme.spacings.small};
    max-width: 65rem;

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.medium(theme)}
      line-height: ${theme.typography.lineHeight.xreading};
    `}

    ${theme.media.greaterThan("900")`
      text-align: center;
    `}
  `}
`;

const modifiers = {
  positions: {
    left: (theme: DefaultTheme) => css`
      order: -1;
      padding-right: ${theme.spacings.small};
    `,
    right: (theme: DefaultTheme) => css`
      order: 0;
      padding-left: ${theme.spacings.small};
    `,
  },
};

export const WrapperImage = styled.div<WrapperImageProps>`
  ${({ theme, image: { position } }) => css`
    filter: drop-shadow(0 0 0.4rem #2563eb);
    ${theme.media.greaterThan("900")`
      ${!!position && modifiers.positions[position](theme)}
    `}
  `}
`;

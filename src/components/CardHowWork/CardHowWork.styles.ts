/* eslint-disable no-use-before-define */
import styled, { css, DefaultTheme } from "styled-components";
import typography from "@/components/Typography";

import { WrapperProps, ContentProps } from "./CardHowWork.types";

export const modifiers = {
  cardColors: {
    blue: (theme: DefaultTheme) => css`
      background: linear-gradient(to right, #2563eb, #1e3a8a);

      ${Title} {
        ${theme.modifiers.TYPOGRAPHY.colors.white(theme)}
      }

      ${Description} {
        ${theme.modifiers.TYPOGRAPHY.colors.white(theme)}
      }
    `,
    white: (theme: DefaultTheme) => css`
      background-color: ${theme.palette.page.background.white.main};

      ${Title} {
        ${theme.modifiers.TYPOGRAPHY.colors.blue(theme)}
      }

      ${Description} {
        ${theme.modifiers.TYPOGRAPHY.colors.black(theme)}
      }
    `,
  },

  positions: {
    left: () => css`
      order: 0;
    `,
    right: () => css`
      order: -1;
    `,
  },
} as const;

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, cardColor }) => css`
    position: relative;
    height: 100%;

    ${!!cardColor && modifiers.cardColors[cardColor](theme)}
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 ${theme.spacings.xsmall} ${theme.spacings.medium};

    ${theme.media.greaterThan("350")`
      padding: 0 ${theme.spacings.small} ${theme.spacings.large};

    `}

    ${theme.media.greaterThan("600")`
      padding: ${theme.spacings.large} ${theme.spacings.small} 0;
    `}

    ${theme.media.greaterThan("990")`
      flex-direction: row;
      justify-content: center;
    `}
  `}
`;

export const Content = styled.div<ContentProps>`
  ${({ theme, image: { position } }) => css`
    margin-top: -5rem;

    ${theme.media.greaterThan("600")`
      order: -1;
      margin-top: 0;
    `}

    ${theme.media.greaterThan("990")`
      ${!!position && modifiers.positions[position]}
    `}
  `}
`;

export const Title = styled(typography).attrs(
  ({ size = "medium", forwardedAs = "h3", color = "white" }) => ({
    size,
    forwardedAs,
    color,
  })
)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    line-height: ${theme.typography.lineHeight.normal};

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.large(theme)}

    `}

    ${theme.media.greaterThan("769")`
      ${theme.modifiers.TYPOGRAPHY.sizes.large(theme)}

    `}
  `}
`;

export const Description = styled(typography).attrs(
  ({ size = "xsmall", forwardedAs = "p", color = "white" }) => ({
    size,
    forwardedAs,
    color,
  })
)`
  ${({ theme }) => css`
    max-width: 60rem;
    line-height: ${theme.typography.lineHeight.compact};
    padding-left: ${theme.spacings.xsmall};

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}
      line-height: ${theme.typography.lineHeight.normal};
    `}

    ${theme.media.greaterThan("769")`
      ${theme.modifiers.TYPOGRAPHY.sizes.medium(theme)}
      padding-left: ${theme.spacings.small};

    `}
  `}
`;

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    img {
      ${theme.media.greaterThan("600")`
        transform: scale(1.1);
    `}
    }
  `}
`;

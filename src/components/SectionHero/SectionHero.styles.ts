import styled, { css, keyframes, Keyframes } from "styled-components";

import typography from "@/components/Typography";
import cta from "@/components/Cta";

import { ContainerProps, WrapperLogoProps } from "./SectionHero.types";

export const modifiers = {
  playAnimation: (name: Keyframes) => css`
    animation-duration: 0.6s;
    animation-timing-function: ease;
    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${name};
    }
  `,
} as const;

export const Wrapper = styled.section`
  ${({ theme }) => css`
    overflow-x: hidden;
    position: relative;
    background: linear-gradient(
      89.81deg,
      #1e3a8a 13.74%,
      #2563eb 99.78%,
      #1e3a8a 99.79%,
      rgba(30, 58, 138, 0.51) 99.8%
    );

    ${theme.media.greaterThan("600")`
       overflow-x: initial;

       &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: ${theme.zIndex.underBase};
        background-color: ${theme.palette.page.background.primary.main};
        clip-path: polygon(100% 79%, 0% 100%, 100% 100%);
        inset: 0;

        ${theme.media.greaterThan("1170")`
        clip-path: polygon(50% 98%, 100% 80%, 100% 100%, 0 100%, 0 80%);
        `}
      }
    `}

    ${theme.media.greaterThan("1170")`
      height: 58rem;
    `}
  `}
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, title }) => css`
    max-width: ${theme.gridLayout.container};
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
    max-width: ${theme.gridLayout.container};
    margin: 0 auto;

    &::before {
      content: "${title}";
      font-weight: ${theme.typography.fontWeight.light};
      line-height: ${theme.typography.lineHeight.normal};
      font-size: ${theme.typography.fontSizes.xsmall};
      color: ${theme.palette.text.white.main};
      position: absolute;
      top: 7rem;

      ${theme.media.greaterThan("350")`
         top: 9rem;

      `}
      ${theme.media.greaterThan("600")`
          display: none;
      `}
    }

    ${theme.media.greaterThan("350")`
      padding: ${theme.spacings.large} ${theme.spacings.small};
    `}

    ${theme.media.greaterThan("600")`
      padding: ${theme.spacings.large} ${theme.spacings.medium} 0;
    `}
  `}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    ${theme.media.greaterThan("600")`
        display: flex;
        flex-direction: column;
    `}

    ${theme.media.greaterThan("945")`
        display: grid;
        grid-template-columns: 1fr 1.47fr;
    `}

    ${theme.media.greaterThan("1170")`
      position: relative;
      grid-template-columns: 1.5fr 1fr;
    `}
  `}
`;

const logoAnim = keyframes`
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }

`;

export const WrapperLogo = styled.div<WrapperLogoProps>`
  ${({ isAnimation }) => css`
    position: relative;
    width: 11.8rem;
    height: 2.3rem;

    ${isAnimation && modifiers.playAnimation(logoAnim)}
  `}
`;

export const Title = styled(typography).attrs(
  ({ size = "xsmall", color = "white", forwardedAs = "h2" }) => ({
    size,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    visibility: hidden;
    font-weight: ${theme.typography.fontWeight.light};
    line-height: ${theme.typography.lineHeight.normal};
    margin-bottom: ${theme.spacings.xxsmall};

    ${theme.media.greaterThan("600")`
       visibility: visible;
    `}
  `}
`;

export const WrapperImageHero = styled.div`
  ${({ theme }) => css`
    margin: 0 -${theme.spacings.xsmall};
    transform: scale(1.1);
    z-index: ${theme.zIndex.base};

    ${theme.media.greaterThan("600")`
       transform: scale(1);
       margin: -${theme.spacings.xxlarge} -${theme.spacings.medium} 0;
    `}

    ${theme.media.greaterThan("945")`
       margin: 0;
    `}

    ${theme.media.greaterThan("1170")`
      position: absolute;
      right: 0;
      img {
        width: 76.8rem;
        height: 76.8rem;
      }

    `}
  `}
`;

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    ${theme.media.greaterThan("600")`
      order: -1;
      margin-top: ${theme.spacings.medium};
    `}

    ${theme.media.greaterThan("769")`
      margin-top: ${theme.spacings.xxlarge};
    `}
  `}
`;

export const Caption = styled(typography).attrs(
  ({ color = "white", size = "large", forwardedAs = "h3" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    margin-top: -${theme.spacings.xxlarge};
    margin-bottom: ${theme.spacings.small};
    line-height: ${theme.typography.lineHeight.reading};

    ${theme.media.greaterThan("350")`
      margin-top: -${theme.spacings.huge};
    `}

    ${theme.media.greaterThan("600")`
       margin-top: 0;
       ${theme.modifiers.TYPOGRAPHY.sizes.xlarge(theme)}
       line-height: ${theme.typography.lineHeight.xreading};
    `}

    ${theme.media.greaterThan("945")`
       max-width: 60rem;
    `}
  `}
`;

export const Message = styled(typography).attrs(
  ({ color = "white", size = "xxsmall", forwardedAs = "p" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.light};
    line-height: ${theme.typography.lineHeight.compact};
    margin-bottom: ${theme.spacings.medium};
    max-width: 56rem;

    ${theme.media.greaterThan("600")`
       ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}
       line-height: ${theme.typography.lineHeight.normal};
    `}
  `}
`;

export const Button = styled(cta).attrs(
  ({
    appearance = "button",
    size = "large",
    label = { text: "Começar agora!", color: "white", size: "small" },
    color = "secondary",
    forwardedAs = "a",
    fullWidth = true,
  }) => ({ appearance, size, label, color, forwardedAs, fullWidth })
)`
  ${({ theme }) => css`
    span {
      font-weight: ${theme.typography.fontWeight.boldLight};
    }

    ${theme.media.greaterThan("600")`
      width: initial;
    `}
  `}
`;

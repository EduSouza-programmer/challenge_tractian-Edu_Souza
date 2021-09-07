import styled, { css } from "styled-components";

import typography from "@/components/Typography";
import perceptualCard from "@/components/PerceptualCard";

import slider from "@/components/CardHowWorkSlider";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: calc(${theme.gridLayout.container} - 10rem);
    margin: 0 auto;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
  `}
`;

export const Title = styled(typography).attrs(
  ({ size = "xlarge", color = "black", forwardedAs = "h3" }) => ({
    size,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.large};
    ${theme.media.greaterThan("600")`
        ${theme.modifiers.TYPOGRAPHY.sizes.xxlarge(theme)}
        margin-bottom: ${theme.spacings.xxlarge};

      `}
  `}
`;

export const Slider = styled(slider)`
  ${({ theme }) => css`
    margin: 0 -${theme.spacings.xsmall} ${theme.spacings.huge};
  `}
`;

export const Subtitle = styled(typography).attrs(
  ({ size = "xlarge", color = "black", forwardedAs = "h4" }) => ({
    size,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    position: relative;
    text-align: center;
    line-height: ${theme.typography.lineHeight.xreading};
    margin-bottom: calc(${theme.spacings.xhuge});
    font-weight: ${theme.typography.fontWeight.semiBold};

    &::after {
      content: "";
      width: 16rem;
      height: 0.3rem;
      background: ${theme.palette.page.primary.main};
      position: absolute;
      bottom: -4rem;
      left: 50%;
      transform: translateX(-50%);
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.greaterThan("690")`
       flex-direction: row;
       justify-content: center;
    `}
  `}
`;

export const PerceptualCard = styled(perceptualCard)`
  ${({ theme }) => css`
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxlarge};

      ${theme.media.greaterThan("690")`
        margin-bottom: 0;
    `}
    }

    & + & {
      border-top: 1px solid ${theme.palette.page.gray.main};
      padding-top: ${theme.spacings.large};

      ${theme.media.greaterThan("690")`
       border-top: 0;
       padding-top: 0;

      position: relative;

      ::after {
        content: "";
        width: 0.2rem;
        height: 100%;
        background: ${theme.palette.page.gray.main};
        position: absolute;
        left: 0;

        top: 0;

        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
      }

    `}
    }

    ${theme.media.greaterThan("690")`

       padding: 0 ${theme.spacings.xsmall};
   `}
  `}
`;

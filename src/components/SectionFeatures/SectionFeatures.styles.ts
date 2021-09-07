import styled, { css } from "styled-components";

import cardFeature from "@/components/CardFeature";
import typography from "@/components/Typography";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.gridLayout.container};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};

    ${theme.media.greaterThan("350")`
      padding: ${theme.spacings.large} ${theme.spacings.small};
    `}
  `}
`;

export const Title = styled(typography).attrs(
  ({ size = "xlarge", color = "black" }) => ({ size, color })
)`
  ${({ theme }) => css`
    line-height: ${theme.typography.lineHeight.xreading};
    font-weight: ${theme.typography.fontWeight.medium};
    text-align: center;
    margin-bottom: ${theme.spacings.medium};

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.xxlarge(theme)}
      margin-bottom: ${theme.spacings.large};
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
    text-align: left;
    max-width: 90rem;
    line-height: ${theme.typography.lineHeight.compact};
    margin-bottom: ${theme.spacings.medium};
    align-self: center;

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}
      line-height: ${theme.typography.lineHeight.normal};
      margin-bottom: ${theme.spacings.small};
    `}

    ${theme.media.greaterThan("820")`
      text-align: center;
      margin-bottom: ${theme.spacings.xxlarge};


    `}
  `}
`;

export const WrapperFeatures = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacings.xlarge};

    ${theme.media.greaterThan("820")`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;

    `}

    ${theme.media.greaterThan("1150")`
      grid-template-columns: repeat(4, 1fr);
      margin-bottom: ${theme.spacings.huge};
    `}
  `}
`;

export const CardFeature = styled(cardFeature)`
  ${({ theme }) => css`
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.medium};

      ${theme.media.greaterThan("820")`
      margin-bottom: 0;
    `}
    }
  `}
`;

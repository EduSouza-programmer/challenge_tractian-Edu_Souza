import styled, { css } from "styled-components";

import typography from "@/components/Typography";
import { Wrapper as wrapperCardPerformance } from "@/components/CardPerformance/CardPerformance.styles";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.gridLayout.container};
    margin: 0 auto;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};

    ${theme.media.greaterThan("350")`
       padding: ${theme.spacings.medium} ${theme.spacings.small};

    `}
  `}
`;

export const Title = styled(typography).attrs(
  ({ color = "black", size = "xsmall", forwardedAs = "h3" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: ${theme.typography.lineHeight.normal};
    text-align: center;
    margin-bottom: ${theme.spacings.xxsmall};

    strong {
      ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}

      ${theme.media.greaterThan("350")`
        ${theme.modifiers.TYPOGRAPHY.sizes.medium(theme)}
     `}

      ${theme.media.greaterThan("900")`
        ${theme.modifiers.TYPOGRAPHY.sizes.xlarge(theme)}
      `}

      ${theme.media.greaterThan("1350")`
        ${theme.modifiers.TYPOGRAPHY.sizes.xxlarge(theme)}

      `}
    }

    ${theme.media.greaterThan("350")`
      ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}

    `}

    ${theme.media.greaterThan("900")`
      ${theme.modifiers.TYPOGRAPHY.sizes.large(theme)}
        margin-bottom: ${theme.spacings.small};
    `}

    ${theme.media.greaterThan("1350")`
      ${theme.modifiers.TYPOGRAPHY.sizes.xlarge(theme)}
        margin-bottom: ${theme.spacings.medium};
    `}
  `}
`;

export const Subtitle = styled(typography).attrs(
  ({ color = "black", size = "xxsmall", forwardedAs = "h4" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.light};
    line-height: ${theme.typography.lineHeight.compact};
    text-align: center;
    margin-bottom: ${theme.spacings.xxlarge};

    ${theme.media.greaterThan("350")`
      ${theme.modifiers.TYPOGRAPHY.sizes.xsmall(theme)}

    `}

    ${theme.media.greaterThan("900")`
      ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}
      margin-bottom: ${theme.spacings.huge};
    `}
  `}
`;

export const WrapperCards = styled.div`
  ${({ theme }) => css`
    ${wrapperCardPerformance}:not(:last-child) {
      margin-bottom: ${theme.spacings.xxlarge};
    }

    ${theme.media.greaterThan("900")`
       ${wrapperCardPerformance}:not(:last-child) {
        margin-bottom: ${theme.spacings.huge};
      }

    `}
  `}
`;

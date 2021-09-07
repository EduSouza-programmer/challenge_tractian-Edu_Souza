import styled, { css } from "styled-components";

import socialComments from "@/components/UserFeedbackCard";
import typography from "@/components/Typography";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium} ${theme.spacings.xxsmall} 0;

    ${theme.media.greaterThan("350")`
      padding: ${theme.spacings.large} ${theme.spacings.xsmall} 0;

    `}
  `}
`;

export const Title = styled(typography).attrs(
  ({ color = "black", size = "large", forwardedAs = "h3" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
    text-align: center;
    line-height: ${theme.typography.lineHeight.normal};
    margin-bottom: ${theme.spacings.xxlarge};
    font-weight: ${theme.typography.fontWeight.semiBold};

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.xlarge(theme)}

    `}

    ${theme.media.greaterThan("1100")`
      ${theme.modifiers.TYPOGRAPHY.sizes.xxlarge(theme)}
      margin-bottom: calc(${theme.spacings.xxlarge} + 3rem);
    `}
  `}
`;

export const WrapperComments = styled.div`
  ${({ theme }) => css`
    column-count: 1;

    ${theme.media.greaterThan("600")`
      column-count: 2;

    `}
    ${theme.media.greaterThan("1100")`
      column-count: 3;
      column-gap: ${theme.spacings.small};
    `}
  `}
`;

export const SocialComments = styled(socialComments)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    max-width: 100%;

    ${theme.media.greaterThan("1100")`
       max-width: 38.4rem;
    `}
  `};
`;

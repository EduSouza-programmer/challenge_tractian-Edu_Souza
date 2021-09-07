import styled, { css } from "styled-components";

import typography from "@/components/Typography";

export const Wrapper = styled.article``;

export const Perceptual = styled(typography).attrs(
  ({ size = "huge", color = "black", forwardedAs = "h3" }) => ({
    size,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.bold};
    margin-bottom: ${theme.spacings.small};
    text-align: center;
  `}
`;

export const Message = styled(typography).attrs(
  ({ size = "medium", color = "black", forwardedAs = "p" }) => ({
    size,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    line-height: ${theme.typography.lineHeight.normal};
    max-width: 26rem;
    text-align: center;
    margin: 0 auto;
  `}
`;

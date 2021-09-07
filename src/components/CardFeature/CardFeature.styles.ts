import styled, { css } from "styled-components";
import typography from "@/components/Typography";

export const Wrapper = styled.article`
  height: 100%;
  max-width: 58.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Title = styled(typography).attrs(
  ({ size = "medium", color = "black", forwardedAs = "h3" }) => ({
    size,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
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
    line-height: ${theme.typography.lineHeight.compact};
    text-align: left;

    ${theme.media.greaterThan("530")`
       text-align: center;
    `}
  `}
`;

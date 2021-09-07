import styled, { css } from "styled-components";
import Typography from "../Typography";

export const Wrapper = styled.section`
  position: relative;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: ${theme.gridLayout.container};
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};
    z-index: ${theme.zIndex.base};

    ${theme.media.greaterThan("350")`
      padding: ${theme.spacings.large} ${theme.spacings.small};

    `}

    ${theme.media.greaterThan("600")`
      padding: ${theme.spacings.xxlarge} ${theme.spacings.medium};
      display: flex;
      flex-direction: column;
    `}

    ${theme.media.greaterThan("1170")`
      padding: ${theme.spacings.huge} ${theme.spacings.small};
    `}
  `}
`;

export const Title = styled(Typography).attrs(
  ({
    responsive = { min: 22, max: 36 },
    color = "white",
    forwardedAs = "h3",
  }) => ({
    responsive,
    color,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    text-align: center;
    line-height: ${theme.typography.lineHeight.reading};
    margin-bottom: ${theme.spacings.medium};

    ${theme.media.greaterThan("600")`
      text-align: left;
      max-width: 74rem;
      line-height: ${theme.typography.lineHeight.xxreading};
      margin-bottom: ${theme.spacings.xlarge};

    `}
  `}
`;

export const WrapperVideo = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;

    ${theme.media.greaterThan("600")`
      width: 45rem;
      height: 25.3rem;
      padding-bottom: initial;

    `}

    ${theme.media.greaterThan("769")`
      width: 50rem;
      height: 28.3rem;
    `}

    ${theme.media.greaterThan("1170")`
      width: 62.8rem;
      height: 35.3rem;
    `}
  `}
`;

export const IFrame = styled.iframe`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: ${theme.borderRadius[4]};
  `}
`;

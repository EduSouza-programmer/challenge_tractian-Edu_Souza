import styled, { css } from "styled-components";

import typography from "@/components/Typography";
import textField from "@/components/TextField";
import cta from "@/components/Cta";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    position: relative;

    background: linear-gradient(
      89.81deg,
      #1e3a8a 13.74%,
      #2563eb 99.78%,
      #1e3a8a 99.79%,
      rgba(30, 58, 138, 0.51) 99.8%
    );

    ${theme.media.greaterThan("945")`
       &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: ${theme.zIndex.underBase};
        background-color: ${theme.palette.page.background.primary.main};
        clip-path: polygon(50% 10%, 0 -0.1%, 100% -0.1%);
        inset: 0;

      }
    `}
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.gridLayout.container};
    margin: 0 auto;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};

    ${theme.media.greaterThan("350")`
      padding: ${theme.spacings.large} ${theme.spacings.small};
    `}
    ${theme.media.greaterThan("600")`
      padding: ${theme.spacings.xxlarge} ${theme.spacings.small};
    `}

    ${theme.media.greaterThan("945")`
      padding: calc(${theme.spacings.xhuge} + 5rem) ${theme.spacings.small} ${theme.spacings.xxlarge};
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge};
    display: flex;
    flex-direction: column;
    align-items: center;

    ${theme.media.greaterThan("945")`
      flex-direction: row;
    `}
  `}
`;

export const Group = styled.div`
  ${({ theme }) => css`
    ${theme.media.greaterThan("1170")`
      margin-right: 7rem;
  `}
  `}
`;

export const Title = styled(typography).attrs(
  ({ color = "white", size = "small", forwardedAs = "h3" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    text-align: center;
    font-weight: ${theme.typography.fontWeight.light};
    line-height: ${theme.typography.lineHeight.normal};
    margin-bottom: ${theme.spacings.xsmall};

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.medium(theme)}
    `}
  `}
`;

export const Subtitle = styled(typography).attrs(
  ({ color = "white", size = "large", forwardedAs = "h4" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    text-align: center;
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.reading};
    margin-bottom: ${theme.spacings.large};

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.xlarge(theme)}
      line-height: ${theme.typography.lineHeight.xreading};
    `}
  `}
`;

export const Message = styled(typography).attrs(
  ({ color = "white", size = "xsmall", forwardedAs = "p" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: ${theme.typography.lineHeight.compact};
    margin-bottom: ${theme.spacings.large};
    max-width: 70rem;

    ${theme.media.greaterThan("600")`
      ${theme.modifiers.TYPOGRAPHY.sizes.small(theme)}
      line-height: ${theme.typography.lineHeight.normal};
    `}
  `}
`;

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    ${theme.media.greaterThan("945")`
        align-self: flex-end;
    `}
  `}
`;

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge};

    ${theme.media.greaterThan("450")`
      padding: 0 ${theme.spacings.small};
    `}

    ${theme.media.greaterThan("600")`
      padding: 0;
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      max-width: 65rem;
      margin: 0 auto;
      margin-bottom: ${theme.spacings.huge};
    `}
  `}
`;

export const TextField = styled(textField).attrs(
  ({
    icon = { listOfChoices: "Email", position: "left" },
    size = "large",
    placeholder = "Insira seu email",
  }) => ({ icon, size, placeholder })
)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};

    ${theme.media.greaterThan("600")`
        div {
          border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        }
    `}
  `}
`;

export const Button = styled(cta).attrs(
  ({
    appearance = "button",
    size = "large",
    label = {
      text: "Agende uma demonstração!",
      color: "white",
      size: "xxsmall",
    },
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
        border-radius: 0;
        border-bottom-right-radius: ${theme.borderRadius[1]};
        border-top-right-radius: ${theme.borderRadius[1]};

    `}

    ${theme.media.greaterThan("945")`
      span {
          ${theme.modifiers.TYPOGRAPHY.sizes.xsmall(theme)}
      }
    `}
  `}
`;

export const Developer = styled(typography).attrs(
  ({ color = "white", size = "xsmall", forwardedAs = "div" }) => ({
    color,
    size,
    forwardedAs,
  })
)`
  text-align: center;
`;

export const Link = styled(cta).attrs(
  ({
    appearance = "link",
    size = "xxsmall",
    label = {
      text: "Edu Souza",
      color: "white",
      size: "xsmall",
    },
    color = "secondary",
    forwardedAs = "a",
  }) => ({ appearance, size, label, color, forwardedAs })
)`
  ${({ theme }) => css`
    span {
      font-weight: ${theme.typography.fontWeight.boldLight};
    }
  `}
`;

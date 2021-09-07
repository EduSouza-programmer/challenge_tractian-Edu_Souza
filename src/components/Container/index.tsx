import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.gridLayout.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.gridLayout.gutter} / 2);
    padding-right: calc(${theme.gridLayout.gutter} / 2);
  `}
`;

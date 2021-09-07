import styled, { css } from "styled-components";

import slider from "@/components/Slider";

export const Slider = styled(slider)`
  ${({ theme }) => css`
    .slick-track,
    .slick-list {
      display: flex;
      height: auto;
      box-shadow: 0.5rem 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    }

    .slick-slide > div {
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.xlarge};
      li {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background-color: ${theme.palette.page.primary.main};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        transform: scale(0.8);
        transition: transform ${theme.time.fast} ease-in-out;
        &:not(.slick-active) {
          background-color: ${theme.palette.page.blue.main};
          opacity: 10%;
        }
        &.slick-active {
          border-radius: 50%;
          transform: scale(1);
        }
      }
      button {
        display: none;
        width: 0.7rem;
        height: 0.7rem;
      }
    }
  `}
`;

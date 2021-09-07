import styled, { css, keyframes } from "styled-components";

import { ImageHeroProps } from "../SectionHero.types";

const threadTrailEntrance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const wall1Bounce = keyframes`
  0% {
    transform: translate3d(210px, 440px, 0);
  }
  100% {
    transform: translate3d(230px, 440px, 0);
  }
`;

const floorSmallLeftBounce = keyframes`
  0% {
      transform: translate3d(119px, 491px, 0);
    }

    100% {
      transform: translate3d(119px, 507px, 0);
    }
`;

const floorMachineBounce = keyframes`
  0% {
    transform: translate3d(535px, 335px, 0);
  }

  100% {
    transform: translate3d(535px, 355px, 0);
  }
`;

const floorError = keyframes`
  0%,
  35% {
    fill: rgb(200, 46, 91);
    opacity: 0.7;
  }
  40% {
    fill: rgb(55, 181, 244);
    opacity: 0.5;

  }
`;

const floorManWarning = keyframes`
  0%,
    35% {
      fill: #eccc45;
      opacity: 0.7;
    }
    40% {
      fill: rgb(55, 181, 244);
      opacity: 0.5;
    }
`;

const floorMachine2Bounce = keyframes`
  0% {
    transform: translate3d(930px, 515px, 0);
  }
  100% {
    transform: translate3d(930px, 524px, 0);
  }
`;

const floorMachine3Bounce = keyframes`
  0% {
      transform: translate3d(1208px, 310px, 0);
    }

    100% {
      transform: translate3d(1208px, 327px, 0);
    }
`;

const floorManBounce = keyframes`
  0% {
    transform: translate3d(852px, 106px, 0);
  }
  100% {
    transform: translate3d(852px, 123px, 0);
  }
`;

const wallBorder1LeftEntrance = keyframes`
  0% {
    transform: translate3d(205px, 50px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(205px, 452px, 0);
    opacity: 1;
  }
`;

const wallBorder1RightEntrance = keyframes`
  0% {
    transform: translate3d(215px, 50px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(215px, 440px, 0);
    opacity: 1;
  }
`;

const floorBorderSmallLeftEntrance = keyframes`
  0% {
    transform: translate3d(126px, 950px, 0);
    opacity: 0;
  }

  100% {
    transform: translate3d(126px, 529px, 0);
    opacity: 1;
  }
`;

const floorBorderCenterEntrance = keyframes`
  0% {
    transform: translate3d(930px, 950px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(930px, 545px, 0);
    opacity: 1;
  }
`;

const floorBorderSmallRightEntrance = keyframes`
  0% {
    transform: translate3d(1208px, 950px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(1208px, 370px, 0);
    opacity: 1;
  }
`;

const floorBorderMachineEntrance = keyframes`
  0% {
    transform: translate3d(-150px, 426px, 0);
  }

  100% {
    transform: translate3d();
  }
`;

const floorBorderManEntrance = keyframes`
  0% {
    transform: translate3d(852px, 950px, 0);
    opacity: 0;
  }

  100% {
    transform: translate3d(852px, 152px, 0);
    opacity: 1;
  }
`;

const machine1Entrance = keyframes`
  0% {
    transform: matrix(0.1, 0, 0, 0.1, 290, 465);
    opacity: 0;
  }
  50% {
    transform: matrix(0.7, 0, 0, 0.7, 290, 465);
  }
  100% {
    transform: matrix3d(0.5, 0, 0, 0.5, 290, 465);
    opacity: 1;
  }
`;

const machine2Entrance = keyframes`
  0% {
    transform: matrix(0.1, 0, 0, 0.1, 519, 573);
    opacity: 0;
  }
  50% {
    transform: matrix(0.7, 0, 0, 0.7, 519, 573);
  }
  100% {
    transform: matrix3d(0.5, 0, 0, 0.5, 519, 573);
    opacity: 1;
  }
`;

const machine3Entrance = keyframes`
  0% {
    transform: matrix(0.1, 0, 0, 0.1, 632, 475);
    opacity: 0;
  }
  50% {
    transform: matrix(0.7, 0, 0, 0.7, 632, 475);
  }
  100% {
    transform: matrix3d(0.5, 0, 0, 0.5, 632, 475);
    opacity: 1;
  }
`;

const manEntrance = keyframes`
  0% {
    transform: matrix(0.5, 0, 0, 0.5, 0.00000762939453125, 2.879150390625);
    opacity: 0;
  }

  50% {
    transform: matrix(
      0.5,
      0,
      0,
      0.5,
      0.00000762939453125,
      -24.879150390625
    );
  }

  100% {
    transform: matrix3d(0.5, 0, 0, 0.5, 0.00000762939453125, 2.879150390625);
    opacity: 1;
  }
`;

const wallBlueBigLeftEntrace = keyframes`
  0% {
    transform: scale3d(3, 1, 1);
  }
  50% {
    transform: scale3d(2, 1, 1);
  }
  100% {
    transform: matrix3d(1, 0, 0, 1, 215.9720458984375, 443.6510009765625);
  }
`;

const wallBlueBigRightEntrace = keyframes`
  0% {
    transform: scale3d(1.5, 1, 1);
    opacity: 0;
  }

  100% {
    transform: matrix3d(1, 0, 0, 1, 236.9720458984375, 473.6519775390625);
    opacity: 0.4;
  }
`;

const wallBlueSmallEntrace = keyframes`
  0% {
    transform: scale3d(1,3,1);
    opacity: 0;
  }
  50% {
    transform: scale3d(1, 2, 1);
  }
  75% {
    transform: scale3d();
  }
  100% {
    transform: scale3d();
    opacity: 0.4;
  }
`;

const statusAnim = keyframes`
  0% {
    transform: matrix(0.5, 0, 0, 0.5, 320, 377);
    opacity: 0;
  }
  5% {
    transform: matrix(0.5, 0, 0, 0.5, 320, 340);
    opacity: 1;
  }
  10%,
  35% {
    transform: matrix(0.5, 0, 0, 0.5, 320, 377);
    opacity: 1;
  }
  40% {
    transform: matrix3d(0.53, 0, 0, 0.53, 320, 377);
    opacity: 0;
  }
`;

export const Wrapper = styled.div<ImageHeroProps>`
  ${({ isAnimation }) => css`
    svg {
      transform: translate3d(0px, 0px, 0px);
      height: 100%;
    }

    @media (prefers-reduced-motion: no-preference) {
      ${isAnimation &&
      css`
        .thread_trail {
          animation: ${threadTrailEntrance} 0.5s ease-in-out forwards;
          opacity: 0;
        }

        .wall_left_1 {
          animation: ${wall1Bounce} 1.5s 0.6s ease-in-out alternate infinite;
        }

        .wall_left_2 {
          animation: ${wall1Bounce} 1s 0.6s ease-in-out alternate infinite;
        }

        .wall_right_1 {
          transform: translate(210px, 440px);
          animation: ${wall1Bounce} 1.2s 1.4s ease-in-out alternate infinite;
        }

        .floor_small_left {
          transform: translate(119px, 491px);
          animation: ${floorSmallLeftBounce} 0.8s 0.9s ease-in-out alternate
            infinite;
        }

        .floor_machine_1 {
          transform: translate(535px, 335px);
          animation: ${floorMachineBounce} 2s 1.2s ease-in-out alternate
            infinite;
        }

        .floor_error {
          animation: ${floorError} 7s 4s ease-in-out infinite;
        }

        .floor_man_warning {
          animation: ${floorManWarning} 7s 4.5s ease-in-out infinite;
        }

        .floor_machine_2 {
          transform: translate(930px, 515px);
          animation: ${floorMachine2Bounce} 1.1s 0.9s ease-in-out infinite
            alternate;
        }

        .floor_machine_3 {
          transform: translate(1208px, 310px);
          animation: ${floorMachine3Bounce} 1.6s 0.8s ease-in-out infinite
            alternate;
        }

        .floor_man {
          transform: translate(852px, 106px);
          animation: ${floorManBounce} 1.3s 1s ease-in-out infinite alternate;
        }

        .wall_border_1 {
          opacity: 0;
          animation: ${wallBorder1LeftEntrance} 0.6s ease forwards;
        }

        .wall_border_2 {
          opacity: 0;
          animation: ${wallBorder1LeftEntrance} 0.6s 0.3s ease forwards;
        }

        .wall_border_3 {
          opacity: 0;
          animation: ${wallBorder1RightEntrance} 0.8s 0.6s ease forwards;
        }

        .floor_border_small_left {
          opacity: 0;
          animation: ${floorBorderSmallLeftEntrance} 0.6s 0.3s ease forwards;
        }

        .floor_border_small_center {
          opacity: 0;
          animation: ${floorBorderCenterEntrance} 0.6s 0.6s ease forwards;
        }

        .floor_border_small_right {
          opacity: 0;
          animation: ${floorBorderSmallRightEntrance} 0.6s 0.2s ease forwards;
        }

        .floor_border_machine_1 {
          animation: ${floorBorderMachineEntrance} 0.6s ease-in-out;
        }

        .floor_border_man {
          opacity: 0;
          animation: ${floorBorderManEntrance} 0.6s 0.4s ease forwards;
        }

        .machine_1 {
          transform: matrix(0.5, 0, 0, 0.5, 290, 465);
          opacity: 0;
          animation: ${machine1Entrance} 0.8s 0.2s ease-in-out forwards;
        }

        .machine_2 {
          transform: matrix(0.5, 0, 0, 0.5, 519, 573);
          opacity: 0;
          animation: ${machine2Entrance} 0.8s 0.4s ease-in-out forwards;
        }

        .machine_3 {
          transform: matrix(0.5, 0, 0, 0.5, 632, 475);
          opacity: 0;
          animation: ${machine3Entrance} 0.8s 0.6s ease-in-out forwards;
        }

        .man {
          opacity: 0;
          animation: ${manEntrance} 0.8s 0.8s ease forwards;
        }

        .wall_blue_big_left {
          animation: ${wallBlueBigLeftEntrace} 0.6s ease-in-out;
        }

        .wall_blue_big_right {
          opacity: 0;
          animation: ${wallBlueBigRightEntrace} 0.6s 0.1s ease-in-out forwards;
        }

        .wall_blue_small_right {
          opacity: 0;
          animation: ${wallBlueBigRightEntrace} 0.6s 0.3s ease-in-out forwards;
        }

        .wall_blue_small_left {
          opacity: 0;
          animation: ${wallBlueSmallEntrace} 0.6s 0.3s ease-in-out forwards;
        }

        .error {
          transform: matrix(0.1, 0, 0, 0.1, 320, 777);
          opacity: 0;
          animation: ${statusAnim} 7s 4s ease-in-out forwards infinite;
        }

        .machine_ok_1 {
          opacity: 0;
          animation: ${statusAnim} 7s 3s ease-in-out forwards infinite;
        }

        .machine_ok_2 {
          opacity: 0;
          animation: ${statusAnim} 7s 2s ease-in-out forwards infinite;
        }
      `}
    }
  `}
`;

import styled, { css } from "styled-components";

import { Wrapper as wrapperSectionHero } from "@/components/SectionHero/SectionHero.styles";
import { Wrapper as wrapperSectioFeatures } from "@/components/SectionFeatures/SectionFeatures.styles";
import { Wrapper as wrapperSectioVideo } from "@/components/SectionVideo/SectionVideo.styles";
import { Wrapper as wrapperSectioPerformance } from "@/components/SectionPerformance/SectionPerformance.styles";
import { Wrapper as wrapperSectionHowWork } from "@/components/SectionHowWork/SectionHowWork.styles";
import { Wrapper as wrapperSectionFeedback } from "@/components/SectionFeedback/SectionFeedback.styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${wrapperSectionHero} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${wrapperSectioFeatures} {
      ${theme.media.greaterThan("1440")`
         margin-bottom: ${theme.spacings.small};

      `}
    }
    ${wrapperSectioVideo} {
      margin-bottom: ${theme.spacings.xxlarge};

      ${theme.media.greaterThan("1440")`
         margin-bottom: ${theme.spacings.huge};

      `}
    }

    ${wrapperSectioPerformance} {
      margin-bottom: ${theme.spacings.xxlarge};

      ${theme.media.greaterThan("1440")`
         margin-bottom: ${theme.spacings.huge};

      `}
    }

    ${wrapperSectionHowWork} {
      margin-bottom: ${theme.spacings.large};

      ${theme.media.greaterThan("600")`
         margin-bottom: ${theme.spacings.xlarge};

      `}
      ${theme.media.greaterThan("1440")`
         margin-bottom: ${theme.spacings.huge};

      `}
    }

    ${wrapperSectionFeedback} {
      margin-bottom: ${theme.spacings.xxlarge};

      ${theme.media.greaterThan("600")`
         margin-bottom: ${theme.spacings.huge};

      `}
    }
  `}
`;

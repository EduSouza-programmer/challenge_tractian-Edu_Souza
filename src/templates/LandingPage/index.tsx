import SectionHero from "@/components/SectionHero";
import SectionFeatures from "@/components/SectionFeatures";
import SectionVideo from "@/components/SectionVideo";
import SectionPerformance from "@/components/SectionPerformance";
import SectionHowWork from "@/components/SectionHowWork";
import SectionFeedback from "@/components/SectionFeedback";
import SectionFooter from "@/components/SectionFooter";
import Seo from "@/components/PageSEO";

import { LandingPageProps } from "./LandingPage.types";
import * as S from "./LandingPage.styles";

function LandingPage({
  sectionHero,
  sectionFeatures,
  sectionVideo,
  sectionPerformance,
  sectionHowWork,
  sectionFeedback,
  sectionFooter,
  ...props
}: LandingPageProps) {
  return (
    <S.Wrapper {...props}>
      <Seo
        title="TRACTIAN"
        description="TRACTIAN - Escute suas máquinas, elas estão falando!"
        suffixTitleAplication="| Escute suas máquinas, elas estão falando!"
        shouldIndexPage
      />
      <SectionHero isAnimation {...sectionHero} />
      <SectionFeatures {...sectionFeatures} />
      <SectionVideo {...sectionVideo} />
      <SectionPerformance {...sectionPerformance} />
      <SectionHowWork {...sectionHowWork} />
      <SectionFeedback {...sectionFeedback} />
      <SectionFooter {...sectionFooter} />
    </S.Wrapper>
  );
}

export default LandingPage;

import { HtmlHTMLAttributes } from "react";

import { SectionHeroProps } from "@/components/SectionHero/SectionHero.types";
import { SectionFeaturesProps } from "@/components/SectionFeatures/SectionFeatures.types";
import { SectionVideoProps } from "@/components/SectionVideo/SectionVideo.types";
import { SectionPerformanceProps } from "@/components/SectionPerformance/SectionPerformance.types";

import { SectionHowWorkProps } from "@/components/SectionHowWork/SectionHowWork.types";

import { SectionFeedbackProps } from "@/components/SectionFeedback/SectionFeedback.types";

import { SectionFooterProps } from "@/components/SectionFooter/SectionFooter.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type LandingPageProps = {
  sectionHero: SectionHeroProps;
  sectionFeatures: SectionFeaturesProps;
  sectionVideo: SectionVideoProps;
  sectionPerformance: SectionPerformanceProps;
  sectionHowWork: SectionHowWorkProps;
  sectionFeedback: SectionFeedbackProps;
  sectionFooter: SectionFooterProps;
} & Attributes;

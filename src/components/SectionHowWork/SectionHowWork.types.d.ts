import { HtmlHTMLAttributes } from "react";

import { CardHowWorkProps } from "@/components/CardHowWork/CardHowWork.types";
import { PerceptualCardProps } from "@/components/PerceptualCard/PerceptualCard.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type SectionHowWorkProps = {
  title: string;
  subtitle: string;
  cardsHowWorks: CardHowWorkProps[];
  perceptualCards: PerceptualCardProps[];
} & Attributes;

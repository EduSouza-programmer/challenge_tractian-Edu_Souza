import { HtmlHTMLAttributes } from "react";

import { CardHowWorkProps } from "@/components/CardHowWork/CardHowWork.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type CardHowWorkSliderProps = {
  cardsHowWorks: CardHowWorkProps[];
} & Attributes;

export { Settings } from "react-slick";

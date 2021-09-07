import { HtmlHTMLAttributes } from "react";

import { CardPerformanceProps } from "@/components/CardPerformance/CardPerformance.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type SectionPerformanceProps = {
  cardPerformances: CardPerformanceProps[];
} & Attributes;

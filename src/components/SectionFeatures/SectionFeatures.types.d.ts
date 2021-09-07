import { HtmlHTMLAttributes } from "react";

import { CardFeatureProps } from "@/components/CardFeature/CardFeature.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type SectionFeaturesProps = {
  description: string;
  cardFeatures: CardFeatureProps[];
} & Attributes;

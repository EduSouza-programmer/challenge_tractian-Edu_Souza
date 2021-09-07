import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type PerceptualCardProps = {
  perceptual: string;
  message: string;
} & Attributes;

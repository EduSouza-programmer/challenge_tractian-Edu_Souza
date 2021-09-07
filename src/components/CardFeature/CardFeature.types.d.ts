import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type ImageIcon = {
  src: string;
  alt: string;
};

export type CardFeatureProps = {
  imageIcon: ImageIcon;
  title: string;
  description: string;
} & Attributes;

import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type BackgroundImage = {
  src: string;
  alt: string;
  dataBlur?: string;
};

export type SectionVideoProps = {
  title: string;
  backgroundImage: BackgroundImage;
  embedURL: string;
} & Attributes;

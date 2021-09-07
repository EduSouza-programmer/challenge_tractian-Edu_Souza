import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Image = {
  src: string;
  alt: string;
  dataBlur?: string;
};

export type SectionFooterProps = {
  title: string;
  subtitle: string;
  message: string;
  image: Image;
} & Attributes;

import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Position = "left" | "right";

type Image = {
  src: string;
  alt: string;
  dataBlur?: string;
  position?: Position;
};

export type CardPerformanceProps = {
  image: Image;
  title: string;
  description: string;
} & Attributes;

export type WrapperImageProps = Pick<CardPerformanceProps, "image">;

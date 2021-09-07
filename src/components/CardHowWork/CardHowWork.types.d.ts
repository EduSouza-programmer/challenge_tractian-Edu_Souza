import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Image = {
  src: string;
  alt: string;
  dataBlur?: string;
  position?: "left" | "right";
};

type CardColor = "blue" | "white";

export type CardHowWorkProps = {
  title: string;
  description: string;
  image: Image;
  cardColor?: CardColor;
} & Attributes;

export type WrapperProps = Pick<CardHowWorkProps, "cardColor">;

export type ContentProps = Pick<CardHowWorkProps, "image">;

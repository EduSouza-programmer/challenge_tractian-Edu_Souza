import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Image = {
  src: string;
  alt?: string;
  dataBlur?: string;
};

type Size = "xsmall" | "small" | "medium" | "large";

type BorderColor = "white" | "blue";

type Color = "white" | "blue";

type Professional = {
  office: string;
  industry: string;
};

export type UserFeedbackBaseProps<T = unknown> = {
  image?: Image;
  size?: Size;
  borderColor?: BorderColor;
  name?: string;
  professional?: Professional;
  color?: Color;
} & Attributes &
  T;

export type WrapperProps = Pick<UserFeedbackBaseProps, "size">;

export type WrapperImageProps = Pick<UserFeedbackBaseProps, "borderColor">;

export type TextsProps = Pick<UserFeedbackBaseProps, "size" | "color">;

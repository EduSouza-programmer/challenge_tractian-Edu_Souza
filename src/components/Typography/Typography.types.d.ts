import { HtmlHTMLAttributes } from "react";

import { TypographySize, TypographyColor } from "@/types";

export type Responsive = {
  min: number;
  max: number;
  isNoWrapperText?: boolean;
};

type Notify = {
  success?: string;
  error?: string;
  warning?: string;
  hint?: string;
};

type Attributes = Pick<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  "className" | "dangerouslySetInnerHTML" | "onClick"
>;

export type TypographyProps<T = unknown> = {
  text?: React.ReactNode;
  size?: TypographySize;
  color?: TypographyColor;
  responsive?: Responsive;
  notify?: Notify;
  disabled?: boolean;
  as?: React.ElementType;
  forwardedAs?: React.ElementType;
} & Attributes &
  T;

export type WrapperProps = Omit<TypographyProps, "text">;

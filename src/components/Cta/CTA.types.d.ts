import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

import { ButtonSize, ButtonColor } from "@/types";
import { TypographyProps } from "@/components/Typography/Typography.types";
import { IconProps } from "@/components/Icon/Icon.types";

export type Appearance = "none" | "button" | "link";

type Attributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "className" | "disabled"
> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export type CtaProps<T = unknown> = {
  size?: ButtonSize;
  color?: ButtonColor;
  label?: TypographyProps;
  fullWidth?: boolean;
  appearance?: Appearance;
  icon?: IconProps;
  as?: React.ElementType;
  forwardedAs?: React.ElementType;
} & Attributes &
  T;

export type WrapperProps = Pick<
  CtaProps,
  "size" | "fullWidth" | "appearance" | "icon" | "label" | "color" | "disabled"
>;

export { TypographyColor, ButtonColor } from "@/types";

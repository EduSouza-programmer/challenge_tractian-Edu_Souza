import { HtmlHTMLAttributes } from "react";
import { IconColor, IconSize, Icons } from "@/types";

type Position = "left" | "right";

type Notify = {
  error?: string;
  success?: string;
  warning?: string;
};

type Attributes = Pick<
  HtmlHTMLAttributes<HTMLOrSVGElement>,
  "className" | "onClick" | "aria-label"
>;

export type IconProps<T = unknown> = {
  listOfChoices: Icons;
  size?: IconSize;
  color?: IconColor;
  position?: Position;
  notify?: Notify;
  disabled?: boolean;
} & Attributes &
  T;

export type WrapperProps = Omit<IconProps, "listOfChoices" | "aria-label">;

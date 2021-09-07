import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

import { CheckboxColor } from "@/types";
import { TypographyProps } from "@/components/Typography/Typography.types";

export type LabelProps = Pick<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">;

type Attributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "checked" | "className" | "disabled" | "name" | "value"
>;

export type CheckboxProps = {
  onValue?: (isCheck: boolean) => void;
  label?: TypographyProps<LabelProps>;
  color?: CheckboxColor;
} & Attributes;

export type InputProps = Pick<CheckboxProps, "color">;

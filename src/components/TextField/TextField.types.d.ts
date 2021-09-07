import { LabelHTMLAttributes, InputHTMLAttributes } from "react";

import { TextFieldColor, TextFieldSize } from "@/types";
import { TypographyProps } from "@/components/Typography/Typography.types";
import { IconProps } from "@/components/Icon/Icon.types";

export type LabelProps = Pick<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">;

type Attributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "placeholder" | "className" | "disabled" | "name" | "value"
>;

type InputValue = string | ReadonlyArray<string> | number;

type Notify = {
  success?: string;
  error?: string;
  warning?: string;
};

export type TextFieldProps = {
  onValue?: (value?: InputValue) => void;
  size?: TextFieldSize;
  color?: TextFieldColor;
  label?: TypographyProps<LabelProps>;
  icon?: IconProps;
  notify?: Notify;
} & Attributes;

export type InputWrapperProps = Pick<
  TextFieldProps,
  "color" | "notify" | "disabled"
>;

export type InputProps = Pick<TextFieldProps, "size"> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

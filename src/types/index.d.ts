/* eslint-disable @typescript-eslint/no-empty-interface */
import { HtmlHTMLAttributes } from "react";

import theme from "@/styles/themes/main.theme";
import { mediaQueries, mods } from "@/utils/theme/theme.helpers";

export type ButtonSize = keyof typeof theme.models.button.size;
export type ButtonColor = keyof typeof theme.palette.button;

export type TextFieldSize = keyof typeof theme.models.textField.size;
export type TextFieldColor = keyof typeof theme.palette.textField;

export type CheckboxColor = keyof typeof theme.palette.checkbox;

export type RadioColor = keyof typeof theme.palette.radio;

export type IconColor = keyof typeof theme.palette.icon;
export type IconSize = keyof typeof theme.models.icon.size;
export type Icons = keyof typeof theme.models.icon.list;
export type SVGIconProps = HtmlHTMLAttributes<HTMLOrSVGElement>;

export type Breakpoint = keyof typeof mediaQueries;

export type TypographySize = keyof typeof theme.typography.fontSizes;
export type TypographyColor = keyof typeof theme.palette.text;

type Mods = typeof mods;
export interface Modifiers extends Mods {}

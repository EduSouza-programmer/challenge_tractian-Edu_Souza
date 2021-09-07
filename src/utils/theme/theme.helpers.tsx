/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/ban-types */
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import { Search } from "@styled-icons/material-outlined/Search";
import { Close } from "@styled-icons/material-outlined/Close";
import { Email } from "@styled-icons/material-outlined/Email";
import { Lock } from "@styled-icons/material-outlined/Lock";
import { Favorite } from "@styled-icons/material-outlined/Favorite";
import { FavoriteBorder } from "@styled-icons/material-outlined/FavoriteBorder";

import { modifiers as TYPOGRAPHY } from "@/components/Typography/Typography.styles";
import { modifiers as ICON } from "@/components/Icon/Icon.styles";
import { modifiers as CTA } from "@/components/Cta/CTA.styles";
import { modifiers as TEXTFIELD } from "@/components/TextField/TextField.styles";
import { modifiers as CHECKBOX } from "@/components/Checkbox/Checkbox.styles";
import { modifiers as RADIO } from "@/components/Radio/Radio.styles";
import { modifiers as USERFEEDBACKBASE } from "@/components/UserFeedbackBase/UserFeedbackBase.styles";

import { Modifiers, SVGIconProps } from "@/types";

export const mods = {
  TYPOGRAPHY,
  ICON,
  CTA,
  TEXTFIELD,
  CHECKBOX,
  RADIO,
  USERFEEDBACKBASE,
} as const;
export const modifiers: Modifiers = mods;

export const mediaQueries = {
  "1920": "1920px",
  "1440": "1440px",
  "1350": "1350px",
  "1170": "1170px",
  "1150": "1150px",
  "1100": "1100px",
  "1050": "1050px",
  "990": "990px",
  "945": "945px",
  "900": "900px",
  "860": "860px",
  "820": "820px",
  "769": "769px",
  "710": "710px",
  "690": "690px",
  "650": "650px",
  "600": "600px",
  "590": "590px",
  "530": "530px",
  "510": "510px",
  "450": "450px",
  "400": "400px",
  "350": "350px",
  "320": "320px",
} as const;

export const icons = {
  AddShoppingCart: (props: SVGIconProps) => (
    <AddShoppingCart role="img" title="AddShoppingCart" {...props} />
  ),
  ShoppingCart: (props: SVGIconProps) => (
    <ShoppingCart role="img" title="ShoppingCart" {...props} />
  ),
  Search: (props: SVGIconProps) => (
    <Search role="img" title="Search" {...props} />
  ),
  Close: (props: SVGIconProps) => <Close role="img" title="Close" {...props} />,
  Email: (props: SVGIconProps) => <Email role="img" title="Email" {...props} />,
  Lock: (props: SVGIconProps) => <Lock role="img" title="Lock" {...props} />,
  Favorite: (props: SVGIconProps) => (
    <Favorite role="img" title="Favorite" {...props} />
  ),
  FavoriteBorder: (props: SVGIconProps) => (
    <FavoriteBorder role="img" title="FavoriteBorder" {...props} />
  ),
} as const;

export const shadows = {
  "0": "none",
  "1": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  "2": "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
  "3": "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
  "4": "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
  "5": "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
  "6": "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
  "7": "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
  "8": "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
  "9": "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
  "10": "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
  "11": "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
  "12": "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
  "13": "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
  "14": "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
  "15": "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
  "16": "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
  "17": "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
  "18": "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
  "19": "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
  "20": "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
  "21": "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
  "22": "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
  "23": "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
  "24": "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
} as const;

export const cubicBezier = {
  linear: "cubic-bezier(.250, .250, .750, .750)",

  ease: "cubic-bezier(.250, .100, .250, 1)",
  "ease-in": "cubic-bezier(.420, 0, 1, 1)",
  "ease-out": "cubic-bezier(.000, 0, .580, 1)",
  "ease-in-out": "cubic-bezier(.420, 0, .580, 1)",

  "ease-in-back": "cubic-bezier(.6, -.28, .735, .045)",
  "ease-out-back": "cubic-bezier(.175, .885, .32, 1.275)",
  "ease-in-out-back": "cubic-bezier(.68, -.55, .265, 1.55)",

  "ease-in-sine": "cubic-bezier(.47, 0, .745, .715)",
  "ease-out-sine": "cubic-bezier(.39, .575, .565, 1)",
  "ease-in-out-sine": "cubic-bezier(.445, .05, .55, .95)",

  "ease-in-quad": "cubic-bezier(.55, .085, .68, .53)",
  "ease-out-quad": "cubic-bezier(.25, .46, .45, .94)",
  "ease-in-out-quad": "cubic-bezier(.455, .03, .515, .955)",

  "ease-in-cubic": "cubic-bezier(.55, .085, .68, .53)",
  "ease-out-cubic": "cubic-bezier(.25, .46, .45, .94)",
  "ease-in-out-cubic": "cubic-bezier(.455, .03, .515, .955)",

  "ease-in-quart": "cubic-bezier(.55, .085, .68, .53)",
  "ease-out-quart": "cubic-bezier(.25, .46, .45, .94)",
  "ease-in-out-quart": "cubic-bezier(.455, .03, .515, .955)",
} as const;

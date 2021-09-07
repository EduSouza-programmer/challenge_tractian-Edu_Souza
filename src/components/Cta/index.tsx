import { forwardRef } from "react";

import Icon from "@/components/Icon";
import Label from "@/components/Typography";

import { WrapperProps, CtaProps } from "./CTA.types";
import * as S from "./CTA.styles";

const Cta: React.ForwardRefRenderFunction<WrapperProps, CtaProps> = (
  {
    size = "medium",
    color = "none",
    label = { text: "" },
    fullWidth = false,
    appearance = "button",
    icon,
    disabled,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      ref={ref}
      icon={icon}
      color={color}
      appearance={appearance}
      fullWidth={fullWidth}
      size={size}
      label={label}
      disabled={disabled}
      {...props}
    >
      {!!icon?.listOfChoices && <Icon {...icon} />}

      {!!label.text && <Label as="span" disabled={disabled} {...label} />}
    </S.Wrapper>
  );
};

export default forwardRef(Cta);

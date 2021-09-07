import { memo } from "react";

import { TypographyProps } from "./Typography.types";
import * as S from "./Typography.styles";

function Typography({
  text,
  size,
  color = "white",
  responsive,
  notify,
  disabled,
  ...props
}: TypographyProps) {
  return (
    <S.Wrapper
      notify={notify}
      size={size}
      color={color}
      responsive={responsive}
      disabled={disabled}
      {...props}
    >
      {text}
    </S.Wrapper>
  );
}

export default memo(Typography);

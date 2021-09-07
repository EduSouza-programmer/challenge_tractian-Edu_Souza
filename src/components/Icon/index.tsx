import { useTheme } from "styled-components";

import { IconProps } from "./Icon.types";
import * as S from "./Icon.styles";

function Icon({
  listOfChoices,
  size = "small",
  color = "white",
  position,
  notify,
  disabled,
  className,
  onClick,
  ...props
}: IconProps) {
  const theme = useTheme();

  return (
    <S.Wrapper
      position={position}
      color={color}
      size={size}
      notify={notify}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {theme.models.icon.list[listOfChoices]({ ...props })}
    </S.Wrapper>
  );
}

export default Icon;

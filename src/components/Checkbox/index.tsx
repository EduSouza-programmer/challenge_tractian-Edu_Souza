import { useCallback, useRef } from "react";

import { CheckboxProps } from "./Checkbox.types";
import * as S from "./Checkbox.styles";

function Checkbox({
  onValue,
  checked,
  label = { text: "" },
  color = "primary",
  disabled,
  className,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleOnchange = useCallback(() => {
    if (onValue) {
      onValue(!!checkboxRef.current?.checked);
    }
  }, [onValue]);
  return (
    <S.Wrapper className={className}>
      <S.Input
        id={label.htmlFor}
        type="checkbox"
        onChange={handleOnchange}
        ref={checkboxRef}
        defaultChecked={checked}
        color={color}
        disabled={disabled}
        {...props}
      />

      {label.text && <S.Label disabled={disabled} {...label} />}
    </S.Wrapper>
  );
}

export default Checkbox;

import { useRef, useCallback } from "react";
import { RadioProps } from "./Radio.types";
import * as S from "./Radio.styles";

function Radio({
  className,
  onValue,
  label,
  checked,
  color = "primary",
  disabled,
  ...props
}: RadioProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = useCallback(() => {
    if (onValue) {
      onValue(inputRef.current?.value);
    }
  }, [onValue]);

  return (
    <S.Wrapper className={className}>
      <S.Input
        onChange={handleOnChange}
        ref={inputRef}
        type="radio"
        id={label?.htmlFor}
        defaultChecked={checked}
        color={color}
        disabled={disabled}
        {...props}
      />
      {label?.text && <S.Label disabled={disabled} {...label} />}
    </S.Wrapper>
  );
}

export default Radio;

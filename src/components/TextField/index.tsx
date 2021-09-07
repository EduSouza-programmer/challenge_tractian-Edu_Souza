import { useRef, useCallback, useState } from "react";

import { TextFieldProps } from "./TextField.types";
import * as S from "./TextField.styles";

function TextField({
  onValue,
  size = "medium",
  color = "primary",
  label = { text: "", color: "black" },
  icon,
  notify,
  disabled,
  className,
  ...props
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // simulation
  const [success, setSuccess] = useState("");

  const handleValidation = useCallback(() => {
    if (inputRef.current?.value) {
      setSuccess(inputRef.current.value);
      return;
    }
    setSuccess("");
  }, []);

  const handleValue = useCallback(() => {
    if (onValue) {
      onValue(inputRef.current?.value);
    }
  }, [onValue]);

  return (
    <S.Wrapper className={className}>
      {!!label.text && (
        <S.Label notify={notify} disabled={disabled} {...label} />
      )}

      <S.InputWrapper color={color} notify={notify} disabled={disabled}>
        {icon?.listOfChoices && (
          <S.Icon
            disabled={disabled}
            notify={{ success, ...notify }}
            color="gray"
            {...icon}
          />
        )}
        <S.Input
          onBlur={handleValidation}
          ref={inputRef}
          id={label.htmlFor}
          size={size}
          type="text"
          onChange={handleValue}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {notify && (
        <S.TextNotify
          text={notify.warning || notify.error}
          notify={notify}
          disabled={disabled}
        />
      )}
    </S.Wrapper>
  );
}

export default TextField;

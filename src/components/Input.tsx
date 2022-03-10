import React, {
  ChangeEvent, InputHTMLAttributes,
  useCallback
} from "react";
import styled, { CSSObject } from "styled-components";

const StyledInput = styled.input(() => ({
  outline: "none",
  border: "1px solid",
  width: "100%",
  padding: "10px 10px",
}));

const Container = styled.div<{ containerStyles: CSSObject }>(
  ({ containerStyles }) => containerStyles
);

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  attrs: InputHTMLAttributes<HTMLInputElement>;
  containerStyles?: CSSObject;
}

const Input = ({
  value,
  onChange,
  containerStyles,
  attrs,
  label,
}: InputProps) => {
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const input = (
    <>
      {label && <div style={{ fontWeight: "bold" }}>{label}</div>}
      <StyledInput value={value} onChange={handleOnChange} {...attrs} />
    </>
  );

  return containerStyles ? (
    <Container containerStyles={containerStyles}>{input}</Container>
  ) : (
    input
  );
};

export default Input;

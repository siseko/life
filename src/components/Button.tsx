import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled, { CSSObject } from "styled-components";

const StyledButton = styled.button(({ disabled }) => ({
  outline: "none",
  border: "none",
  width: "100%",
  padding: "10px 10px",
  cursor: disabled ? "not-allowed" : "pointer",
  color: "#fff",
  backgroundColor: "#e93838",
  opacity: disabled ? 0.5 : 1,
}));

const Container = styled.div<{ containerStyles: CSSObject }>(
  ({ containerStyles }) => containerStyles
);

interface ButtonProps {
  onClick: () => void;
  attrs: ButtonHTMLAttributes<HTMLButtonElement>;
  containerStyles?: CSSObject;
}

const Button = ({
  onClick,
  containerStyles,
  children,
  attrs,
}: PropsWithChildren<ButtonProps>) => {
  const button = (
    <StyledButton onClick={onClick} {...attrs}>
      {children}
    </StyledButton>
  );

  return containerStyles ? (
    <Container containerStyles={containerStyles}>{button}</Container>
  ) : (
    button
  );
};

export default Button;

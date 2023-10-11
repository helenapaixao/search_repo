import React from "react";
import { Container } from "./styles";

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean; 
}

const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return <Container onClick={onClick} disabled={disabled}>{children}</Container>;
};

export default Button;

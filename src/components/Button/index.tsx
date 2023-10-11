import React from "react";
import { Container } from "./styles";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;

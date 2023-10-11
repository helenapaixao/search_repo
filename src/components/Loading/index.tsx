import React from "react";
import { Container, Spinner } from "./styles";

const Loading = () => {
  return (
    <Container data-testid="loading-component">
      <Spinner data-testid="spinner-element" />
    </Container>
  );
};

export default Loading;

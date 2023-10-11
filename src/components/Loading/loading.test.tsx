import React from "react";
import { render } from "@testing-library/react";
import Loading from "./index";

describe("Loading", () => {
  it("should render the loading component", () => {
    const { getByTestId } = render(<Loading />);
    const loadingComponent = getByTestId("loading-component");
    expect(loadingComponent).toBeInTheDocument();
  });

  it("should render the spinner element", () => {
    const { getByTestId } = render(<Loading />);
    const spinnerElement = getByTestId("spinner-element");
    expect(spinnerElement).toBeInTheDocument();
  });
});

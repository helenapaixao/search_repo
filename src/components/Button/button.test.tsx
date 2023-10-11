import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("It should render the button correctly", () => {
    const buttonText = "Click me";
    const onClick = jest.fn();

    const { getByText } = render(
      <Button onClick={onClick}>{buttonText}</Button>
    );

    const button = getByText(buttonText);

    expect(button).toBeInTheDocument();
  });

  it("It should call the 'onClick' function when the button is clicked.", () => {
    const buttonText = "Click me";
    const onClick = jest.fn();

    const { getByText } = render(
      <Button onClick={onClick}>{buttonText}</Button>
    );

    const button = getByText(buttonText);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

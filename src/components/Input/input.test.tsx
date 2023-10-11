import { render, fireEvent } from "@testing-library/react";
import Input from "./index";

describe("Input", () => {
  it("should render the input field correctly", () => {
    const { getByTestId } = render(<Input data-testid="test-input" />);
    const inputElement = getByTestId("test-input");
    expect(inputElement).toBeInTheDocument();
  });

  it("should trigger the 'onChange' event when text is typed into the input field", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Input data-testid="test-input" onChange={onChange} />
    );
    const inputElement = getByTestId("test-input");

    fireEvent.change(inputElement, { target: { value: "Test Input" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

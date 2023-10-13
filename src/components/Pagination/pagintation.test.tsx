import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "./index";

test("The correct rendering of pagination.", () => {
  render(
    <Pagination
      currentPage={2}
      totalPages={5}
      onPageChange={jest.fn()}
      hasPrevious={true}
      hasNext={true}
    />
  );
  const pageInfo = screen.getByText("2 de 5");

  expect(pageInfo).toBeInTheDocument();
});

test("Disable the previous button when there is no previous page", () => {
  const { getByRole } = render(
    <Pagination
      currentPage={1}
      totalPages={1}
      onPageChange={jest.fn()}
      hasPrevious={false}
      hasNext={false}
    />
  );

  const previousButton = getByRole("button", { name: /Anterior/i });
  const nextButton = getByRole("button", { name: /Próxima/i });

  expect(previousButton).toBeDisabled();
  expect(nextButton).toBeDisabled();
});

test("Call the onPageChange function with the new page number when a pagination button is clicked", () => {
  const onPageChange = jest.fn();
  const { getByRole } = render(
    <Pagination
      currentPage={3}
      totalPages={5}
      onPageChange={onPageChange}
      hasPrevious={true}
      hasNext={true}
    />
  );

  const previousButton = getByRole("button", { name: /Anterior/i });
  const nextButton = getByRole("button", { name: /Próxima/i });

  fireEvent.click(previousButton);
  fireEvent.click(nextButton);

  expect(onPageChange).toHaveBeenCalledWith(2);
  expect(onPageChange).toHaveBeenCalledWith(4);
});

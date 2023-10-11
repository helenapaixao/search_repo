import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./index";

test("Renderização correta da paginação", () => {
  const { getByText, getByRole } = render(
    <Pagination currentPage={2} totalPages={5} onPageChange={jest.fn()} hasPrevious={true} hasNext={true} />
  );

  const previousButton = getByRole("button", { name: /Anterior/i });
  const nextButton = getByRole("button", { name: /Próxima/i });

  expect(previousButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  const pageInfo = getByText(/Página 2 de 5/i);
  expect(pageInfo).toBeInTheDocument();
});

test("Desabilitar botões corretamente", () => {
  const { getByRole } = render(
    <Pagination currentPage={1} totalPages={1} onPageChange={jest.fn()} hasPrevious={false} hasNext={false} />
  );

  const previousButton = getByRole("button", { name: /Anterior/i });
  const nextButton = getByRole("button", { name: /Próxima/i });


  expect(previousButton).toBeDisabled();
  expect(nextButton).toBeDisabled();
});

test("Chamar a função onPageChange corretamente", () => {
  const onPageChange = jest.fn();
  const { getByRole } = render(
    <Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} hasPrevious={true} hasNext={true} />
  );

  const previousButton = getByRole("button", { name: /Anterior/i });
  const nextButton = getByRole("button", { name: /Próxima/i });

  fireEvent.click(previousButton);
  fireEvent.click(nextButton);

  expect(onPageChange).toHaveBeenCalledWith(2);
  expect(onPageChange).toHaveBeenCalledWith(4);
});

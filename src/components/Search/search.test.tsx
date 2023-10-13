import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./index";

describe("SearchBar", () => {
  it("should render the search input and search button", () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchBar onSearch={() => {}} />
    );

    const searchInput = getByPlaceholderText("Digite...");
    const searchButton = getByText("Buscar");

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("should call the onSearch function when the search button is clicked", () => {
    const mockOnSearch = jest.fn();
    const { getByText } = render(<SearchBar onSearch={mockOnSearch} />);
    const searchButton = getByText("Buscar");

    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  it("should update the searchQuery when the input value changes", () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const searchInput = getByPlaceholderText("Digite...") as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "search term" } });

    expect(searchInput.value).toBe("search term");
  });
});

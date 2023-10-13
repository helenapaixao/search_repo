import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { SearchBarContainer } from './styles';

interface SearchBarProps {
  onSearch: (query: string) => void; // Callback to handle a search query
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle the search button click
  const handleSearch = () => {
    onSearch(searchQuery); // Trigger the search callback with the search query
  };

  return (
    <SearchBarContainer>
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Digite..."
      />
       {/* Search button that triggers the search when clicked */}
      <Button onClick={handleSearch}>Buscar</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;

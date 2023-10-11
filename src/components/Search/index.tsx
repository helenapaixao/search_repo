import React, { useState } from 'react';
import { SearchBarContainer, Input, Button } from './styles';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <SearchBarContainer>
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="buscar..."
      />
      <Button onClick={handleSearch}>Buscar</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;

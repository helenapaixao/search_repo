import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { SearchBarContainer } from './styles';

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
        placeholder="Digite..."
      />
      <Button onClick={handleSearch}>Buscar</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;

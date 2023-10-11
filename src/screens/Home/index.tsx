import React, { useState } from "react";
import { searchRepositories, Repository } from "../../services/api";
import RepositoryDetails from "../../components/RepoDetail";
import SearchBar from "../../components/Search";
import RepoList from "../../components/RepoList";

function Home() {
  const [searchResults, setSearchResults] = useState<Repository[]>([]);
  const [selectedRepository, setSelectedRepository] =
    useState<Repository | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      const results = await searchRepositories(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Erro ao buscar repositórios:", error);
    }
  };

  const handleRepositoryClick = (repository: Repository) => {
    setSelectedRepository(repository);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRepository(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div>
        <h2>Resultados da pesquisa:</h2>
        <ul>
          <RepoList
            repos={searchResults}
            handleRepositoryClick={handleRepositoryClick}
          />
        </ul>
      </div>
      {selectedRepository && (
        <RepositoryDetails
          isModalOpen={isModalOpen}
          onRequestClose={closeModal}
          repository={selectedRepository}
        />
      )}
    </div>
  );
}

export default Home;

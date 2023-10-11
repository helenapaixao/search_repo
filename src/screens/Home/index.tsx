import { useState } from "react";

import { searchRepositories, Repository } from "../../services/api";

import RepositoryDetails from "../../components/RepoDetail";
import SearchBar from "../../components/Search";
import RepoList from "../../components/RepoList";
import Loading from "../../components/Loading";

import { Container } from "./styles";

function Home() {
  const [searchResults, setSearchResults] = useState<Repository[]>([]);
  const [selectedRepository, setSelectedRepository] =
    useState<Repository | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setShowNoResultsMessage(false);
    try {
      const results = await searchRepositories(query);
      setSearchResults(results);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (results.length === 0) {
        setShowNoResultsMessage(true);
      }
    } catch (error) {
      console.error("Erro ao buscar repositórios:", error);
    } finally {
      setIsLoading(false);
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
      <Container>
        <SearchBar onSearch={handleSearch} />

        <div>
          {isLoading ? (
            <Loading />
          ) : searchResults.length > 0 ? (
            <>
              <h2>Resultados da pesquisa:</h2>
              <RepoList
                repos={searchResults}
                handleRepositoryClick={handleRepositoryClick}
              />
            </>
          ) : showNoResultsMessage ? (
            <p>Nenhum resultado encontrado.</p>
          ) : null}
        </div>
        {selectedRepository && (
          <RepositoryDetails
            isModalOpen={isModalOpen}
            onRequestClose={closeModal}
            repository={selectedRepository}
          />
        )}
      </Container>
    </div>
  );
}

export default Home;

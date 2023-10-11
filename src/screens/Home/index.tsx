import { useState, useEffect } from "react";
import { searchRepositories, Repository } from "../../services/api";
import RepositoryDetails from "../../components/RepoDetail";
import SearchBar from "../../components/Search";
import RepoList from "../../components/RepoList";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

import { Container, Content, Title, ErrorMessage } from "./styles";

function Home() {
  const [searchResults, setSearchResults] = useState<Repository[]>([]);
  const [selectedRepository, setSelectedRepository] =
    useState<Repository | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const itemsPerPage: number = 10;

  const loadSearchResults = async (page: number, query: string) => {
    setIsLoading(true);
    setShowNoResultsMessage(false);

    try {
      const results = await searchRepositories(query);
      setSearchResults(results.items);
      setTotalPages(Math.ceil(results.total_count / itemsPerPage));

      if (results.items.length === 0) {
        setShowNoResultsMessage(true);
      }
    } catch (error) {
      console.error("Erro ao buscar repositórios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleRepositoryClick = (repository: Repository) => {
    setSelectedRepository(repository);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRepository(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    loadSearchResults(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  return (
    <div>
      <Container>
        <Content>
          <Title>Busque um repositório</Title>
          <SearchBar onSearch={handleSearch} />

          {isLoading ? (
            <Loading />
          ) : searchResults.length > 0 ? (
            <>
              <Title>Resultados da pesquisa:</Title>
              <RepoList
                repos={searchResults}
                handleRepositoryClick={handleRepositoryClick}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                hasPrevious={hasPrevious}
                hasNext={hasNext}
              />
            </>
          ) : showNoResultsMessage ? (
            <ErrorMessage>Nenhum resultado encontrado.</ErrorMessage>
          ) : null}
          {selectedRepository && (
            <RepositoryDetails
              isModalOpen={isModalOpen}
              onRequestClose={closeModal}
              repository={selectedRepository}
            />
          )}
        </Content>
      </Container>
    </div>
  );
}

export default Home;

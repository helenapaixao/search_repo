import { Container, PaginationInfo } from "./styles";
import Button from "../../components/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  hasPrevious: boolean; 
  hasNext: boolean; 
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  hasPrevious,
  hasNext,
}: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <Container>
      <Button
        onClick={() => hasPrevious && handlePageChange(currentPage - 1)}
        disabled={!hasPrevious}
      >
        Anterior
      </Button>
      <PaginationInfo>
         {currentPage} de {totalPages}
      </PaginationInfo>
      <Button
        onClick={() => hasNext && handlePageChange(currentPage + 1)}
        disabled={!hasNext}
      >
        Próxima
      </Button>
    </Container>
  );
};

export default Pagination;

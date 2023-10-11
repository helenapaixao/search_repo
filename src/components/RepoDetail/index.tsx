import { Repository } from "../../services/api";
import Button from "../Button";
import { Container, Title, Property, Value, CloseButton, StyledModal } from "./styles";

interface RepositoryDetailsProps {
  isModalOpen: boolean;
  onRequestClose: () => void;
  repository: Repository | null;
}

const RepositoryDetails = ({
  repository,
  isModalOpen,
  onRequestClose,
}: RepositoryDetailsProps) => {
  return (
    <StyledModal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalhes do Repositório"
    >
      {repository && (
        <Container>
          <Title>Detalhes do Repositório</Title>
          <Property>
            <strong>Nome:</strong>
          </Property>
          <Value>{repository.name}</Value>
          <Property>
            <strong>Descrição:</strong>
          </Property>
          <Value>{repository.description || "Nenhuma descrição disponível."}</Value>
          <CloseButton>
            <Button onClick={onRequestClose}>Fechar</Button>
          </CloseButton>
        </Container>
      )}
    </StyledModal>
  );
};

export default RepositoryDetails;

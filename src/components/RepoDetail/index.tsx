import { useEffect } from "react";
import Modal from "react-modal";
import { Repository } from "../../services/api";
import Button from "../Button";
import {
  Container,
  Title,
  Property,
  Value,
  CloseButton,
  ModalStyle,
  OverlayStyle,
} from "./styles";

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
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
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
          <Value>
            {repository.description || "Nenhuma descrição disponível."}
          </Value>
          <Property>
            <strong>Estrelas:</strong>
          </Property>
          <Value>{repository.stargazers_count}</Value>
          <Property>
            <strong>Linguagem:</strong>
          </Property>
          <Value>{repository.language || "Não especificada"}</Value>
          <CloseButton>
            <Button onClick={onRequestClose} disabled={false}>
              Fechar
            </Button>
          </CloseButton>
        </Container>
      )}
    </Modal>
  );
};

export default RepositoryDetails;

import { useEffect } from "react";
import Modal from "react-modal";
import { Repository } from "../../services/api";
import { FaTimes, FaStar, FaCode, FaFileAlt,FaFolder } from "react-icons/fa"; 
import Button from "../Button";
import {
  Container,
  Title,
  Property,
  Value,
  CloseButton,
  ModalStyle,
  OverlayStyle,
  Icon
} from "./styles";

// Define the props for the RepositoryDetails component
interface RepositoryDetailsProps {
  isModalOpen: boolean; // Indicates if the modal is open
  onRequestClose: () => void; // Callback to close the modal
  repository: Repository | null; // The repository to display details 
}

const RepositoryDetails = ({
  repository,
  isModalOpen,
  onRequestClose,
}: RepositoryDetailsProps) => {
   // Set the app element for the Modal component
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
            <Icon>
              <FaFolder /> 
            </Icon>
            <strong>Nome:</strong>
          </Property>
          <Value>{repository.name}</Value>
          <Property>
            <Icon>
              <FaFileAlt /> 
            </Icon>
            <strong>Descrição:</strong>
          </Property>
          <Value>
            {repository.description || "Nenhuma descrição disponível."}
          </Value>
          <Property>
            <Icon>
              <FaStar />
            </Icon>
            <strong>Estrelas:</strong>
          </Property>
          <Value>{repository.stargazers_count}</Value>
          <Property>
            <Icon>
              <FaCode /> 
            </Icon>
            <strong>Linguagem:</strong>
          </Property>
          <Value>{repository.language || "Não especificada"}</Value>
          <CloseButton>
            <Button onClick={onRequestClose} disabled={false}>
              <FaTimes /> 
              Fechar
            </Button>
          </CloseButton>
        </Container>
      )}
    </Modal>
  );
};

export default RepositoryDetails;

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

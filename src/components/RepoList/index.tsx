import { RepoCardContainer, TextRepo } from "./styles";
import { Repository } from "../../services/api";

interface RepoListProps {
  repos: Repository[];
  handleRepositoryClick: (repository: Repository) => void;
}

const RepoList = ({ repos, handleRepositoryClick }: RepoListProps) => {
  return (
    <div>
      {repos.map((repo) => (
        <RepoCardContainer
          key={repo.id}
          onClick={() => handleRepositoryClick(repo)}
        >
          <TextRepo>{repo.name}</TextRepo>
        </RepoCardContainer>
      ))}
    </div>
  );
};

export default RepoList;

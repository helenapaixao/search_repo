import { RepoCardContainer, TextRepo } from "./styles";
import { Repository } from "../../services/api";

interface RepoListProps {
  repos: Repository[];  // An array of repositories to display
  handleRepositoryClick: (repository: Repository) => void;// Callback to handle a click on a repository
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

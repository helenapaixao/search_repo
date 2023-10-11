import { Link } from "react-router-dom";
import { RepoCardContainer, TextLink } from "./styles";
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
          <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
        </RepoCardContainer>
      ))}
    </div>
  );
};

export default RepoList;

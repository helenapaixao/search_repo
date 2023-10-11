import { Link } from 'react-router-dom';

interface RepoListProps {
  repos: Array<any>;
}

const RepoList = ({ repos }: RepoListProps) => {
  return (
    <div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;

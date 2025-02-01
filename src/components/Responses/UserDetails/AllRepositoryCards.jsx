import PropTypes from "prop-types";
import RepositoryCard from "./RepositoryCard";

export default function AllRepositoryCards({ repositories }) {
  return (
    <div className="usercard flex flex-col gap-12 pb-16">
      {repositories.map(
        ({
          name,
          description,
          createdAt,
          id,
          languages: { nodes },
          url,
          stargazerCount,
          forkCount,
        }) => {
          return (
            <RepositoryCard
              name={name}
              description={description}
              date={createdAt}
              key={id}
              url={url}
              languages={nodes}
              stars={stargazerCount}
              forks={forkCount}
            />
          );
        }
      )}
    </div>
  );
}

AllRepositoryCards.propTypes = {
  repositories: PropTypes.array,
};

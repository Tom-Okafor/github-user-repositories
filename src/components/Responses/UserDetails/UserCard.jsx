import RepositoryCard from "./RepositoryCard";
import { useContext } from "react";
import { QUERY_STATES } from "../../../constants";

export default function UserCard() {
  const {
    data: {
      user: {
        avatarUrl,
        bio,
        name,
        email,
        url,
        repositories: { nodes, totalCount },
        topRepositories: { nodes: topNodes },
        location,
        followers: { totalCount: followers },
        following: { totalCount: following },
      },
    },
  } = useContext(QUERY_STATES);
  console.log(
    avatarUrl,
    bio,
    name,
    email,
    url,
    nodes,
    totalCount,
    topNodes,
    location,
    followers,
    following
  );
  console.log(email == false);
  return (
    <section className="py-8 text-white">
      <div>
        <img src={avatarUrl} alt="user profile" />
        <p>{name}</p>
        <p>{bio}</p>
        <p>
          <span>{email}</span> <span>{location}</span>
        </p>
        <a href={url}>Visit Github Page</a>
      </div>
      <ul>
        <li>
          <span>{followers}</span> <span>followers</span>
        </li>
        <li>
          <span>{following}</span> <span>follwing</span>
        </li>
        <li>
          <span>{totalCount}</span> <span>total repositories</span>
        </li>
      </ul>
      <div>
        <h3>top repositories</h3>
        <div className="usercard">
          {topNodes.map(
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
            return  <RepositoryCard
                name={name}
                description={description}
                date={createdAt}
                key={id}
                url={url}
                languages={nodes}
                stars={stargazerCount}
                forks={forkCount}
              />;
            }
          )}
        </div>
      </div>
      <div>
        <h3>latest repositories</h3>
        <div className="usercard">
          {nodes.map(
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
           return   <RepositoryCard
                name={name}
                description={description}
                date={createdAt}
                key={id}
                url={url}
                languages={nodes}
                stars={stargazerCount}
                forks={forkCount}
              />;
            }
          )}
        </div>
      </div>
    </section>
  );
}

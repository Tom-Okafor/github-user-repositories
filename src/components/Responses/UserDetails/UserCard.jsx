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
  return (
    <section className="py-8 text-white max-w-[600px] w-[80vw]">
      <div className="py-8 flex flex-col gap-2.5 items-center">
        <img src={avatarUrl} alt="user profile" className="size-[200px] rounded-full"  />
        <p className="text-center">{name}</p>
        <p className="max-w-[55ch] text-center">{bio}</p>
        <p>
          <span>{email}</span> <span>{location}</span>
        </p>
        <a href={url}>Visit Github Page</a>
      </div>
      <ul className="flex gap-4 pt-4 pb-8 justify-center *:px-10 *:flex *:flex-col *:items-center *:capitalize *:gap-2">
        <li>
          <span>{followers}</span> <span className="">followers</span>
        </li>
        <li className="border-l-2 border-r-2">
          <span>{following}</span> <span>follwing</span>
        </li>
        <li className="">
          <span>{totalCount}</span> <span>total repositories</span>
        </li>
      </ul>
      <div>
        <h3>top repositories</h3>
        <div className="usercard flex flex-col gap-12 pb-16">
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
      </div>
      <div>
        <h3>latest repositories</h3>
        <div className="usercard usercard flex flex-col gap-12 pb-16">
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
      </div>
    </section>
  );
}

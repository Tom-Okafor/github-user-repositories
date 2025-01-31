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
    <section className="py-8 text-white max-w-[600px] w-[80vw] card-holder">
      <div className="py-8 flex flex-col gap-4 items-center">
        <div className="image size-[250px] bg-yellow-400 flex justify-center items-center rounded-full relative overflow-hidden hover:shadow-[0px_0px_20px_#35fd74,0px_10px_40px_#ec407a,0px_0px_60px_#ffeb3b] duration-500">
          <img
            src={avatarUrl}
            alt="user profile"
            className="w-[93%] h-[93%] rounded-full z-40 bg-black"
          />
        </div>

        <p className="text-center text-2xl tracking-[2px] text-yellow-400 font-semibold">
          {name}
        </p>
        <p className="max-w-[50ch] text-center leading-[1.4] text-[#aaa]">
          {bio}
        </p>
        <p className="text-lg text-yellow-300 tracking-[2px] font-semibold">
          <span>{email}</span> <span>{location}</span>
        </p>

        <ul className="flex pt-8 pb-8 justify-center *:px-10 *:flex *:flex-col *:items-center *:capitalize *:gap-1.5 bg-slate-800 rounded-xl my-8 outline outline-2 outline-[#ec407a] outline-offset-[5px] shadow-[inset_0px_6px_6px_#ffffff99,inset_0px_0px_6px_#ffffff99] hover:shadow-[inset_0px_6px_6px_#ffffff99,inset_0px_0px_6px_#ffffff99,0px_0px_20px_#ec407a,0px_0px_20px_#ec407a,0px_0px_20px_#ec407a] hover:outline-none duration-300">
          <li>
            <span>{followers}</span> <span className="">followers</span>
          </li>
          <li className="border-l-2 border-r-2 border-[#ec407a] rounded-full">
            <span>{following}</span> <span>follwing</span>
          </li>
          <li className="">
            <span>{totalCount}</span> <span>total repositories</span>
          </li>
        </ul>
        <a href={url} target="_blank" rel="noopener noreferrer" className="">
          Visit Github Page
        </a>
      </div>

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

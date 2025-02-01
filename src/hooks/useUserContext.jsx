import { QUERY_STATES } from "../constants";
import { useContext } from "react";

export default function useUserContext() {
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
  return {
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
    following,
  };
}

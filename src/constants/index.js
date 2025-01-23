import { gql } from "@apollo/client";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const HTTP_LINK = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
  },
});

export const CLIENT = new ApolloClient({
  link: HTTP_LINK,
  cache: new InMemoryCache(),
});

export const GET_USER_DETAILS = gql`
  query getUserDetails($username: String!) {
    user(login: $username) {
      avatarUrl
      name
      bio
      url
      email
      location
      pronouns
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 5, orderBy: { direction: DESC, field: CREATED_AT }) {
        totalCount
        nodes {
          description
          url
          id
          languages(first: 5) {
            nodes {
              id
              color
              name
            }
          }
          name
        }
      }
      topRepositories(orderBy: { direction: ASC, field: NAME }, first: 1) {
        nodes {
          description
          url
          id
          languages(first: 5) {
            nodes {
              id
              color
              name
            }
          }
          name
        }
      }
    }
  }
`;

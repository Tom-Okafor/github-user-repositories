import { gql} from "@apollo/client";

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
      repositories(first: 10) {
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
    }
  }
`;

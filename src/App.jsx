import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_USER_DETAILS = gql`
  query getUserDetails($username: String!) {
    user(login: $username) {
      avatarUrl
      name
      bio
      url
      email
      location
      pronouns
      repositories(first: 10) {
        totalCount
        nodes {
          description
          url
          id
          languages(first: 5) {
            nodes {
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

function App() {
  const [inputValue, setInputValue] = useState("");
  const [getUserDetails, { loading, error, data }] =
    useLazyQuery(GET_USER_DETAILS);
  const handleSubmit = () => {
    getUserDetails({ variables: { username: inputValue } });
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-yellow-400 text-5xl font-bold font-serif">
        Github User
      </h1>
      <form
        className="space-x-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Please, enter github username."
          className="border-2 border-teal-600 rounded-lg w-[300px] px-4 py-2 [box-shadow:0px_2px_8px_-1px_#999] focus:border-2.5 duration-300 focus:border-yellow-600 focus:outline-0"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Get Info"
          className="border-2 border-teal-600 [box-shadow:0px_2px_8px_-1px_#999] rounded-xl px-3 py-2 text-yellow-500 font-serif hover:border-yellow-600 hover:text-teal-900 duration-300"
        />
      </form>
    </div>
  );
}

export default App;

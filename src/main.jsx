import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const HTTP_LINK = createHttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
  },
});

const CLIENT = new ApolloClient({
  link: HTTP_LINK,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={CLIENT}>
      <App />
    </ApolloProvider>
  </StrictMode>
);

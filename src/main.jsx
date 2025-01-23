import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApolloProvider } from "@apollo/client";
import { CLIENT } from "./constants/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={CLIENT}>
      <App />
    </ApolloProvider>
  </StrictMode>
);

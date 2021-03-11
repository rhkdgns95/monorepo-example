import ReactDOM from "react-dom";
import { apolloClient, CommonApp } from "@jangbuda-frontend/common";
import { App } from "./App";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
    <CommonApp />
  </ApolloProvider>,
  document.getElementById("root")
);

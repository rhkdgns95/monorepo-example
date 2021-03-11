import { ApolloClient, InMemoryCache } from "@apollo/client";

export const endpoint = "https://countries.trevorblades.com/";
export const apolloClient = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});

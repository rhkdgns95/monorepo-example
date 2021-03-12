import { ApolloClient, InMemoryCache } from "@apollo/client";

export const endpoint = "http://dev-jbdgql.bankda.com:8080/graphql";
export const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});


import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql";

export const Root: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

import {
  gql,
  MutationHookOptions,
  useMutation,
} from "@apollo/client";
import {
  GraphQLTypes,
  MapType,
  // order_by,
  // subscription_root,
  ValueTypes,
  Zeus,
} from "../generated/zeus";

export function useTypedMutation<Q extends ValueTypes["Mutation"]>(
  mutation: Q,
  options?: MutationHookOptions<MapType<GraphQLTypes["Mutation"], Q>, Record<string, any>>
) {
  return useMutation<MapType<GraphQLTypes["Mutation"], Q>>(
    gql(Zeus.mutation(mutation)),
    options
  );
}

import { gql, QueryHookOptions, useQuery } from "@apollo/client";
import {
  MapType,
  // order_by,
  // subscription_root,
  ValueTypes,
  Zeus,
  GraphQLTypes,
} from "../generated/zeus";

export function useTypedQuery<Q extends ValueTypes["Query"]>(
  query: Q,
  options?: QueryHookOptions<
    MapType<GraphQLTypes["Query"], Q>,
    Record<string, any>
  >
) {
  return useQuery<MapType<GraphQLTypes["Query"], Q>>(
    gql(Zeus.query(query)),
    options
  );
}

// function useTypedSubscription<Q extends ValueTypes["subscription_root"]>(
//   subscription: Q,
//   options?: SubscriptionHookOptions<
//     MapType<subscription_root, Q>,
//     Record<string, any>
//   >
// ) {
//   return useSubscription<MapType<subscription_root, Q>>(
//     gql(Zeus.subscription(subscription)),
//     options
//   );
// }

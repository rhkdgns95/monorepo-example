// import {
//   gql,
//   MutationHookOptions,
//   QueryHookOptions,
//   SubscriptionHookOptions,
//   useMutation,
//   useQuery,
//   useSubscription,
// } from "@apollo/client";
// import {
//   $,
//   MapType,
//   Mutation,
//   Query,
//   // order_by,
//   // subscription_root,
//   ValueTypes,
//   Zeus,
// } from "../generated/zeus";

// export function useTypedMutation<Q extends ValueTypes["Mutation"]>(
//   mutation: Q,
//   options?: MutationHookOptions<MapType<Mutation, Q>, Record<string, any>>
// ) {
//   return useMutation<MapType<Mutation, Q>>(
//     gql(Zeus.mutation(mutation)),
//     options
//   );
// }

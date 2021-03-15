import { makeVar, ReactiveVar } from "@apollo/client";
import { ModelTypes } from "src/generated/zeus";
import { client } from "./apollo";

// 참고 : https://github.com/apollographql/ac3-state-management-examples/blob/master/apollo-local-state/src/cache.tsx

export async function useCacheQuery(id: number) {
  const result = client.cache.evict({
    id: `User:${id}`,
  });
  console.log(`gc: `, client.cache.gc());
  console.log("result: ", result);
  return result;
}

const todosInitialValue: ModelTypes["User"][] = [];

export const todosVar: ReactiveVar<ModelTypes["User"][]> = makeVar<
  ModelTypes["User"][]
>(todosInitialValue);

export async function deleteUsersById(
  todosVar: ReactiveVar<ModelTypes["User"][]>
) {
  return (id: number) => {
    const allUsers = todosVar();
    console.log("allUsers: ", allUsers);
    const filteredUsers = allUsers.filter((item) => item?.id === id);
    todosVar(filteredUsers);
  };
}

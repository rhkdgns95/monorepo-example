import { AtomEffect } from "recoil";

export const effects_UNSTABLE: readonly AtomEffect<any>[] | undefined = [
  ({ onSet, node }) => {
    onSet((nextState, prevState) => {
      const date = new Date();
      console.group(
        `${
          node.key
        } @ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
      console.debug(
        "%c prev state: ",
        "color: #949394; font-weight: bold;",
        prevState
      );
      console.debug("%c Node:", "color: #009ff2; font-weight: bold;", {
        node,
      });
      console.debug(
        "%c next state: ",
        "color: #43a547; font-weight: bold;",
        nextState
      );
      console.groupEnd();
    });
  },
];

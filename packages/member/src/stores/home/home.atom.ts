import { effects_UNSTABLE } from "@jangbuda-frontend/common";
import { atom } from "recoil";

export const homeAtom = atom({
  key: `member/home/no`,
  default: 0,
  effects_UNSTABLE,
});

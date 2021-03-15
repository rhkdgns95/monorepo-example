import { effects_UNSTABLE } from "@jangbuda-frontend/common";
import { atom } from "recoil";

interface IUser {
  username: string;
  id: number;
}
export const mypageAtom = atom<IUser>({
  key: "mypage/user",
  default: {
    id: 1,
    username: "",
  },
  effects_UNSTABLE,
});

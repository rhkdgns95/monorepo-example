interface IResponse {
  date: any;
  name: string;
}
export const getCurrentTime = (): IResponse => {
  return {
    date: Date.now(),
    name: "getCurrentTime",
  };
};

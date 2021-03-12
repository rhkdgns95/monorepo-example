import ReactDOM from "react-dom";
import { CommonApp, getCurrentTime } from "@jangbuda-frontend/common";
import App from "./App";

const ManagerApp = () => {
  return (
    <>
      <>
        hello world (manager) <CommonApp />
      </>
      {JSON.stringify(getCurrentTime())}
    </>
  );
};

ReactDOM.render(
  <>
    <App />
    <ManagerApp />
  </>,
  document.getElementById("root")
);

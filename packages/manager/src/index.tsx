import ReactDOM from "react-dom";
import { CommonApp, getCurrentTime } from "@jangbuda-frontend/common";

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
  <ManagerApp />,
  document.getElementById("root")
);

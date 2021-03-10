import ReactDOM from "react-dom";
import { App as ManagerApp } from "@jangbuda-frontend/manager";
import { App as MemberApp } from "@jangbuda-frontend/member";

const App = () => {
  return (
    <>
      <div>
        <h1>Manager App</h1>
        <ManagerApp />
      </div>
      <div>
        <h1>Member App</h1>
        <MemberApp />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

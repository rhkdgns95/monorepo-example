import React from "react";
import ReactDOM from "react-dom";
import { Root } from "@jangbuda-frontend/common";

const ManagerApp = React.lazy(() => import("@jangbuda-frontend/manager"));
// @ts-ignore
const MemberApp = React.lazy(() => import("@jangbuda-frontend/member"));

const App = () => {
  return (
    <Root>
      <React.Suspense fallback={<span>wait...</span>}>
        <div>
          <h1>Manager App</h1>
          <ManagerApp />
        </div>
        <div>
          <h1>Member App</h1>
          <MemberApp />
        </div>
      </React.Suspense>
    </Root>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

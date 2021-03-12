import { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Root } from "@jangbuda-frontend/common";

// @ts-ignore
const ManagerApp = lazy(() => import("@jangbuda-frontend/manager"));
// @ts-ignore
const MemberApp = lazy(() => import("@jangbuda-frontend/member"));

const App = () => {
  return (
    <Root>
      <Suspense fallback={<span>wait...</span>}>
        <div>
          <h1>Manager App</h1>
          <ManagerApp />
        </div>
        <div>
          <h1>Member App</h1>
          <MemberApp />
        </div>
      </Suspense>
    </Root>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

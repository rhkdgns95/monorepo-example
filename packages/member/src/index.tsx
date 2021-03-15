import ReactDOM from "react-dom";
import { Root, CommonApp } from "@jangbuda-frontend/common";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <Root>
    <RecoilRoot>
      <App />
      <CommonApp />
    </RecoilRoot>
  </Root>,
  document.getElementById("root")
);

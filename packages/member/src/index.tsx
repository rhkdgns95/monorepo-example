import ReactDOM from "react-dom";
import { Root, CommonApp } from "@jangbuda-frontend/common";
import App from "./App";

ReactDOM.render(
  <Root>
    <App />
    <CommonApp />
  </Root>,
  document.getElementById("root")
);

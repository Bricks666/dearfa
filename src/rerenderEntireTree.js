import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./Components/Page/Page";
import { data } from "./data";

import "./index.css";

export function rerenderEntireTree() {
  return ReactDOM.render(
    <React.StrictMode>
      <Page data={data} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

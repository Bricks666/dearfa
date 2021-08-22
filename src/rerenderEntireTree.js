import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./Components/Page/Page";

import "./index.css";

export function rerenderEntireTree(data) {
  return ReactDOM.render(
    <React.StrictMode>
      <Page data={data} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

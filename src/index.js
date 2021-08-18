import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./Components/Page/Page";
import { data } from "./data";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Page data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

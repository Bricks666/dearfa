import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./Components/Page/Page";
/* import { store } from "./Redux/store"; */
import { store } from "./Redux/reduxStore";

import "./index.css";

function rerenderEntireTree() {
  debugger;
  return ReactDOM.render(
    <React.StrictMode>
      <Page state={store.getState()} dispatch={store.dispatch} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
store.subscribe(rerenderEntireTree);

rerenderEntireTree();

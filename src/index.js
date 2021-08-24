import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./Components/Page/Page";
import { store } from "./store";

import "./index.css";

function rerenderEntireTree(store) {
  return ReactDOM.render(
    <React.StrictMode>
      <Page store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
store.subscribe(rerenderEntireTree);

rerenderEntireTree(store);

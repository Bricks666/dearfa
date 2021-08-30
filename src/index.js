import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App/App";
import { store } from "./Redux/store";

import "./index.css";
import { Provider } from "react-redux";

function rerenderEntireTree() {
  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={store.getState()} dispatch={store.dispatch} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree();

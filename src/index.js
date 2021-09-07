import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App/App";
import { store } from "./Redux/store";

import "./index.css";

ReactDOM.render(
  /* Из-за strict мода в друзья добавляется по два экземпляра */
  <React.StrictMode>
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

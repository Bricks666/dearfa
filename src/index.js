import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { AppContainer } from "./App/AppContainer";
import { store } from "./Redux/store";

import "./index.css";

ReactDOM.render(
  /* Из-за strict мода в друзья добавляется по два экземпляра */

  <Provider store={store}>
    <AppContainer state={store.getState()} dispatch={store.dispatch} />
  </Provider>,
  document.getElementById("root")
);

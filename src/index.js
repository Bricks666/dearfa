import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { AppContainer } from "./App/AppContainer";
import { store } from "./Redux/store";

import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppContainer state={store.getState()} dispatch={store.dispatch} />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

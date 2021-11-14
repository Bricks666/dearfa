import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { AppConnect } from "./App/AppConnect";
import { store } from "./Redux/store";

import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppConnect state={store.getState()} dispatch={store.dispatch} />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

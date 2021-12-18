import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import { store } from "./Redux/store";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	root
);

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { initialState } from "./initialState";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./Reducers";

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export { store };

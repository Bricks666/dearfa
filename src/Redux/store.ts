import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { IStore } from "../Types/Redux";
import { initialState } from "./initialState";
import { composeWithDevTools } from "redux-devtools-extension";
import * as allReducers from "./Reducers";

const reducers = combineReducers<IStore>({
	...allReducers,
});

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export { store };

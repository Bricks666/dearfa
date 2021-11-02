import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { initialState } from "./initialState";
import { loadeds } from "./Reducers/loadedsReducer";
import * as allReducers from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	loadeds: loadeds,
	...allReducers,
});

const store = createStore(
	reducers,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export { store };

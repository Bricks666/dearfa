import { initialState } from "../initialState";
import { LOGOUT } from "./loginReducer";

export default function reducer(state = initialState.registration, action) {
	switch (action.type) {
		case LOGOUT: {
			return initialState.registration;
		}
		default: {
			return state;
		}
	}
}

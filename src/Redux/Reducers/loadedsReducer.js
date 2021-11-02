import { END_LOADING_AUTH } from "./loadingsReducer";
import { initialState } from "../initialState";

export const loadeds = (state = initialState.loadeds, action) => {
	switch (action.type) {
		case END_LOADING_AUTH: {
			return {
				...state,
				isLoadedAuth: true,
			};
		}
		default: {
			return state;
		}
	}
};

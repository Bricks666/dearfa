import { initialState } from "../initialState";
import { AUTH } from "./authReducers";

export default function reducer(state = initialState.navigation, action) {
	switch (action.type) {
		case AUTH: {
			return state.map((item) => {
				if (item.content === "Профиль") {
					return {
						...item,
						path: `/profile/${action.payload.userId}`,
					};
				}
				return item;
			});
		}
		default:
			return state;
	}
}

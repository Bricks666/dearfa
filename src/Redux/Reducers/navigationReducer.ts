import {
	NavigationActionTypes,
	NavigationActions,
	INavigationItem,
	UpdateProfileURLAC,
} from "../../Types/Redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.navigation,
	action: NavigationActions
): INavigationItem[] {
	switch (action.type) {
		case NavigationActionTypes.UPDATE_PROFILE_URL: {
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

export const updateProfileURL: UpdateProfileURLAC = (userId) => {
	return {
		type: NavigationActionTypes.UPDATE_PROFILE_URL,
		payload: {
			userId,
		},
	};
};

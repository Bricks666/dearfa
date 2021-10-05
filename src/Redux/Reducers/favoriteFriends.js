import {
	FOLLOW_USER,
	SET_FAVORITE_FRIENDS,
	UNFOLLOW_USER,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const favoriteFriends = (
	state = initialState.favoriteFriends,
	action
) => {
	switch (action.type) {
	case SET_FAVORITE_FRIENDS: {
		return {
			...state,
			list: action.data.items,
			friendsCount: action.data.totalCount >= 6 ? 6 : action.data.totalCount,
			isLoaded: true,
		};
	}
	case UNFOLLOW_USER: {
		return {
			...state,
			list: state.list.filter((friend) => friend.id !== action.id),
			friendsCount: --state.friendsCount,
		};
	}
	case FOLLOW_USER: {
		return state.friendsCount < 6
			? {
				...state,
				list: [...state.list, action.user],
				friendsCount: ++state.friendsCount,
			}
			: state;
	}
	default: {
		return state;
	}
	}
};

import {
	FOLLOW_USER,
	LOGOUT,
	SET_FRIENDS,
	UNFOLLOW_USER,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const friendsReducer = (state = initialState.friends, action) => {
	switch (action.type) {
	case SET_FRIENDS: {
		return {
			...state,
			list: action.data.items,
			totalCount: action.data.totalCount,
			pageCount: Math.ceil(action.data.totalCount / state.friendsCount),
		};
	}
	case FOLLOW_USER: {
		return {
			...state,
			list: [...state.list, { ...action.user, followed: true }],
			totalCount: ++state.totalCount,
			pageCount: Math.ceil(state.totalCount / state.friendsCount),
		};
	}
	case UNFOLLOW_USER: {
		return {
			...state,
			list: state.list.filter((friend) => friend.id !== action.id),
			totalCount: --state.totalCount,
			pageCount: Math.ceil(state.totalCount / state.friendsCount),
		};
	}
	case LOGOUT: {
		return initialState.friends;
	}
	default:
		return state;
	}
};

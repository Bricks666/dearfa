import { initialState } from "../initialState";
import {
	SET_USERS,
	FOLLOW_USER,
	NEXT_USERS_PAGE,
	UNFOLLOW_USER,
} from "../ActionsConstants";

export const usersReducers = (state = initialState.users, action) => {
	switch (action.type) {
	case FOLLOW_USER: {
		return {
			...state,
			list: state.list.map((user) => {
				if (user.id === action.user.id) {
					return { ...user, followed: true };
				}
				return user;
			}),
		};
	}
	case UNFOLLOW_USER: {
		return {
			...state,
			list: state.list.map((friend) => {
				if (friend.id === action.id) {
					return { ...friend, followed: false };
				}
				return friend;
			}),
		};
	}
	case NEXT_USERS_PAGE: {
		return {
			...state,
			currentPage: action.currentPage,
			list: action.users,
		};
	}
	case SET_USERS: {
		return {
			...state,
			list: action.data.items,
			totalUsers: action.data.totalCount,
			pageCount: Math.ceil(action.data.totalCount / state.usersCount),
		};
	}
	default: {
		return state;
	}

	}
};

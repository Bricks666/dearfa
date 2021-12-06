import { initialState } from "../initialState";
import { LOGOUT } from "./loginReducer";

export const UNFOLLOW_USER = "UNFOLLOW";
export const FOLLOW_USER = "FOLLOW";
const SET_USERS = "dearFa/users/SET_USERS";

export default function reducer(state = initialState.users, action) {
	switch (action.type) {
		case FOLLOW_USER: {
			return {
				...state,
				list: state.list.map((user) => {
					if (user.id === action.payload.id) {
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
					if (friend.id === action.payload.id) {
						return { ...friend, followed: false };
					}
					return friend;
				}),
			};
		}
		case SET_USERS: {
			return {
				...state,
				list: action.payload.items,
				totalUsers: action.payload.totalCount,
				pageCount: Math.ceil(action.payload.totalCount / state.usersCount),
			};
		}
		case LOGOUT: {
			return initialState.users;
		}
		default: {
			return state;
		}
	}
}

export const followUser = (user) => {
	return {
		type: FOLLOW_USER,
		payload: user,
	};
};

export const setUsers = (data) => {
	return {
		type: SET_USERS,
		payload: data,
	};
};

export const unfollowUser = (id) => {
	return {
		type: UNFOLLOW_USER,
		payload: {
			id,
		},
	};
};

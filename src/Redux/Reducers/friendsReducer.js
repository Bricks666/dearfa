import { LOGOUT } from "./loginReducer";
import { initialState } from "../initialState";
import { FOLLOW_USER, UNFOLLOW_USER } from "./usersReducer";

const SET_FRIENDS = "dearFa/friends/SET_FRIENDS";

export default function reducer(state = initialState.friends, action) {
	switch (action.type) {
		case SET_FRIENDS: {
			return {
				...state,
				list: action.payload.items,
				totalCount: action.payload.totalCount,
				pageCount: Math.ceil(action.payload.totalCount / state.friendsCount),
			};
		}
		case FOLLOW_USER: {
			return {
				...state,
				list: [...state.list, { ...action.payload, followed: true }],
				totalCount: ++state.totalCount,
				pageCount: Math.ceil(state.totalCount / state.friendsCount),
			};
		}
		case UNFOLLOW_USER: {
			return {
				...state,
				list: state.list.filter((friend) => friend.id !== action.payload.id),
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
}

export const setFriends = (data) => {
	return {
		type: SET_FRIENDS,
		payload: data,
	};
};

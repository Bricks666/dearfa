import {
	UsersActions,
	UsersActionTypes,
	IUsersState,
	FollowUserAC,
	SetUsersAC,
	UnfollowUserAC,
	ResetUsersAC,
} from "../../Types/Redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.users,
	action: UsersActions
): IUsersState {
	switch (action.type) {
		case UsersActionTypes.FOLLOW_USER: {
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
		case UsersActionTypes.UNFOLLOW_USER: {
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
		case UsersActionTypes.SET_USERS: {
			return {
				...state,
				list: action.payload.items,
				totalUsers: action.payload.totalCount,
				pageCount: Math.ceil(action.payload.totalCount / state.usersCount),
			};
		}
		case UsersActionTypes.RESET: {
			return initialState.users;
		}
		default: {
			return state;
		}
	}
}

export const followUser: FollowUserAC = (user) => {
	return {
		type: UsersActionTypes.FOLLOW_USER,
		payload: user,
	};
};

export const setUsers: SetUsersAC = (data) => {
	return {
		type: UsersActionTypes.SET_USERS,
		payload: data,
	};
};

export const unfollowUser: UnfollowUserAC = (id) => {
	return {
		type: UsersActionTypes.UNFOLLOW_USER,
		payload: {
			id,
		},
	};
};

export const resetUsers: ResetUsersAC = () => {
	return {
		type: UsersActionTypes.RESET,
	};
};

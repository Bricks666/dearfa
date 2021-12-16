import { initialState } from "../initialState";
import {
	FriendsActions,
	FriendsActionTypes,
	IFriendsState,
	ResetFriendsAc,
	SetFriendsAC,
	UsersActionTypes,
} from "../../Types/Redux";

export default function reducer(
	state = initialState.friends,
	action: FriendsActions
): IFriendsState {
	switch (action.type) {
		case FriendsActionTypes.SET_FRIENDS: {
			return {
				...state,
				list: action.payload.items,
				totalCount: action.payload.totalCount,
				pageCount: Math.ceil(action.payload.totalCount / state.friendsCount),
			};
		}
		case UsersActionTypes.FOLLOW_USER: {
			return {
				...state,
				list: [...state.list, { ...action.payload, followed: true }],
				totalCount: ++state.totalCount,
				pageCount: Math.ceil(state.totalCount / state.friendsCount),
			};
		}
		case UsersActionTypes.UNFOLLOW_USER: {
			return {
				...state,
				list: state.list.filter((friend) => friend.id !== action.payload.id),
				totalCount: --state.totalCount,
				pageCount: Math.ceil(state.totalCount / state.friendsCount),
			};
		}
		case FriendsActionTypes.RESET: {
			return initialState.friends;
		}
		default:
			return state;
	}
}

export const setFriends: SetFriendsAC = (data) => {
	return {
		type: FriendsActionTypes.SET_FRIENDS,
		payload: data,
	};
};

export const resetFriends: ResetFriendsAc = () => {
	return {
		type: FriendsActionTypes.RESET,
	};
};

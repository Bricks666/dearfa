import {
	FavoriteFriendsActions,
	FavoriteFriendsActionTypes,
	IFavoriteFriendsState,
	ResetFavoriteFriendsAC,
	SetFavoriteFriendsAC,
	UsersActionTypes,
} from "../../Types/Redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.favoriteFriends,
	action: FavoriteFriendsActions
): IFavoriteFriendsState {
	switch (action.type) {
		case FavoriteFriendsActionTypes.SET_FAVORITE_FRIENDS: {
			return {
				...state,
				list: action.payload.items,
				friendsCount:
					action.payload.totalCount >= 6 ? 6 : action.payload.totalCount,
			};
		}
		case UsersActionTypes.UNFOLLOW_USER: {
			const newList = state.list.filter(
				(friend) => friend.id !== action.payload.id
			);
			return {
				...state,
				list: newList,
				friendsCount:
					state.friendsCount - (newList.length !== state.list.length ? 1 : 0),
			};
		}
		case UsersActionTypes.FOLLOW_USER: {
			return state.friendsCount < 6
				? {
						...state,
						list: [...state.list, action.payload],
						friendsCount: ++state.friendsCount,
				  }
				: state;
		}
		case FavoriteFriendsActionTypes.RESET: {
			return initialState.favoriteFriends;
		}
		default: {
			return state;
		}
	}
}

export const setFavoriteFriends: SetFavoriteFriendsAC = (data) => {
	return {
		type: FavoriteFriendsActionTypes.SET_FAVORITE_FRIENDS,
		payload: data,
	};
};

export const resetFavoriteFriends: ResetFavoriteFriendsAC = () => {
	return {
		type: FavoriteFriendsActionTypes.RESET,
	};
};

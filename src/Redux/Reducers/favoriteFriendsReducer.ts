import { LOGOUT } from "./loginReducer";
import { FOLLOW_USER, UNFOLLOW_USER } from "./usersReducer";
import { initialState } from "../initialState";

const SET_FAVORITE_FRIENDS = "dearFa/favoriteFriends/SET_FAVORITE_FRIENDS";

export default function reducer(state = initialState.favoriteFriends, action) {
	switch (action.type) {
		case SET_FAVORITE_FRIENDS: {
			return {
				...state,
				list: action.payload.items,
				friendsCount:
					action.payload.totalCount >= 6 ? 6 : action.payload.totalCount,
			};
		}
		case UNFOLLOW_USER: {
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
		case FOLLOW_USER: {
			return state.friendsCount < 6
				? {
					...state,
					list: [...state.list, action.payload],
					friendsCount: ++state.friendsCount,
				}
				: state;
		}
		case LOGOUT: {
			return initialState.favoriteFriends;
		}
		default: {
			return state;
		}
	}
}

export const setFavoriteFriends = (data) => {
	return {
		type: SET_FAVORITE_FRIENDS,
		payload: {
			...data,
		},
	};
};

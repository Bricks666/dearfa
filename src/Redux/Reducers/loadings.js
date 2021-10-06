import {
	END_FOLLOWING_USER,
	END_LOADING_AUTH,
	END_LOADING_FAVORITE_FRIENDS,
	END_LOADING_FRIENDS,
	END_LOADING_ME,
	END_LOADING_PROFILE,
	END_LOADING_USERS,
	LOGOUT,
	START_FOLLOWING_USER,
	START_LOADING_AUTH,
	START_LOADING_FAVORITE_FRIENDS,
	START_LOADING_FRIENDS,
	START_LOADING_ME,
	START_LOADING_PROFILE,
	START_LOADING_USERS,
} from "../ActionsConstants";
import { initialState } from "../initialState";

export const loadings = (state = initialState.loadings, action) => {
	switch (action.type) {
	case START_LOADING_FRIENDS: {
		return {
			...state,
			loadingFriends: true,
		};
	}
	case END_LOADING_FRIENDS: {
		return {
			...state,
			loadingFriends: false,
		};
	}
	case START_LOADING_FAVORITE_FRIENDS: {
		return {
			...state,
			loadingFavoriteFriends: true,
		};
	}
	case END_LOADING_FAVORITE_FRIENDS: {
		return {
			...state,
			loadingFavoriteFriends: false,
		};
	}
	case START_FOLLOWING_USER: {
		return {
			...state,
			following: [...state.following, action.userId],
		};
	}
	case END_FOLLOWING_USER: {
		return {
			...state,
			following: state.following.filter((id) => id !== action.userId),
		};
	}
	case START_LOADING_USERS: {
		return {
			...state,
			loadingUsers: true,
		};
	}
	case END_LOADING_USERS: {
		return {
			...state,
			loadingUsers: false,
		};
	}
	case START_LOADING_AUTH: {
		return {
			...state,
			loadingAuth: true,
		};
	}
	case END_LOADING_AUTH: {
		return {
			...state,
			loadingAuth: false,
		};
	}
	case START_LOADING_ME: {
		return {
			...state,
			loadingMe: true,
		};
	}
	case END_LOADING_ME: {
		return {
			...state,
			loadingMe: false,
		};
	}
	case START_LOADING_PROFILE: {
		return {
			...state,
			loadingProfile: true,
		};
	}
	case END_LOADING_PROFILE: {
		return {
			...state,
			loadingProfile: false,
		};
	}
	case LOGOUT: {
		return initialState.loadings;
	}
	default: {
		return state;
	}
	}
};

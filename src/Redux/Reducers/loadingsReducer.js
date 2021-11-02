import { LOGOUT } from "./loginReducer";
import { initialState } from "../initialState";

const START_LOADING_AUTH = "dearFa/loadings/AUTH_START";
export const END_LOADING_AUTH = "dearFa/loadings/AUTH_END";
const START_LOADING_PROFILE = "dearFa/loadings/PROFILE_START";
const END_LOADING_PROFILE = "dearFa/loadings/PROFILE_END";
const START_LOADING_FRIENDS = "dearFa/loadings/FRIENDS_START";
const END_LOADING_FRIENDS = "dearFa/loadings/FRIENDS_END";
const START_FOLLOWING_USER = "dearFa/loadings/FOLLOWING_START";
const END_FOLLOWING_USER = "dearFa/loadings/FOLLOWING_END";
const START_LOADING_FAVORITE_FRIENDS = "dearFa/loadings/FAVORITE_FRIENDS_START";
const END_LOADING_FAVORITE_FRIENDS = "dearFa/loadings/FAVORITE_FRIENDS_END";
const START_LOADING_USERS = "dearFa/loadings/USERS_START";
const END_LOADING_USERS = "dearFa/loadings/USERS_END";
const START_LOADING_ME = "dearFa/loadings/ME_START";
const END_LOADING_ME = "dearFa/loadings/ME_END";

export default function reducer(state = initialState.loadings, action) {
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
}

export const startLoadingAuth = () => {
	return {
		type: START_LOADING_AUTH,
	};
};

export const endLoadingAuth = () => {
	return {
		type: END_LOADING_AUTH,
	};
};

export const startLoadingProfile = () => {
	return {
		type: START_LOADING_PROFILE,
	};
};

export const endLoadingProfile = () => {
	return {
		type: END_LOADING_PROFILE,
	};
};

export const endLoadingFriends = () => {
	return {
		type: END_LOADING_FRIENDS,
	};
};

export const startLoadingFriends = () => {
	return {
		type: START_LOADING_FRIENDS,
	};
};

export const startFollowingUser = (userId) => {
	return {
		type: START_FOLLOWING_USER,
		payload: {
			userId,
		},
	};
};

export const endFollowingUser = (userId) => {
	return {
		type: END_FOLLOWING_USER,
		payload: {
			userId,
		},
	};
};

export const startLoadingFavoriteFriends = () => {
	return {
		type: START_LOADING_FAVORITE_FRIENDS,
	};
};

export const endLoadingFavoriteFriends = () => {
	return {
		type: END_LOADING_FAVORITE_FRIENDS,
	};
};

export const startLoadingUsers = () => {
	return {
		type: START_LOADING_USERS,
	};
};

export const endLoadingUsers = () => {
	return {
		type: END_LOADING_USERS,
	};
};

export const startLoadingMe = () => {
	return {
		type: START_LOADING_ME,
	};
};

export const endLoadingMe = () => {
	return {
		type: END_LOADING_ME,
	};
};

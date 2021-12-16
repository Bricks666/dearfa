import { initialState } from "../initialState";
import {
	LoadingsActionTypes,
	LoadingsActions,
	StartLoadingAuthAC,
	EndLoadingAuthAC,
	StartLoadingProfileAC,
	EndLoadingProfileAC,
	StartLoadingFriendsAC,
	EndLoadingFriendsAC,
	StartFollowingAC,
	EndFollowingAC,
	StartLoadingFavoriteFriendsAC,
	EndLoadingFavoriteFriendsAC,
	StartLoadingUsersAC,
	EndLoadingUsersAC,
	StartLoadingDialogsAC,
	EndLoadingDialogsAC,
	StartLoadingMessagesAC,
	EndLoadingMessagesAC,
	ILoadingsState,
} from "../../Types/Redux";

export default function reducer(
	state = initialState.loadings,
	action: LoadingsActions
): ILoadingsState {
	switch (action.type) {
		case LoadingsActionTypes.START_LOADING_FRIENDS: {
			return {
				...state,
				loadingFriends: true,
			};
		}
		case LoadingsActionTypes.END_LOADING_FRIENDS: {
			return {
				...state,
				loadingFriends: false,
			};
		}
		case LoadingsActionTypes.START_LOADING_FAVORITE_FRIENDS: {
			return {
				...state,
				loadingFavoriteFriends: true,
			};
		}
		case LoadingsActionTypes.END_LOADING_FAVORITE_FRIENDS: {
			return {
				...state,
				loadingFavoriteFriends: false,
			};
		}
		case LoadingsActionTypes.START_FOLLOWING_USER: {
			return {
				...state,
				following: [...state.following, action.payload.userId],
			};
		}
		case LoadingsActionTypes.END_FOLLOWING_USER: {
			return {
				...state,
				following: state.following.filter((id) => id !== action.payload.userId),
			};
		}
		case LoadingsActionTypes.START_LOADING_USERS: {
			return {
				...state,
				loadingUsers: true,
			};
		}
		case LoadingsActionTypes.END_LOADING_USERS: {
			return {
				...state,
				loadingUsers: false,
			};
		}
		case LoadingsActionTypes.START_LOADING_AUTH: {
			return {
				...state,
				loadingAuth: true,
			};
		}
		case LoadingsActionTypes.END_LOADING_AUTH: {
			return {
				...state,
				loadingAuth: false,
			};
		}
		case LoadingsActionTypes.START_LOADING_PROFILE: {
			return {
				...state,
				loadingProfile: true,
			};
		}
		case LoadingsActionTypes.END_LOADING_PROFILE: {
			return {
				...state,
				loadingProfile: false,
			};
		}
		case LoadingsActionTypes.START_LOADING_DIALOGS: {
			return {
				...state,
				loadingDialogs: true,
			};
		}
		case LoadingsActionTypes.END_LOADING_DIALOGS: {
			return {
				...state,
				loadingDialogs: false,
			};
		}
		case LoadingsActionTypes.START_LOADING_MESSAGES: {
			return {
				...state,
				loadingMessages: true,
			};
		}
		case LoadingsActionTypes.END_LOADING_MESSAGES: {
			return {
				...state,
				loadingMessages: false,
			};
		}
		case LoadingsActionTypes.RESET: {
			return { ...initialState.loadings, loadingAuth: false };
		}
		default: {
			return state;
		}
	}
}

export const startLoadingAuth: StartLoadingAuthAC = () => {
	return {
		type: LoadingsActionTypes.START_LOADING_AUTH,
	};
};

export const endLoadingAuth: EndLoadingAuthAC = () => {
	return {
		type: LoadingsActionTypes.END_LOADING_AUTH,
	};
};

export const startLoadingProfile: StartLoadingProfileAC = () => {
	return {
		type: LoadingsActionTypes.START_LOADING_PROFILE,
	};
};

export const endLoadingProfile: EndLoadingProfileAC = () => {
	return {
		type: LoadingsActionTypes.END_LOADING_PROFILE,
	};
};

export const startLoadingFriends: StartLoadingFriendsAC = () => {
	return {
		type: LoadingsActionTypes.START_LOADING_FRIENDS,
	};
};

export const endLoadingFriends: EndLoadingFriendsAC = () => {
	return {
		type: LoadingsActionTypes.END_LOADING_FRIENDS,
	};
};

export const startFollowingUser: StartFollowingAC = (userId) => {
	return {
		type: LoadingsActionTypes.START_FOLLOWING_USER,
		payload: {
			userId,
		},
	};
};

export const endFollowingUser: EndFollowingAC = (userId) => {
	return {
		type: LoadingsActionTypes.END_FOLLOWING_USER,
		payload: {
			userId,
		},
	};
};

export const startLoadingFavoriteFriends: StartLoadingFavoriteFriendsAC =
	() => {
		return {
			type: LoadingsActionTypes.START_LOADING_FAVORITE_FRIENDS,
		};
	};

export const endLoadingFavoriteFriends: EndLoadingFavoriteFriendsAC = () => {
	return {
		type: LoadingsActionTypes.END_LOADING_FAVORITE_FRIENDS,
	};
};

export const startLoadingUsers: StartLoadingUsersAC = () => {
	return {
		type: LoadingsActionTypes.START_LOADING_USERS,
	};
};

export const endLoadingUsers: EndLoadingUsersAC = () => {
	return {
		type: LoadingsActionTypes.END_LOADING_USERS,
	};
};

export const startLoadingDialogs: StartLoadingDialogsAC = () => {
	return {
		type: LoadingsActionTypes.START_LOADING_DIALOGS,
	};
};

export const endLoadingDialogs: EndLoadingDialogsAC = () => {
	return {
		type: LoadingsActionTypes.END_LOADING_DIALOGS,
	};
};

export const startLoadingMessages: StartLoadingMessagesAC = () => {
	return {
		type: LoadingsActionTypes.START_LOADING_MESSAGES,
	};
};

export const endLoadingMessages: EndLoadingMessagesAC = () => {
	return {
		type: LoadingsActionTypes.END_LOADING_MESSAGES,
	};
};

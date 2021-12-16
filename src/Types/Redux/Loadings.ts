export interface ILoadingsState {
	loadingAuth: boolean;
	loadingProfile: boolean;
	loadingUsers: boolean;
	loadingFriends: boolean;
	loadingFavoriteFriends: boolean;
	loadingDialogs: boolean;
	loadingMessages: boolean;
	following: number[];
}

export type LoadingTypes = keyof Omit<ILoadingsState, "following">;

export enum LoadingsActionTypes {
	START_LOADING_AUTH = "dearFa/loadings/AUTH_START",
	END_LOADING_AUTH = "dearFa/loadings/AUTH_END",
	START_LOADING_PROFILE = "dearFa/loadings/PROFILE_START",
	END_LOADING_PROFILE = "dearFa/loadings/PROFILE_END",
	START_LOADING_FRIENDS = "dearFa/loadings/FRIENDS_START",
	END_LOADING_FRIENDS = "dearFa/loadings/FRIENDS_END",
	START_FOLLOWING_USER = "dearFa/loadings/FOLLOWING_START",
	END_FOLLOWING_USER = "dearFa/loadings/FOLLOWING_END",
	START_LOADING_FAVORITE_FRIENDS = "dearFa/loadings/FAVORITE_FRIENDS_START",
	END_LOADING_FAVORITE_FRIENDS = "dearFa/loadings/FAVORITE_FRIENDS_END",
	START_LOADING_USERS = "dearFa/loadings/USERS_START",
	END_LOADING_USERS = "dearFa/loadings/USERS_END",
	START_LOADING_DIALOGS = "dearFa/loadings/DIALOGS_START",
	END_LOADING_DIALOGS = "dearFa/loadings/DIALOGS_END",
	START_LOADING_MESSAGES = "dearFa/loadings/MESSAGES_START",
	END_LOADING_MESSAGES = "dearFa/loadings/MESSAGES_END",
	RESET = "dearFa/loadings/RESET",
}

interface IStartLoadingAuthAction {
	type: LoadingsActionTypes.START_LOADING_AUTH;
}

interface IEndLoadingAuthAction {
	type: LoadingsActionTypes.END_LOADING_AUTH;
}

interface IStartLoadingProfileAction {
	type: LoadingsActionTypes.START_LOADING_PROFILE;
}

interface IEndLoadingProfileAction {
	type: LoadingsActionTypes.END_LOADING_PROFILE;
}

interface IStartLoadingFriendsAction {
	type: LoadingsActionTypes.START_LOADING_FRIENDS;
}

interface IEndLoadingFriendsAction {
	type: LoadingsActionTypes.END_LOADING_FRIENDS;
}

interface IFollowingPayload {
	userId: number;
}

interface IStartFollowingAction {
	type: LoadingsActionTypes.START_FOLLOWING_USER;
	payload: IFollowingPayload;
}

interface IEndFollowingAction {
	type: LoadingsActionTypes.END_FOLLOWING_USER;
	payload: IFollowingPayload;
}

interface IStartLoadingFavoriteFriendsAction {
	type: LoadingsActionTypes.START_LOADING_FAVORITE_FRIENDS;
}

interface IEndLoadingFavoriteFriendsAction {
	type: LoadingsActionTypes.END_LOADING_FAVORITE_FRIENDS;
}

interface IStartLoadingUsersAction {
	type: LoadingsActionTypes.START_LOADING_USERS;
}

interface IEndLoadingUsersAction {
	type: LoadingsActionTypes.END_LOADING_USERS;
}

interface IStartLoadingDialogsAction {
	type: LoadingsActionTypes.START_LOADING_DIALOGS;
}

interface IEndLoadingDialogsAction {
	type: LoadingsActionTypes.END_LOADING_DIALOGS;
}

interface IStartLoadingMessagesAction {
	type: LoadingsActionTypes.START_LOADING_MESSAGES;
}

interface IEndLoadingMessagesAction {
	type: LoadingsActionTypes.END_LOADING_MESSAGES;
}

interface IResetLoadingsAction {
	type: LoadingsActionTypes.RESET;
}

export type LoadingsActions =
	| IStartLoadingAuthAction
	| IEndLoadingAuthAction
	| IStartLoadingProfileAction
	| IEndLoadingProfileAction
	| IStartLoadingFriendsAction
	| IEndLoadingFriendsAction
	| IStartFollowingAction
	| IEndFollowingAction
	| IStartLoadingFavoriteFriendsAction
	| IEndLoadingFavoriteFriendsAction
	| IStartLoadingUsersAction
	| IEndLoadingUsersAction
	| IStartLoadingDialogsAction
	| IEndLoadingDialogsAction
	| IStartLoadingMessagesAction
	| IEndLoadingMessagesAction
	| IResetLoadingsAction;

export type StartLoadingAuthAC = () => IStartLoadingAuthAction;
export type EndLoadingAuthAC = () => IEndLoadingAuthAction;
export type StartLoadingProfileAC = () => IStartLoadingProfileAction;
export type EndLoadingProfileAC = () => IEndLoadingProfileAction;
export type StartLoadingFriendsAC = () => IStartLoadingFriendsAction;
export type EndLoadingFriendsAC = () => IEndLoadingFriendsAction;
export type StartFollowingAC = (id: number) => IStartFollowingAction;
export type EndFollowingAC = (id: number) => IEndFollowingAction;
export type StartLoadingFavoriteFriendsAC =
	() => IStartLoadingFavoriteFriendsAction;
export type EndLoadingFavoriteFriendsAC =
	() => IEndLoadingFavoriteFriendsAction;
export type StartLoadingUsersAC = () => IStartLoadingUsersAction;
export type EndLoadingUsersAC = () => IEndLoadingUsersAction;
export type StartLoadingDialogsAC = () => IStartLoadingDialogsAction;
export type EndLoadingDialogsAC = () => IEndLoadingDialogsAction;
export type StartLoadingMessagesAC = () => IStartLoadingMessagesAction;
export type EndLoadingMessagesAC = () => IEndLoadingMessagesAction;
export type ResetLoadingsAC = () => IResetLoadingsAction;

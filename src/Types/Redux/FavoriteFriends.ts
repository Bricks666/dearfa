import { IFollowAction, IUnfollowAction, IUser } from ".";

export interface IFavoriteFriendsState {
	list: IUser[];
	friendsCount: number;
}

export enum FavoriteFriendsActionTypes {
	SET_FAVORITE_FRIENDS = "dearFa/favoriteFriends/SET_FAVORITE_FRIENDS",
	RESET = "dearFa/favoriteFriends/RESET",
}

interface ISetFavoriteFriendsPayload {
	items: IUser[];
	totalCount: number;
}

interface ISetFavoriteFriendsAction {
	type: FavoriteFriendsActionTypes.SET_FAVORITE_FRIENDS;
	payload: ISetFavoriteFriendsPayload;
}

interface IResetFavoriteFriendsAction {
	type: FavoriteFriendsActionTypes.RESET;
}

export type FavoriteFriendsActions =
	| ISetFavoriteFriendsAction
	| IResetFavoriteFriendsAction
	| IUnfollowAction
	| IFollowAction;

export type SetFavoriteFriendsAC = (
	data: ISetFavoriteFriendsPayload
) => ISetFavoriteFriendsAction;

export type ResetFavoriteFriendsAC = () => IResetFavoriteFriendsAction;

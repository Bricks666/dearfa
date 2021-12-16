import { IFollowAction, IUser, IUnfollowAction } from ".";

export interface IFriendsState {
	list: IUser[];
	pageCount: number;
	friendsCount: number;
	totalCount: number;
}

export enum FriendsActionTypes {
	SET_FRIENDS = "dearFa/friends/SET_FRIENDS",
	RESET = "dearFa/friends/RESET",
}

interface ISetFriendsPayload {
	items: IUser[];
	totalCount: number;
}

interface ISetFriendsAction {
	type: FriendsActionTypes.SET_FRIENDS;
	payload: ISetFriendsPayload;
}

interface IResetFriendsAction {
	type: FriendsActionTypes.RESET;
}

export type FriendsActions =
	| ISetFriendsAction
	| IResetFriendsAction
	| IFollowAction
	| IUnfollowAction;

export type SetFriendsAC = (data: ISetFriendsPayload) => ISetFriendsAction;
export type ResetFriendsAc = () => IResetFriendsAction;

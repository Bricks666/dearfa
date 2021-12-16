import { URLorNull } from "../Common";
import { IPhotos } from "./Common";
export interface IUsersState {
	list: IUser[];
	pageCount: number;
	usersCount: number;
	totalUsers: number;
}

export interface IUser {
	id: number;
	name: string;
	status: string;
	photos: IPhotos;
	followed: boolean;
	uniqueUrlName: URLorNull;
}

export enum UsersActionTypes {
	UNFOLLOW_USER = "UNFOLLOW",
	FOLLOW_USER = "FOLLOW",
	SET_USERS = "dearFa/users/SET_USERS",
	RESET = "dearFa/users/RESET",
}

export interface IFollowAction {
	type: UsersActionTypes.FOLLOW_USER;
	payload: IUser;
}

interface IUnfollowUsersPayload {
	id: number;
}

export interface IUnfollowAction {
	type: UsersActionTypes.UNFOLLOW_USER;
	payload: IUnfollowUsersPayload;
}

interface ISetUsersPayload {
	items: IUser[];
	totalCount: number;
}

interface ISetUsersAction {
	type: UsersActionTypes.SET_USERS;
	payload: ISetUsersPayload;
}

interface IResetUsersAction {
	type: UsersActionTypes.RESET;
}

export type UsersActions =
	| IFollowAction
	| IUnfollowAction
	| ISetUsersAction
	| IResetUsersAction;

export type FollowUserAC = (user: IUser) => IFollowAction;
export type UnfollowUserAC = (id: number) => IUnfollowAction;
export type SetUsersAC = (data: ISetUsersPayload) => ISetUsersAction;
export type ResetUsersAC = () => IResetUsersAction;

import { IPhotos, URLorNull, EmptyObject } from "../Common";

export interface IProfileState {
	userId: number;
	fullName: string;
	photos: IPhotos;
	contacts: IContacts | EmptyObject;
	followed: boolean;
	aboutMe: string;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	status: string;
}

export interface IContacts {
	github: URLorNull;
	facebook: URLorNull;
	twitter: URLorNull;
	youtube: URLorNull;
	vk: URLorNull;
	website: URLorNull;
	mailLink: URLorNull;
	instagram: URLorNull;
}

export enum ProfileActionTypes {
	SET_INFO = "dearFa/profile/SET_INFO",
	SET_NEW_STATUS = "dearFa/profile/SET_NEW_STATUS",
	SET_NEW_PHOTOS = "dearFa/profile/SET_NEW_PHOTOS",
	RESET = "dearFa/profile/RESET",
}

interface ISetInfoAction {
	type: ProfileActionTypes.SET_INFO;
	payload: IProfileState;
}

interface ISetNewStatusPayload {
	status: string;
}

interface ISetNewStatusAction {
	type: ProfileActionTypes.SET_NEW_STATUS;
	payload: ISetNewStatusPayload;
}

interface ISetNewPhotosPayload {
	photos: IPhotos;
}

interface ISetNewPhotosAction {
	type: ProfileActionTypes.SET_NEW_PHOTOS;
	payload: ISetNewPhotosPayload;
}

interface IResetProfileAction {
	type: ProfileActionTypes.RESET;
}

export type ProfileActions =
	| ISetInfoAction
	| ISetNewStatusAction
	| ISetNewPhotosAction
	| IResetProfileAction;

export type SetInfoAC = (info: IProfileState) => ISetInfoAction;
export type SetNewStatusAC = (status: string) => ISetNewStatusAction;
export type SetNewPhotosAC = (photos: IPhotos) => ISetNewPhotosAction;
export type ResetProfileAC = () => IResetProfileAction;

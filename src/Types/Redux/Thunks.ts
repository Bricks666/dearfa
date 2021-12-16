import { IUser, TypedThunk } from ".";
import { IUpdateProfileRequest } from "../Api";
import { ID } from "../Common";

export type AuthThunk = () => TypedThunk<void>;

export type FollowThunk = (user: IUser) => TypedThunk<void>;

export type GetCaptchaThunk = () => TypedThunk<void>;

export type LoadDialogsThunk = () => TypedThunk<void>;

export type LoadFavoriteFriendsThunk = () => TypedThunk<void>;

export type LoadFriendsThunk = (
	friendsCount: number,
	currentPage: number
) => TypedThunk<void>;

export type LoadMessagesThunk = (
	dialogId: number,
	page: number
) => TypedThunk<void>;

export type LoadUsersThunk = (
	usersCount: number,
	page: number
) => TypedThunk<void>;

export type LoadUserThunk = (userId: ID) => TypedThunk<void>;

export type LoginThunk = (
	email: string,
	password: string,
	rememberMe: boolean
) => TypedThunk<void>;

export type LogoutThunk = () => TypedThunk<void>;

export type SendMessageThunk = (
	dialogId: number,
	message: string
) => TypedThunk<void>;

export type SetNewStatusThunk = (status: string) => TypedThunk<void>;

export type UnfollowThunk = (userId: number) => TypedThunk<void>;

export type UpdatePhotoThunk = (photo: File) => TypedThunk<void>;

interface IUpdatePhoto {
	newPhoto: File | null;
}

interface INewProfileInfo extends IUpdateProfileRequest {
	photo: IUpdatePhoto;
}

export type UpdateProfileThunk = (
	newProfileInfo: INewProfileInfo
) => TypedThunk<void>;

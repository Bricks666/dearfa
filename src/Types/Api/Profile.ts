import { IStandardServerResponse } from ".";
import { EmptyObject, ID, IPhotos } from "../Common";
import { IContacts, IProfileState } from "../Redux";

export interface IUpdateProfileRequest {
	userId: number;
	fullName: string;
	aboutMe: string;
	contacts: IContacts;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
}

export type GetProfileResponse = Omit<IProfileState, "status">;

export type GetProfile = (id: ID) => Promise<GetProfileResponse>;

export type GetStatus = (id: ID) => Promise<string>;

export type GetProfileWithStatus = (id: ID) => Promise<IProfileState>;

export type UpdateStatus = (newStatus: string) => Promise<EmptyObject>;

export type UpdateProfile = (
	newProfileInfo: IUpdateProfileRequest
) => Promise<EmptyObject>;

export type UpdatePhoto = (
	photo: File
) => Promise<IStandardServerResponse<IPhotos>>;

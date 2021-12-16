import { IContacts } from "../Redux";

export interface IUpdateProfileRequest {
	userId: number;
	fullName: string;
	aboutMe: string;
	contacts: IContacts;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
}

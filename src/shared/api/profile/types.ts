import { Boolean, Number, Record, Static, String } from 'runtypes';
import { RTPhotos, RTUrl } from '@/shared/types';

export const TContacts = Record({
	github: RTUrl,
	facebook: RTUrl,
	twitter: RTUrl,
	youtube: RTUrl,
	vk: RTUrl,
	website: RTUrl,
	mainLink: RTUrl,
	instagram: RTUrl,
}).asReadonly();

export interface Contacts extends Static<typeof TContacts> {}

export const TInfo = Record({
	userId: Number,
	fullName: String,
	photos: RTPhotos,
	contacts: TContacts,
	aboutMe: String.nullable(),
	lookingForAJob: Boolean,
	lookingForAJobDescription: String.nullable(),
});

export const TStatus = String;

export interface GetProfileParams {
	readonly id: number;
}

export interface Info extends Static<typeof TInfo> {}

export type Status = Static<typeof TStatus>;
export type NullableStatus = Status | null;

export interface ProfileInfo extends Info {
	readonly status: string;
}

export interface UpdateStatusParams {
	readonly status: string;
}

export type UpdateInfoParams = Omit<Info, 'photos' | 'followed' | 'userId'>;

export interface UpdatePhotoParams {
	readonly photo: FileList;
}

export const RTUpdatePhotoResponse = Record({
	photos: RTPhotos,
});

export interface UpdatePhotoResponse
	extends Static<typeof RTUpdatePhotoResponse> {}

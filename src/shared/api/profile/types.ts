import { Boolean, Number, Record, Static, String, Union } from 'runtypes';
import { emptyObject, photos, url } from '@/shared/types';

export const TContacts = Record({
	github: url,
	facebook: url,
	twitter: url,
	youtube: url,
	vk: url,
	website: url,
	mainLink: url,
	instagram: url,
}).asReadonly();

export interface Contacts extends Static<typeof TContacts> {}

export const TInfo = Record({
	userId: Number,
	fullName: String,
	photos,
	contacts: Union(TContacts, emptyObject),
	aboutMe: String.nullable(),
	lookingForAJob: Boolean,
	lookingForAJobDescription: String.nullable(),
});

export const TStatus = String.nullable();

export interface GetProfileParams {
	readonly id: number;
}

export interface Info extends Static<typeof TInfo> {}

export type Status = Static<typeof TStatus>;

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

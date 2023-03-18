import { Boolean, Number, Record, Static, String, Union } from 'runtypes';
import { emptyObject, photos, url } from '@/types';

export const contacts = Record({
	github: url,
	facebook: url,
	twitter: url,
	youtube: url,
	vk: url,
	website: url,
	mainLink: url,
	instagram: url,
}).asReadonly();

export interface Contacts extends Static<typeof contacts> {}

export const info = Record({
	userId: Number,
	fullName: String,
	photos,
	contacts: Union(contacts, emptyObject),
	followed: Boolean,
	aboutMe: String,
	lookingForAJob: Boolean,
	lookingForAJobDescription: String,
});

export interface Info extends Static<typeof info> {}

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

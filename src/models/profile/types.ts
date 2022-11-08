import { EmptyObject, Photos, URL } from '@/types';

export interface Info {
	readonly userId: number;
	readonly fullName: string;
	readonly photos: Photos;
	readonly contacts: Contacts | EmptyObject;
	readonly followed: boolean;
	readonly aboutMe: string;
	readonly lookingForAJob: boolean;
	readonly lookingForAJobDescription: string;
}

export interface ProfileInfo extends Info {
	readonly status: string;
}

export interface Contacts {
	readonly github: URL | null;
	readonly facebook: URL | null;
	readonly twitter: URL | null;
	readonly youtube: URL | null;
	readonly vk: URL | null;
	readonly website: URL | null;
	readonly mainLink: URL | null;
	readonly instagram: URL | null;
}

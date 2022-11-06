import { Photos, URL } from '@/types';

export interface User {
	readonly id: number;
	readonly name: string;
	readonly status: string;
	readonly photos: Photos;
	readonly followed: boolean;
	readonly uniqueUrlName: URL | null;
}

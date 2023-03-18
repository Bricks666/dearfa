import { Boolean, Number, Record, Static, String } from 'runtypes';
import { photos, url } from '@/types';

export const user = Record({
	id: Number,
	name: String,
	status: String,
	followed: Boolean,
	uniqueUrlName: url,
	photos,
});

export interface User extends Static<typeof user> {}

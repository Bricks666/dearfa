import { Boolean, Number, Record, Static, String } from 'runtypes';
import { photos, url } from '@/shared/types';

export const user = Record({
	id: Number,
	name: String,
	status: String.nullable(),
	followed: Boolean,
	uniqueUrlName: url,
	photos,
});

export interface User extends Static<typeof user> {}

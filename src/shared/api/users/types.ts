import { Boolean, Number, Record, Static, String } from 'runtypes';
import { RTPhotos, RTUrl } from '@/shared/types';

export const user = Record({
	id: Number,
	name: String,
	status: String.nullable(),
	followed: Boolean,
	uniqueUrlName: RTUrl,
	photos: RTPhotos,
});

export interface User extends Static<typeof user> {}

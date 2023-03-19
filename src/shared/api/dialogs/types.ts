import { Number, Record, Static, String } from 'runtypes';
import { photos, dateType } from '@/shared/types';

export const dialog = Record({
	id: Number,
	userName: String,
	lastUserActivityDate: dateType,
	photos,
});

export interface Dialog extends Static<typeof dialog> {}

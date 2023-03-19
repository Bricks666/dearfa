import { Boolean, Number, Record, Static, String } from 'runtypes';
import { photos, dateType } from '@/shared/types';

export const dialog = Record({
	id: Number,
	userName: String,
	lastUserActivityDate: dateType,
	lastDialogActivityDate: dateType,
	newMessagesCount: Number,
	hasNewMessages: Boolean,
	photos,
});

export interface Dialog extends Static<typeof dialog> {}

export interface UpdateDialogParams {
	readonly userId: number;
}

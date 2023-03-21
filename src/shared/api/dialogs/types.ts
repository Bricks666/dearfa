import { Boolean, Number, Record, Static, String } from 'runtypes';
import { RTPhotos, RTDateType } from '@/shared/types';

export const dialog = Record({
	id: Number,
	userName: String,
	lastUserActivityDate: RTDateType,
	lastDialogActivityDate: RTDateType,
	newMessagesCount: Number,
	hasNewMessages: Boolean,
	photos: RTPhotos,
});

export interface Dialog extends Static<typeof dialog> {}

export interface UpDialogParams {
	readonly userId: number;
}

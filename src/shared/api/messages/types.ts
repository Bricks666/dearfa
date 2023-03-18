import { Boolean, Number, Record, Static, String } from 'runtypes';
import { Pagination } from '../request';
import { dateType } from '@/types';

export const message = Record({
	id: Number,
	body: String,
	senderName: String,
	senderId: Number,
	addedAt: dateType,
	viewed: Boolean,
}).asReadonly();

export interface Message extends Static<typeof message> {}

export interface GetMessageParams extends Pagination {
	readonly dialogId: number;
}

export interface CreateMessageParams {
	readonly dialogId: number;
	readonly body: string;
}

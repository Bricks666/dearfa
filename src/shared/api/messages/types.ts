import { Boolean, Number, Record, Static, String } from 'runtypes';
import { RTDateType } from '@/shared/types';
import { Pagination } from '../request';

export const message = Record({
	id: String,
	body: String,
	senderName: String,
	senderId: Number,
	addedAt: RTDateType,
	viewed: Boolean,
}).asReadonly();

export const createMessageResponse = Record({
	message: Record({
		id: String,
		body: String,
		senderName: String,
		senderId: Number,
		recipientId: Number,
		recipientName: String,
		deletedBySender: Boolean,
		deletedByRecipient: Boolean,
		isSpam: Boolean,
		distributionId: Number.nullable(),
		addedAt: RTDateType,
		viewed: Boolean,
		translatedBody: String.nullable(),
	}).asReadonly(),
});

export interface Message extends Static<typeof message> {}

export interface CreateMessageResponse
	extends Static<typeof createMessageResponse> {}

export interface GetMessageParams extends Pagination {
	readonly dialogId: number;
}

export interface CreateMessageParams {
	readonly dialogId: number;
	readonly body: string;
}

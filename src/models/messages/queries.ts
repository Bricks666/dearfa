import { createMutation, createQuery } from '@farfetched/core';
import { GetMessageParams, Message, ResponseWithItems } from '@/shared/api';
import { createMessageFx, getMessagesFx } from './units';

export const getMessagesQuery = createQuery<
	GetMessageParams,
	ResponseWithItems<Message>,
	Error,
	Message[]
>({
	initialData: [],
	effect: getMessagesFx,
	mapData: ({ result, }) => {
		return result.items;
	},
});

export const createMessageMutation = createMutation({
	effect: createMessageFx,
});

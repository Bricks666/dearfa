import { createMutation, createQuery } from '@farfetched/core';
import { GetMessageParams } from '@/api/messages';
import { ResponseWithItems } from '@/types';
import { Message } from './types';
import { createMessageFx, getMessagesFx } from './units';

export const getMessagesQuery = createQuery<
	GetMessageParams,
	ResponseWithItems<Message>,
	Error,
	Message[]
>({
	effect: getMessagesFx,
	mapData: (data) => {
		return data.items;
	},
});

export const createMessageMutation = createMutation({
	effect: createMessageFx,
});

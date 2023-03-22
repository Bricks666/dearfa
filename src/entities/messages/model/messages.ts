import { cache, createQuery } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { getResponseWithItems, message, messagesApi } from '@/shared/api';

const messages = createDomain();

const handlerFx = messages.effect(messagesApi.getAll);

export const query = createQuery({
	initialData: {
		items: [],
		totalCount: 0,
		error: null,
	},
	effect: handlerFx,
	contract: runtypeContract(getResponseWithItems(message)),
});

cache(query);

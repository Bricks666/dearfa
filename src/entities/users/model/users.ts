import { cache, createQuery } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { getResponseWithItems, user, usersApi } from '@/shared/api';

const users = createDomain();

const handlerFx = users.effect(usersApi.getAll);

export const query = createQuery({
	initialData: {
		items: [],
		totalCount: 0,
		error: null,
	},
	effect: handlerFx,
	contract: runtypeContract(getResponseWithItems(user)),
});

cache(query);

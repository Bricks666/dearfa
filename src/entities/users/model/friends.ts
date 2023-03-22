import { cache, createQuery } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { getResponseWithItems, user, usersApi } from '@/shared/api';

const friends = createDomain();

const handlerFx = friends.effect(usersApi.getFriends);

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

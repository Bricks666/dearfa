import { createMutation } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { followsApi, getStandardServerResponse } from '@/shared/api';
import { emptyObject } from '@/shared/types';

const unfollow = createDomain();

const handlerFx = unfollow.effect(followsApi.unfollow);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(emptyObject)),
});

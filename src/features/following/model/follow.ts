import { createMutation } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { followsApi, getStandardServerResponse } from '@/shared/api';
import { RTEmptyObject } from '@/shared/types';

const follow = createDomain();

const handlerFx = follow.effect(followsApi.follow);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(RTEmptyObject)),
});

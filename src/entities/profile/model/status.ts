import { cache, createQuery, Query } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { GetProfileParams, profileApi, Status, TStatus } from '@/shared/api';

const status = createDomain();

const handlerFx = status.effect(profileApi.getStatus);

export const query = createQuery({
	initialData: '',
	effect: handlerFx,
	contract: runtypeContract(TStatus),
}) as Query<GetProfileParams, Status, Error, ''>;

cache(query);

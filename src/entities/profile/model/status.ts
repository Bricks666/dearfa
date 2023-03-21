import { cache, createQuery, Query } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import {
	GetProfileParams,
	NullableStatus,
	profileApi,
	TStatus
} from '@/shared/api';

const status = createDomain();

const handlerFx = status.effect(profileApi.getStatus);

export const query = createQuery({
	initialData: null,
	effect: handlerFx,
	contract: runtypeContract(TStatus.nullable()),
}) as Query<GetProfileParams, NullableStatus, Error>;

cache(query);

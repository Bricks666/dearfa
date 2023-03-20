import { createQuery, Query } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain, sample } from 'effector';
import {
	authApi,
	authUser,
	AuthUser,
	getStandardServerResponse
} from '@/shared/api';
import { standardExtractor } from '@/shared/lib';

const auth = createDomain();

export const $user = auth.store<AuthUser | null>(null);
export const $isAuth = $user.map((user) => Boolean(user));

const handlerFx = auth.effect(authApi.auth);

export const query = createQuery({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(authUser)),
	mapData: standardExtractor,
}) as Query<void, AuthUser | null, Error>;

sample({
	clock: query.finished.success,
	fn: ({ result, }) => result,
	target: $user,
});

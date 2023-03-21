import { createMutation, update } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { authUserModel } from '@/entities/auth-user';
import { authApi, getStandardServerResponse } from '@/shared/api';
import { RTEmptyObject } from '@/shared/types';

const logout = createDomain();

const handlerFx = logout.effect(authApi.logout);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(RTEmptyObject)),
});

update(authUserModel.query, {
	on: mutation,
	by: {
		success: () => {
			return {
				result: null,
			};
		},
	},
});

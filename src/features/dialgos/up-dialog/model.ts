import { createMutation } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { debug } from 'patronum';
import { dialogsApi, getStandardServerResponse } from '@/shared/api';
import { emptyObject } from '@/shared/types';

const upDialog = createDomain();

const handlerFx = upDialog.effect(dialogsApi.up);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(emptyObject)),
});

debug(mutation.finished.failure, mutation.finished.failure);

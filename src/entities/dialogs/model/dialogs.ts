import { cache, createQuery } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { Array } from 'runtypes';
import { Dialog, dialog, dialogsApi } from '@/shared/api';

const dialogs = createDomain();

const handlerFx = dialogs.effect(dialogsApi.getAll);

export const query = createQuery<void, Dialog[], Error, Dialog[]>({
	initialData: [],
	effect: handlerFx,
	contract: runtypeContract(Array(dialog)),
});

cache(query);

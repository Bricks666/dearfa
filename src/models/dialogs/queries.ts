import { createQuery } from '@farfetched/core';
import { Dialog } from './types';
import { getDialogsFx } from './units';

export const getDialogsQuery = createQuery<void, Dialog[], Error>({
	effect: getDialogsFx,
});

import { createQuery } from '@farfetched/core';
import { Dialog, StandardServerResponse } from '@/shared/api';
import { getDialogsFx } from './units';

export const getDialogsQuery = createQuery<
	void,
	StandardServerResponse<Dialog[]>,
	Error
>({
	effect: getDialogsFx,
});

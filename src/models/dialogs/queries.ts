import { createQuery } from '@farfetched/core';
import { StandardServerResponse } from '@/types';
import { Dialog } from './types';
import { getDialogsFx } from './units';

export const getDialogsQuery = createQuery<
	void,
	StandardServerResponse<Dialog[]>,
	Error,
	Dialog[]
>({
	effect: getDialogsFx,
	mapData: (data) => {
		return data.data;
	},
});

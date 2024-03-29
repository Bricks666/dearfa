import { URL } from '@/shared/types';
import { instance, StandardServerResponse } from '../request';
import { Dialog, UpDialogParams } from './types';

const baseURL: URL = 'dialogs';

export const getAll = async () => {
	return instance.get(baseURL).json<Dialog[]>();
};

export const up = async (params: UpDialogParams) => {
	const { userId, } = params;
	return instance
		.put(`${baseURL}/${userId}`)
		.json<StandardServerResponse<any>>();
};

import { StandardServerResponse, URL } from '@/shared/types';
import { instance } from '../request';
import { Dialog } from './types';

const baseURL: URL = 'dialogs';

export const getAll = async () => {
	return instance.get(baseURL).json<StandardServerResponse<Dialog[]>>();
};

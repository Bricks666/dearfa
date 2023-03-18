import { instance } from '../request';
import { Dialog } from './types';
import { StandardServerResponse, URL } from '@/types';

const baseURL: URL = 'dialogs';

export const getAll = async () => {
	return instance.get(baseURL).json<StandardServerResponse<Dialog[]>>();
};

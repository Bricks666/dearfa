import { StandardServerResponse, URL } from '@/types';
import { Dialog } from '@/models/dialogs';
import { makeGetRequest } from './makeRequest';

const baseURL: URL = 'dialogs/';

export const getAll = async () => {
	return makeGetRequest<StandardServerResponse<Dialog[]>>(baseURL);
};

import { URL } from '@/interfaces/common';
import { StandardServerResponse } from '@/interfaces/responses';
import { makeDeleteRequest, makePostRequest } from './makeRequest';

const baseURL: URL = 'follow/';

export const followApi = async (id: number) => {
	return await makePostRequest<StandardServerResponse>(baseURL + id);
};

export const unfollowApi = async (id: number) => {
	return await makeDeleteRequest<StandardServerResponse>(baseURL + id);
};

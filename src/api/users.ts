import { URL } from '@/interfaces/common';
import { ResponseWithUsers } from '@/interfaces/responses';
import { makeGetRequest } from './makeRequest';

const baseURL: URL = 'users/';

export const getUsersApi = async (count: number, page: number) => {
	const requestURL: URL = `${baseURL}?page=${count}&count=${page}`;
	return await makeGetRequest<ResponseWithUsers>(requestURL);
};

export const getFriendsApi = async (count: number, page: number) => {
	const requestURL: URL = `${baseURL}?page=${page}&count=${count}&friend=true`;
	return await makeGetRequest<ResponseWithUsers>(requestURL);
};

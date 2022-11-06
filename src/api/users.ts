import {
	StandardServerResponse,
	URL,
	Pagination,
	ResponseWithItems,
} from '@/types';
import { User } from '@/models/users';
import {
	makeDeleteRequest,
	makeGetRequest,
	makePostRequest,
} from './makeRequest';

const usersBaseURL: URL = 'users/';

export const getAll = async (options: Pagination) => {
	const { count, page } = options;
	const requestURL: URL = `${usersBaseURL}?page=${count}&count=${page}`;
	return makeGetRequest<ResponseWithItems<User>>(requestURL);
};

export const getFriends = async (options: Pagination) => {
	const { count, page } = options;
	const requestURL: URL = `${usersBaseURL}?page=${page}&count=${count}&friend=true`;
	return makeGetRequest<ResponseWithItems<User>>(requestURL);
};

const followBaseURL: URL = 'follow/';

export const follow = async (id: number) => {
	return makePostRequest<StandardServerResponse>(followBaseURL + id);
};

export const unfollow = async (id: number) => {
	return makeDeleteRequest<StandardServerResponse>(followBaseURL + id);
};

import { instance, Pagination, ResponseWithItems } from '../request';
import { User } from './types';

const getBaseURL = () => {
	return 'users';
};

export const getAll = async (params: Pagination) => {
	const { count, page, } = params;

	const requestURL = `${getBaseURL()}?page=${page}&count=${count}`;
	return instance.get(requestURL).json<ResponseWithItems<User>>();
};

export const getFriends = async (params: Pagination) => {
	const { count, page, } = params;

	const requestURL = `${getBaseURL()}?page=${page}&count=${count}&friend=true`;
	return instance.get(requestURL).json<ResponseWithItems<User>>();
};

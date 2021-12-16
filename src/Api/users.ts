import { ResponseWithUsers } from "../Types/Api";
import { URL } from "../Types/Common";
import { makeGetRequest } from "./makeRequest";

const baseURL: URL = "users/";

export const getUsers = async (usersCount: number, currentPage: number) => {
	const requestURL: URL = `${baseURL}?page=${currentPage}&count=${usersCount}`;
	return (await makeGetRequest<ResponseWithUsers>(requestURL)).data;
};

export const getFriends = async (usersCount: number, currentPage: number) => {
	const requestURL: URL = `${baseURL}&page=${currentPage}&count=${usersCount}&friend=true`;
	return (await makeGetRequest<ResponseWithUsers>(requestURL)).data;
};

export const getFavoriteFriends = async () => {
	const requestURL: URL = `${baseURL}&page=${1}&count=${6}&friend=true`;
	return (await makeGetRequest<ResponseWithUsers>(requestURL)).data;
};

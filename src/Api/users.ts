import { GetUsers, ResponseWithUsers } from "../Types/Api";
import { URL } from "../Types/Common";
import { makeGetRequest } from "./makeRequest";

const baseURL: URL = "users/";

export const getUsers: GetUsers = async (usersCount, currentPage, isFriend) => {
	const requestURL: URL = `${baseURL}?page=${currentPage}&count=${usersCount}&friend=${isFriend}`;
	return (await makeGetRequest<ResponseWithUsers>(requestURL)).data;
};

import { IStandardServerResponse } from "../Types/Api";
import { URL } from "../Types/Common";
import { makeDeleteRequest, makePostRequest } from "./makeRequest";

const baseURL: URL = "follow/";

export const follow = async (id: number) => {
	return (await makePostRequest<IStandardServerResponse>(baseURL + id)).data;
};

export const unfollow = async (id: number) => {
	return (await makeDeleteRequest<IStandardServerResponse>(baseURL + id)).data;
};

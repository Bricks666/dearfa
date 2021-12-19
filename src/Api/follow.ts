import { Follow, IStandardServerResponse, Unfollow } from "../Types/Api";
import { URL } from "../Types/Common";
import { makeDeleteRequest, makePostRequest } from "./makeRequest";

const baseURL: URL = "follow/";

export const follow: Follow = async (id) => {
	return (await makePostRequest<IStandardServerResponse>(baseURL + id)).data;
};

export const unfollow: Unfollow = async (id) => {
	return (await makeDeleteRequest<IStandardServerResponse>(baseURL + id)).data;
};

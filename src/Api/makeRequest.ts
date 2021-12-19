import { URL, EmptyObject } from "../Types/Common";
import Axios, { AxiosRequestConfig } from "axios";
import {
	DeleteRequest,
	GetRequest,
	PostRequest,
	PutRequest,
} from "../Types/Api";

const axiosInstance = Axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "b5d52611-1432-460b-9a90-98ff97a4eb1b",
	},
	withCredentials: true,
});

export const makeGetRequest: GetRequest = async <T = EmptyObject>(url: URL) => {
	return await axiosInstance.get<T>(url);
};

export const makeDeleteRequest: DeleteRequest = async <T = EmptyObject>(
	url: URL
) => {
	return await axiosInstance.delete<T>(url);
};

export const makePostRequest: PostRequest = async <
	T = EmptyObject,
	D = EmptyObject
>(
	url: URL,
	data?: D
) => {
	return await axiosInstance.post<T>(url, data);
};

export const makePutRequest: PutRequest = async <
	T = EmptyObject,
	D = EmptyObject
>(
	url: URL,
	data?: D,
	config?: AxiosRequestConfig
) => {
	return await axiosInstance.put<T>(url, data, config);
};

import Axios, { AxiosRequestConfig } from 'axios';
import { URL, EmptyObject } from '@/interfaces/common';

const axiosInstance = Axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'b5d52611-1432-460b-9a90-98ff97a4eb1b',
	},
	withCredentials: true,
});

export const makeGetRequest = async <T = EmptyObject>(url: URL) => {
	return (await axiosInstance.get<T>(url)).data;
};

export const makeDeleteRequest = async <T = EmptyObject>(url: URL) => {
	return (await axiosInstance.delete<T>(url)).data;
};

export const makePostRequest = async <T = EmptyObject, D = EmptyObject>(
	url: URL,
	data?: D
) => {
	return (await axiosInstance.post<T>(url, data)).data;
};

export const makePutRequest = async <T = EmptyObject, D = EmptyObject>(
	url: URL,
	data?: D,
	config?: AxiosRequestConfig
) => {
	return (await axiosInstance.put<T>(url, data, config)).data;
};

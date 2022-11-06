import Axios, { AxiosRequestConfig } from 'axios';
import { URL, EmptyObject } from '@/types';

const axiosInstance = Axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'API-KEY': import.meta.env.VITE_API_KEY,
	},
	withCredentials: true,
});

export const makeGetRequest = async <T = EmptyObject>(url: URL) => {
	return (await axiosInstance.get<T>(url)).data;
};

export const makeDeleteRequest = async <T = EmptyObject>(url: URL) => {
	return (await axiosInstance.delete<T>(url)).data;
};

export const makePostRequest = async <T = EmptyObject, D = any>(
	url: URL,
	data?: D
) => {
	return (await axiosInstance.post<T>(url, data)).data;
};

export const makePutRequest = async <T = EmptyObject, D = any>(
	url: URL,
	data?: D,
	config?: AxiosRequestConfig
) => {
	return (await axiosInstance.put<T>(url, data, config)).data;
};

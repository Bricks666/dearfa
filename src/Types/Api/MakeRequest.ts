import { AxiosRequestConfig, AxiosResponse } from "axios";
import { EmptyObject, URL } from "../Common";

export interface IStandardServerResponse<T = EmptyObject> {
	resultCode: number;
	messages: string[];
	fieldsErrors: string[];
	data: T;
}

export interface IResponseWithItems<T> {
	items: T[];
	totalCount: number;
	error: null | string;
}

export type Response<T> = Promise<AxiosResponse<T>>;

export type GetRequest = <T = EmptyObject>(url: URL) => Response<T>;

export type DeleteRequest = <T = EmptyObject>(url: URL) => Response<T>;

export type PostRequest = <T = EmptyObject, D extends object = EmptyObject>(
	url: URL,
	data?: D
) => Response<T>;

export type PutRequest = <T = EmptyObject, D extends object = EmptyObject>(
	url: URL,
	data?: D,
	config?: AxiosRequestConfig
) => Response<T>;

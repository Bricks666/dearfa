import { Record, String, Number, Array, Runtype } from 'runtypes';
import { EmptyObject } from '@/shared/types';

export const getResponseWithItems = <T>(type: Runtype<T>) => {
	return Record({
		items: Array(type),
		totalCount: Number,
		error: String.nullable(),
	}).asReadonly();
};

export interface ResponseWithItems<T> {
	readonly items: T[];
	readonly totalCount: number;
	readonly error: null | string;
}

export const getStandardServerResponse = <T>(type: Runtype<T>) => {
	return Record({
		resultCode: Number,
		messages: Array(String),
		fieldsErrors: Array(String),
		data: type,
	}).asReadonly();
};

export interface StandardServerResponse<T = EmptyObject> {
	readonly resultCode: number;
	readonly messages: string[];
	readonly fieldsErrors: string[];
	readonly data: T;
}

export interface Pagination {
	readonly count: number;
	readonly page: number;
}

import { User } from "@/models/users";
import { EmptyObject } from "./common";

export interface ResponseWithItems<T> {
	readonly items: T[];
	readonly totalCount: number;
	readonly error: null | string;
}

export interface StandardServerResponse<T = EmptyObject> {
	readonly resultCode: number;
	readonly messages: string[];
	readonly fieldsErrors: string[];
	readonly data: T;
}

export type ResponseWithUsers = ResponseWithItems<User>;

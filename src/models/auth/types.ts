import { Number, Record, Static, String } from 'runtypes';

export const authUser = Record({
	id: Number,
	login: String,
	email: String,
}).asReadonly();

export interface AuthUser extends Static<typeof authUser> {}

export const loginResponse = Record({
	userId: Number,
});

export interface LoginResponse extends Static<typeof loginResponse> {}

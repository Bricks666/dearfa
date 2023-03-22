import { createMutation, update } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { authUserModel } from '@/entities/auth-user';
import {
	authApi,
	getStandardServerResponse,
	LoginRequest,
	loginResponse
} from '@/shared/api';

const login = createDomain();

const handlerFx = login.effect(authApi.login);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(loginResponse)),
});

export const form = createForm<LoginRequest>({
	fields: {
		email: {
			init: '',
		},
		password: {
			init: '',
		},
		rememberMe: {
			init: false,
		},
	},
	domain: login,
});

sample({
	clock: form.formValidated,
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: form.reset,
});

sample({
	clock: mutation.finished.failure,
	target: form.fields.password.reset,
});

update(authUserModel.query, {
	on: mutation,
	by: {
		success: ({ query, }) => {
			if (!query) {
				return {
					result: null,
					refetch: true,
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refetch: true,
				};
			}

			return {
				result: query.result,
				refetch: true,
			};
		},
	},
});

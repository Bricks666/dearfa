import { createMutation } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import {
	CreateMessageParams,
	createMessageResponse,
	getStandardServerResponse,
	messagesApi
} from '@/shared/api';

const createMessage = createDomain();

const handlerFx = createMessage.effect(messagesApi.create);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(createMessageResponse)),
});

export interface CreateMessageForm extends Pick<CreateMessageParams, 'body'> {}

export const form = createForm<CreateMessageForm>({
	fields: {
		body: {
			init: '',
		},
	},
	domain: createMessage,
});

sample({
	clock: mutation.start,
	target: form.reset,
});

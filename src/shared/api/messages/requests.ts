import { URL } from '@/shared/types';
import { GetMessageParams, CreateMessageParams, Message } from '../messages';
import {
	instance,
	ResponseWithItems,
	StandardServerResponse
} from '../request';

const getBaseURL = (dialogId: number): NonNullable<URL> => {
	return `dialogs/${dialogId}/messages`;
};

export const getAll = (params: GetMessageParams) => {
	const { dialogId, } = params;

	return instance.get(getBaseURL(dialogId)).json<ResponseWithItems<Message>>();
};

export const create = async (params: CreateMessageParams) => {
	const { dialogId, body, } = params;
	return instance
		.post(getBaseURL(dialogId), {
			json: { body, },
		})
		.json<StandardServerResponse<Message>>();
};

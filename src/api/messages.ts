import { Message } from '@/models/messages';
import {
	Pagination,
	ResponseWithItems,
	StandardServerResponse,
	URL,
} from '@/types';
import { makeGetRequest, makePostRequest } from './makeRequest';

export interface GetMessageParams extends Pagination {
	readonly dialogId: number;
}

export const getAll = (params: GetMessageParams) => {
	const { dialogId } = params;
	const requestURL: URL = `dialogs/${dialogId}/messages?`;
	return makeGetRequest<ResponseWithItems<Message>>(requestURL);
};

export interface CreateMessageParams {
	readonly dialogId: number;
	readonly body: string;
}

export const create = async (params: CreateMessageParams) => {
	const { dialogId, body } = params;
	const requestURL: URL = `dialogs/${dialogId}/messages`;
	return makePostRequest<StandardServerResponse<Message>>(requestURL, { body });
};

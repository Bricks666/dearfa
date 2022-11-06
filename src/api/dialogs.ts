import { URL } from '@/interfaces/common';
import {
	ResponseWithItems,
	StandardServerResponse,
} from '@/interfaces/responses';
import { Dialog } from '@/models/dialogs';
import { Message } from '@/models/messages';
import { makeGetRequest, makePostRequest } from './makeRequest';

const baseURL: URL = 'dialogs/';

export const getDialogsApi = async () => {
	return await makeGetRequest<StandardServerResponse<Dialog[]>>(baseURL);
};

export const getMessagesApi = async (
	dialogId: number,
	page: number,
	count = 20
) => {
	const requestURL: URL = `${baseURL}${dialogId}/messages?page=${page}&count=${count}`;
	return await makeGetRequest<ResponseWithItems<Message>>(requestURL);
};

export interface SendMessageRequest {
	readonly body: string;
}

export const sendMessageApi = async (dialogId: number, message: string) => {
	const requestURL: URL = `${baseURL}${dialogId}/messages`;
	return await makePostRequest<
		StandardServerResponse<Message>,
		SendMessageRequest
	>(requestURL, { body: message });
};

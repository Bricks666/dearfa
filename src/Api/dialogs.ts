import {
	GetDialogs,
	GetMessages,
	IResponseWithItems,
	ISendMessageRequest,
	IStandardServerResponse,
	SendMessage,
} from "../Types/Api";
import { URL } from "../Types/Common";
import { IDialog, IMessage } from "../Types/Redux";
import { makeGetRequest, makePostRequest } from "./makeRequest";

/* TODO:  Написать отдельные типы для функций и вынести в отдельные файлы */
const baseURL: URL = "dialogs/";

export const getDialogs: GetDialogs = async () => {
	return (await makeGetRequest<IDialog[]>(baseURL)).data;
};

export const getMessages: GetMessages = async (dialogId, page, count = 20) => {
	const requestURL: URL = `${baseURL}${dialogId}/messages?page=${page}&count=${count}`;
	return (await makeGetRequest<IResponseWithItems<IMessage>>(requestURL)).data;
};

export const sendMessage: SendMessage = async (dialogId, message) => {
	const requestURL: URL = `${baseURL}${dialogId}/messages`;
	/* По моему тут должно возвращаться сообщение, но вот в каком формате */
	return (
		await makePostRequest<IStandardServerResponse, ISendMessageRequest>(
			requestURL,
			{ body: message }
		)
	).data;
};

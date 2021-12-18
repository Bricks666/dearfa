import {
	IResponseWithItems,
	ISendMessageRequest,
	IStandardServerResponse,
} from "../Types/Api";
import { ID, URL } from "../Types/Common";
import { IDialog, IMessage } from "../Types/Redux";
import { makeGetRequest, makePostRequest, makePutRequest } from "./makeRequest";

/* TODO:  Написать отдельные типы для функций и вынести в отдельные файлы */
const baseURL: URL = "dialogs/";

export const getDialogs = async () => {
	return (await makeGetRequest<IDialog[]>(baseURL)).data;
};

export const getMessages = async (dialogId: ID, page: number, count = 20) => {
	const requestURL: URL = `${baseURL}${dialogId}/messages?page=${page}&count=${count}`;
	return (await makeGetRequest<IResponseWithItems<IMessage>>(requestURL)).data;
};

export const startChatting = async (dialogId: ID) => {
	return (await makePutRequest<IStandardServerResponse>(baseURL + dialogId))
		.data;
};

export const sendMessage = async (dialogId: ID, message: string) => {
	const requestURL: URL = `${baseURL}${dialogId}/messages`;
	/* По моему тут должно возвращаться сообщение, но вот в каком формате */
	return (
		await makePostRequest<IStandardServerResponse, ISendMessageRequest>(
			requestURL,
			{ body: message }
		)
	).data;
};

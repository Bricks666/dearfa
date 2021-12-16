import {
	IResponseWithItems,
	ISendMessageRequest,
	IStandardServerResponse,
} from "../Types/Api";
import { URL } from "../Types/Common";
import { IDialog, IMessage } from "../Types/Redux";
import { makeGetRequest, makePutRequest } from "./makeRequest";

const baseURL: URL = "dialogs/";

export const getDialogs = async () => {
	return (await makeGetRequest<IDialog[]>(baseURL)).data;
};

export const getMessages = async (
	dialogId: number,
	page: number,
	count = 20
) => {
	const requestURL: URL = `${baseURL}${dialogId}/messages?page=${page}&count=${count}`;
	return (await makeGetRequest<IResponseWithItems<IMessage>>(requestURL)).data;
};

export const startChatting = async (dialogId: number) => {
	return (await makePutRequest<IStandardServerResponse>(baseURL + dialogId))
		.data;
};

export const sendMessage = async (dialogId: number, message: string) => {
	const requestURL: URL = `${baseURL}${dialogId}/messages`;
	/* По моему тут должно возвращаться сообщение, но вот в каком формате */
	return (
		await makePutRequest<IStandardServerResponse, ISendMessageRequest>(
			requestURL,
			{ body: message }
		)
	).data;
};

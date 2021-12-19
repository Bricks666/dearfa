import { IResponseWithItems, IStandardServerResponse } from ".";
import { ID } from "../Common";
import { IDialog, IMessage } from "../Redux";

export interface ISendMessageRequest {
	body: string;
}

export type GetDialogs = () => Promise<IDialog[]>;

export type GetMessages = (
	dialogId: ID,
	page: number,
	count?: number
) => Promise<IResponseWithItems<IMessage>>;

export type SendMessage = (
	dialogId: ID,
	message: string
) => Promise<IStandardServerResponse>;

import { ID } from "../Common";
import { IMessage } from "../Redux";

interface IUseMessagesResponse {
	messages: IMessage[];
}

export type UseMessages = (dialogId: ID) => IUseMessagesResponse;

import { ID } from "../Common";

/* TODO: Перетипизировать */
interface ISendMessageResponse {
	sendMessage: ({ message }: { message: string }) => void;
}

export type UseSendMessages = (dialogId: ID) => ISendMessageResponse;

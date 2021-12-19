import { EmptyFunction } from ".";
import { ID } from "../Common";

export type UseLoadMessages = (dialogId: ID) => IUseLoadMessagesResponse;

interface IUseLoadMessagesResponse {
	loadMessages: EmptyFunction;
}

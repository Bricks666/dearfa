import { DateType } from "./Common";

export interface IMessagesState {
	[dialogId: number]: IMessage[];
}

export interface IMessage {
	id: number;
	body: string;
	senderName: string;
	senderId: number;
	addedAt: DateType;
	viewed: boolean;
}

export enum MessagesActionTypes {
	SET_MESSAGES = "dearFa/messages/SET_MESSAGES",
	RESET = "dearFa/messages/RESET",
}

interface ISetMessagesPayload {
	dialogId: number;
	messages: IMessage[];
}

interface ISetMessagesAction {
	type: MessagesActionTypes.SET_MESSAGES;
	payload: ISetMessagesPayload;
}

interface IResetMessagesAction {
	type: MessagesActionTypes.RESET;
}

export type MessagesActions = ISetMessagesAction | IResetMessagesAction;

export type SetMessagesAC = (
	dialogId: number,
	messages: IMessage[]
) => ISetMessagesAction;
export type ResetMessagesAC = () => IResetMessagesAction;

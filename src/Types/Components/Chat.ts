import { IFormInner, IOnlyClassComponent } from ".";
import { ID } from "../Common";
import { IMessage } from "../Redux";

export interface ICompanionComponent extends IOnlyClassComponent {
	dialogId: ID;
}

export interface IMessagesComponent extends IOnlyClassComponent {
	dialogId: ID;
}

export interface IMessageComponent
	extends IOnlyClassComponent,
		Omit<IMessage, "body" | "id" | "senderId"> {}

export interface IMakeMessageComponent extends IOnlyClassComponent {
	dialogId: ID;
}
interface IFormValues {
	message: string;
}

export type IMakeMessageForm = IFormInner<IFormValues>;

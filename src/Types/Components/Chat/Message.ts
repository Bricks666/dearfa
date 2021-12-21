import { IOnlyClassComponent } from "..";
import { IMessage } from "../../Redux";

export interface IMessageComponent
	extends IOnlyClassComponent,
		Omit<IMessage, "body" | "id" | "senderId"> {}

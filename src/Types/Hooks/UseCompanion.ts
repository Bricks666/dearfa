import { DateType, EmptyObject, ID, URLorNull } from "../Common";

export type UseCompanion = (dialogId: ID) => IUseCompanionResponse;

export interface ICompanion {
	id: ID;
	name: string;
	photo: URLorNull;
	lastActive: DateType;
}

export interface IUseCompanionResponse {
	companion: ICompanion | EmptyObject;
}

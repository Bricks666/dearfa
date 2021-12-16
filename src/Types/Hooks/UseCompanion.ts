import { DateType, EmptyObject, ID, URLorNull } from "../Common";

export type UseCompanion = (dialogId: ID) => ICompanion | EmptyObject;

export interface ICompanion {
	id: ID;
	name: string;
	photo: URLorNull;
	lastActive: DateType;
}

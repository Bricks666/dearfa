import { IOnlyClassComponent } from ".";
import { IUser } from "../Redux";

export interface IFavoriteFriendComponent
	extends IOnlyClassComponent,
		Pick<IUser, "photos" | "id" | "name"> {}

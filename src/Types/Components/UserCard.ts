import { EventHandler } from "../Common";
import { IOnlyClassComponent } from ".";
import { IUser } from "../Redux";

export interface IUserComponent extends IOnlyClassComponent {
	user: IUser;
	onClick: EventHandler<HTMLButtonElement, MouseEvent>;
	isFollowing: boolean;
}

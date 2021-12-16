import { ILoadingsState } from "./Loadings";
import { INavigationItem } from "./Navigation";
import { ILoginState } from "./Login";
import { IPost } from "./Posts";
import { IFavoriteFriendsState } from "./FavoriteFriends";
import { IDialog } from "./Dialogs";
import { IAuthState } from "./Auth";
import { IProfileState } from "./Profile";
import { IMessagesState } from "./Messages";
import { IUsersState } from "./Users";
import { IFriendsState } from "./Friends";

export interface IStore {
	profile: IProfileState;
	auth: IAuthState;
	dialogs: IDialog[];
	messages: IMessagesState;
	users: IUsersState;
	friends: IFriendsState;
	favoriteFriends: IFavoriteFriendsState;
	posts: IPost[];
	login: ILoginState;
	navigation: INavigationItem[];
	loadings: ILoadingsState;
}

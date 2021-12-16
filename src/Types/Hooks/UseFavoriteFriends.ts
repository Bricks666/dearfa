import { IUser } from "../Redux";

interface IUseFavoriteFriendsResponse {
	friends: IUser[];
}

export type UseFavoriteFriends = () => IUseFavoriteFriendsResponse;

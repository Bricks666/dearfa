import { IUser } from "../Redux";

type LoadFriends = (page: number | string) => void;

interface IUseFriendsResponse {
	friends: IUser[];
	loadFriends: LoadFriends;
}

export type UseFriends = () => IUseFriendsResponse;

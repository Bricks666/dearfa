import { IUser } from "../Redux";

export type UseUsersList = () => IUseUsersListResponse;

type LoadUsers = (page: number | string) => void;

interface IUseUsersListResponse {
	users: IUser[];
	loadUsers: LoadUsers;
}

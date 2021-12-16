import { IUser, IUsersState } from "../Types/Redux/Users";
import { StandardSelector } from "../Types/Selectors";
import { GetUserByIndex } from "../Types/Selectors/Users";

export const getUsers: StandardSelector<IUsersState> = (state) => {
	return state.users;
};

export const getCount: StandardSelector<number> = (state) => {
	return getUsers(state).usersCount;
};

export const getPageCount: StandardSelector<number> = (state) => {
	return getUsers(state).pageCount;
};

export const getList: StandardSelector<IUser[]> = (state) => {
	return getUsers(state).list;
};

export const getUserByIndex: GetUserByIndex = (state, index) => {
	return getList(state)[index];
};

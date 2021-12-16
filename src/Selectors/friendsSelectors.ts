import { IFriendsState, IUser } from "../Types/Redux";
import { StandardSelector } from "../Types/Selectors";

export const getFriends: StandardSelector<IFriendsState> = (state) => {
	return state.friends;
};

export const getCount: StandardSelector<number> = (state) => {
	return getFriends(state).friendsCount;
};

export const getList: StandardSelector<IUser[]> = (state) => {
	return getFriends(state).list;
};

export const getPageCount: StandardSelector<number> = (state) => {
	return getFriends(state).pageCount;
};

export const getTotalCount: StandardSelector<number> = (state) => {
	return getFriends(state).totalCount;
};

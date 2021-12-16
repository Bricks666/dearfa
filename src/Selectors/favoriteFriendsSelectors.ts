import { IFavoriteFriendsState, IUser } from "../Types/Redux";
import { StandardSelector } from "../Types/Selectors";

export const getFavoriteFriends: StandardSelector<IFavoriteFriendsState> = (
	state
) => {
	return state.favoriteFriends;
};

export const getList: StandardSelector<IUser[]> = (state) => {
	return getFavoriteFriends(state).list;
};

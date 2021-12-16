import { ILoadingsState } from "../Types/Redux";
import { GetLoadingByName, StandardSelector } from "../Types/Selectors";

export const getLoadings: StandardSelector<ILoadingsState> = (state) => {
	return state.loadings;
};

export const getLoadingProfile: StandardSelector<boolean> = (state) => {
	return getLoadings(state).loadingProfile;
};

export const getLoadingFavoriteFriends: StandardSelector<boolean> = (state) => {
	return getLoadings(state).loadingFavoriteFriends;
};

export const getLoadingFriends: StandardSelector<boolean> = (state) => {
	return getLoadings(state).loadingFriends;
};

export const getFollowings: StandardSelector<number[]> = (state) => {
	return getLoadings(state).following;
};

export const getLoadingUsers: StandardSelector<boolean> = (state) => {
	return getLoadings(state).loadingUsers;
};

export const getLoadingByName: GetLoadingByName = (state, name) => {
	return getLoadings(state)[name];
};

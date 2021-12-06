export const getLoadings = (state) => {
	return state.loadings;
};

export const getLoadingProfile = (state) => {
	return getLoadings(state).loadingProfile;
};

export const getLoadingFavoriteFriends = (state) => {
	return getLoadings(state).loadingFavoriteFriends;
};

export const getLoadingFriends = (state) => {
	return getLoadings(state).loadingFriends;
};

export const getFollowings = (state) => {
	return getLoadings(state).following;
};

export const getLoadingUsers = (state) => {
	return getLoadings(state).loadingUsers;
};

export const getLoadingByName = (state, name) => {
	return getLoadings(state)[name];
};

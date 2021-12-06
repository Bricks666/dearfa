export const getFavoriteFriends = (state) => {
	return state.favoriteFriends;
};

export const getList = (state) => {
	return getFavoriteFriends(state).list;
};

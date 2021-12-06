export const getFriends = (state) => {
	return state.friends;
};

export const getCount = (state) => {
	return getFriends(state).friendsCount;
};

export const getList = (state) => {
	return getFriends(state).list;
};

export const getPageCount = (state) => {
	return getFriends(state).pageCount;
};

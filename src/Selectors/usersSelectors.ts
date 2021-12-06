export const getUsers = (state) => {
	return state.users;
};

export const getCount = (state) => {
	return getUsers(state).usersCount;
};

export const getPageCount = (state) => {
	return getUsers(state).pageCount;
};

export const getList = (state) => {
	return getUsers(state).list;
};

export const getUserByIndex = (state, index) => {
	return getList(state)[index];
};

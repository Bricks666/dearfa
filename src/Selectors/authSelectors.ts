export const getAuth = (state) => {
	return state.auth;
};

export const getId = (state) => {
	return getAuth(state).userId;
};

export const getLogin = (state) => {
	return getAuth(state).login;
};

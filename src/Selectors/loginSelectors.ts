export const getLogin = (state) => {
	return state.login;
};

export const getIsLogin = (state) => {
	return getLogin(state).isLogin;
};

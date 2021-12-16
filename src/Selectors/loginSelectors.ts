import { ILoginState } from "../Types/Redux";
import { StandardSelector } from "../Types/Selectors";

export const getLogin: StandardSelector<ILoginState> = (state) => {
	return state.login;
};

export const getIsLogin: StandardSelector<boolean> = (state) => {
	return getLogin(state).isLogin;
};

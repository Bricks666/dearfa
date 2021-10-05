import { SET_USER_INFO } from "../../ActionsConstants";

export const setUserInfo = (info) => {
	return {
		type: SET_USER_INFO,
		info,
	};
};

import { AUTH } from "../../ActionsConstants";

export const setAuth = (data) => {
	return {
		type: AUTH,
		data: {
			userId: data.id,
			fullName: data.login,
		},
	};
};

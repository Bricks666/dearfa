import { FOLLOW_USER } from "../../ActionsConstants";

export const followUser = (user) => {
	return {
		type: FOLLOW_USER,
		user,
	};
};

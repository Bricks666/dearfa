import { FOLLOW_USER } from "../../ActionsConstants";

export const followUserActionCreator = (user) => {
	return {
		type: FOLLOW_USER,
		user,
	};
};

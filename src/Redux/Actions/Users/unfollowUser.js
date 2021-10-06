import { UNFOLLOW_USER } from "../../ActionsConstants";

export const unfollowUser = (id) => {
	return {
		type: UNFOLLOW_USER,
		id,
	};
};

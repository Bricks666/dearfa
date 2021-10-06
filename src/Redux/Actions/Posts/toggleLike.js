import { TOGGLE_LIKE } from "../../ActionsConstants";

export const toggleLike = (postId) => {
	return {
		type: TOGGLE_LIKE,
		postId,
	};
};

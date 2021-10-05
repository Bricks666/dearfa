import { TOGGLE_LIKE } from "../../ActionsConstants";

export const toggleLikeActionCreator = (postId) => {
	return {
		type: TOGGLE_LIKE,
		postId,
	};
};

import { useCallback } from "react";
import { useTypedDispatch } from ".";
import { toggleLike as toggleLikeAC } from "../Redux/Reducers/postsReducer";
import { UseLike } from "../Types/Hooks";

export const useLike: UseLike = (postId) => {
	const dispatch = useTypedDispatch();

	const toggleLike = useCallback(() => {
		dispatch(toggleLikeAC(postId));
	}, [dispatch, postId]);

	return { toggleLike };
};

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleLike as toggleLikeAC } from "../Redux/Reducers/postsReducer";

export const useLike = (postId) => {
	const dispatch = useDispatch();
	const toggleLike = useCallback(() => {
		dispatch(toggleLikeAC(postId));
	}, [dispatch, postId]);

	return { toggleLike };
};

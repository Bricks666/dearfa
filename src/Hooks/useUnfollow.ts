import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { unfollowThunk } from "../Redux/Thunks/unfollowThunk";

export const useUnfollow = (userId) => {
	const dispatch = useDispatch();

	const unfollow = useCallback(() => {
		dispatch(unfollowThunk(userId));
	}, [dispatch, userId]);

	return { unfollow };
};

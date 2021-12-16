import { useCallback } from "react";
import { useTypedDispatch } from ".";
import { unfollowThunk } from "../Redux/Thunks/unfollowThunk";
import { UseUnfollow } from "../Types/Hooks";

export const useUnfollow: UseUnfollow = (userId) => {
	const dispatch = useTypedDispatch();

	const unfollow = useCallback(() => {
		dispatch(unfollowThunk(userId));
	}, [dispatch, userId]);

	return { unfollow };
};

import { useCallback } from "react";
import { followThunk } from "../Redux/Thunks/followThunk";
import { useTypedDispatch } from ".";
import { UseFollow } from "../Types/Hooks";

export const useFollow: UseFollow = (user) => {
	const dispatch = useTypedDispatch();

	const follow = useCallback(() => {
		dispatch(followThunk(user));
	}, [user, dispatch]);

	return { follow };
};

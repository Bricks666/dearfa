import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { followThunk } from "../Redux/Thunks/followThunk";

export const useFollow = (user) => {
	const dispatch = useDispatch();
	const follow = useCallback(() => {
		dispatch(followThunk(user));
	}, [user, dispatch]);

	return { follow };
};

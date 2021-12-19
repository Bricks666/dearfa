import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { UseSignout } from "../Types/Hooks";

import { logoutThunk } from "../Redux/Thunks/logoutThunk";

export const useSignout: UseSignout = () => {
	const dispatch = useDispatch();
	const logout = useCallback(() => {
		dispatch(logoutThunk());
	}, [dispatch]);

	return { logout };
};

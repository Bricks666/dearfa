import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { logoutThunk } from "../Redux/Thunks/logoutThunk";

export const useLogout = () => {
	const dispatch = useDispatch();
	const logout = useCallback(() => {
		dispatch(logoutThunk());
	}, [dispatch]);

	return { logout };
};

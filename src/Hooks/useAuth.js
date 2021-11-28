import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authThunk } from "../Redux/Thunks/authThunk";
import { authSelectors } from "../Selectors";

export const useAuth = () => {
	const { login, userId } = useSelector(authSelectors.getAuth);
	const dispatch = useDispatch();
	const auth = useCallback(() => {
		dispatch(authThunk());
	}, [dispatch]);

	return { auth, login, userId };
};

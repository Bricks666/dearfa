import { useCallback } from "react";
import { useTypedDispatch, useTypedSelector } from ".";
import { authThunk } from "../Redux/Thunks/authThunk";
import { authSelectors } from "../Selectors";
import { UseAuth } from "../Types/Hooks";

export const useAuth: UseAuth = () => {
	const { login, userId } = useTypedSelector(authSelectors.getAuth);

	const dispatch = useTypedDispatch();

	const auth = useCallback(() => {
		dispatch(authThunk());
	}, [dispatch]);

	return { auth, login, userId };
};

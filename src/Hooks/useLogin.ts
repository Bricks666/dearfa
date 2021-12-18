import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../Redux/Thunks/loginThunk";

export const useLogin = () => {
	const dispatch = useDispatch();
	const login = useCallback(
		({ email, password, remember } /* , { restart }, setError */) => {
			dispatch(loginThunk(email, password, remember /* , restart, setError */));
		},
		[dispatch]
	);

	return { login };
};

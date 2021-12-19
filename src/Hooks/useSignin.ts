import { useCallback } from "react";
import { useTypedDispatch } from ".";
import { loginThunk } from "../Redux/Thunks/loginThunk";
import { UseSignin } from "../Types/Hooks";

export const useSignin: UseSignin = () => {
	const dispatch = useTypedDispatch();
	const signin = useCallback(
		({ email, password, remember } /* , { restart }, setError */) => {
			dispatch(loginThunk(email, password, remember /* , restart, setError */));
		},
		[dispatch]
	);

	return { signin };
};

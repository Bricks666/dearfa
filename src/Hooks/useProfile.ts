import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedDispatch, useTypedSelector } from ".";
import { loadUserThunk } from "../Redux/Thunks/loadUserThunk";
import { profileSelectors } from "../Selectors";
import { LoadUser, UseProfile } from "../Types/Hooks";

export const useProfile: UseProfile = () => {
	const user = useTypedSelector(profileSelectors.getProfile);

	const dispatch = useDispatch();

	useEffect(() => console.log("NEW DISPATCH"), [dispatch]);

	const loadUser: LoadUser = useCallback(
		(id) => {
			console.log("load");
			dispatch(loadUserThunk(id));
		},
		[dispatch]
	);

	return { user, loadUser };
};

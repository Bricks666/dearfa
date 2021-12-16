import { useCallback } from "react";
import { useTypedDispatch, useTypedSelector } from ".";
import { loadUserThunk } from "../Redux/Thunks/loadUserThunk";
import { profileSelectors } from "../Selectors";
import { LoadUser, UseUserProfile } from "../Types/Hooks";

export const useUserProfile: UseUserProfile = () => {
	const user = useTypedSelector(profileSelectors.getProfile);

	const dispatch = useTypedDispatch();

	const loadUser: LoadUser = useCallback(
		(id) => {
			dispatch(loadUserThunk(id));
		},
		[dispatch]
	);

	return { user, loadUser };
};

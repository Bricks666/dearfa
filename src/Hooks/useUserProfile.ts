import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserThunk } from "../Redux/Thunks/loadUserThunk";
import { profileSelectors } from "../Selectors";

export const useUserProfile = () => {
	const user = useSelector(profileSelectors.getProfile);

	const dispatch = useDispatch();

	const loadUser = useCallback(
		(id) => {
			dispatch(loadUserThunk(id));
		},
		[dispatch]
	);

	return { user, loadUser };
};

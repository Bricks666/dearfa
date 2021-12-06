import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateProfile as updateProfileThunk } from "../Redux/Thunks/updateProfile";

export const useUpdateProfile = () => {
	const dispatch = useDispatch();
	const updateProfile = useCallback(
		(newData) => {
			dispatch(updateProfileThunk(newData));
		},
		[dispatch]
	);

	return { updateProfile };
};

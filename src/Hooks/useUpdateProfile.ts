import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateProfileThunk } from "../Redux/Thunks/updateProfileThunk";

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

import { useCallback } from "react";
import { useTypedDispatch } from ".";
import { updateProfileThunk } from "../Redux/Thunks/updateProfileThunk";
import { UseUpdateProfile } from "../Types/Hooks";

export const useUpdateProfile: UseUpdateProfile = () => {
	const dispatch = useTypedDispatch();
	const updateProfile = useCallback(
		(newData) => {
			dispatch(updateProfileThunk(newData));
		},
		[dispatch]
	);

	return { updateProfile };
};

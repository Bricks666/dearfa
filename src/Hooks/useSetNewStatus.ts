import { useCallback } from "react";
import { useTypedDispatch } from ".";
import { setNewStatusThunk } from "../Redux/Thunks/setNewStatusThunk";
import { SetNewStatus, UseSetNewStatus } from "../Types/Hooks";

export const useSetNewStatus: UseSetNewStatus = () => {
	const dispatch = useTypedDispatch();
	const setNewStatus: SetNewStatus = useCallback(
		({ status }) => {
			dispatch(setNewStatusThunk(status));
		},
		[dispatch]
	);

	return { setNewStatus };
};

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setNewStatusThunk } from "../Redux/Thunks/setNewStatusThunk";

export const useSetNewStatus = () => {
	const dispatch = useDispatch();
	const setNewStatus = useCallback(
		({ status }) => {
			dispatch(setNewStatusThunk(status));
		},
		[dispatch]
	);

	return { setNewStatus };
};

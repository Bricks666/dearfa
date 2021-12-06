import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadMessagesThunk } from "../Redux/Thunks/loadMessagesThunk";

export const useLoadMessages = () => {
	const dispatch = useDispatch();
	const loadMessages = useCallback(
		(dialogId) => {
			dispatch(loadMessagesThunk(dialogId));
		},
		[dispatch]
	);
	return { loadMessages };
};

import { useCallback } from "react";
import { useTypedDispatch } from ".";
import { loadMessagesThunk } from "../Redux/Thunks/loadMessagesThunk";
import { UseLoadMessages } from "../Types/Hooks";

export const useLoadMessages: UseLoadMessages = (dialogId) => {
	const dispatch = useTypedDispatch();
	const loadMessages = useCallback(() => {
		dispatch(loadMessagesThunk(dialogId, 1));
	}, [dispatch, dialogId]);
	return { loadMessages };
};

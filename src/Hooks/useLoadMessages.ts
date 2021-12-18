import { useCallback } from "react";
import { useTypedDispatch } from ".";
import { loadMessagesThunk } from "../Redux/Thunks/loadMessagesThunk";
import { ID } from "../Types/Common";

export const useLoadMessages = (dialogId: ID) => {
	const dispatch = useTypedDispatch();
	const loadMessages = useCallback(() => {
		dispatch(loadMessagesThunk(dialogId, 1));
	}, [dispatch, dialogId]);
	return { loadMessages };
};

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { sendMessageThunk } from "../Redux/Thunks/sendMessageThunk";

export const useSendMessage = (dialogId) => {
	const dispatch = useDispatch();

	const sendMessage = useCallback(
		({ message }) => {
			dispatch(sendMessageThunk(dialogId, message));
		},
		[dispatch, dialogId]
	);

	return { sendMessage };
};

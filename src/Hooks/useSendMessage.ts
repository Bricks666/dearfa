import { useCallback } from "react";
import { useTypedDispatch } from ".";
import { sendMessageThunk } from "../Redux/Thunks/sendMessageThunk";
import { UseSendMessages } from "../Types/Hooks";

export const useSendMessage: UseSendMessages = (dialogId) => {
	const dispatch = useTypedDispatch();

	const sendMessage = useCallback(
		({ message }) => {

			dispatch(sendMessageThunk(dialogId, message));
		},
		[dispatch, dialogId]
	);

	return { sendMessage };
};

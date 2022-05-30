import {
	loadMessagesThunk,
	resetMessages,
	selectMessages,
} from "@/models/messages";
import { useEffect } from "react";
import { useTypedSelector } from ".";
import { useTypedDispatch } from "./useTypedDispatch";

export const useMessages = (dialogId: number, page = 1) => {
	const messages = useTypedSelector(selectMessages);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadMessagesThunk({ dialogId, page }));
	}, [dialogId, page, dispatch]);

	useEffect(() => {
		return () => {
			dispatch(resetMessages());
		};
	}, [dispatch, dialogId]);

	return messages;
};

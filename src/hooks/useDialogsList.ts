import {
	resetDialogs,
	loadDialogsThunk,
	selectDialogs,
} from "@/models/dialogs";
import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from ".";

export const useDialogs = () => {
	const dialogs = useTypedSelector(selectDialogs);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadDialogsThunk());
		return () => {
			dispatch(resetDialogs());
		};
	}, [dispatch]);

	return dialogs;
};

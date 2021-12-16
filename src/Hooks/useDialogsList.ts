import { useCallback } from "react";
import { useTypedDispatch, useTypedSelector } from ".";
import { loadDialogsThunk } from "../Redux/Thunks/loadDialogsThunk";
import { dialogsSelectors } from "../Selectors";
import { UseDialogsList } from "../Types/Hooks";

export const useDialogsList: UseDialogsList = () => {
	const dialogs = useTypedSelector(dialogsSelectors.getDialogs);
	const dispatch = useTypedDispatch();

	const loadDialogs = useCallback(() => {
		dispatch(loadDialogsThunk());
	}, [dispatch]);

	return { dialogs, loadDialogs };
};

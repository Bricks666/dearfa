import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDialogsThunk } from "../Redux/Thunks/loadDialogsThunk";
import { dialogsSelectors } from "../Selectors";

export const useDialogsList = () => {
	const dialogs = useSelector(dialogsSelectors.getDialogs);
	const dispatch = useDispatch();

	const loadDialogs = useCallback(() => {
		dispatch(loadDialogsThunk());
	}, [dispatch]);

	return { dialogs, loadDialogs };
};

import { useSelector } from "react-redux";
import { messagesSelectors } from "../Selectors";

export const useMessages = (dialogId) => {
	const messages = useSelector((state) =>
		messagesSelectors.getDialogMessages(state, dialogId)
	);

	return { messages };
};

import { useTypedSelector } from ".";
import { messagesSelectors } from "../Selectors";

export const useMessages = (dialogId) => {
	const messages = useTypedSelector((state) =>
		messagesSelectors.getDialogMessages(state, dialogId)
	);

	return { messages };
};

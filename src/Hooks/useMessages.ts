import { useTypedSelector } from ".";
import { messagesSelectors } from "../Selectors";
import { UseMessages } from "../Types/Hooks";

export const useMessages: UseMessages = (dialogId) => {
	const messages = useTypedSelector((state) =>
		messagesSelectors.getDialogMessages(state, dialogId)
	);

	return { messages };
};

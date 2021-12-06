import { useSelector } from "react-redux";
import { dialogsSelectors } from "../Selectors";

export const useCompanion = (dialogId) => {
	const currentDialog = useSelector((state) =>
		dialogsSelectors.getCurrentDialogs(state, dialogId)
	);

	const companion = {
		name: dialogsSelectors.getCompanionName(currentDialog),
		photo: dialogsSelectors.getCompanionPhoto(currentDialog),
		id: dialogsSelectors.getCompanionId(currentDialog),
		lastActive: dialogsSelectors.getCompanionLastActive(currentDialog),
	};

	return { companion };
};

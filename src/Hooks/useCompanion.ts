import { dialogsSelectors } from "../Selectors";
import { EmptyObject } from "../Types/Common";
import { ICompanion, UseCompanion } from "../Types/Hooks";
import { useTypedSelector } from "./useTypedSelector";

export const useCompanion: UseCompanion = (dialogId) => {
	const currentDialog = useTypedSelector((state) =>
		dialogsSelectors.getCurrentDialogs(state, dialogId)
	);
	let companion: ICompanion | EmptyObject = {};

	if (typeof currentDialog !== "undefined") {
		companion = {
			name: dialogsSelectors.getCompanionName(currentDialog),
			photo: dialogsSelectors.getCompanionPhoto(currentDialog),
			id: dialogsSelectors.getCompanionId(currentDialog),
			lastActive: dialogsSelectors.getCompanionLastActive(currentDialog),
		};
	}

	return { companion };
};

import { api } from "../../DAL/api";
import { startDialog } from "../Reducers/dialogsReducer";

export const startChatting = (userId) => {
	return async (dispatch) => {
		try {
			const { resultCode } = api.startChatting(userId);

			if (resultCode === 0) {
				dispatch(startDialog(userId));
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};

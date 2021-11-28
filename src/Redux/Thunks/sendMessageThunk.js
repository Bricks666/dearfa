import { api } from "../../DAL/api";
import { addMessage } from "../Reducers/messagesReducer";

export const sendMessageThunk = (userId, message) => {
	return async (dispatch) => {
		try {
			const {
				resultCode,
				data: { message: newMessage },
			} = await api.sendMessage(userId, message);

			if (resultCode === 0) {
				dispatch(addMessage(userId, newMessage));
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};

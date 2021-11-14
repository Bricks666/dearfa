import { api } from "../../DAL/api";
import { setMessages } from "../Reducers/messagesReducer";

export const loadMessages = (userId, page) => {
	return async (dispatch) => {
		try {
			const response = await api.getMessagesWith(+userId, page);
			console.log(response);
			dispatch(setMessages(+userId, response.items));
		} catch (e) {
			console.log(e.message);
		}
	};
};

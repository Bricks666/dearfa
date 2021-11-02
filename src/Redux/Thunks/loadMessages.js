import { api } from "../../DAL/api";
import { setMessages } from "../Reducers/dialogsReducer";

export const loadMessages = (userId, page) => {
	return async (dispatch) => {
		try {
			const response = await api.getMessagesWith(+userId, page);

			dispatch(setMessages(+userId, response.items));
		} catch (e) {
			console.log(e.message);
		}
	};
};

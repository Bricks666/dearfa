import { sendMessage } from "../../Api";
import { SendMessageThunk } from "../../Types/Redux";
import { setMessages } from "../Reducers/messagesReducer";

export const sendMessageThunk: SendMessageThunk = (userId, message) => {
	return async (dispatch) => {
		try {
			const {
				resultCode,
				data: { message: newMessage },
			} = await sendMessage(userId, message);

			if (resultCode === 0) {
				dispatch(setMessages(userId, [newMessage]));
			}
		} catch (e) {
			console.log(e);
		}
	};
};

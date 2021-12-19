import { sendMessage } from "../../Api";
import { SendMessageThunk } from "../../Types/Redux";
import { setMessages } from "../Reducers/messagesReducer";

export const sendMessageThunk: SendMessageThunk = (dialogId, message) => {
	return async (dispatch) => {
		try {

			const {
				resultCode,
				data: { message: newMessage },
			} = await sendMessage(dialogId, message);

			if (resultCode === 0) {
				dispatch(setMessages(dialogId, [newMessage]));
			}
		} catch (e) {
			console.log(e);
		}
	};
};

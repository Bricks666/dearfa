import { getMessages } from "../../Api";
import { LoadMessagesThunk } from "../../Types/Redux";
import {
	endLoadingMessages,
	startLoadingMessages,
} from "../Reducers/loadingsReducer";
import { setMessages } from "../Reducers/messagesReducer";

export const loadMessagesThunk: LoadMessagesThunk = (dialogId, page) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingMessages());
			const response = await getMessages(dialogId, page);
			console.log(response);
			dispatch(setMessages(dialogId, response.items));
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(endLoadingMessages());
		}
	};
};

import { initialState } from "../initialState";
import { inputMessageReducer } from "./MessageReducers/inputMessageReducer";
import { messageReducer } from "./MessageReducers/messageReducer";

export const chatsReducers = (state = initialState.chats, action) => {
	state = inputMessageReducer(state, action);
	state = messageReducer(state, action);

	return state;
};

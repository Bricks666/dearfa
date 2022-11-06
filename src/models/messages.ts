import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import { getMessagesApi, sendMessageApi } from '@/api';
import { DateType } from '@/interfaces/common';
import { Store } from '.';

export interface Message {
	readonly id: number;
	readonly body: string;
	readonly senderName: string;
	readonly senderId: number;
	readonly addedAt: DateType;
	readonly viewed: boolean;
}

export interface MessagesState {
	readonly isLoading: boolean;
	readonly list: Message[];
}

const initialState: MessagesState = {
	isLoading: false,
	list: [],
};

const messagesStore = createSlice({
	initialState,
	name: 'messages',
	reducers: {
		resetMessages: (state) => {
			Object.assign(state, initialState);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadMessagesThunk.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loadMessagesThunk.fulfilled, (state, { payload }) => {
				state.list = state.list.concat(payload);
				state.isLoading = false;
			})
			.addCase(loadMessagesThunk.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(sendMessageThunk.fulfilled, (state, { payload }) => {
				state.list.push(payload);
			});
	},
});

interface LoadMessagesParams {
	readonly dialogId: number;
	readonly page: number;
}

export const loadMessagesThunk = createAsyncThunk<
	Message[],
	LoadMessagesParams
>('messages/loadMessages', async ({ dialogId, page }) => {
	const response = await getMessagesApi(dialogId, page);
	return response.items;
});

interface SendMessageParams {
	readonly dialogId: number;
	readonly message: string;
}

export const sendMessageThunk = createAsyncThunk<Message, SendMessageParams>(
	'messages/sendMessage',
	async ({ dialogId, message }) => {
		const response = await sendMessageApi(dialogId, message);
		if (response.resultCode) {
			throw new Error(response.messages.join(', '));
		}
		return response.data;
	}
);

export default messagesStore.reducer;

export const { resetMessages } = messagesStore.actions;

const selfSelector = (state: Store) => state.messages;

export const selectMessages = createSelector(
	selfSelector,
	(state) => state.list
);

export const selectLoadingMessages = createSelector(
	selfSelector,
	(state) => state.isLoading
);

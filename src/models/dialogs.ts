import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from "@reduxjs/toolkit";
import { DateType, Photos } from "@/interfaces/common";
import { getDialogsApi } from "@/api";
import { Store } from ".";

export interface Dialog {
	readonly userName: string;
	readonly id: number;
	readonly photos: Photos;
	readonly lastUserActivityDate: DateType;
}

export interface DialogState {
	readonly list: Dialog[];
	readonly isLoading: boolean;
}

const initialState: DialogState = {
	isLoading: false,
	list: [],
};

const dialogsStore = createSlice({
	initialState,
	name: "dialogs",
	reducers: {
		resetDialogs: (state) => {
			Object.assign(state, initialState);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadDialogsThunk.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loadDialogsThunk.fulfilled, (state, { payload }) => {
				state.list = payload;
				state.isLoading = false;
			})
			.addCase(loadDialogsThunk.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const loadDialogsThunk = createAsyncThunk(
	"dialogs/loadDialogs",
	async () => {
		const response = await getDialogsApi();
		return response.data;
	}
);

export default dialogsStore.reducer;

export const { resetDialogs } = dialogsStore.actions;

const selfSelector = (state: Store) => state.dialogs;

export const selectDialogs = createSelector(
	selfSelector,
	(state) => state.list
);

export const selectLoadingDialogs = createSelector(
	selfSelector,
	(state) => state.isLoading
);

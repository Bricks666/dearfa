import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import { getFriendsApi } from '@/api';
import { ResponseWithItems } from '@/interfaces/responses';
import { Store } from '.';
import { unfollowUserThunk, User } from './users';

export interface FriendsState {
	readonly list: User[];
	readonly pageCount: number;
	readonly friendsCount: number;
	readonly totalCount: number;
	readonly isLoading: boolean;
}

const initialState: FriendsState = {
	list: [],
	friendsCount: 10,
	isLoading: false,
	pageCount: 0,
	totalCount: 0,
};

const friendsStore = createSlice({
	initialState,
	name: 'friends',
	reducers: {
		resetFriends: (state) => {
			Object.assign(state, initialState);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadFriendsThunk.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loadFriendsThunk.fulfilled, (state, { payload }) => {
				state.list = payload.items;
				state.totalCount = payload.totalCount;
				state.pageCount = Math.ceil(payload.items.length / state.friendsCount);
				state.isLoading = false;
			})
			.addCase(loadFriendsThunk.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(unfollowUserThunk.fulfilled, (state, { payload }) => {
				state.list = state.list.filter((user) => user.id !== payload);
			});
	},
});

interface LoadFriendsParams {
	readonly friendsCount: number;
	readonly currentPage: number;
}

export const loadFriendsThunk = createAsyncThunk<
	ResponseWithItems<User>,
	LoadFriendsParams
>('friends/loadFriends', async ({ currentPage, friendsCount }) => {
	const response = await getFriendsApi(friendsCount, currentPage);
	if (response.error) {
		throw new Error(response.error);
	}

	return response;
});

export default friendsStore.reducer;

export const { resetFriends } = friendsStore.actions;

const selfSelector = (state: Store) => state.friends;

export const selectFriends = createSelector(
	selfSelector,
	(state) => state.list
);

export const selectLoadingFriends = createSelector(
	selfSelector,
	(state) => state.isLoading
);

export const selectFriendsCount = createSelector(
	selfSelector,
	(state) => state.friendsCount
);

export const selectTotalCount = createSelector(
	selfSelector,
	(state) => state.totalCount
);

export const selectPageCount = createSelector(
	selfSelector,
	(state) => state.pageCount
);

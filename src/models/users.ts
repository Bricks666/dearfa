import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import { Photos, URL } from '@/interfaces/common';
import { ResponseWithItems } from '@/interfaces/responses';
import { followApi, getUsersApi, unfollowApi } from '@/api';
import { Store } from '.';

export interface User {
	readonly id: number;
	readonly name: string;
	readonly status: string;
	readonly photos: Photos;
	readonly followed: boolean;
	readonly uniqueUrlName: URL | null;
}

export interface UsersState {
	readonly list: User[];
	readonly isLoading: boolean;
	readonly totalUsers: number;
	readonly pageCount: number;
	readonly usersCount: number;
}

const initialState: UsersState = {
	list: [],
	totalUsers: 0,
	pageCount: 0,
	usersCount: 10,
	isLoading: false,
};

const usersStore = createSlice({
	initialState,
	name: 'users',
	reducers: {
		resetUsers: (state) => {
			Object.assign(state, initialState);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadUsersThunk.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loadUsersThunk.fulfilled, (state, { payload }) => {
				state.list = payload.items;
				state.pageCount = Math.ceil(payload.items.length / state.usersCount);
				state.totalUsers = payload.totalCount;
				state.isLoading = false;
			})
			.addCase(loadUsersThunk.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(followUserThunk.fulfilled, (state, { payload }) => {
				const user = state.list.find((user) => user.id === payload);
				if (user) {
					user.followed = true;
				}
			})
			.addCase(unfollowUserThunk.fulfilled, (state, { payload }) => {
				const user = state.list.find((user) => user.id === payload);
				if (user) {
					user.followed = false;
				}
			});
	},
});

interface LoadUsersParams {
	readonly usersCount: number;
	readonly page: number;
}

export const loadUsersThunk = createAsyncThunk<
	ResponseWithItems<User>,
	LoadUsersParams
>('users/loadUsers', async ({ usersCount, page }) => {
	return getUsersApi(usersCount, page);
});

export const followUserThunk = createAsyncThunk<number, number>(
	'users/follow',
	async (userId) => {
		const response = await followApi(userId);

		if (response.resultCode) {
			throw new Error(response.messages.join(', '));
		}

		return userId;
	}
);

export const unfollowUserThunk = createAsyncThunk<number, number>(
	'users/unfollow',
	async (userId) => {
		const response = await unfollowApi(userId);

		if (response.resultCode) {
			throw new Error(response.messages.join(', '));
		}

		return userId;
	}
);

export default usersStore.reducer;

export const { resetUsers } = usersStore.actions;

const selfSelector = (state: Store) => state.users;

export const selectUsers = createSelector(selfSelector, (state) => state.list);

export const selectLoadingUsers = createSelector(
	selfSelector,
	(state) => state.isLoading
);

export const selectUsersCount = createSelector(
	selfSelector,
	(state) => state.usersCount
);

export const selectTotalCount = createSelector(
	selfSelector,
	(state) => state.totalUsers
);

export const selectPageCount = createSelector(
	selfSelector,
	(state) => state.pageCount
);

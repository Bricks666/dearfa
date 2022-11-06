import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from '@reduxjs/toolkit';
import { getFriendsApi } from '@/api';
import { Store } from '.';
import { unfollowUserThunk, User } from './users';

export interface FavoriteFriendsState {
	readonly list: User[];
	readonly friendsCount: number;
	readonly isLoading: boolean;
}

const initialState: FavoriteFriendsState = {
	list: [],
	friendsCount: 0,
	isLoading: false,
};
const favoriteFriendsStore = createSlice({
	initialState,
	name: 'favoriteFriends',
	reducers: {
		resetFavoriteFriends: (state) => {
			Object.assign(state, initialState);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadFavoriteFriendsThunk.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loadFavoriteFriendsThunk.fulfilled, (state, { payload }) => {
				state.list = payload.items;
				state.friendsCount = payload.totalCount;
				state.isLoading = false;
			})
			.addCase(loadFavoriteFriendsThunk.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(unfollowUserThunk.fulfilled, (state, { payload }) => {
				state.list = state.list.filter((user) => user.id !== payload);
			});
	},
});

export const loadFavoriteFriendsThunk = createAsyncThunk(
	'favoriteFriends/loadFavoriteFriends',
	async () => {
		const response = await getFriendsApi(6, 1);
		if (response.error) {
			throw new Error(response.error);
		}

		return response;
	}
);

export default favoriteFriendsStore.reducer;

export const { resetFavoriteFriends } = favoriteFriendsStore.actions;

const selfSelector = (state: Store) => state.favoriteFriends;

export const selectFavoriteFriends = createSelector(
	selfSelector,
	(state) => state.list
);

export const selectLoadingFavoriteFriends = createSelector(
	selfSelector,
	(state) => state.isLoading
);

export const selectFavoriteFriendsCount = createSelector(
	selfSelector,
	(state) => state.friendsCount
);

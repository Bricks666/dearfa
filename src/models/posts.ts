import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ID } from '@/interfaces/common';
import { SetLoadingPayload } from '@/interfaces/models';
import { Store } from '.';

export interface Post {
	readonly id: ID;
	readonly date: Date;
	readonly authorId: number;
	readonly content: string;
	readonly like: Like;
}

export interface Like {
	readonly count: number;
	readonly liked: boolean;
}

export interface PostsState {
	readonly isLoading: boolean;
	readonly list: Post[];
}

interface SetPostsPayload {
	readonly posts: Post[];
}

interface ToggleLikePayload {
	readonly postId: number;
}

interface AddPostPayload {
	readonly post: Post;
}

const initialState: PostsState = {
	isLoading: false,
	list: [],
};

const postsStore = createSlice({
	initialState,
	name: 'posts',
	reducers: {
		setPosts: (state, { payload }: PayloadAction<SetPostsPayload>) => {
			state.list = payload.posts;
		},
		setPostsLoading: (state, { payload }: PayloadAction<SetLoadingPayload>) => {
			state.isLoading = payload.isLoading;
		},
		resetPosts: (state) => {
			Object.assign(state, initialState);
		},
		toggleLike: (state, { payload }: PayloadAction<ToggleLikePayload>) => {
			const post = state.list.find((post) => post.id === payload.postId);
			if (post) {
				post.like.count += post.like.liked ? -1 : 1;
				post.like.liked = !post.like.liked;
			}
		},
		addPost: (state, { payload }: PayloadAction<AddPostPayload>) => {
			state.list.push(payload.post);
		},
	},
});

export default postsStore.reducer;

export const { resetPosts, setPosts, setPostsLoading, addPost, toggleLike } =
	postsStore.actions;

const selfSelector = (state: Store) => state.posts;

export const selectPosts = createSelector(selfSelector, (state) => state.list);

export const selectLoadingPosts = createSelector(
	selfSelector,
	(state) => state.isLoading
);

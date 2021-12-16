import {
	IPost,
	PostsActions,
	PostsActionTypes,
	ToggleLikeAC,
	CreateLike,
} from "../../Types/Redux";
import { initialState } from "../initialState";

const createLike: CreateLike = (isLiked, prevCount) => {
	return {
		isLiked,
		count: prevCount + (isLiked ? 1 : -1),
	};
};

export default function reducer(
	state = initialState.posts,
	action: PostsActions
): IPost[] {
	switch (action.type) {
		case PostsActionTypes.TOGGLE_LIKE: {
			return state.map((post) => {
				if (post.id === action.payload.postId) {
					return {
						...post,
						like: createLike(!post.like.isLiked, post.like.count),
					};
				}
				return post;
			});
		}
		default: {
			return state;
		}
	}
}

export const toggleLike: ToggleLikeAC = (postId) => {
	return {
		type: PostsActionTypes.TOGGLE_LIKE,
		payload: {
			postId,
		},
	};
};

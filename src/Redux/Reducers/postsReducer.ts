import {
	IPost,
	PostsActions,
	PostsActionTypes,
	ToggleLikeAC,
	CreateLike,
} from "../../Types/Redux";
import { initialState } from "../initialState";

const createLike: CreateLike = (liked, prevCount) => {
	return {
		liked,
		count: prevCount + (liked ? 1 : -1),
	};
};

export default function reducer(
	state = initialState.posts,
	action: PostsActions
): IPost[] {
	if (action.type === PostsActionTypes.TOGGLE_LIKE) {
		return state.map((post) => {
			if (post.id === action.payload.postId) {
				return {
					...post,
					like: createLike(!post.like.liked, post.like.count),
				};
			}
			return post;
		});
	}

	return state;
}

export const toggleLike: ToggleLikeAC = (postId) => {
	return {
		type: PostsActionTypes.TOGGLE_LIKE,
		payload: {
			postId,
		},
	};
};

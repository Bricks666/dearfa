import { initialState } from "../initialState";

const TOGGLE_LIKE = "dearFa/posts/TOGGLE_LIKE";

const createLike = (isLiked, prevCount) => {
	return {
		isLiked,
		count: prevCount + (isLiked ? 1 : -1),
	};
};

export default function reducer(state = initialState.posts, action) {
	switch (action.type) {
		case TOGGLE_LIKE: {
			return {
				...state,
				list: [...state.list].map((post) => {
					if (post.id === action.payload.postId) {
						return {
							...post,
							like: createLike(!post.like.isLiked, post.like.count),
						};
					}
					return post;
				}),
			};
		}
		default: {
			return state;
		}
	}
}

export const toggleLike = (postId) => {
	return {
		type: TOGGLE_LIKE,
		payload: {
			postId,
		},
	};
};

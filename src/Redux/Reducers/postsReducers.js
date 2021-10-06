import { initialState } from "../initialState";
import { ADD_POST, INPUT_POST, LOGOUT, TOGGLE_LIKE } from "../ActionsConstants";

function createLike(isLiked, prevCount) {
	return {
		isLiked,
		count: prevCount + (isLiked ? 1 : -1),
	};
}

function createPost(id, content) {
	return {
		date: new Date(),
		authorId: 1,

		like: {
			count: 0,
			isLiked: false,
		},

		id,
		content,
	};
}

export const postsReducers = (state = initialState.posts, action) => {
	switch (action.type) {
	case TOGGLE_LIKE: {
		return {
			...state,
			list: [...state.list].map((post) => {
				if (post.id === action.postId) {
					return {
						...post,
						like: createLike(!post.like.isLiked, post.like.count),
					};
				}
				return post;
			}),
		};
	}
	case ADD_POST: {
		const content = state.newPostContent;
		if (Boolean(content) === false || Boolean(content.text) === false) {
			return state;
		}
		const newPost = createPost(state.list.length + 1, content);
		const newState = {
			...state,
			list: [newPost, ...state.list],
			newPostContent: null,
		};
		return newState;
	}
	case INPUT_POST: {
		if (Boolean(state.newPostContent) === false && action.text === " ") {
			return state;
		}
		const newState = {
			...state,
			newPostContent: { ...state.newPostContent },
		};
		newState.newPostContent.text = action.text;
		return newState;
	}
	case LOGOUT: {
		return initialState.posts;
	}
	default: {
		return state;
	}
	}
};

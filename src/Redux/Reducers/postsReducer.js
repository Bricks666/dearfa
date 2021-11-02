import { initialState } from "../initialState";
import { LOGOUT } from "./loginReducer";

const ADD_POST = "dearFa/posts/ADD_POST";
const INPUT_POST = "dearFa/posts/INPUT_POST";
const TOGGLE_LIKE = "dearFa/posts/TOGGLE_LIKE";

const createLike = (isLiked, prevCount) => {
	return {
		isLiked,
		count: prevCount + (isLiked ? 1 : -1),
	};
};

const createPost = (id, content) => {
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
			newState.newPostContent.text = action.payload.text;
			return newState;
		}
		case LOGOUT: {
			return initialState.posts;
		}
		default: {
			return state;
		}
	}
}

export const addPost = () => {
	return {
		type: ADD_POST,
	};
};

export const inputPost = (text) => {
	return {
		type: INPUT_POST,
		payload: {
			text,
		},
	};
};

export const toggleLike = (postId) => {
	return {
		type: TOGGLE_LIKE,
		payload: {
			postId,
		},
	};
};

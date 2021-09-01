import { ADD_POST } from "../../Constants";

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

export const postReducer = (state, action) => {
  if (action.type === ADD_POST) {
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
  return state;
};

import { ADD_POST } from "../Constants";

/* CREATE POST */

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
    const newState = Object.assign({}, state);

    const content = newState.newPostContent;

    if (content === undefined || content.text === undefined) {
      return state;
    }

    const newPost = createPost(newState.list.length, content);

    newState.list.unshift(newPost);

    return newState;
  }
  return state;
};

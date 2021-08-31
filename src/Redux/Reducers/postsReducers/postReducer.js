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
    debugger;
    const content = state.newPostContent;

    if (content === undefined || content.text === undefined) {
      return state;
    }

    const newPost = createPost(state.list.length + 1, content);

    const newState = {
      ...state,
      newPostContent: {},
      list: [newPost, ...state.list],
    };

    return newState;
  }
  return state;
};

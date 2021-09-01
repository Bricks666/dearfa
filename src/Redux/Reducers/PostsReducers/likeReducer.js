import { TOGGLE_LIKE } from "../../Constants";



/* CREATE LIKE OBJECT */

function createLike(isLiked, prevCount) {
  return {
    isLiked,
    count: prevCount + (isLiked ? 1 : -1),
  };
}

export const likeReducer = (state, action) => {
  if (action.type === TOGGLE_LIKE) {

    const newState = {
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

    return newState;
  }
  return state;
};

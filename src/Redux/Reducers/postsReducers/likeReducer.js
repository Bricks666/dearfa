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
    const newState = Object.assign({}, state);

    const targetPost = newState.list.find((post) => post.id === action.postId);

    targetPost.like = createLike(
      !targetPost.like.isLiked,
      targetPost.like.count
    );

    return newState;
  }
  return state;
};

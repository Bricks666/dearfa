import { TOGGLE_LIKE } from "./Constants";

export const toggleLikeActionCreator = (postId) => {
  return {
    type: TOGGLE_LIKE,
    postId,
  };
};

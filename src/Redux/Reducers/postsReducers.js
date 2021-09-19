import { likeReducer } from "./PostsReducers/likeReducer";
import { postReducer } from "./PostsReducers/postReducer";
import { inputPostReducer } from "./PostsReducers/inputPostReducer";
import { initialState } from "../initialState";

export const postsReducers = (state = initialState.posts, action) => {
  state = likeReducer(state, action);
  state = postReducer(state, action);
  state = inputPostReducer(state, action);
  return state;
};

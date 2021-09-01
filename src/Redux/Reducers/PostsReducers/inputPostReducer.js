import { INPUT_POST } from "../../Constants";

export const inputPostReducer = (state, action) => {
  if (action.type === INPUT_POST) {
    if (Boolean(state.newPostContent) === false && action.text === " ") {
      return state;
    }

    const newState = { ...state, newPostContent: { ...state.newPostContent } };

    newState.newPostContent.text = action.text;

    return newState;
  }

  return state;
};

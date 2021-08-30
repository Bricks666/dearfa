import { INPUT_POST } from "../../Constants";

import { deepCopy } from "../../deepCopy";

export const inputPostReducer = (state, action) => {
  if (action.type === INPUT_POST) {
    const newState = deepCopy(state);

    if (newState.newPostContent === undefined) {
      newState.newPostContent = {};
    }

    newState.newPostContent.text = action.content;

    return newState;
  }

  return state;
};

import { INPUT_POST } from "../../Constants";



export const inputPostReducer = (state, action) => {
  if (action.type === INPUT_POST) {

    const newState = { ...state, newPostContent: { ...state.newPostContent } };

    newState.newPostContent.text = action.content;

    return newState;
  }

  return state;
};

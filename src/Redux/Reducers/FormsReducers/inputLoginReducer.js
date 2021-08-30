import { INPUT_LOGIN } from "../../Constants";

export const inputLoginReducer = (state, action) => {
  if (action.type === INPUT_LOGIN) {
    debugger;
    const newState = Object.assign([], state);

    const targetField = newState.find((el) => el.content === action.name);

    targetField.value = action.text;

    return newState;
  }

  return state;
};

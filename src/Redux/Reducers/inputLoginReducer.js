import { INPUT_LOGIN } from "../Constants";

export const inputLoginReducer = (state, action) => {
  if (action.type === INPUT_LOGIN) {
    const newState = Object.assign([], state);

    const targetField = newState.find((el) => el.content === action.name);

    targetField.value = action.value;

    return newState;
  }

  return state;
};

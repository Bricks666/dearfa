import { INPUT_REG } from "../../Constants";
import { deepCopy } from "../../deepCopy";

export const inputRegReducer = (state, action) => {
  if (action.type === INPUT_REG) {
    const newState = deepCopy(state);

    const targetField = newState.find((el) => el.content === action.name);

    targetField.value = action.text;

    return newState;
  }

  return state;
};

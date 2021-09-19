import { inputRegReducer } from "./FormsReducers/inputRegReducer";
import { initialState } from "../initialState";

export const registrationReducers = (
  state = initialState.registrationFields,
  action
) => {
  state = inputRegReducer(state, action);

  return state;
};

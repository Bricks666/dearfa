import { inputLoginReducer } from "./FormsReducers/inputLoginReducer";
import { initialState } from "../initialState";

export const loginReducers = (state = initialState.loginFields, action) => {
  state = inputLoginReducer(state, action);

  return state;
};

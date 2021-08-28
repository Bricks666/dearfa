import { inputLoginReducer } from "./FormsReducers/inputLoginReducer";

const initialState = [
  {
    type: "text",
    content: "Логин",
    value: "",
    required: true,
    autoComplete: true,
  },
  {
    type: "password",
    content: "Пароль",
    value: "",
    required: true,
    autoComplete: true,
  },
  {
    type: "checkbox",
    content: "Запомнить меня",
    value: false,
    required: false,
    autoComplete: false,
  },
  {
    type: "button",
    content: "Войти",
    value: "",
    required: false,
    autoComplete: false,
  },
];

export const loginReducers = (state = initialState, action) => {
  state = inputLoginReducer(state, action);

  return state;
};

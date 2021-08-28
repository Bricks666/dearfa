import { inputRegReducer } from "./FormsReducers/inputRegReducer";

const initialState = [
  {
    type: "text",
    content: "Имя",
    value: "",
    required: true,
    autoComplete: false,
  },
  {
    type: "text",
    content: "Фамилия",
    value: "",
    required: true,
    autoComplete: false,
  },
  {
    type: "tel",
    content: "Номер телефона",
    value: "",
    required: false,
    autoComplete: false,
  },
  {
    type: "email",
    content: "Email",
    value: "",
    required: true,
    autoComplete: false,
  },
  {
    type: "password",
    content: "Пароль",
    value: "",
    required: true,
    autoComplete: false,
  },
  {
    type: "password",
    content: "Повторите пароль",
    value: "",
    required: true,
    autoComplete: false,
  },
  {
    type: "button",
    content: "Зарегистрироваться",
    value: "",
    required: false,
    autoComplete: false,
  },
];

export const registrationReducers = (state = initialState, action) => {
  state = inputRegReducer(state, action);

  return state;
};

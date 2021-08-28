import { inputMessageReducer } from "./messageReducers/inputMessageReducer";
import { messageReducer } from "./messageReducers/messageReducer";

const initialState = [
  {
    id: 2,
    messages: [
      {
        id: 1,
        authorId: 1,
        content: { text: "sdfsdff" },
      },
      {
        id: 2,
        authorId: 2,
        content: { text: "Смотри что могу" },
      },
      {
        id: 3,
        authorId: 2,
        content: {
          text: "Крокодилы танцуют на песке, будто ты попросил их там побыть",
        },
      },
      {
        id: 4,
        authorId: 1,
        content: { text: "Я тоже так могу" },
      },
    ],
  },
];

export const chatsReducers = (state = initialState, action) => {
  state = inputMessageReducer(state, action);
  state = messageReducer(state, action);

  return state;
};

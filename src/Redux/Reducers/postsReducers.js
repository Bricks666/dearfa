import { likeReducer } from "./postsReducers/likeReducer";
import { postReducer } from "./postsReducers/postReducer";
import { inputPostReducer } from "./postsReducers/inputPostReducer";

const initialState = {
  list: [
    {
      id: 1,
      date: new Date(),
      authorId: 1,
      content: {
        text: "Мы пришли за мандаринами, а что нужно тебе в такой прекрасный день для единорогопада?",
      },
      like: {
        count: 175,
        isLiked: false,
      },
    },
    {
      id: 2,
      date: new Date("2021-05-04T15:02:00"),
      authorId: 1,
      content: { text: "Магия ВК" },
      like: {
        count: 37,
        isLiked: true,
      },
    },
    {
      id: 3,
      date: new Date("2021-03-20T15:02:00"),
      authorId: 1,
      content: { text: "Как ты думаешь, мы хотим спать?" },
      like: {
        count: 15,
        isLiked: true,
      },
    },
  ],
};

export const postsReducers = (state = initialState, action) => {
  state = state.constructor(...likeReducer(state, action));
  state = state.constructor(...postReducer(state, action));
  state = state.constructor(...inputPostReducer(state, action));
  return state;
};

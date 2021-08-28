const initialState = [
  {
    path: "/profile/1",
    content: "Профиль",
  },
  {
    path: "/dialogs",
    content: "Сообщения",
  },
  {
    path: "/friends",
    content: "Друзья",
  },
  {
    path: "/news",
    content: "Новости",
  },
  {
    path: "/music",
    content: "Музыка",
  },
  {
    path: "/settings",
    content: "Настройки",
  },
];

export const navigationReducers = (state = initialState, action) => {
  return state;
};

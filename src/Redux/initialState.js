export const initialState = {
  profile: {
    userId: 0,
    fullName: "",
    photos: {
      large: "/Images/Ava/Cosmic-animals",
      alt: "Аватарка...",
    },
    contacts: {},
    followed: false,
    isLoading: false,
  },
  auth: {
    userId: null,
    fullName: null,
    photos: {
      large: "/Images/Ava/Cosmic-animals",
      alt: "Аватарка...",
    },
    contacts: {},
    followed: false,
    isLoading: false,
    isLoaded: false,
    isLogin: false,
  },
  /* Решить то, как грамотно отображать свою и чужие страницы */
  chats: [
    {
      id: 2,
      messages: [
        {
          id: 1,
          authorId: 1,
          content: { text: "Привет" },
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
  ],
  users: {
    list: [],
    totalUsers: 0,
    pageCount: 0,
    currentPage: 1,
    usersCount: 10,
    isLoading: false,
  },

  posts: {
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
  },
  loginFields: [
    {
      type: "text",
      content: "Логин",
      value: "",
      required: true,
      autoComplete: true,
      id: 1,
    },
    {
      type: "password",
      content: "Пароль",
      value: "",
      required: true,
      autoComplete: true,
      id: 2,
    },
    {
      type: "checkbox",
      content: "Запомнить меня",
      value: false,
      required: false,
      autoComplete: false,
      id: 3,
    },
    {
      type: "button",
      content: "Войти",
      value: "",
      required: false,
      autoComplete: false,
      id: 4,
    },
  ],
  registrationFields: [
    {
      type: "text",
      content: "Имя",
      value: "",
      required: true,
      autoComplete: false,
      id: 1,
    },
    {
      type: "text",
      content: "Фамилия",
      value: "",
      required: true,
      autoComplete: false,
      id: 2,
    },
    {
      type: "tel",
      content: "Номер телефона",
      value: "",
      required: false,
      autoComplete: false,
      id: 3,
    },
    {
      type: "email",
      content: "Email",
      value: "",
      required: true,
      autoComplete: false,
      id: 4,
    },
    {
      type: "password",
      content: "Пароль",
      value: "",
      required: true,
      autoComplete: false,
      id: 5,
    },
    {
      type: "password",
      content: "Повторите пароль",
      value: "",
      required: true,
      autoComplete: false,
      id: 6,
    },
    {
      type: "button",
      content: "Зарегистрироваться",
      value: "",
      required: false,
      autoComplete: false,
      id: 7,
    },
  ],
  navigation: [
    {
      path: "/profile",
      content: "Профиль",
      exact: true,
      id: 1,
    },
    {
      path: "/dialogs",
      content: "Сообщения",
      id: 2,
    },
    {
      path: "/friends",
      content: "Друзья",
      id: 3,
    },
    {
      path: "/news",
      content: "Новости",
      id: 4,
    },
    {
      path: "/music",
      content: "Музыка",
      id: 5,
    },
    {
      path: "/users",
      content: "Пользователи",
      exact: true,
      id: 6,
    },
    {
      path: "/settings",
      content: "Настройки",
      id: 7,
    },
  ],
};

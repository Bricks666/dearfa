export const initialState = {
  user: {
    id: 1,
    fullName: "Кирилл Цыганков",
    avatar: {
      url: "/Images/Ava/Cosmic-animals",
      alt: "Аватарка...",
    },
    about: [
      { term: "Дата рождения", description: "17.09.2004" },
      {
        term: "Город",
        description: "Калуга",
        href: "https://ru.wikipedia.org/wiki/Калуга",
      },
      {
        term: "Учебное заведение",
        description: "Калужский техникум электронных приборов",
        href: "https://ktep40.ru",
      },
      { term: "Сайт", description: "Пусто" },
    ],
  },
  profile: {
    backgroundPhoto: {
      url: "/Images/ProfileBackground/SunSet",
      alt: "Ваш фон...",
    },
  },
  chats: [
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
  ],
  friends: [
    {
      info: {
        id: 2,
        fullName: "Антонина",
        avatar: {
          url: "/Images/ProfileBackground/SunSet",
        },
        about: [
          { term: "Дата рождения", description: "12.10.2000" },
          {
            term: "Сайт",
            description: "Wikipedia",
            href: "https://ru.wikipedia.com",
          },
        ],
      },
      profile: {
        backgroundPhoto: {
          url: "/Images/ProfileBackground/SunSet",
          alt: "Ваш фон...",
        },
      },
      chats: [],
      friends: [],
      posts: [],
    },
  ],
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
  ],
  registrationFields: [
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
  ],
  navigation: [
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
  ],
};

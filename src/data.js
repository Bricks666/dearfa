const data = new Map();
data
  .set(1, {
    info: {
      id: 1,
      fullName: "Кирилл Цыганков",
      avatar: {
        url: "/Images/Ava/Cosmic-animals",
        alt: "Аватарка...",
      },
      backgroundPhoto: {
        url: "/Images/ProfileBackground/SunSet",
        alt: "Ваш фон...",
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
    chats: [
      {
        id: 2,
        messages: [
          { id: 1, message: "sdfsdff" },
          { id: 2, message: "Смотри что могу" },
          {
            id: 2,
            message:
              "Крокодилы танцуют на песке, будто ты попросил их там побыть",
          },
          { id: 1, message: "Я тоже так могу" },
        ],
      },
    ],
    friends: [
      {
        id: 2,
        getInfo() {
          return data.get(this.id).info;
        },
      },
    ],
    posts: [
      {
        id: 1,
        date: new Date(),
        authorId: 1,
        get author() {
          return data.get(this.authorId)?.info;
        },
        content:
          "Мы пришли за мандаринами, а что нужно тебе в такой прекрасный день для единорогопада?",
        like: {
          count: 175,
          isLiked: false,
        },
      },
      {
        id: 2,
        date: new Date("2021-05-04T15:02:00"),
        authorId: 1,
        get author() {
          return data.get(this.authorId)?.info;
        },
        content: "Магия ВК",
        like: {
          count: 37,
          isLiked: true,
        },
      },
      {
        id: 4,
        date: new Date("2021-03-20T15:02:00"),
        authorId: 1,
        get author() {
          return data.get(this.authorId)?.info;
        },
        content: "Как ты думаешь, мы хотим спать?",
        like: {
          count: 15,
          isLiked: true,
        },
      },
    ],
  })
  .set(2, {
    info: {
      id: 2,
      fullName: "Фридрих Фон Ниц",
      avatar: {
        url: "/Images/Ava/Cosmic-animals",
        alt: "Аватарка...",
      },
      backgroundPhoto: {
        url: "/Images/ProfileBackground/SunSet",
        alt: "Ваш фон...",
      },
      about: [
        { term: "Дата рождения", description: "12.12.2000" },
        {
          term: "Город",
          description: "Калуга",
          href: "https://ru.wikipedia.org/wiki/Калуга",
        },
        {
          term: "Сайт",
          description: "Wikipedia",
          href: "https://wikipedia.com",
        },
      ],
    },
    chats: [
      {
        id: 1,
        messages: [
          { id: 1, message: "sdfsdff" },
          { id: 2, message: "Смотри что могу" },
          {
            id: 2,
            message:
              "Крокодилы танцуют на песке, будто ты попросил их там побыть",
          },
          { id: 1, message: "Я тоже так могу" },
        ],
      },
    ],
    friends: [
      {
        id: 1,
        getInfo() {
          return data.get(this.id).info;
        },
      },
    ],
    posts: [
      {
        id: 154,
        date: new Date(),
        authorId: 5,
        get author() {
          return data.get(this.authorId)?.info;
        },
        content:
          "Мы пришли за мандаринами, а что нужно тебе в такой прекрасный день для единорогопада?",
        like: {
          count: 175,
          isLiked: false,
        },
      },
    ],
  })
  .set(156, {
    info: {
      id: 156,
      fullName: "Антонина",
      avatar: {
        url: "/Images/ProfileBackground/SunSet",
      },
      backgroundPhoto: {
        url: "/Images/ProfileBackground/SunSet",
        alt: "Ваш фон...",
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
    chats: [],
    friends: [],
    posts: [],
  })
  .set(156455, {
    info: {
      id: 156455,
      fullName: "Кеша",
      avatar: {
        url: "/Images/ProfileBackground/SunSet",
      },
      backgroundPhoto: {
        url: "/Images/ProfileBackground/SunSet",
        alt: "Ваш фон...",
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
    chats: [],
    friends: [],
    posts: [],
  })
  .set(5, {
    info: {
      id: 5,
      fullName: "Максим",
      avatar: {
        url: "/Images/ProfileBackground/SunSet",
        alt: "asd",
      },
      backgroundPhoto: {
        url: "/Images/ProfileBackground/SunSet",
        alt: "Ваш фон...",
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
    chats: [],
    friends: [],
    posts: [],
  });

export { data };

const initialState = {
  info: {
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
};

export const profileReducers = (state = initialState, action) => {
  return state;
};

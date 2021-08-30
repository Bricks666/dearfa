const initialState = {
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
};

export const userReducers = (state = initialState, action) => {
  return state;
};

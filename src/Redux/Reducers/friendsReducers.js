import { unfollowUserReducer } from "./FriendReducers/unfollowUserReducer";

const initialState = [
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
];

export const friendsReducers = (state = initialState, action) => {
  state = unfollowUserReducer(state, action);

  return state;
};

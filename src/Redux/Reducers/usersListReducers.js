import { followUserReducer } from "./UsersReducers/followUserReducer";
import { setUsersReducer } from "./UsersReducers/setUsers";
import { unfollowUserReducer } from "./UsersReducers/unfollowUserReducer";

const initialState = [
  {
    info: {
      id: 2,
      fullName: "Антонина",
      avatar: {
        url: "/Images/ProfileBackground/SunSet",
      },
      about: [
        { term: "Дата рождения", description: "12.10.2000", id: 1 },
        {
          term: "Сайт",
          description: "Wikipedia",
          href: "https://ru.wikipedia.com",
          id: 2,
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
  {
    info: {
      id: 3,
      fullName: "Антонина",
      avatar: {
        url: "/Images/ProfileBackground/SunSet",
      },
      about: [
        { term: "Дата рождения", description: "12.10.2000", id: 1 },
        {
          term: "Сайт",
          description: "Wikipedia",
          href: "https://ru.wikipedia.com",
          id: 2,
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
  {
    info: {
      id: 4,
      fullName: "Антонина",
      avatar: {
        url: "/Images/ProfileBackground/SunSet",
      },
      about: [
        { term: "Дата рождения", description: "12.10.2000", id: 1 },
        {
          term: "Сайт",
          description: "Wikipedia",
          href: "https://ru.wikipedia.com",
          id: 2,
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
  {
    info: {
      id: 5,
      fullName: "Антонина",
      avatar: {
        url: "/Images/ProfileBackground/SunSet",
      },
      about: [
        { term: "Дата рождения", description: "12.10.2000", id: 1 },
        {
          term: "Сайт",
          description: "Wikipedia",
          href: "https://ru.wikipedia.com",
          id: 2,
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

export const usersListReducers = (state = initialState, action) => {
  state = followUserReducer(state, action);
  state = unfollowUserReducer(state, action);
  state = setUsersReducer(state, action);

  return state;
};

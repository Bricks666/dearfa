import * as CONSTS from "./Constants";
import { inputMessageReducer } from "./Reducers/inputMessageReducer";
import { inputPostReducer } from "./Reducers/inputPostReducer";
import { likeReducer } from "./Reducers/likeReducer";
import { messageReducer } from "./Reducers/messageReducer";
import { postReducer } from "./Reducers/postReducer";
import { removeFriendReducer } from "./Reducers/removeFriendReducer";

const store = {
  /* STATE */
  _state: {
    users: {
      1: {
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
        friendsId: [2, 5, 156455, 156],
      },
      2: {
        info: {
          id: 2,
          fullName: "Фридрих Фон Ниц",
          avatar: {
            url: "/Images/Ava/Cosmic-animals",
            alt: "Аватарка...",
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
        profile: {
          backgroundPhoto: {
            url: "/Images/ProfileBackground/SunSet",
            alt: "Ваш фон...",
          },
        },
        chats: [
          {
            id: 1,
            messages: [
              { id: 1, content: { text: "sdfsdff" } },
              { id: 2, content: { text: "Смотри что могу" } },
              {
                id: 2,
                content: {
                  text: "Крокодилы танцуют на песке, будто ты попросил их там побыть",
                },
              },
              { id: 1, content: { text: "Я тоже так могу" } },
            ],
          },
        ],
        friendsId: [1],
        posts: [
          {
            id: 154,
            date: new Date(),
            authorId: 1,
            content:
              "Мы пришли за мандаринами, а что нужно тебе в такой прекрасный день для единорогопада?",
            like: {
              count: 175,
              isLiked: false,
            },
          },
        ],
      },
      156: {
        info: {
          id: 156,
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
        friendsId: [],
        posts: [],
      },
      156455: {
        info: {
          id: 156455,
          fullName: "Кеша",
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
        friendsId: [],
        posts: [],
      },
      5: {
        info: {
          id: 5,
          fullName: "Максим",
          avatar: {
            url: "/Images/ProfileBackground/SunSet",
            alt: "asd",
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
        friendsId: [],
        posts: [],
      },
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
        required: true,
        autoComplete: true,
      },
      {
        type: "password",
        content: "Пароль",
        required: true,
        autoComplete: true,
      },
    ],
    registrationFields: [
      {
        type: "text",
        content: "Имя",
        required: true,
        autoComplete: false,
      },
      {
        type: "text",
        content: "Фамилия",
        required: true,
        autoComplete: false,
      },
      {
        type: "tel",
        content: "Номер телефона",
        required: false,
        autoComplete: false,
      },
      {
        type: "email",
        content: "Email",
        required: true,
        autoComplete: false,
      },
      {
        type: "password",
        content: "Пароль",
        required: true,
        autoComplete: false,
      },
      {
        type: "password",
        content: "Повторите пароль",
        required: true,
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
    stateFields: new Map(),
  },

  /* PROTECTED METHODS */

  /* GET STATE FIELD */

  _getStateField(fieldName) {
    return this.getState().stateFields.get(fieldName);
  },

  /* GET FIELD STATE */

  _getField(fieldName) {
    if (this._getStateField(fieldName) === undefined) {
      this.getState().stateFields.set(fieldName, { value: "" });
    }

    return this._getStateField(fieldName);
  },

  /* CLEAR FIELD */

  _clearField(fieldName) {
    const state = Object.assign({}, this._getStateField(fieldName));

    state.value = "";

    this.getState().stateFields.set(fieldName, state);
  },

  /* GET USER INFO */

  _getUserInfo(id) {
    return this.getState().users[id]?.info;
  },

  /* TOGGLE LIKE */

  _toggleLike(postId) {},

  /* ENTER WORDS */

  _enterWords(value, fieldName) {
    const state = Object.assign({}, this._getField(fieldName));

    if (state.value === "" && value === " ") {
      return;
    }

    state.value = value;

    this.getState().stateFields.set(fieldName, state);

    this._callSubscriber(this);
  },

  /* PUBLIC METHODS */

  /* GET STATE */

  getState() {
    return this._state;
  },

  /* SUBSCRIBE */

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  /* DISPATCH */
  /* Action - объект, который обязательно содержит поле type */
  dispatch(action) {
    this._state.users[1].chats = messageReducer(
      this.getState().users[1].chats,
      action
    );

    this._state.users[1].chats = inputMessageReducer(
      this.getState().users[1].chats,
      action
    );

    this._state.posts = likeReducer(this.getState().posts, action);

    this._state.posts = postReducer(this.getState().posts, action);

    this._state.posts = inputPostReducer(this.getState().posts, action);

    this._state.users[1].friendsId = removeFriendReducer(
      this.getState().users[1].friendsId,
      action
    );

    switch (action.type) {
      case CONSTS.PRINT_WORD:
        return this._enterWords(action.value, action.fieldName);
      case CONSTS.GET_USER_INFO:
        return this._getUserInfo(action.id);
    }

    this._callSubscriber(this);
  },
};

store.dispatch = store.dispatch.bind(store);

export { store };

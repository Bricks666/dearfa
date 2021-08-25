import * as CONSTS from "./Constants";

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
                message: "sdfsdff",
              },
              {
                id: 2,
                authorId: 2,
                message: "Смотри что могу",
              },
              {
                id: 3,
                authorId: 2,
                message:
                  "Крокодилы танцуют на песке, будто ты попросил их там побыть",
              },
              {
                id: 4,
                authorId: 1,
                message: "Я тоже так могу",
              },
            ],
          },
        ],
        friends: [
          {
            id: 2,
          },
        ],
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
          },
        ],
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
      3: {
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
        friends: [],
        posts: [],
      },
      4: {
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
        friends: [],
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
        friends: [],
        posts: [],
      },
    },
    posts: [
      {
        id: 1,
        date: new Date(),
        authorId: 1,
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
        content: "Магия ВК",
        like: {
          count: 37,
          isLiked: true,
        },
      },
      {
        id: 3,
        date: new Date("2021-03-20T15:02:00"),
        authorId: 1,
        content: "Как ты думаешь, мы хотим спать?",
        like: {
          count: 15,
          isLiked: true,
        },
      },
    ],
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

  /* CREATE LIKE OBJECT */

  _createLike(isLiked, prevCount) {
    return {
      isLiked,
      count: prevCount + (isLiked ? 1 : -1),
    };
  },

  /* GET FIELD STATE */

  _getField(fieldName) {
    if (this._getStateField(fieldName) === undefined) {
      this.getState().stateFields.set(fieldName, { value: "" });
    }

    return this._getStateField(fieldName);
  },

  /* CREATE POST */

  _createPost(content) {
    const currentThis = this;
    return {
      id: currentThis.getState().posts.length + 1,
      date: new Date(),
      authorId: 1,

      like: {
        count: 0,
        isLiked: false,
      },

      content: content,
    };
  },

  /* CLEAR FIELD */

  _clearField(fieldName) {
    const state = Object.assign({}, this._getStateField(fieldName));

    state.value = "";

    this.getState().stateFields.set(fieldName, state);
  },

  /* CREATE MESSAGE */
  _createMessage(content) {
    const currentThis = this;

    return {
      authorId: 1,

      id: currentThis.getState().users[1].chats[0].messages.length + 1,

      message: content,
    };
  },

  /* GET USER INFO */

  _getUserInfo(id) {
    return this.getState().users[id]?.info;
  },

  /* TOGGLE LIKE */

  _toggleLike(postId) {
    const currentPost = this.getState().posts.find((el) => el.id === postId);

    currentPost.like = this._createLike(
      !currentPost.like.isLiked,
      currentPost.like.count
    );

    this._rerender(this);
  },

  /* ENTER WORDS */

  _enterWords(value, fieldName) {
    const state = Object.assign({}, this._getField(fieldName));

    if (state.value === "" && value === " ") {
      return;
    }

    state.value = value;

    this.getState().stateFields.set(fieldName, state);

    this._rerender(this);
  },

  /* ADD POST */

  _addPost(fieldName) {
    const value = Object.assign(
      {},
      this.getState().stateFields.get(fieldName)
    ).value;

    if (value === "" || value === undefined) {
      return;
    }

    const newPost = this._createPost(value);

    this.getState().posts.unshift(newPost);

    this._clearField(fieldName);

    this._rerender(this);
  },

  /* ADD MESSAGE */

  _addMessage(fieldName) {
    const value = this._getStateField(fieldName).value;

    if (value === "" || value === undefined) {
      return;
    }

    const chat = this.getState().users[1].chats[0];

    if (chat.messages === undefined) {
      chat.messages = [];
    }

    const newMessage = this._createMessage(value);

    chat.messages.push(newMessage);

    this._clearField(fieldName);

    this._rerender(this);
  },

  /* PUBLIC METHODS */

  /* GET STATE */

  getState() {
    return this._state;
  },

  /* SUBSCRIBE */

  subscribe(observer) {
    this._rerender = observer;
  },

  /* DISPATCH */
  /* Action - объект, который обязательно содержит поле type */
  dispatch(action) {
    switch (action.type) {
      case CONSTS.PRINT_WORD:
        return this._enterWords(action.value, action.fieldName);
      case CONSTS.ADD_POST:
        return this._addPost(action.fieldName);
      case CONSTS.ADD_MESSAGE:
        return this._addMessage(action.fieldName);
      case CONSTS.GET_USER_INFO:
        return this._getUserInfo(action.id);
      case CONSTS.TOGGLE_LIKE:
        return this._toggleLike(action.postId);
      default:
        return () => {
          throw new Error(`Передан неизвестный тип события: ${action.type}`);
        };
    }
  },
};

store.dispatch = store.dispatch.bind(store);

export { store };

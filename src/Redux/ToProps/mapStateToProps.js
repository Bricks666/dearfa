import {
  LOGIN,
  CREATED_POSTS,
  MAKE_POST,
  MAKE_MESSAGE,
  FAVORITE_FRIENDS,
  FRIENDS_LIST,
  PAGES_LIST,
  DIALOG,
  USERS_LIST,
  MESSAGES,
  REGISTRATION,
  PROFILE,
  NAVIGATION,
  HEADER,
  APP,
  MAIN,
  ME,
  USERS,
} from "./componentsConstants";

export const mapStateToProps = (componentName) => {
  switch (componentName) {
    case APP: {
      return (state) => {
        return {
          isLogin: state.auth.isLogin,
        };
      };
    }
    case HEADER: {
      return (state) => {
        return {
          isLogin: state.auth.isLogin,
          login: state.auth.fullName,
        };
      };
    }
    case ME: {
      return (state) => {
        return {
          me: state.auth,
          isLoading: state.auth.isLoading,
          id: state.auth.userId,
        };
      };
    }
    case MAIN: {
      return (state) => {
        return {
          isLoading: state.auth.isLoading,
        };
      };
    }
    case PROFILE: {
      return (state) => {
        return {
          user: state.profile,
          isLoading: state.profile.isLoading,
        };
      };
    }
    case NAVIGATION: {
      return (state) => {
        return {
          navigationItems: state.navigation,
        };
      };
    }
    case CREATED_POSTS: {
      return (state) => {
        return {
          posts: state.posts.list,
        };
      };
    }
    case MAKE_POST: {
      return (state) => {
        return {
          content: state.posts.newPostContent,
        };
      };
    }
    case MAKE_MESSAGE: {
      return (state) => {
        return {
          content: state.chats[0].newMessageContent,
        };
      };
    }
    case MESSAGES: {
      return (state) => {
        return {
          messages: state.chats[0].messages,
        };
      };
    }
    case FAVORITE_FRIENDS: {
      return (state) => {
        return {
          users: state.users.list.filter((user) => user.followed).slice(0, 6),
        };
      };
    }
    case FRIENDS_LIST: {
      return (state) => {
        return {
          users: state.users.list.filter((user) => user.followed),
        };
      };
    }
    case REGISTRATION: {
      return (state) => {
        return {
          fields: state.registrationFields,
        };
      };
    }
    case LOGIN: {
      return (state) => {
        return {
          fields: state.loginFields,
        };
      };
    }
    case USERS: {
      return (state) => {
        return {
          currentPage: state.users.currentPage,
          usersCount: state.users.usersCount,
        };
      };
    }
    case PAGES_LIST: {
      return (state) => {
        return {
          pageCount: state.users.pageCount,
        };
      };
    }
    case USERS_LIST: {
      return (state) => {
        return {
          users: state.users.list,
          isLoading: state.users.isLoading,
        };
      };
    }
    case DIALOG: {
      return (state, ownProps) => {
        return {
          companion: state.auth,
        };
      };
    }
    default: {
      return (state) => {
        return {};
      };
    }
  }
};

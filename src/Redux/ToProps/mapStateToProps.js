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
} from "./componentsConstants";

export const mapStateToProps = (componentName) => {
  switch (componentName) {
    case PROFILE: {
      return (state) => {
        return {
          user: state.user,
          isLoading: state.user.isLoading,
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
    case PAGES_LIST: {
      return (state) => {
        return {
          pageCount: state.users.pageCount,
          currentPage: state.users.currentPage,
          usersCount: state.users.usersCount,
        };
      };
    }
    case USERS_LIST: {
      return (state) => {
        return {
          users: state.users.list,
          currentPage: state.users.currentPage,
          usersCount: state.users.usersCount,
          isLoading: state.users.isLoading,
        };
      };
    }
    case DIALOG: {
      return (state, ownProps) => {
        return {
          companion:
            state.users.list.find((user) => user.id === ownProps.id) ??
            state.user,
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

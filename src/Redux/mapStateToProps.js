export const mapStateToProps = (componentName) => {
  switch (componentName) {
    case "CreatedPostsList": {
      return (state) => {
        return {
          posts: state.posts.list,
        };
      };
    }
    case "MakePost": {
      return (state) => {
        return {
          content: state.posts.newPostContent,
        };
      };
    }
    case "MakeMessage": {
      return (state) => {
        return {
          content: state.chats[0].newMessageContent,
        };
      };
    }
    case "Messages": {
      return (state) => {
        return {
          messages: state.chats[0].messages,
        };
      };
    }
    case "FavoritFriends": {
      return (state) => {
        return {
          users: state.users.filter((user) => user.isFriend).slice(0, 6),
        };
      };
    }
    case "FriendsList": {
      return (state) => {
        return {
          users: state.users.filter((user) => user.isFriend),
        };
      };
    }
    case "FriendsListItem": {
      return () => {
        return {
          isFriend: true,
        };
      };
    }
    case "Registration": {
      return (state) => {
        return {
          fields: state.registrationFields,
        };
      };
    }
    case "Login": {
      return (state) => {
        return {
          fields: state.loginFields,
        };
      };
    }
    case "UsersList": {
      return (state) => {
        return {
          users: state.users,
        };
      };
    }
    case "Dialog": {
      return (state, ownProps) => {
        return {
          companion:
            state.users.find((user) => user.info.id === ownProps.id)?.info ??
            state.user.info,
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

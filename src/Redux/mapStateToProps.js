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
    case "FavoritFriends":
    case "FriendsList": {
      return (state) => {
        return {
          friends: state.friends,
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
    default: {
      return (state) => {
        return {};
      };
    }
  }
};

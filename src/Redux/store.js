import { combineReducers, createStore } from "redux";
import { chatsReducers } from "./Reducers/chatsReducers";
import { postsReducers } from "./Reducers/postsReducers";
import { loginReducers } from "./Reducers/loginReducers";
import { registrationReducers } from "./Reducers/registrationReducer";
import { profileReducers } from "./Reducers/profileReducers";
import { navigationReducers } from "./Reducers/navigationReducers";
import { initialState } from "./initialState";
import { usersListReducers } from "./Reducers/usersListReducers";
import { authReducers } from "./Reducers/authReducers";
import { friendsReducer } from "./Reducers/friendsReducer";

const reducers = combineReducers({
  profile: profileReducers,
  auth: authReducers,
  chats: chatsReducers,
  posts: postsReducers,
  friends: friendsReducer,
  users: usersListReducers,
  loginFields: loginReducers,
  registrationFields: registrationReducers,
  navigation: navigationReducers,
});

const store = createStore(reducers, initialState);

window.store = store;

export { store };

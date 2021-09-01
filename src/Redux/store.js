import { combineReducers, createStore } from "redux";
import { chatsReducers } from "./Reducers/chatsReducers";
import { postsReducers } from "./Reducers/postsReducers";
import { loginReducers } from "./Reducers/loginReducers";
import { registrationReducers } from "./Reducers/registrationReducer";
import { profileReducers } from "./Reducers/profileReducers";
import { userReducers } from "./Reducers/userReducers";
import { navigationReducers } from "./Reducers/navigationReducers";
import { initialState } from "./initialState";
import { usersReducers } from "./Reducers/usersReducers";

const reducers = combineReducers({
  user: userReducers,
  profile: profileReducers,
  chats: chatsReducers,
  posts: postsReducers,
  users: usersReducers,
  loginFields: loginReducers,
  registrationFields: registrationReducers,
  navigation: navigationReducers,
});

const store = createStore(reducers, initialState);

window.store = store;

export { store };

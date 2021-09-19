import { combineReducers, createStore } from "redux";
import { chatsReducers } from "./Reducers/chatsReducers";
import { postsReducers } from "./Reducers/postsReducers";
import { loginReducers } from "./Reducers/loginReducers";
import { registrationReducers } from "./Reducers/registrationReducer";
import { userReducers } from "./Reducers/userReducers";
import { navigationReducers } from "./Reducers/navigationReducers";
import { initialState } from "./initialState";
import { usersListReducers } from "./Reducers/usersListReducers";

const reducers = combineReducers({
  user: userReducers,
  chats: chatsReducers,
  posts: postsReducers,
  users: usersListReducers,
  loginFields: loginReducers,
  registrationFields: registrationReducers,
  navigation: navigationReducers,
});

const store = createStore(reducers, initialState);

window.store = store;

export { store };

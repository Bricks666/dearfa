import { combineReducers, createStore } from "redux";
import { chatsReducers } from "./Reducers/chatsReducers";
import { postsReducers } from "./Reducers/postsReducers";
import { loginReducers } from "./Reducers/loginReducers";
import { registrationReducers } from "./Reducers/registrationReducer";
import { friendsReducers } from "./Reducers/friendsReducers";
import { profileReducers } from "./Reducers/profileReducers";
import { navigationReducers } from "./Reducers/navigationReducers";

const reducers = combineReducers({
  user: profileReducers,
  chats: chatsReducers,
  posts: postsReducers,
  friends: friendsReducers,
  loginFields: loginReducers,
  registrationFields: registrationReducers,
  navigation: navigationReducers,
});

const store = createStore(reducers);

export { store };

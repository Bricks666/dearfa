import { default as auth } from "./authReducers";
import { default as favoriteFriends } from "./favoriteFriendsReducer";
import { default as posts } from "./postsReducer";
import { default as profile } from "./profileReducer";
import { default as dialogs } from "./dialogsReducer";
import { default as friends } from "./friendsReducer";
import { default as navigation } from "./navigationReducer";
import { default as login } from "./loginReducer";
import { default as users } from "./usersReducer";
import { default as loadings } from "./loadingsReducer";
import { default as messages } from "./messagesReducer";
import { combineReducers } from "redux";
import { IStore } from "../../Types/Redux";

export const rootReducer = combineReducers<IStore>({
	auth,
	favoriteFriends,
	posts,
	profile,
	dialogs,
	friends,
	navigation,
	login,
	users,
	loadings,
	messages,
});

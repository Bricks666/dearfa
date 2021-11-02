import {
	LIKE,
	MAKE_MESSAGE,
	FRIENDS_LIST,
	FRIENDS_LIST_ITEM,
	USERS_LIST,
	USERS_LIST_ITEM,
	MAKE_POST,
	PROFILE,
	ME,
	FAVORITE_FRIENDS,
	LOGIN_BUTTON,
	LOGIN_EMAIL,
	LOGIN_PASSWORD,
	LOGIN_CHECKBOX,
	REG_EMAIL,
	REG_PASSWORD,
	REG_PASSWORD_AGAIN,
	REG_FULLNAME,
	REG_BUTTON,
	LOGOUT_BUTTON,
	ME_STATUS,
	ME_INFO,
	APP,
	DIALOGS,
	CHAT,
} from "./componentsConstants";

import { loginEmailInput } from "../Reducers/loginReducer";
import { loginPasswordInput } from "../Reducers/loginReducer";
import { loginCheckboxToggle } from "../Reducers/loginReducer";

import { regEmailInput } from "../Reducers/registrationReducer";
import { regPasswordInput } from "../Reducers/registrationReducer";
import { regPasswordAgainInput } from "../Reducers/registrationReducer";
import { regFullNameInput } from "../Reducers/registrationReducer";

import { addMessage } from "../Reducers/dialogsReducer";
import { inputMessage } from "../Reducers/dialogsReducer";

import { addPost } from "../Reducers/postsReducer";
import { inputPost } from "../Reducers/postsReducer";
import { toggleLike } from "../Reducers/postsReducer";

import { loadFriendsThunk } from "../Thunks/loadFriendsThunk";
import { followUserThunk } from "../Thunks/followUserThunk";
import { unfollowUserThunk } from "../Thunks/unfollowUserThunk";
import { loadFavoriteFriendsThunk } from "../Thunks/loadFavoriteFriendsThunk";
import { unfollowFriendThunk } from "../Thunks/unfollowFriendThunk";
import { loadUserThunk } from "../Thunks/loadUserThunk";
import { setUsersThunk } from "../Thunks/loadUsersThunk";
import { setMeThunk } from "../Thunks/setMeThunk";
import { loginThunk } from "../Thunks/loginThunk";
import { logoutThunk } from "../Thunks/logoutThunk";
import { setNewStatusThunk } from "../Thunks/setNewStatusThunk";
import { updateProfile } from "../Thunks/updateProfile";
import { authThunk } from "../Thunks/authThunk";
import { loadDialogs } from "../Thunks/loadDialogs";
import { loadMessages } from "../Thunks/loadMessages";

export const mapDispatchToProps = (componentName) => {
	switch (componentName) {
		case APP: {
			return (dispatch) => {
				return {
					auth() {
						dispatch(authThunk());
					},
				};
			};
		}
		case ME: {
			return (dispatch) => {
				return {
					loadMe(id) {
						dispatch(setMeThunk(id));
					},
				};
			};
		}
		case LOGIN_BUTTON: {
			return (dispatch) => {
				return {
					onClick(evt) {
						evt.preventDefault();
						dispatch(loginThunk());
					},
				};
			};
		}
		case LOGIN_EMAIL: {
			return (dispatch) => {
				return {
					input(evt) {
						dispatch(loginEmailInput(evt.target.value));
					},
				};
			};
		}
		case LOGIN_PASSWORD: {
			return (dispatch) => {
				return {
					input(evt) {
						dispatch(loginPasswordInput(evt.target.value));
					},
				};
			};
		}
		case LOGIN_CHECKBOX: {
			return {
				toggle: loginCheckboxToggle,
			};
		}
		case REG_EMAIL: {
			return (dispatch) => {
				return {
					input(evt) {
						dispatch(regEmailInput(evt.target.value));
					},
				};
			};
		}
		case REG_PASSWORD: {
			return (dispatch) => {
				return {
					input(evt) {
						dispatch(regPasswordInput(evt.target.value));
					},
				};
			};
		}
		case REG_PASSWORD_AGAIN: {
			return (dispatch) => {
				return {
					input(evt) {
						dispatch(regPasswordAgainInput(evt.target.value));
					},
				};
			};
		}
		case REG_FULLNAME: {
			return (dispatch) => {
				return {
					input(evt) {
						dispatch(regFullNameInput(evt.target.value));
					},
				};
			};
		}
		case REG_BUTTON: {
			return () => {
				return {
					onClick(evt) {
						evt.preventDefault();
						console.log("another click");
					},
				};
			};
		}
		case PROFILE: {
			return (dispatch) => {
				return {
					loadProfile(id) {
						dispatch(loadUserThunk(id));
					},
				};
			};
		}
		case MAKE_MESSAGE: {
			return {
				add: addMessage,
				input: inputMessage,
			};
		}
		case MAKE_POST: {
			return {
				add: addPost,
				input: inputPost,
			};
		}
		case LIKE: {
			return {
				toggle: toggleLike,
			};
		}
		case FAVORITE_FRIENDS: {
			return (dispatch) => {
				return {
					loadFavoriteFriends() {
						dispatch(loadFavoriteFriendsThunk());
					},
				};
			};
		}
		case FRIENDS_LIST: {
			return (dispatch) => {
				return {
					loadFriends(friendsCount, currentPage) {
						dispatch(loadFriendsThunk(friendsCount, currentPage));
					},
				};
			};
		}
		case FRIENDS_LIST_ITEM: {
			return (dispatch) => {
				return {
					unfollow(userId) {
						dispatch(unfollowFriendThunk(userId));
					},
				};
			};
		}
		case USERS_LIST: {
			return (dispatch) => {
				return {
					loadUsers(usersCount, page) {
						dispatch(setUsersThunk(usersCount, page));
					},
				};
			};
		}
		case USERS_LIST_ITEM: {
			return (dispatch) => {
				return {
					unfollow(userId) {
						dispatch(unfollowUserThunk(userId));
					},
					follow(user) {
						dispatch(followUserThunk(user));
					},
				};
			};
		}
		case LOGOUT_BUTTON: {
			return (dispatch) => {
				return {
					onClick() {
						dispatch(logoutThunk());
					},
				};
			};
		}
		case ME_STATUS: {
			return (dispatch) => {
				return {
					setNewStatus(newStatus) {
						dispatch(setNewStatusThunk(newStatus));
					},
				};
			};
		}
		case ME_INFO: {
			return (dispatch) => {
				return {
					updateProfile(newData) {
						dispatch(updateProfile(newData));
					},
				};
			};
		}
		case DIALOGS: {
			return (dispatch) => {
				return {
					loadDialogs() {
						dispatch(loadDialogs());
					},
				};
			};
		}
		case CHAT: {
			return (dispatch) => {
				return {
					loadMessages(id, page) {
						dispatch(loadMessages(id, page));
					},
				};
			};
		}
		default: {
			return {};
		}
	}
};

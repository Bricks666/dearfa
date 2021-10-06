import {
	LIKE,
	MAKE_MESSAGE,
	FRIENDS_LIST,
	FRIENDS_LIST_ITEM,
	USERS_LIST,
	USERS_LIST_ITEM,
	MAKE_POST,
	PROFILE,
	HEADER,
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
} from "./componentsConstants";

import { loginEmailInput } from "../Actions/Login/loginEmailInput";
import { loginPasswordInput } from "../Actions/Login/loginPasswordInput";
import { loginCheckboxToggle } from "../Actions/Login/loginCheckboxToggle";

import { regEmailInput } from "../Actions/Registration/regEmailInput";
import { regPasswordInput } from "../Actions/Registration/regPasswordInput";
import { regPasswordAgainInput } from "../Actions/Registration/regPasswordAgainInput";
import { regFullNameInput } from "../Actions/Registration/regFullNameInput";

import { loadFriendsThunk } from "../Thunks/loadFriendsThunk";

import { addMessage } from "../Actions/Dialogs/addMessage";
import { inputMessage } from "../Actions/Dialogs/inputMessage";

import { addPost } from "../Actions/Posts/addPost";
import { inputPost } from "../Actions/Posts/inputPost";

import { toggleLike } from "../Actions/Posts/toggleLike";


import { followUserThunk } from "../Thunks/followUserThunk";
import { unfollowUserThunk } from "../Thunks/unfollowUserThunk";
import { authThunk } from "../Thunks/authThunk";
import { loadFavoriteFriendsThunk } from "../Thunks/loadFavoriteFriendsThunk";
import { unfollowFriendThunk } from "../Thunks/unfollowFriendThunk";
import { loadUserThunk } from "../Thunks/loadUserThunk";
import { setUsersThunk } from "../Thunks/loadUsersThunk";
import { setMeThunk } from "../Thunks/setMeThunk";
import { loginThunk } from "../Thunks/loginThunk";
import { logoutThunk } from "../Thunks/logoutThunk";
import { setNewStatusThunk } from "../Thunks/setNewStatusThunk";

export const mapDispatchToProps = (componentName) => {
	switch (componentName) {
	case HEADER: {
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
				}
			};
		};
	}
	case ME_STATUS: {
		return (dispatch) => {
			return {
				setNewStatus(newStatus) {
					dispatch(setNewStatusThunk(newStatus));
				}
			};
		};
	}
	default: {
		return {};
	}
	}
};

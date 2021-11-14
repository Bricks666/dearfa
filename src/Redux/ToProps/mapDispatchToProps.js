import {
	LIKE,
	FRIENDS_LIST,
	FRIENDS_LIST_ITEM,
	USERS_LIST,
	USERS_LIST_ITEM,
	MAKE_POST,
	PROFILE,
	ME,
	FAVORITE_FRIENDS,
	LOGOUT_BUTTON,
	ME_STATUS,
	ME_INFO,
	APP,
	DIALOGS,
	CHAT,
	LOGIN,
} from "./componentsConstants";

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
import { initialMessages } from "../Reducers/messagesReducer";

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
		case LOGIN: {
			return (dispatch) => {
				return {
					onSubmit({ email, password, remember }, { restart }, anything) {
						dispatch(loginThunk(email, password, remember, restart, anything));
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
					setNewStatus({ status }) {
						dispatch(setNewStatusThunk(status));
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
					initialMessages(id) {
						dispatch(initialMessages(id));
					},
				};
			};
		}
		default: {
			return {};
		}
	}
};

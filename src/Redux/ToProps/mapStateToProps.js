import {
	LOGIN,
	CREATED_POSTS,
	MAKE_POST,
	FAVORITE_FRIENDS,
	FRIENDS_LIST,
	USERS_PAGES_LIST,
	USERS_LIST,
	REG,
	PROFILE,
	NAVIGATION,
	HEADER,
	APP,
	ME,
	USERS,
	FRIENDS,
	FRIENDS_LIST_ITEM,
	LOGIN_EMAIL,
	LOGIN_PASSWORD,
	LOGIN_CHECKBOX,
	REG_EMAIL,
	REG_FULLNAME,
	REG_PASSWORD,
	REG_PASSWORD_AGAIN,
	FRIENDS_PAGES_LIST,
	USERS_LIST_ITEM,
	CHANGE_CONTACTS,
	DIALOGS,
	CHAT,
} from "./componentsConstants";

export const mapStateToProps = (componentName) => {
	switch (componentName) {
		case APP: {
			return (state) => {
				return {
					isLogin: state.login.isLogin,
					isLoading: state.loadeds.isLoadedAuth === false,
				};
			};
		}
		case HEADER: {
			return (state) => {
				return {
					isLogin: state.login.isLogin,
					login: state.auth.login,
				};
			};
		}
		case ME: {
			return (state) => {
				return {
					me: state.auth,
					isLoading: state.loadings.loadingMe,
				};
			};
		}
		case PROFILE: {
			return (state) => {
				return {
					user: state.profile,
					isLoading: state.loadings.loadingProfile,
				};
			};
		}
		case NAVIGATION: {
			return (state) => {
				return {
					navigationItems: state.navigation,
				};
			};
		}
		case CREATED_POSTS: {
			return (state) => {
				return {
					posts: state.posts.list,
				};
			};
		}
		case MAKE_POST: {
			return (state) => {
				return {
					content: state.posts.newPostContent,
				};
			};
		}
		case DIALOGS: {
			return (state) => {
				return {
					dialogs: state.dialogs,
				};
			};
		}
		case CHAT: {
			return ({ dialogs, auth }, ownProps) => {
				const currentDialog = dialogs.find(
					(dialog) => dialog.id === +ownProps.match.params.id
				);
				return {
					messages:
						ownProps.match.params.id === undefined
							? []
							: currentDialog?.messages ?? [],
					authId: auth.userId,
					companion: {
						name: currentDialog?.userName,
						photo: currentDialog?.photos.small,
						id: currentDialog?.id,
					},
				};
			};
		}
		case FRIENDS: {
			return (state) => {
				return {
					friendsCount: state.friends.friendsCount,
				};
			};
		}
		case FAVORITE_FRIENDS: {
			return (state) => {
				return {
					friends: state.favoriteFriends.list,
					isLoading: state.loadings.loadingFavoriteFriends,
				};
			};
		}
		case FRIENDS_LIST: {
			return (state) => {
				return {
					friends: state.friends.list,
					isLoading: state.loadings.loadingFriends,
				};
			};
		}
		case FRIENDS_LIST_ITEM: {
			return (state, ownProps) => {
				return {
					isFollowing: state.loadings.following.includes(ownProps.user.id),
				};
			};
		}
		case FRIENDS_PAGES_LIST: {
			return (state) => {
				return {
					pageCount: state.friends.pageCount,
				};
			};
		}
		case REG: {
			return (state) => {
				return {
					isDisabled: state.registration.isDisabled,
				};
			};
		}
		case LOGIN: {
			return (state) => {
				return {
					isDisabled: state.login.isDisabled,
				};
			};
		}
		case REG_EMAIL: {
			return (state) => {
				return {
					value: state.registration.email,
					required: true,
					autocomplete: false,
					type: "email",
				};
			};
		}
		case REG_FULLNAME: {
			return (state) => {
				return {
					value: state.registration.fullName,
					required: true,
					autocomplete: false,
				};
			};
		}
		case REG_PASSWORD: {
			return (state) => {
				return {
					value: state.registration.password,
					required: true,
					autocomplete: false,
					type: "password",
				};
			};
		}
		case REG_PASSWORD_AGAIN: {
			return (state) => {
				return {
					value: state.registration.passwordAgain,
					required: true,
					autocomplete: false,
					type: "password",
				};
			};
		}
		case LOGIN_EMAIL: {
			return (state) => {
				return {
					value: state.login.email,
					required: true,
					autocomplete: true,
				};
			};
		}
		case LOGIN_PASSWORD: {
			return (state) => {
				return {
					value: state.login.password,
					required: true,
					type: "password",
					autocomplete: true,
				};
			};
		}
		case LOGIN_CHECKBOX: {
			return (state) => {
				return {
					checked: state.login.isRemember,
				};
			};
		}
		case USERS: {
			return (state) => {
				return {
					usersCount: state.users.usersCount,
				};
			};
		}
		case USERS_PAGES_LIST: {
			return (state) => {
				return {
					pageCount: state.users.pageCount,
				};
			};
		}
		case USERS_LIST: {
			return (state) => {
				return {
					users: state.users.list,
					isLoading: state.loadings.loadingUsers,
				};
			};
		}
		case USERS_LIST_ITEM: {
			return (state, ownProps) => {
				return {
					isFollowing: state.loadings.following.includes(ownProps.user.id),
				};
			};
		}
		case CHANGE_CONTACTS: {
			return (state) => {
				return {
					userId: state.auth.userId,
					contacts: state.auth.contacts,
					status: state.auth.status,
					fullName: state.auth.fullName,
					photo: state.auth.photos.large,
				};
			};
		}
		default: {
			return () => {
				return {};
			};
		}
	}
};

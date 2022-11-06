import { configureStore } from '@reduxjs/toolkit';
import auth, { AuthState } from './auth';
import dialogs, { DialogState } from './dialogs';
import favoriteFriends, { FavoriteFriendsState } from './favoriteFriends';
import friends, { FriendsState } from './friends';
import messages, { MessagesState } from './messages';
import posts, { PostsState } from './posts';
import profile, { ProfileState } from './profile';
import users, { UsersState } from './users';

export interface Store {
	readonly profile: ProfileState;
	readonly auth: AuthState;
	readonly dialogs: DialogState;
	readonly messages: MessagesState;
	readonly users: UsersState;
	readonly friends: FriendsState;
	readonly favoriteFriends: FavoriteFriendsState;
	readonly posts: PostsState;
}

const store = configureStore<Store>({
	reducer: {
		auth,
		dialogs,
		favoriteFriends,
		friends,
		messages,
		posts,
		profile,
		users,
	},
	devTools: true,
});

export { store };

export type AppDispatch = typeof store.dispatch;

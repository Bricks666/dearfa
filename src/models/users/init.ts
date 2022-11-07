import { sample } from 'effector';
import { usersApi } from '@/api';
import {
	getUsersFx,
	UsersGate,
	FriendsGate,
	unfollowUserFx,
	followUserFx,
	getFriendsFx,
} from './units';
import { getFriendsQuery, getUsersQuery } from './queries';
import { User } from './types';

getUsersFx.use(usersApi.getAll);
getFriendsFx.use(usersApi.getFriends);
followUserFx.use(usersApi.follow);
unfollowUserFx.use(usersApi.unfollow);

sample({
	clock: UsersGate.state,
	target: getUsersQuery.start,
});

sample({
	clock: UsersGate.close,
	target: getUsersQuery.reset,
});

sample({
	clock: FriendsGate.state,
	target: getFriendsQuery.start,
});

sample({
	clock: FriendsGate.close,
	target: getFriendsQuery.reset,
});

sample({
	clock: followUserFx.done,
	source: getUsersQuery.$data,
	fn: (users, { params: userId }) => {
		return (
			users?.map<User>((user) =>
				user.id === userId ? { ...user, followed: true } : user
			) ?? null
		);
	},
	target: getUsersQuery.$data,
});

sample({
	clock: unfollowUserFx.done,
	source: getUsersQuery.$data,
	fn: (users, { params: userId }) => {
		return (
			users?.map<User>((user) =>
				user.id === userId ? { ...user, followed: false } : user
			) ?? null
		);
	},
	target: getUsersQuery.$data,
});

sample({
	clock: unfollowUserFx.done,
	source: getFriendsQuery.$data,
	fn: (users, { params: userId }) => {
		return (
			users?.map<User>((user) =>
				user.id === userId ? { ...user, followed: false } : user
			) ?? null
		);
	},
	target: getFriendsQuery.$data,
});

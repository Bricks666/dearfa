import { sample } from 'effector';
import { followsApi, User, usersApi } from '@/shared/api';
import { getFriendsQuery, getUsersQuery } from './queries';
import {
	getUsersFx,
	UsersGate,
	FriendsGate,
	unfollowUserFx,
	followUserFx,
	getFriendsFx
} from './units';

getUsersFx.use(usersApi.getAll);
getFriendsFx.use(usersApi.getFriends);
followUserFx.use(followsApi.follow);
unfollowUserFx.use(followsApi.unfollow);

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
	fn: (users, { params, }) => {
		return (
			users.map<User>((user) =>
				user.id === params.userId ? { ...user, followed: true, } : user
			) ?? null
		);
	},
	target: getUsersQuery.$data,
});

sample({
	clock: unfollowUserFx.done,
	source: getUsersQuery.$data,
	fn: (users, { params, }) => {
		return (
			users.map<User>((user) =>
				user.id === params.userId ? { ...user, followed: false, } : user
			) ?? null
		);
	},
	target: getUsersQuery.$data,
});

sample({
	clock: unfollowUserFx.done,
	source: getFriendsQuery.$data,
	fn: (users, { params, }) => {
		return (
			users.map<User>((user) =>
				user.id === params.userId ? { ...user, followed: false, } : user
			) ?? null
		);
	},
	target: getFriendsQuery.$data,
});

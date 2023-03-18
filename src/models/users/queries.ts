import { createMutation, createQuery } from '@farfetched/core';
import { Pagination, ResponseWithItems, User } from '@/shared/api';
import {
	getUsersFx,
	getFriendsFx,
	followUserFx,
	unfollowUserFx
} from './units';

export const getUsersQuery = createQuery<
	Pagination,
	ResponseWithItems<User>,
	Error,
	User[]
>({
	initialData: [],
	effect: getUsersFx,
	mapData: ({ result, }) => {
		return result.items;
	},
});

export const getFriendsQuery = createQuery<
	Pagination,
	ResponseWithItems<User>,
	Error,
	User[]
>({
	initialData: [],
	effect: getFriendsFx,
	mapData: ({ result, }) => {
		return result.items;
	},
});

export const followMutation = createMutation({
	effect: followUserFx,
});

export const unfollowMutation = createMutation({
	effect: unfollowUserFx,
});

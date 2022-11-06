import { createMutation, createQuery } from '@farfetched/core';
import { Pagination, ResponseWithItems } from '@/types';
import {
	followUserFx,
	getFriendsFx,
	getUsersFx,
	unfollowUserFx,
} from './units';
import { User } from './types';

export const getUsersQuery = createQuery<
	Pagination,
	ResponseWithItems<User>,
	Error,
	User[]
>({
	effect: getUsersFx,
	mapData: (data) => {
		return data.items;
	},
});

export const getFriendsQuery = createQuery<
	Pagination,
	ResponseWithItems<User>,
	Error,
	User[]
>({
	effect: getFriendsFx,
	mapData: (data) => {
		return data.items;
	},
});

export const followMutation = createMutation({
	effect: followUserFx,
});

export const unfollowMutation = createMutation({
	effect: unfollowUserFx,
});

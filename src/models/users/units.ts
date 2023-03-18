import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import { User } from './types';
import { Pagination, ResponseWithItems, StandardServerResponse } from '@/types';

const UsersDomain = createDomain();

export const getUsersFx = UsersDomain.effect<
	Pagination,
	ResponseWithItems<User>
>();
export const getFriendsFx = UsersDomain.effect<
	Pagination,
	ResponseWithItems<User>
>();
export const followUserFx = UsersDomain.effect<
	number,
	StandardServerResponse
>();
export const unfollowUserFx = UsersDomain.effect<
	number,
	StandardServerResponse
>();

export const UsersGate = createGate<Pagination>({
	domain: UsersDomain,
});

export const FriendsGate = createGate<Pagination>({
	domain: UsersDomain,
});

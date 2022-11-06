/* eslint-disable import/no-extraneous-dependencies */
import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { Pagination, ResponseWithItems, StandardServerResponse } from '@/types';
import { User } from './types';

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

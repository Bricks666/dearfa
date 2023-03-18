import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import {
	ResponseWithItems,
	User,
	StandardServerResponse,
	Pagination,
	FollowParams
} from '@/shared/api';

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
	FollowParams,
	StandardServerResponse
>();
export const unfollowUserFx = UsersDomain.effect<
	FollowParams,
	StandardServerResponse
>();

export const UsersGate = createGate<Pagination>({
	domain: UsersDomain,
});

export const FriendsGate = createGate<Pagination>({
	domain: UsersDomain,
});

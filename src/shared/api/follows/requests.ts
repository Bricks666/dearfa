import { instance, StandardServerResponse } from '../request';
import { FollowParams } from './types';

const getBaseURL = (userId: number) => {
	return `follow/${userId}`;
};

export const follow = async (params: FollowParams) => {
	const { userId, } = params;
	return instance.post(getBaseURL(userId)).json<StandardServerResponse>();
};

export const unfollow = async (params: FollowParams) => {
	const { userId, } = params;
	return instance.delete(getBaseURL(userId)).json<StandardServerResponse>();
};

/* eslint-disable import/no-extraneous-dependencies */
import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import {
	UpdateInfoParams,
	UpdatePhotoParams,
	UpdateStatusParams,
} from '@/api/profile';
import { EmptyObject, StandardServerResponse } from '@/types';
import { Info, ProfileInfo } from './types';

const ProfileDomain = createDomain();

export const getInfoFx = ProfileDomain.effect<number, Info>();
export const getStatusFx = ProfileDomain.effect<number, string>();
export const updateStatusFx = ProfileDomain.effect<
	UpdateStatusParams,
	EmptyObject
>();
export const updateInfoFx = ProfileDomain.effect<
	UpdateInfoParams,
	StandardServerResponse
>();
export const updatePhotoFx = ProfileDomain.effect<
	UpdatePhotoParams,
	StandardServerResponse<Pick<Info, 'photos'>>
>();

export const ProfileGate = createGate<number>({
	domain: ProfileDomain,
});

export const $profileInfo = ProfileDomain.store<ProfileInfo>({
	aboutMe: '',
	contacts: {},
	followed: false,
	fullName: '',
	lookingForAJob: false,
	lookingForAJobDescription: '',
	photos: {
		large: '',
		small: '',
	},
	status: '',
	userId: -1,
});
export const $profileInfoLoading = ProfileDomain.store<boolean>(false);

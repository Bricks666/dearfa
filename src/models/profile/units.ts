import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import {
	Info,
	UpdateStatusParams,
	UpdateInfoParams,
	StandardServerResponse,
	UpdatePhotoParams,
	ProfileInfo
} from '@/shared/api';

const ProfileDomain = createDomain();

export const getInfoFx = ProfileDomain.effect<number, Info>();
export const getStatusFx = ProfileDomain.effect<number, string>();
export const updateStatusFx = ProfileDomain.effect<
	UpdateStatusParams,
	StandardServerResponse<string>
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

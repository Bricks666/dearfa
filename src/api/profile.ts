import { Photos, URL } from '@/interfaces/common';
import { StandardServerResponse } from '@/interfaces/responses';
import { ProfileInfo } from '@/models/profile';
import { makeGetRequest, makePutRequest } from './makeRequest';

const baseURl: URL = 'profile/';

export const getProfileApi = async (id: number) => {
	return await makeGetRequest<Omit<ProfileInfo, 'status'>>(baseURl + id);
};

export const getStatusApi = async (id: number) => {
	return await makeGetRequest<string>(`${baseURl}status/${id}`);
};

export const getProfileWithStatusApi = async (id: number) => {
	return {
		...(await getProfileApi(id)),
		status: await getStatusApi(id),
	} as ProfileInfo;
};

export const updateStatusApi = async (newStatus: string) => {
	return await makePutRequest(`${baseURl}status`, { status: newStatus });
};
type UpdateProfileParams = Omit<ProfileInfo, 'status' | 'photos' | 'followed'>;

export const updateProfileApi = async (newProfileInfo: UpdateProfileParams) => {
	return await makePutRequest<UpdateProfileParams, UpdateProfileParams>(
		baseURl,
		newProfileInfo,
		{
			headers: { 'Content-Type': 'application/json' },
		}
	);
};

export const updatePhotoApi = async (photo: File) => {
	const formData = new FormData();

	formData.append('image', photo);

	return await makePutRequest<StandardServerResponse<Photos>, FormData>(
		`${baseURl}photo`,
		formData,
		{
			headers: { 'Content-Type': 'multipart/form-data' },
		}
	);
};

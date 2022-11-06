import { Photos, StandardServerResponse, URL } from '@/types';
import { Info } from '@/models/profile';
import { makeGetRequest, makePutRequest } from './makeRequest';

const baseURl: URL = 'profile/';

export const getInfo = async (id: number) => {
	return makeGetRequest<Info>(baseURl + id);
};

export const getStatus = async (id: number) => {
	return makeGetRequest<string>(`${baseURl}status/${id}`);
};

export const updateStatus = async (newStatus: string) => {
	return makePutRequest(`${baseURl}status`, { status: newStatus });
};
export type UpdateInfoParams = Omit<Info, 'photos' | 'followed'>;

export const updateInfo = async (params: UpdateInfoParams) => {
	return makePutRequest<UpdateInfoParams, UpdateInfoParams>(baseURl, params);
};

export const updatePhoto = async (photo: File) => {
	const formData = new FormData();

	formData.append('image', photo);

	return makePutRequest<StandardServerResponse<Photos>, FormData>(
		`${baseURl}photo`,
		formData,
		{
			headers: { 'Content-Type': 'multipart/form-data' },
		}
	);
};

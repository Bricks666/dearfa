import { StandardServerResponse, URL } from '@/types';
import { Info } from '@/models/profile';
import { makeGetRequest, makePutRequest } from './makeRequest';

const baseURl: URL = 'profile/';

export const getInfo = async (id: number) => {
	return makeGetRequest<Info>(baseURl + id);
};

export const getStatus = async (id: number) => {
	return makeGetRequest<string>(`${baseURl}status/${id}`);
};

export interface UpdateStatusParams {
	readonly status: string;
}

export const updateStatus = async (params: UpdateStatusParams) => {
	const { status } = params;
	return makePutRequest(`${baseURl}status`, { status });
};
export type UpdateInfoParams = Omit<Info, 'photos' | 'followed' | 'userId'>;

export const updateInfo = async (params: UpdateInfoParams) => {
	return makePutRequest<StandardServerResponse, UpdateInfoParams>(
		baseURl,
		params
	);
};

export interface UpdatePhotoParams {
	readonly photo: FileList;
}

export const updatePhoto = async (params: UpdatePhotoParams) => {
	const { photo } = params;
	const formData = new FormData();

	formData.append('image', photo[0]);

	return makePutRequest<StandardServerResponse<Pick<Info, 'photos'>>, FormData>(
		`${baseURl}photo`,
		formData,
		{
			headers: { 'Content-Type': 'multipart/form-data' },
		}
	);
};

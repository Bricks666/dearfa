import { instance, StandardServerResponse } from '../request';
import {
	Info,
	UpdateInfoParams,
	UpdatePhotoParams,
	UpdateStatusParams
} from './types';

export const getBaseURL = () => {
	return 'profile';
};

export const getInfo = async (id: number) => {
	return instance.get(`${getBaseURL()}/${id}`).json<Info>();
};

export const getStatus = async (id: number) => {
	return instance.get(`${getBaseURL()}/status/${id}`).json<string>();
};

export const updateStatus = async (params: UpdateStatusParams) => {
	return instance
		.put(`${getBaseURL()}/status`, { json: params, })
		.json<StandardServerResponse<string>>();
};

export const updateInfo = async (params: UpdateInfoParams) => {
	return instance
		.put(getBaseURL(), {
			json: params,
		})
		.json<StandardServerResponse>();
};

export const updatePhoto = async (params: UpdatePhotoParams) => {
	const { photo, } = params;
	const formData = new FormData();

	formData.append('image', photo[0]);

	return instance
		.put(`${getBaseURL()}/photo`, {
			body: formData,
			headers: { 'Content-Type': 'multipart/form-data', },
		})
		.json<StandardServerResponse<Pick<Info, 'photos'>>>();
};

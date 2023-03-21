import { instance, StandardServerResponse } from '../request';
import {
	GetProfileParams,
	Info,
	NullableStatus,
	UpdateInfoParams,
	UpdatePhotoParams,
	UpdateStatusParams
} from './types';

const getBaseURL = () => {
	return 'profile';
};

export const getInfo = async (params: GetProfileParams) => {
	const { id, } = params;
	return instance.get(`${getBaseURL()}/${id}`).json<Info>();
};

export const getStatus = async (params: GetProfileParams) => {
	const { id, } = params;
	return instance.get(`${getBaseURL()}/status/${id}`).json<NullableStatus>();
};

export const updateStatus = async (params: UpdateStatusParams) => {
	return instance
		.put(`${getBaseURL()}/status`, { json: params, })
		.json<StandardServerResponse>();
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
		})
		.json<StandardServerResponse<Pick<Info, 'photos'>>>();
};

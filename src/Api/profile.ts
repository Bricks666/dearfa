import {
	GetProfile,
	GetProfileResponse,
	GetProfileWithStatus,
	GetStatus,
	IStandardServerResponse,
	UpdatePhoto,
	UpdateProfile,
	UpdateStatus,
} from "../Types/Api";
import { IPhotos, URL } from "../Types/Common";
import { makeGetRequest, makePutRequest } from "./makeRequest";

const baseURl: URL = "profile/";

export const getProfile: GetProfile = async (id) => {
	return (await makeGetRequest<GetProfileResponse>(baseURl + id)).data;
};

export const getStatus: GetStatus = async (id) => {
	return (await makeGetRequest<string>(baseURl + `status/${id}`)).data;
};

export const getProfileWithStatus: GetProfileWithStatus = async (id) => {
	return {
		...(await getProfile(id)),
		status: await getStatus(id),
	};
};

export const updateStatus: UpdateStatus = async (newStatus) => {
	return (await makePutRequest(baseURl + "status", { status: newStatus })).data;
};

export const updateProfile: UpdateProfile = async (newProfileInfo) => {
	return (
		await makePutRequest(baseURl, newProfileInfo, {
			headers: { "Content-Type": "application/json" },
		})
	).data;
};

export const updatePhoto: UpdatePhoto = async (photo) => {
	const formData = new FormData();

	formData.append("image", photo);

	return (
		await makePutRequest<IStandardServerResponse<IPhotos>, FormData>(
			baseURl + "photo",
			formData,
			{
				headers: { "Content-Type": "multipart/form-data" },
			}
		)
	).data;
};

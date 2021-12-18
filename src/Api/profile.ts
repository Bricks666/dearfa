import { IStandardServerResponse, IUpdateProfileRequest } from "../Types/Api";
import { ID, IPhotos, URL } from "../Types/Common";
import { IProfileState } from "../Types/Redux";
import { makeGetRequest, makePutRequest } from "./makeRequest";

const baseURl: URL = "profile/";

export const getProfile = async (id: ID) => {

	return (await makeGetRequest<IProfileState>(baseURl + id)).data;
};

export const getStatus = async (id: ID) => {
	return (await makeGetRequest<string>(baseURl + `status/${id}`)).data;
};

export const getProfileWithStatus = async (id: ID) => {
	return {
		...(await getProfile(id)),
		status: await getStatus(id),
	};
};

export const updateStatus = async (newStatus: string) => {
	return (await makePutRequest(baseURl + "status", { status: newStatus })).data;
};

export const updateProfile = async (newProfile: IUpdateProfileRequest) => {
	return (
		await makePutRequest(baseURl, newProfile, {
			headers: { "Content-Type": "application/json" },
		})
	).data;
};

export const updatePhoto = async (photo: File) => {
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

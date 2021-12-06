import { api } from "../../DAL/api";
import { updatePhoto } from "./updatePhoto";
import {
	endLoadingProfile,
	startLoadingProfile,
} from "../Reducers/loadingsReducer";
import { toValidNewProfileData } from "../../Services/toValidNewProfileData";
import { setProfile } from "../Reducers/profileReducer";

export const updateProfile = ({ photo, ...newContactsData }) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingProfile());
			const validNewData = toValidNewProfileData(newContactsData);

			const { resultCode, ...data } = await api.updateContacts(validNewData);

			console.log(data);

			if (resultCode === 0) {
				await dispatch(setProfile(newContactsData));
			}

			if (photo.newPhoto !== null) {
				await dispatch(updatePhoto(photo.newPhoto));
			}
		} catch (e) {
			console.log(e.message);
		} finally {
			dispatch(endLoadingProfile());
		}
	};
};

import { api } from "../../DAL/api";
import { setMe } from "../Reducers/authReducers";
import { updatePhoto } from "./updatePhoto";
import { startLoadingMe, endLoadingMe } from "../Reducers/loadingsReducer";
import { toValidNewProfileData } from "../../Services/toValidNewProfileData";

export const updateProfile = ({ photo, ...newContactsData }) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingMe());
			const validNewData = toValidNewProfileData(newContactsData);
			let { resultCode } = await api.updateContacts(
				JSON.stringify(validNewData)
			);
			console.log("ALL IS GOOD");
			if (resultCode === 0) {
				await dispatch(setMe(validNewData));
			}

			if (photo.newPhoto !== null) {
				await dispatch(updatePhoto(photo.newPhoto));
			}
		} catch (e) {
			console.log(e.message);
		} finally {
			dispatch(endLoadingMe());
		}
	};
};

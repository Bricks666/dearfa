import { api } from "../../DAL/api";
import { setMe } from "../Reducers/authReducers";
import { updatePhoto } from "./updatePhoto";
import { startLoadingMe, endLoadingMe } from "../Reducers/loadingsReducer";

export const updateProfile = ({ photo, ...newContactsData }) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingMe());
			let { resultCode } = await api.updateContacts(
				JSON.stringify(newContactsData)
			);

			if (resultCode === 0) {
				await dispatch(setMe(newContactsData));
			}

			if (photo.isNewPhoto) {
				await dispatch(updatePhoto(photo.newPhoto));
			}
		} catch (e) {
			console.log(e.message);
		} finally {
			dispatch(endLoadingMe());
		}
	};
};

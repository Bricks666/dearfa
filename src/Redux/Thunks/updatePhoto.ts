import { api } from "../../DAL/api";
import { setNewPhotos } from "../Reducers/profileReducer";

export const updatePhoto = (photo) => {
	return async (dispatch) => {
		try {
			const { data, resultCode } = await api.updatePhoto(photo);

			if (resultCode === 0) {
				dispatch(setNewPhotos(data.photos));
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};

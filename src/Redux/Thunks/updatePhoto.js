import { api } from "../../DAL/api";
import { setPhotos } from "../Reducers/authReducers";

export const updatePhoto = (photo) => {
	return async (dispatch) => {
		try {
			const { data, resultCode } = await api.updatePhoto(photo);
			console.log(resultCode);

			if (resultCode === 0) {
				dispatch(setPhotos(data.photos));
			}
		} catch (e) {
			console.log(e.message);
		}
	};
};

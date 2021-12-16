import { updatePhoto } from "../../Api";
import { UpdatePhotoThunk } from "../../Types/Redux";
import { setNewPhotos } from "../Reducers/profileReducer";

export const updatePhotoThunk: UpdatePhotoThunk = (photo) => {
	return async (dispatch) => {
		try {
			const { data, resultCode } = await updatePhoto(photo);

			if (resultCode === 0) {
				dispatch(setNewPhotos(data));
			}
		} catch (e) {
			console.log(e);
		}
	};
};

import { getProfile } from "../../DAL/api";
import { endLoadingMe } from "../Actions/Loadings/endLoadingMe";
import { setMe } from "../Actions/Me/setMe";
import { startLoadingMe } from "../Actions/Loadings/startLoadingMe";

export const setMeThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingMe());

      const me = await getProfile(id);

      dispatch(setMe(me));

      dispatch(endLoadingMe());
    } catch (e) {
      console.log(e.message);
    }
  };
};

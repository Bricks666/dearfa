import { getProfile } from "../../DAL/api";
import { endLoadingProfile } from "../Actions/Loadings/endLoadingProfile";
import { setUserInfo } from "../Actions/Profile/setUserInfo";
import { startLoadingProfile } from "../Actions/Loadings/startLoadingProfile";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const loadUserThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingProfile());

      const user = await getProfile(id);
      dispatch(setUserInfo(user));

      await sleep(500);

      dispatch(endLoadingProfile());
    } catch (e) {
      console.log(e.message);
    }
  };
};

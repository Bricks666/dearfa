import { STOP_LOADING_PROFILE } from "../Constants";

export const stopLoadingProfile = () => {
  return {
    type: STOP_LOADING_PROFILE,
  };
};

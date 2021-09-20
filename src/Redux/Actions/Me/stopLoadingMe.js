import { STOP_LOADING_ME } from "../Constants";

export const stopLoadingMe = () => {
  return {
    type: STOP_LOADING_ME,
  };
};
